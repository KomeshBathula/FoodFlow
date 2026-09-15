import { aiServiceAdapter } from "../../adapters/aiService.adapter";
import { demandForecastingService } from "./demandForecasting.service";
import { surplusPredictionService } from "./surplusPrediction.service";

export class AiIntegrationService {
  async getUnifiedForecast(kitchenId: string, category: string, daysAhead = 1) {
    const remote = await aiServiceAdapter.getForecast(kitchenId, category, daysAhead);
    if (remote) return remote;
    // Local fallback
    const local = await demandForecastingService.forecastDemand({ kitchenId, category, daysAhead });
    return { ...local, source: "local-deterministic-fallback" };
  }

  async getUnifiedSurplus(kitchenId: string, quantityKg: number, category: string) {
    const remote = await aiServiceAdapter.getSurplus(kitchenId, quantityKg, category);
    if (remote) return remote;
    const local = await surplusPredictionService.predictSurplus(kitchenId, quantityKg, category);
    return { ...local, source: "local-deterministic-fallback" };
  }
}

export const aiIntegrationService = new AiIntegrationService();
