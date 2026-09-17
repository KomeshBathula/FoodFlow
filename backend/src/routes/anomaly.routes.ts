import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { getAnomalies } from "../controllers/anomaly.controller";

const router = Router();

router.get("/", requireAuth, getAnomalies);

export default router;
