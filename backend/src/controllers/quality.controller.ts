import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { qualityScoringService } from "../services/quality/qualityScoring.service";

export async function scoreQuality(req: AuthenticatedRequest, res: Response) {
  try {
    const { batchId, storageTemperature = 4, hoursSincePrep = 2, hoursUntilExpiry = 6, visualDefects = false } = req.body;
    const assessment = qualityScoringService.evaluateQuality({
      batchId: batchId || "DEMO-BATCH",
      storageTemperature: Number(storageTemperature),
      hoursSincePrep: Number(hoursSincePrep),
      hoursUntilExpiry: Number(hoursUntilExpiry),
      visualDefects: Boolean(visualDefects)
    });

    res.status(200).json({ success: true, data: assessment });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
