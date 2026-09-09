import dotenv from "dotenv";
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT || "5000", 10),
  mongoUri: process.env.MONGODB_URI || "mongodb://localhost:27017/foodflow",
  redisUri: process.env.REDIS_URI || "redis://localhost:6379",
  jwtSecret: process.env.JWT_SECRET || "dev-super-secret-key-foodflow-2026",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d",
  aiServiceUrl: process.env.AI_SERVICE_URL || "http://localhost:8000",
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
};
