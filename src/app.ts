import express from "express";
import healthRouter from "./api/v1/routes/health";
import portfolioRouter from "./api/v1/routes/portfolio.routes";

const app = express();

app.use(express.json());

app.use("/api/v1/health", healthRouter);
app.use("/api/v1/portfolio", portfolioRouter);

export default app;
