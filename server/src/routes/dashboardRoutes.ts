import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dasboardController";

const router=Router();
router.get("/",getDashboardMetrics);
export default router;