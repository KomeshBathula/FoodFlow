import { foodBatchRepository } from "../repositories/foodBatch.repository";
import { IFoodBatch } from "../models/FoodBatch.model";

export class FoodBatchService {
  async createBatch(kitchenId: string, data: any): Promise<IFoodBatch> {
    const count = await foodBatchRepository.count();
    const batchId = `BATCH-${new Date().getFullYear()}-${String(count + 1).padStart(4, "0")}`;
    const beneficiaries = data.estimatedBeneficiaries || Math.round(data.quantityKg * 2.5);

    return foodBatchRepository.create({
      ...data,
      batchId,
      kitchenId: kitchenId as any,
      initialQuantityKg: data.quantityKg,
      estimatedBeneficiaries: beneficiaries,
      status: "CREATED"
    });
  }

  async listBatches(filter: any = {}, page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const items = await foodBatchRepository.findAll(filter, { skip, limit });
    const total = await foodBatchRepository.count(filter);
    return { items, total, page, totalPages: Math.ceil(total / limit) };
  }

  async getBatchById(id: string) {
    return foodBatchRepository.findById(id);
  }
}

export const foodBatchService = new FoodBatchService();
