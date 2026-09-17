import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { anomalyDetectionService } from "../services/anomaly/anomalyDetection.service";

export async function getAnomalies(req: AuthenticatedRequest, res: Response) {
  try {
    const list = await anomalyDetectionService.listAnomalies();
    res.status(200).json({ success: true, data: list });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
