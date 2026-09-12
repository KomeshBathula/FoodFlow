import mongoose, { Schema, Document } from "mongoose";

export interface IFoodBatch extends Document {
  batchId: string;
  kitchenId: mongoose.Types.ObjectId;
  foodName: string;
  category: "COOKED_MEALS" | "BAKERY" | "DAIRY" | "FRUITS_VEGETABLES" | "PACKAGED_GOODS";
  quantityKg: number;
  initialQuantityKg: number;
  preparationTime: Date;
  expiryTime: Date;
  storageCondition: "AMBIENT" | "REFRIGERATED" | "FROZEN";
  storageTemperature: number;
  qualityStatus: "EXCELLENT" | "GOOD" | "ACCEPTABLE" | "DEGRADED" | "UNSAFE";
  qualityScore: number;
  surplusStatus: boolean;
  estimatedBeneficiaries: number;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const FoodBatchSchema = new Schema<IFoodBatch>({
  batchId: { type: String, required: true, unique: true, index: true },
  kitchenId: { type: Schema.Types.ObjectId, ref: "Kitchen", required: true },
  foodName: { type: String, required: true },
  category: {
    type: String,
    enum: ["COOKED_MEALS", "BAKERY", "DAIRY", "FRUITS_VEGETABLES", "PACKAGED_GOODS"],
    required: true
  },
  quantityKg: { type: Number, required: true, min: 1 },
  initialQuantityKg: { type: Number, required: true, min: 1 },
  preparationTime: { type: Date, required: true },
  expiryTime: { type: Date, required: true, index: true },
  storageCondition: { type: String, enum: ["AMBIENT", "REFRIGERATED", "FROZEN"], default: "REFRIGERATED" },
  storageTemperature: { type: Number, default: 4 },
  qualityStatus: { type: String, enum: ["EXCELLENT", "GOOD", "ACCEPTABLE", "DEGRADED", "UNSAFE"], default: "EXCELLENT" },
  qualityScore: { type: Number, default: 95 },
  surplusStatus: { type: Boolean, default: false },
  estimatedBeneficiaries: { type: Number, default: 0 },
  location: {
    lat: { type: Number, default: 12.9716 },
    lng: { type: Number, default: 77.5946 },
    address: { type: String, default: "Central Kitchen, Bangalore" }
  },
  status: {
    type: String,
    enum: [
      "CREATED",
      "ACTIVE",
      "SURPLUS_DETECTED",
      "AVAILABLE",
      "MATCHED",
      "PICKUP_ASSIGNED",
      "PICKED_UP",
      "DELIVERED",
      "EXPIRED",
      "CANCELLED"
    ],
    default: "CREATED",
    index: true
  }
}, { timestamps: true });

export const FoodBatch = mongoose.model<IFoodBatch>("FoodBatch", FoodBatchSchema);
