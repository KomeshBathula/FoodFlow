import { AuditLog } from "../models/AuditLog.model";

export class AuditService {
  async record(event: {
    actorId: string;
    actorEmail?: string;
    actorRole: string;
    action: string;
    entityType: string;
    entityId: string;
    details?: any;
    ipAddress?: string;
  }) {
    return AuditLog.create(event);
  }

  async list(filter: any = {}, limit = 50) {
    return AuditLog.find(filter).sort({ createdAt: -1 }).limit(limit);
  }
}

export const auditService = new AuditService();
