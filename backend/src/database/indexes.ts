import { logger } from "../utils/logger";
import { FoodBatch } from "../models/FoodBatch.model";
import { RedistributionRequest } from "../models/RedistributionRequest.model";
import { User } from "../models/User.model";

export async function ensureDatabaseIndexes() {
  try {
    await User.collection.createIndex({ email: 1 }, { unique: true });
    await User.collection.createIndex({ role: 1 });
    await FoodBatch.collection.createIndex({ status: 1 });
    await FoodBatch.collection.createIndex({ expiryTime: 1 });
    await RedistributionRequest.collection.createIndex({ status: 1 });
    logger.info("Database compound and search indexes verified successfully");
  } catch (err: any) {
    logger.warn("Indexes setup warning (offline or replica set pending):", err.message);
  }
}
