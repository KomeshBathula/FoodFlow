import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { demandForecastingService } from "../services/prediction/demandForecasting.service";
import { surplusPredictionService } from "../services/prediction/surplusPrediction.service";

export async function getDemandForecast(req: AuthenticatedRequest, res: Response) {
  try {
    const { category = "COOKED_MEALS", daysAhead = "1" } = req.query;
    const kitchenId = req.user?.id || "demo-kitchen";
    const result = await demandForecastingService.forecastDemand({
      kitchenId,
      category: category as string,
      daysAhead: parseInt(daysAhead as string)
    });
    res.status(200).json({ success: true, data: result });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}

export async function getSurplusPrediction(req: AuthenticatedRequest, res: Response) {
  try {
    const { quantityKg = 50, category = "COOKED_MEALS" } = req.body;
    const kitchenId = req.user?.id || "demo-kitchen";
    const result = await surplusPredictionService.predictSurplus(
      kitchenId,
      Number(quantityKg),
      category
    );
    res.status(200).json({ success: true, data: result });
  } catch (err: any) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
}
