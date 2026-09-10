import mongoose, { Schema, Document } from "mongoose";

export interface INGO extends Document {
  userId: mongoose.Types.ObjectId;
  organizationName: string;
  registrationNumber: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  acceptedCategories: string[];
  beneficiaryCount: number;
  contactPerson: string;
  contactPhone: string;
  isVerified: boolean;
}

const NGOSchema = new Schema<INGO>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  organizationName: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  acceptedCategories: [{ type: String }],
  beneficiaryCount: { type: Number, default: 100 },
  contactPerson: { type: String, required: true },
  contactPhone: { type: String, required: true },
  isVerified: { type: Boolean, default: true }
}, { timestamps: true });

export const NGO = mongoose.model<INGO>("NGO", NGOSchema);
