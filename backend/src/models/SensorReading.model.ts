import mongoose, { Schema, Document } from "mongoose";

export interface ISensorReading extends Document {
  deviceId: string;
  sensorType: "TEMPERATURE" | "HUMIDITY" | "DOOR_OPEN";
  value: number;
  unit: string;
  timestamp: Date;
  kitchenId: string;
  batchId?: string;
  isSimulated: boolean;
}

const SensorReadingSchema = new Schema<ISensorReading>({
  deviceId: { type: String, required: true, index: true },
  sensorType: { type: String, enum: ["TEMPERATURE", "HUMIDITY", "DOOR_OPEN"], required: true },
  value: { type: Number, required: true },
  unit: { type: String, required: true },
  timestamp: { type: Date, default: Date.now, index: true },
  kitchenId: { type: String, required: true, index: true },
  batchId: { type: String },
  isSimulated: { type: Boolean, default: true }
}, { timestamps: true });

export const SensorReading = mongoose.model<ISensorReading>("SensorReading", SensorReadingSchema);
