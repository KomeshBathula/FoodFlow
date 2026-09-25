import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { requireRole } from "../middleware/rbac.middleware";
import { getSystemOverview } from "../controllers/admin.controller";

const router = Router();

router.get("/overview", requireAuth, requireRole("ADMIN"), getSystemOverview);

export default router;
