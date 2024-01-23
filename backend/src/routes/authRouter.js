import express from "express";

import authController from "../controllers/authController.js";

import { isAuthenticated, isAnonymous } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", isAnonymous, authController.loginUser);
router.post("/logout", isAuthenticated, authController.logoutUser);

export default router;
