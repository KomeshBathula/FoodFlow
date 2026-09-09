import express from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "./config/env";
import { requestLogger } from "./middleware/requestLogger";
import { errorHandler } from "./middleware/errorHandler";
import healthRouter from "./routes/health.routes";

const app = express();

app.use(helmet());
app.use(cors({ origin: config.clientUrl, credentials: true }));
app.use(express.json());
app.use(requestLogger);

app.use("/api/v1/health", healthRouter);

app.use(errorHandler);

export default app;
