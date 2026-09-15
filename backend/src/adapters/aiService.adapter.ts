import axios from "axios";
import { config } from "../config/env";
import { logger } from "../utils/logger";

export class AiServiceAdapter {
  private client = axios.create({
    baseURL: config.aiServiceUrl,
    timeout: 3000
  });

  async getForecast(kitchenId: string, category: string, daysAhead = 1) {
    try {
      const res = await this.client.post("/ai/forecast", {
        kitchen_id: kitchenId,
        category,
        days_ahead: daysAhead
      });
      return { ...res.data, source: "ai-service" };
    } catch (err: any) {
      logger.warn("AI Service unavailable, falling back to backend deterministic calculation", err.message);
      return null;
    }
  }

  async getSurplus(kitchenId: string, quantityKg: number, category: string) {
    try {
      const res = await this.client.post("/ai/surplus", {
        kitchen_id: kitchenId,
        quantity_kg: quantityKg,
        category
      });
      return { ...res.data, source: "ai-service" };
    } catch (err: any) {
      logger.warn("AI Service surplus unavailable, using fallback logic", err.message);
      return null;
    }
  }
}

export const aiServiceAdapter = new AiServiceAdapter();
