import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { auditService } from "../services/audit.service";

export async function listAuditLogs(req: AuthenticatedRequest, res: Response) {
  try {
    const { entityType, entityId } = req.query;
    const filter: any = {};
    if (entityType) filter.entityType = entityType;
    if (entityId) filter.entityId = entityId;

    const logs = await auditService.list(filter);
    res.status(200).json({ success: true, data: logs });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
