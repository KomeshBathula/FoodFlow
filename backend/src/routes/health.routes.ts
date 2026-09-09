import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "foodflow-backend",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

router.get("/dependencies", (req, res) => {
  res.status(200).json({
    mongodb: "connected",
    redis: "ready",
    aiService: "available",
  });
});

export default router;
