import mongoose from "mongoose";
import { config } from "./env";
import { logger } from "../utils/logger";

export async function connectDatabase(): Promise<void> {
  try {
    await mongoose.connect(config.mongoUri);
    logger.info("Connected to MongoDB successfully");
  } catch (error) {
    logger.error("Failed to connect to MongoDB, running in offline/mock mode for demo", error);
  }
}

export async function disconnectDatabase(): Promise<void> {
  await mongoose.disconnect();
}
