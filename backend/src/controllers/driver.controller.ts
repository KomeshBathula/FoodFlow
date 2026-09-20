import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { driverService } from "../services/driver.service";

export async function listDrivers(req: AuthenticatedRequest, res: Response) {
  try {
    const drivers = await driverService.listAvailableDrivers();
    res.status(200).json({ success: true, data: drivers });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
