import { Router } from "express";
import type { RequestHandler } from "express";

const router = Router();

const healthHandler: RequestHandler = (_req, res) => {
  res.json({ status: "ok" });
};

router.get("/healthz", healthHandler);

export default router;
