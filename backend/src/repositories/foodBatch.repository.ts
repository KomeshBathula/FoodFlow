import { FoodBatch, IFoodBatch } from "../models/FoodBatch.model";

export class FoodBatchRepository {
  async create(data: Partial<IFoodBatch>): Promise<IFoodBatch> {
    return FoodBatch.create(data);
  }

  async findById(id: string): Promise<IFoodBatch | null> {
    return FoodBatch.findById(id).populate("kitchenId");
  }

  async findByBatchId(batchId: string): Promise<IFoodBatch | null> {
    return FoodBatch.findOne({ batchId }).populate("kitchenId");
  }

  async findAll(filter: any = {}, options: { skip?: number; limit?: number; sort?: any } = {}): Promise<IFoodBatch[]> {
    return FoodBatch.find(filter)
      .sort(options.sort || { createdAt: -1 })
      .skip(options.skip || 0)
      .limit(options.limit || 50)
      .populate("kitchenId");
  }

  async count(filter: any = {}): Promise<number> {
    return FoodBatch.countDocuments(filter);
  }

  async updateStatus(id: string, status: string): Promise<IFoodBatch | null> {
    return FoodBatch.findByIdAndUpdate(id, { status }, { new: true });
  }
}

export const foodBatchRepository = new FoodBatchRepository();
