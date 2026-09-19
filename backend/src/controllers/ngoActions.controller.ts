import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { redistributionService } from "../services/redistribution.service";
import { FoodBatch } from "../models/FoodBatch.model";

export async function acceptOffer(req: AuthenticatedRequest, res: Response) {
  try {
    const { id } = req.params;
    const updated = await redistributionService.updateStatus(id, "NGO_ACCEPTED");
    res.status(200).json({ success: true, data: updated, message: "Offer accepted by NGO" });
  } catch (err: any) {
    res.status(400).json({ success: false, error: { message: err.message } });
  }
}

export async function rejectOffer(req: AuthenticatedRequest, res: Response) {
  try {
    const { id } = req.params;
    const { reason = "Capacity limit reached" } = req.body;
    const updated = await redistributionService.updateStatus(id, "CANCELLED", reason);
    res.status(200).json({ success: true, data: updated, message: "Offer rejected" });
  } catch (err: any) {
    res.status(400).json({ success: false, error: { message: err.message } });
  }
}
