import { createClient } from "redis";
import { config } from "./env";
import { logger } from "../utils/logger";

let redisClient: any = null;

export async function getRedisClient() {
  if (redisClient) return redisClient;

  try {
    redisClient = createClient({ url: config.redisUri });
    redisClient.on("error", (err: any) => {
      logger.warn("Redis client warning/error:", err.message);
    });
    await redisClient.connect();
    logger.info("Connected to Redis successfully");
  } catch (err: any) {
    logger.warn("Redis connection unavailable, running in in-memory fallback cache mode", err.message);
    redisClient = null;
  }
  return redisClient;
}
