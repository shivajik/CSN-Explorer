import express from "express";
import type { RequestHandler } from "express";
import type { ServerResponse } from "http";
import cors from "cors";
import router from "./routes";
import { logger } from "./lib/logger";

const app = express();

const requestLogger: RequestHandler = (req, res, next) => {
  const start = Date.now();
  (res as unknown as ServerResponse).on("finish", () => {
    logger.info({
      method: req.method,
      url: req.url.split("?")[0],
      status: res.statusCode,
      ms: Date.now() - start,
    });
  });
  next();
};

app.use(requestLogger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", ((_req, res) => {
  res.json({
    name: "CSN Explorer API",
    version: "1.0.0",
    endpoints: [
      "GET /api/healthz",
      "GET /api/tours",
      "GET /api/tours/featured",
      "GET /api/tours/:id",
      "GET /api/transport",
      "POST /api/inquiries",
    ],
  });
}) as RequestHandler);

app.use("/api", router);

export default app;
