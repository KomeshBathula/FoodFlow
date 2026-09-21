import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { realtimeService } from "../services/realtime.service";

export async function pushLocationUpdate(req: AuthenticatedRequest, res: Response) {
  try {
    const { taskId, latitude, longitude, speedKmh } = req.body;
    const driverId = req.user?.id || "665000000000000000000004";
    const ev = await realtimeService.recordPosition({
      taskId,
      driverId,
      latitude: Number(latitude),
      longitude: Number(longitude),
      speedKmh: speedKmh ? Number(speedKmh) : undefined
    });
    res.status(201).json({ success: true, data: ev });
  } catch (err: any) {
    res.status(400).json({ success: false, error: { message: err.message } });
  }
}

export async function getLivePosition(req: AuthenticatedRequest, res: Response) {
  try {
    const { taskId } = req.params;
    const ev = await realtimeService.getLatestPosition(taskId);
    res.status(200).json({ success: true, data: ev });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
