import mongoose, { Schema, Document } from "mongoose";

export interface IQualityAssessment extends Document {
  batchId: string;
  foodBatchId: mongoose.Types.ObjectId;
  qualityScore: number;
  classification: "EXCELLENT" | "GOOD" | "ACCEPTABLE" | "DEGRADED" | "UNSAFE";
  reasons: string[];
  storageTemperature: number;
  hoursSincePreparation: number;
  hoursUntilExpiry: number;
  visualDefectDetected: boolean;
  evaluatedAt: Date;
}

const QualityAssessmentSchema = new Schema<IQualityAssessment>({
  batchId: { type: String, required: true, index: true },
  foodBatchId: { type: Schema.Types.ObjectId, ref: "FoodBatch", required: true },
  qualityScore: { type: Number, required: true },
  classification: {
    type: String,
    enum: ["EXCELLENT", "GOOD", "ACCEPTABLE", "DEGRADED", "UNSAFE"],
    required: true
  },
  reasons: [{ type: String }],
  storageTemperature: { type: Number, required: true },
  hoursSincePreparation: { type: Number, required: true },
  hoursUntilExpiry: { type: Number, required: true },
  visualDefectDetected: { type: Boolean, default: false },
  evaluatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export const QualityAssessment = mongoose.model<IQualityAssessment>("QualityAssessment", QualityAssessmentSchema);
