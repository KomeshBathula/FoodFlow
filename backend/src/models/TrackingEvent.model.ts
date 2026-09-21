import mongoose, { Schema, Document } from "mongoose";

export interface ITrackingEvent extends Document {
  taskId: string;
  driverId: mongoose.Types.ObjectId;
  latitude: number;
  longitude: number;
  speedKmh: number;
  timestamp: Date;
}

const TrackingEventSchema = new Schema<ITrackingEvent>({
  taskId: { type: String, required: true, index: true },
  driverId: { type: Schema.Types.ObjectId, ref: "Driver", required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  speedKmh: { type: Number, default: 28 },
  timestamp: { type: Date, default: Date.now, index: true }
}, { timestamps: true });

export const TrackingEvent = mongoose.model<ITrackingEvent>("TrackingEvent", TrackingEventSchema);
