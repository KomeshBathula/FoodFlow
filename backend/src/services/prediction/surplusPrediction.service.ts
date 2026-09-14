import { SurplusPredictionResult } from "../../../../shared/types/prediction";
import { demandForecastingService } from "./demandForecasting.service";

export class SurplusPredictionService {
  async predictSurplus(kitchenId: string, currentBatchQuantityKg: number, category: string): Promise<SurplusPredictionResult> {
    const demandForecast = await demandForecastingService.forecastDemand({ kitchenId, category, daysAhead: 1 });
    const expectedDemand = demandForecast.predictedDemandKg;
    const surplusKg = Math.max(0, parseFloat((currentBatchQuantityKg - expectedDemand * 0.4).toFixed(1)));
    const probability = surplusKg > 0 ? 0.91 : 0.15;

    return {
      predictedSurplusKg: surplusKg,
      surplusProbability: probability,
      recommendedAction: surplusKg > 5 ? "REDISTRIBUTE" : "HOLD",
      factors: {
        overproductionMargin: parseFloat((currentBatchQuantityKg - expectedDemand * 0.4).toFixed(1)),
        shelfLifeDecay: 0.12,
        demandDeficit: expectedDemand * 0.6
      }
    };
  }
}

export const surplusPredictionService = new SurplusPredictionService();
