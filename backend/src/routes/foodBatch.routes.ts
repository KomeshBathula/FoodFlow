import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { requireRole } from "../middleware/rbac.middleware";
import { createBatch, listBatches, getBatchById } from "../controllers/foodBatch.controller";

const router = Router();

router.post("/", requireAuth, requireRole("ADMIN", "KITCHEN"), createBatch);
router.get("/", requireAuth, listBatches);
router.get("/:id", requireAuth, getBatchById);

export default router;
