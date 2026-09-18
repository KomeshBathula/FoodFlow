import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { listAllNgos } from "../controllers/ngo.controller";

const router = Router();

router.get("/", requireAuth, listAllNgos);

export default router;
