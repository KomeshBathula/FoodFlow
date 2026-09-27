import { RedistributionRequest, IRedistributionRequest } from "../models/RedistributionRequest.model";
import { FoodBatch } from "../models/FoodBatch.model";
import { isValidTransition } from "../utils/stateMachine";

export class RedistributionService {
  async createRequest(data: {
    foodBatchId: string;
    foodName: string;
    quantityKg: number;
    kitchenId: string;
    ngoId: string;
    pickupDeadline: Date;
    distanceKm?: number;
  }): Promise<IRedistributionRequest> {
    const count = await RedistributionRequest.countDocuments();
    const requestId = `REQ-${new Date().getFullYear()}-${String(count + 1).padStart(4, "0")}`;

    const req = await RedistributionRequest.create({
      ...data,
      requestId,
      estimatedDistanceKm: data.distanceKm || 4.2,
      estimatedBeneficiaries: Math.round(data.quantityKg * 2.5),
      status: "REQUESTED"
    });

    // Update batch status to MATCHED safely
    await FoodBatch.findByIdAndUpdate(data.foodBatchId, { status: "MATCHED" });

    return req;
  }

  async listRequests(filter: any = {}) {
    return RedistributionRequest.find(filter)
      .populate("kitchenId")
      .populate("ngoId")
      .populate("driverId")
      .sort({ createdAt: -1 });
  }

  async updateStatus(id: string, newStatus: string, reason?: string) {
    const existing = await RedistributionRequest.findById(id);
    if (!existing) throw new Error("Request not found");

    const update: any = { status: newStatus };
    if (reason) update.rejectionReason = reason;

    // Synchronize parent food batch lifecycle
    if (newStatus === "DELIVERED") {
      await FoodBatch.findByIdAndUpdate(existing.foodBatchId, { status: "DELIVERED" });
    }

    return RedistributionRequest.findByIdAndUpdate(id, update, { new: true });
  }
}

export const redistributionService = new RedistributionService();
