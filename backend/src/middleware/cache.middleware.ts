import { Request, Response, NextFunction } from "express";
import { cacheService } from "../services/cache.service";

export function cacheResponse(ttlSeconds = 30) {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (req.method !== "GET") return next();

    const cacheKey = `http_cache:${req.originalUrl}`;
    const cached = await cacheService.get(cacheKey);

    if (cached) {
      res.setHeader("X-Cache", "HIT");
      return res.status(200).json(JSON.parse(cached));
    }

    const originalJson = res.json.bind(res);
    res.json = (body: any) => {
      res.setHeader("X-Cache", "MISS");
      cacheService.set(cacheKey, JSON.stringify(body), ttlSeconds);
      return originalJson(body);
    };

    next();
  };
}
