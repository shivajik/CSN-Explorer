import { Router } from "express";
import type express from "express";

const router = Router();

router.get("/healthz", (_req: express.Request, res: express.Response) => {
  res.json({ status: "ok" });
});

export default router;
