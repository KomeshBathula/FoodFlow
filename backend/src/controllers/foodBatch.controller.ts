import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { foodBatchService } from "../services/foodBatch.service";
import { createFoodBatchSchema } from "../validators/foodBatch.validator";

export async function createBatch(req: AuthenticatedRequest, res: Response) {
  try {
    const validated = createFoodBatchSchema.parse(req.body);
    const kitchenId = req.user?.id || "665000000000000000000001";
    const batch = await foodBatchService.createBatch(kitchenId, validated);
    res.status(201).json({ success: true, data: batch });
  } catch (err: any) {
    res.status(400).json({ success: false, error: { message: err.message } });
  }
}

export async function listBatches(req: AuthenticatedRequest, res: Response) {
  try {
    const { status, category, page = "1", limit = "20" } = req.query;
    const filter: any = {};
    if (status) filter.status = status;
    if (category) filter.category = category;

    const result = await foodBatchService.listBatches(filter, parseInt(page as string), parseInt(limit as string));
    res.status(200).json({ success: true, data: result });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}

export async function getBatchById(req: AuthenticatedRequest, res: Response) {
  try {
    const batch = await foodBatchService.getBatchById(req.params.id);
    if (!batch) {
      return res.status(404).json({ success: false, error: { message: "Batch not found" } });
    }
    res.status(200).json({ success: true, data: batch });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
