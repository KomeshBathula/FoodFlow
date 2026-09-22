import mongoose, { Schema, Document } from "mongoose";

export interface INotification extends Document {
  recipientId: string;
  recipientRole: string;
  type: "SURPLUS_ALERT" | "MATCH_FOUND" | "PICKUP_ASSIGNED" | "DELIVERY_COMPLETE" | "ANOMALY_WARNING";
  title: string;
  message: string;
  read: boolean;
  relatedEntityId?: string;
  createdAt: Date;
}

const NotificationSchema = new Schema<INotification>({
  recipientId: { type: String, required: true, index: true },
  recipientRole: { type: String, required: true },
  type: {
    type: String,
    enum: ["SURPLUS_ALERT", "MATCH_FOUND", "PICKUP_ASSIGNED", "DELIVERY_COMPLETE", "ANOMALY_WARNING"],
    required: true
  },
  title: { type: String, required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  relatedEntityId: { type: String }
}, { timestamps: true });

export const Notification = mongoose.model<INotification>("Notification", NotificationSchema);
