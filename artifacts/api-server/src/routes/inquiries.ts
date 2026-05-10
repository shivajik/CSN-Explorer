import { Router, type IRouter } from "express";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.post("/inquiries", (req, res): void => {
  const { name, email, phone } = req.body ?? {};
  if (!name || !email || !phone) {
    res.status(400).json({ error: "name, email, and phone are required" });
    return;
  }
  logger.info({ name, email }, "New tour inquiry received");
  res.status(201).json({ message: "Inquiry received. We will contact you shortly." });
});

export default router;
