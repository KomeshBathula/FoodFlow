import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { logisticsService } from "../services/logistics.service";

export async function assignDriverTask(req: AuthenticatedRequest, res: Response) {
  try {
    const { requestId, driverId, locations } = req.body;
    const task = await logisticsService.assignTask(requestId, driverId, locations);
    res.status(201).json({ success: true, data: task });
  } catch (err: any) {
    res.status(400).json({ success: false, error: { message: err.message } });
  }
}

export async function updateStatus(req: AuthenticatedRequest, res: Response) {
  try {
    const { taskId } = req.params;
    const { status } = req.body;
    const updated = await logisticsService.updateTaskStatus(taskId, status);
    res.status(200).json({ success: true, data: updated });
  } catch (err: any) {
    res.status(400).json({ success: false, error: { message: err.message } });
  }
}
