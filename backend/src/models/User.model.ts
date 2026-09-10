import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: "ADMIN" | "KITCHEN" | "NGO" | "DRIVER" | "USER";
  phone?: string;
  organizationName?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["ADMIN", "KITCHEN", "NGO", "DRIVER", "USER"], default: "USER", index: true },
  phone: { type: String },
  organizationName: { type: String },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export const User = mongoose.model<IUser>("User", UserSchema);
