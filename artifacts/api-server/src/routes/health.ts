import { Router } from "express";
import type { RequestHandler } from "express";

const router = Router();

router.get("/healthz", ((_req, res) => {
  res.json({ status: "ok" });
}) as RequestHandler);

export default router;
