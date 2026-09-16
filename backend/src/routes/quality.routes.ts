import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { scoreQuality } from "../controllers/quality.controller";

const router = Router();

router.post("/evaluate", requireAuth, scoreQuality);

export default router;
