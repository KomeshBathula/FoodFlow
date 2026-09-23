import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { kpiService } from "../services/analytics/kpi.service";

export async function getDashboardMetrics(req: AuthenticatedRequest, res: Response) {
  try {
    const kpis = await kpiService.getPlatformKpis();
    res.status(200).json({ success: true, data: kpis });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
