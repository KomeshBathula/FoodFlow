import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { redistributionService } from "../services/redistribution.service";

export async function createRedistribution(req: AuthenticatedRequest, res: Response) {
  try {
    const result = await redistributionService.createRequest(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (err: any) {
    res.status(400).json({ success: false, error: { message: err.message } });
  }
}

export async function listRedistributions(req: AuthenticatedRequest, res: Response) {
  try {
    const list = await redistributionService.listRequests(req.query);
    res.status(200).json({ success: true, data: list });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
