export interface DemandForecastRequest {
  kitchenId: string;
  category: string;
  daysAhead: number;
}

export interface DemandForecastResult {
  predictedDemandKg: number;
  confidenceScore: number;
  historicalAverageKg: number;
  factors: {
    dayOfWeekImpact: string;
    seasonalAdjustment: string;
    weatherInfluence: string;
  };
  modelMetadata: {
    algorithm: string;
    version: string;
    isPrototypeBaseline: boolean;
  };
}

export interface SurplusPredictionResult {
  predictedSurplusKg: number;
  surplusProbability: number;
  recommendedAction: "REDISTRIBUTE" | "DISCOUNT" | "HOLD";
  factors: {
    overproductionMargin: number;
    shelfLifeDecay: number;
    demandDeficit: number;
  };
}
