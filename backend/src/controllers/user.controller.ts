import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { User } from "../models/User.model";

export async function getCurrentUserProfile(req: AuthenticatedRequest, res: Response) {
  try {
    const user = await User.findById(req.user?.id).select("-passwordHash");
    if (!user) {
      return res.status(404).json({ success: false, error: { message: "User not found" } });
    }
    res.status(200).json({ success: true, data: user });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}

export async function listAllUsers(req: AuthenticatedRequest, res: Response) {
  try {
    const users = await User.find().select("-passwordHash");
    res.status(200).json({ success: true, data: users });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
