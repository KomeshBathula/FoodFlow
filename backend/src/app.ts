import express from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "./config/env";
import { requestLogger } from "./middleware/requestLogger";
import { errorHandler } from "./middleware/errorHandler";

import healthRouter from "./routes/health.routes";
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import foodBatchRouter from "./routes/foodBatch.routes";
import predictionRouter from "./routes/prediction.routes";
import qualityRouter from "./routes/quality.routes";
import iotRouter from "./routes/iot.routes";
import ngoRouter from "./routes/ngo.routes";
import driverRouter from "./routes/driver.routes";
import redistributionRouter from "./routes/redistribution.routes";
import logisticsRouter from "./routes/logistics.routes";
import trackingRouter from "./routes/tracking.routes";
import notificationRouter from "./routes/notification.routes";
import analyticsRouter from "./routes/analytics.routes";
import anomalyRouter from "./routes/anomaly.routes";
import auditRouter from "./routes/audit.routes";
import adminRouter from "./routes/admin.routes";

const app = express();

app.use(helmet());
app.use(cors({ origin: config.clientUrl, credentials: true }));
app.use(express.json());
app.use(requestLogger);

// Versioned API Routes (v1)
app.use("/api/v1/health", healthRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/food-batches", foodBatchRouter);
app.use("/api/v1/predictions", predictionRouter);
app.use("/api/v1/quality", qualityRouter);
app.use("/api/v1/iot", iotRouter);
app.use("/api/v1/ngos", ngoRouter);
app.use("/api/v1/drivers", driverRouter);
app.use("/api/v1/redistributions", redistributionRouter);
app.use("/api/v1/logistics", logisticsRouter);
app.use("/api/v1/tracking", trackingRouter);
app.use("/api/v1/notifications", notificationRouter);
app.use("/api/v1/analytics", analyticsRouter);
app.use("/api/v1/anomalies", anomalyRouter);
app.use("/api/v1/audit", auditRouter);
app.use("/api/v1/admin", adminRouter);

app.use(errorHandler);

export default app;
