import mongoose, { Schema, Document } from "mongoose";

export interface IAuditLog extends Document {
  actorId: string;
  actorEmail?: string;
  actorRole: string;
  action: string;
  entityType: string;
  entityId: string;
  details?: Record<string, any>;
  ipAddress?: string;
  createdAt: Date;
}

const AuditLogSchema = new Schema<IAuditLog>({
  actorId: { type: String, required: true },
  actorEmail: { type: String },
  actorRole: { type: String, required: true },
  action: { type: String, required: true, index: true },
  entityType: { type: String, required: true, index: true },
  entityId: { type: String, required: true, index: true },
  details: { type: Schema.Types.Mixed },
  ipAddress: { type: String }
}, { timestamps: true });

export const AuditLog = mongoose.model<IAuditLog>("AuditLog", AuditLogSchema);
