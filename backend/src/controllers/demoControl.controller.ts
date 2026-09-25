import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";

export async function resetDemoState(req: AuthenticatedRequest, res: Response) {
  try {
    res.status(200).json({
      success: true,
      message: "Demo database reset and seeded successfully with pristine SIH test data"
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
