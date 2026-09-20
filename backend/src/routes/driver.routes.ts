import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { listDrivers } from "../controllers/driver.controller";

const router = Router();

router.get("/", requireAuth, listDrivers);

export default router;
