import { DemandForecastRequest, DemandForecastResult, SurplusPredictionResult } from "../../../../shared/types/prediction";

export interface IPredictionService {
  forecastDemand(req: DemandForecastRequest): Promise<DemandForecastResult>;
  predictSurplus(kitchenId: string, currentBatchQuantityKg: number, category: string): Promise<SurplusPredictionResult>;
}
