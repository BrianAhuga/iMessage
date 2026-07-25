import express from "express";
import { checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middlware.js";

const router = express.Router();

// /api/auth/check
router.get("/check", protectRoute, checkAuth);

export default router;
