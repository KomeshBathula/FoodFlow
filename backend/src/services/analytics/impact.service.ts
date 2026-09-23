import { IMPACT_FACTORS } from "../../../../shared/constants/impactFactors";

export class ImpactService {
  calculateImpact(redistributedKg: number) {
    return {
      redistributedKg,
      mealsProvided: Math.round(redistributedKg * IMPACT_FACTORS.MEALS_PER_KG),
      co2EmissionsAvoidedKg: parseFloat((redistributedKg * IMPACT_FACTORS.CO2_AVOIDED_KG_PER_FOOD_KG).toFixed(1)),
      costSavingsInr: Math.round(redistributedKg * IMPACT_FACTORS.COST_SAVED_INR_PER_KG),
      assumptions: {
        co2Factor: "2.5 kg CO2e per kg edible food (FAO/WRAP benchmark)",
        mealsFactor: "2.5 servings per kg cooked meal"
      }
    };
  }
}

export const impactService = new ImpactService();
