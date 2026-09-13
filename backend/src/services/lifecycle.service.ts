import { FoodBatch } from "../models/FoodBatch.model";
import { isValidTransition } from "../utils/stateMachine";

export class LifecycleService {
  async transitionBatch(batchId: string, targetStatus: string, actorId: string, reason?: string) {
    const batch = await FoodBatch.findById(batchId);
    if (!batch) {
      throw new Error(`Batch ${batchId} not found`);
    }

    if (!isValidTransition(batch.status, targetStatus)) {
      throw new Error(`Invalid status transition from ${batch.status} to ${targetStatus}`);
    }

    const previousStatus = batch.status;
    batch.status = targetStatus;
    await batch.save();

    return {
      batch,
      previousStatus,
      newStatus: targetStatus,
      timestamp: new Date()
    };
  }
}

export const lifecycleService = new LifecycleService();
