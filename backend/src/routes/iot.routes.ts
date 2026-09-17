import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { simulateTelemetry, getTelemetry } from "../controllers/iot.controller";

const router = Router();

router.post("/simulate", requireAuth, simulateTelemetry);
router.get("/latest", requireAuth, getTelemetry);

export default router;
