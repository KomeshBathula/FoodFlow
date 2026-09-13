import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { requireRole } from "../middleware/rbac.middleware";
import { listAuditLogs } from "../controllers/audit.controller";

const router = Router();

router.get("/", requireAuth, requireRole("ADMIN"), listAuditLogs);

export default router;
