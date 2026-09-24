import { kpiService } from "./kpi.service";
import { cacheService } from "../cache.service";

export class CachedKpiService {
  async getCachedMetrics() {
    const key = "analytics:kpi:platform_summary";
    const cached = await cacheService.get(key);
    if (cached) {
      return JSON.parse(cached);
    }
    const fresh = await kpiService.getPlatformKpis();
    await cacheService.set(key, JSON.stringify(fresh), 30);
    return fresh;
  }
}

export const cachedKpiService = new CachedKpiService();
