import express from "express";
import cookieParser from "cookie-parser";

import appRouter from "./routes/router.js";

import webEnhancer from "./middlewares/webEnhancerMiddleware.js";
import errorHandler from "./middlewares/errorHandlerMiddleware.js";
import routeNotFound from "./middlewares/routeNotFoundMiddleware.js";
import { authenticate } from "./middlewares/authMiddleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(webEnhancer);
app.use(authenticate);

app.use(appRouter);

app.use(routeNotFound);
app.use(errorHandler);

export default app;
