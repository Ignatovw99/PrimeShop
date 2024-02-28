import express from "express";

import userController from "../controllers/userController.js";

import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(isAuthenticated);

router.route("/profile")
    .get(userController.getUserProfile);

export default router;
