import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { ngoService } from "../services/ngo.service";

export async function listAllNgos(req: AuthenticatedRequest, res: Response) {
  try {
    const ngos = await ngoService.listNgos();
    res.status(200).json({ success: true, data: ngos });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
