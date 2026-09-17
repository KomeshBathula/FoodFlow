import mongoose, { Schema, Document } from "mongoose";

export interface IAnomalyEvent extends Document {
  anomalyType: "TEMPERATURE_SPIKE" | "RAPID_QUANTITY_DROP" | "STALE_PICKUP" | "EXPIRED_STILL_ACTIVE";
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  entityId: string;
  entityType: string;
  reason: string;
  recommendedAction: string;
  status: "ACTIVE" | "RESOLVED";
  detectedAt: Date;
}

const AnomalyEventSchema = new Schema<IAnomalyEvent>({
  anomalyType: {
    type: String,
    enum: ["TEMPERATURE_SPIKE", "RAPID_QUANTITY_DROP", "STALE_PICKUP", "EXPIRED_STILL_ACTIVE"],
    required: true
  },
  severity: { type: String, enum: ["LOW", "MEDIUM", "HIGH", "CRITICAL"], default: "MEDIUM" },
  entityId: { type: String, required: true },
  entityType: { type: String, required: true },
  reason: { type: String, required: true },
  recommendedAction: { type: String, required: true },
  status: { type: String, enum: ["ACTIVE", "RESOLVED"], default: "ACTIVE" },
  detectedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export const AnomalyEvent = mongoose.model<IAnomalyEvent>("AnomalyEvent", AnomalyEventSchema);
