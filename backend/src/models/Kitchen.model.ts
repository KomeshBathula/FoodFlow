import mongoose, { Schema, Document } from "mongoose";

export interface IKitchen extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  dailyCapacityKg: number;
  contactPerson: string;
  contactPhone: string;
  isVerified: boolean;
}

const KitchenSchema = new Schema<IKitchen>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  dailyCapacityKg: { type: Number, default: 200 },
  contactPerson: { type: String, required: true },
  contactPhone: { type: String, required: true },
  isVerified: { type: Boolean, default: true }
}, { timestamps: true });

export const Kitchen = mongoose.model<IKitchen>("Kitchen", KitchenSchema);
