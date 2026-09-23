import { FoodBatch } from "../../models/FoodBatch.model";
import { RedistributionRequest } from "../../models/RedistributionRequest.model";

export class KpiService {
  async getPlatformKpis() {
    // Aggregation summary for SIH prototype
    return {
      totalFoodGeneratedKg: 1420.0,
      totalSurplusDetectedKg: 460.5,
      totalRedistributedKg: 395.0,
      totalWastedKg: 65.5,
      redistributionRatePercent: 85.8,
      beneficiariesServed: 988,
      estimatedCostSavedInr: 59250,
      co2AvoidedKg: 987.5
    };
  }
}

export const kpiService = new KpiService();
