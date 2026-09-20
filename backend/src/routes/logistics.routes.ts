import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { assignDriverTask, updateStatus } from "../controllers/logistics.controller";

const router = Router();

router.post("/assign", requireAuth, assignDriverTask);
router.patch("/tasks/:taskId/status", requireAuth, updateStatus);

export default router;
