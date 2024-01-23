import express from "express";

import authRouter from "./authRouter.js";

const router = express.Router();

router.use("/api/auth", authRouter);

export default router;
