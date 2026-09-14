import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { getDemandForecast, getSurplusPrediction } from "../controllers/prediction.controller";

const router = Router();

router.get("/demand", requireAuth, getDemandForecast);
router.post("/surplus", requireAuth, getSurplusPrediction);

export default router;
