import mongoose, { Schema, Document } from "mongoose";

export interface IDriver extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  vehicleType: "MOTORCYCLE" | "VAN" | "TRUCK" | "CAR";
  vehicleNumber: string;
  currentLocation: {
    lat: number;
    lng: number;
  };
  isAvailable: boolean;
  contactPhone: string;
}

const DriverSchema = new Schema<IDriver>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  vehicleType: { type: String, enum: ["MOTORCYCLE", "VAN", "TRUCK", "CAR"], default: "VAN" },
  vehicleNumber: { type: String, required: true },
  currentLocation: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  isAvailable: { type: Boolean, default: true },
  contactPhone: { type: String, required: true }
}, { timestamps: true });

export const Driver = mongoose.model<IDriver>("Driver", DriverSchema);
