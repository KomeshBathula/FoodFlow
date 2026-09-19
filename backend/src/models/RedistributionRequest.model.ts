import mongoose, { Schema, Document } from "mongoose";

export interface IRedistributionRequest extends Document {
  requestId: string;
  foodBatchId: mongoose.Types.ObjectId;
  foodName: string;
  quantityKg: number;
  kitchenId: mongoose.Types.ObjectId;
  ngoId: mongoose.Types.ObjectId;
  driverId?: mongoose.Types.ObjectId;
  status: string;
  pickupDeadline: Date;
  estimatedDistanceKm: number;
  estimatedBeneficiaries: number;
  rejectionReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

const RedistributionRequestSchema = new Schema<IRedistributionRequest>({
  requestId: { type: String, required: true, unique: true, index: true },
  foodBatchId: { type: Schema.Types.ObjectId, ref: "FoodBatch", required: true },
  foodName: { type: String, required: true },
  quantityKg: { type: Number, required: true },
  kitchenId: { type: Schema.Types.ObjectId, ref: "Kitchen", required: true },
  ngoId: { type: Schema.Types.ObjectId, ref: "NGO", required: true, index: true },
  driverId: { type: Schema.Types.ObjectId, ref: "Driver" },
  status: {
    type: String,
    enum: [
      "REQUESTED",
      "NGO_ACCEPTED",
      "DRIVER_ASSIGNED",
      "PICKUP_IN_PROGRESS",
      "PICKED_UP",
      "IN_TRANSIT",
      "DELIVERED",
      "CANCELLED",
      "EXPIRED"
    ],
    default: "REQUESTED",
    index: true
  },
  pickupDeadline: { type: Date, required: true },
  estimatedDistanceKm: { type: Number, default: 5.0 },
  estimatedBeneficiaries: { type: Number, default: 50 },
  rejectionReason: { type: String }
}, { timestamps: true });

export const RedistributionRequest = mongoose.model<IRedistributionRequest>("RedistributionRequest", RedistributionRequestSchema);
