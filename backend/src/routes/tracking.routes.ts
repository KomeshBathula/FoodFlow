import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { pushLocationUpdate, getLivePosition } from "../controllers/tracking.controller";

const router = Router();

router.post("/position", requireAuth, pushLocationUpdate);
router.get("/:taskId/position", requireAuth, getLivePosition);

export default router;
