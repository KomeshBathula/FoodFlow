import { PickupTask, IPickupTask } from "../models/PickupTask.model";
import { RedistributionRequest } from "../models/RedistributionRequest.model";

export class LogisticsService {
  async assignTask(requestId: string, driverId: string, locations: any): Promise<IPickupTask> {
    const count = await PickupTask.countDocuments();
    const taskId = `TASK-${new Date().getFullYear()}-${String(count + 1).padStart(4, "0")}`;

    const task = await PickupTask.create({
      taskId,
      redistributionRequestId: requestId,
      driverId,
      pickupLocation: locations.pickup,
      dropoffLocation: locations.dropoff,
      status: "ASSIGNED"
    });

    await RedistributionRequest.findByIdAndUpdate(requestId, {
      driverId,
      status: "DRIVER_ASSIGNED"
    });

    return task;
  }

  async updateTaskStatus(taskId: string, status: any) {
    const update: any = { status };
    if (status === "EN_ROUTE_TO_PICKUP") update.startedAt = new Date();
    if (status === "PICKED_UP") update.pickedUpAt = new Date();
    if (status === "DELIVERED") update.deliveredAt = new Date();

    return PickupTask.findOneAndUpdate({ taskId }, update, { new: true });
  }

  async getDriverTasks(driverId: string) {
    return PickupTask.find({ driverId }).sort({ createdAt: -1 });
  }
}

export const logisticsService = new LogisticsService();
