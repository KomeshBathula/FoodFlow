import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { createRedistribution, listRedistributions } from "../controllers/redistribution.controller";

const router = Router();

router.post("/", requireAuth, createRedistribution);
router.get("/", requireAuth, listRedistributions);

export default router;
