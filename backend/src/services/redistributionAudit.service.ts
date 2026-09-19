import { auditService } from "./audit.service";

export class RedistributionAuditService {
  async recordStep(requestId: string, actorId: string, actorRole: string, stepName: string, metadata: any = {}) {
    return auditService.record({
      actorId,
      actorRole,
      action: stepName,
      entityType: "RedistributionRequest",
      entityId: requestId,
      details: metadata
    });
  }
}

export const redistributionAuditService = new RedistributionAuditService();
