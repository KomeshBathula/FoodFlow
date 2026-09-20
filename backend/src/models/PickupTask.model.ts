import mongoose, { Schema, Document } from "mongoose";

export interface IPickupTask extends Document {
  taskId: string;
  redistributionRequestId: mongoose.Types.ObjectId;
  driverId: mongoose.Types.ObjectId;
  pickupLocation: {
    name: string;
    address: string;
    lat: number;
    lng: number;
  };
  dropoffLocation: {
    name: string;
    address: string;
    lat: number;
    lng: number;
  };
  status: "ASSIGNED" | "EN_ROUTE_TO_PICKUP" | "PICKED_UP" | "IN_TRANSIT" | "DELIVERED" | "FAILED";
  startedAt?: Date;
  pickedUpAt?: Date;
  deliveredAt?: Date;
  estimatedDurationMins: number;
}

const PickupTaskSchema = new Schema<IPickupTask>({
  taskId: { type: String, required: true, unique: true, index: true },
  redistributionRequestId: { type: Schema.Types.ObjectId, ref: "RedistributionRequest", required: true },
  driverId: { type: Schema.Types.ObjectId, ref: "Driver", required: true, index: true },
  pickupLocation: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  dropoffLocation: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  status: {
    type: String,
    enum: ["ASSIGNED", "EN_ROUTE_TO_PICKUP", "PICKED_UP", "IN_TRANSIT", "DELIVERED", "FAILED"],
    default: "ASSIGNED",
    index: true
  },
  startedAt: { type: Date },
  pickedUpAt: { type: Date },
  deliveredAt: { type: Date },
  estimatedDurationMins: { type: Number, default: 25 }
}, { timestamps: true });

export const PickupTask = mongoose.model<IPickupTask>("PickupTask", PickupTaskSchema);
