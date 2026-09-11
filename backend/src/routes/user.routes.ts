import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { requireRole } from "../middleware/rbac.middleware";
import { getCurrentUserProfile, listAllUsers } from "../controllers/user.controller";

const router = Router();

router.get("/me", requireAuth, getCurrentUserProfile);
router.get("/", requireAuth, requireRole("ADMIN"), listAllUsers);

export default router;
