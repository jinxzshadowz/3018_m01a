import express from "express";
import healthRouter from "./api/v1/routes/health";

const app = express();

app.use(express.json());

app.use("/api/v1/health", healthRouter);

export default app;