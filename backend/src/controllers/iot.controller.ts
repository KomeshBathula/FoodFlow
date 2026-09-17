import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { iotSimulatorAdapter } from "../adapters/iotSimulator.adapter";

export async function simulateTelemetry(req: AuthenticatedRequest, res: Response) {
  try {
    const { kitchenId = "demo-kitchen", temperature } = req.body;
    const reading = await iotSimulatorAdapter.generateReading(kitchenId, temperature ? Number(temperature) : undefined);
    res.status(201).json({ success: true, data: reading });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}

export async function getTelemetry(req: AuthenticatedRequest, res: Response) {
  try {
    const kitchenId = (req.query.kitchenId as string) || "demo-kitchen";
    const readings = await iotSimulatorAdapter.getLatestReadings(kitchenId);
    res.status(200).json({ success: true, data: readings });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
