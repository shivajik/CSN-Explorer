import { Router } from "express";
import type { RequestHandler } from "express";
import { logger } from "../lib/logger";

const router = Router();

router.post("/inquiries", ((req, res) => {
  const { name, email, phone } = req.body ?? {};
  if (!name || !email || !phone) {
    res.status(400).json({ error: "name, email, and phone are required" });
    return;
  }
  logger.info({ name, email }, "New tour inquiry received");
  res.status(201).json({ message: "Inquiry received. We will contact you shortly." });
}) as RequestHandler);

export default router;
