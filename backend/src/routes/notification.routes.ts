import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { getMyNotifications, markRead } from "../controllers/notification.controller";

const router = Router();

router.get("/", requireAuth, getMyNotifications);
router.patch("/:id/read", requireAuth, markRead);

export default router;
