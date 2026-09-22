import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { notificationService } from "../services/notification.service";

export async function getMyNotifications(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.user?.id || "demo-user";
    const list = await notificationService.listForUser(userId);
    res.status(200).json({ success: true, data: list });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}

export async function markRead(req: AuthenticatedRequest, res: Response) {
  try {
    const updated = await notificationService.markAsRead(req.params.id);
    res.status(200).json({ success: true, data: updated });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
