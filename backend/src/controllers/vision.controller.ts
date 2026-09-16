import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { computerVisionAdapter } from "../adapters/computerVision.adapter";

export async function analyzeImage(req: AuthenticatedRequest, res: Response) {
  try {
    const { imageTag = "fresh_container_sample.jpg" } = req.body;
    const result = await computerVisionAdapter.analyzeFoodImage(imageTag);
    res.status(200).json({ success: true, data: result });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
