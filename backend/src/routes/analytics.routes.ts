import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { getDashboardMetrics } from "../controllers/analytics.controller";

const router = Router();

router.get("/metrics", requireAuth, getDashboardMetrics);

export default router;
