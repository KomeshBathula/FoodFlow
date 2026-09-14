import mongoose, { Schema, Document } from "mongoose";

export interface IHistoricalDemand extends Document {
  kitchenId: mongoose.Types.ObjectId;
  category: string;
  date: Date;
  quantityProducedKg: number;
  quantityConsumedKg: number;
  quantityWastedKg: number;
  dayOfWeek: number;
}

const HistoricalDemandSchema = new Schema<IHistoricalDemand>({
  kitchenId: { type: Schema.Types.ObjectId, ref: "Kitchen", required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true, index: true },
  quantityProducedKg: { type: Number, required: true },
  quantityConsumedKg: { type: Number, required: true },
  quantityWastedKg: { type: Number, default: 0 },
  dayOfWeek: { type: Number, required: true }
}, { timestamps: true });

export const HistoricalDemand = mongoose.model<IHistoricalDemand>("HistoricalDemand", HistoricalDemandSchema);
