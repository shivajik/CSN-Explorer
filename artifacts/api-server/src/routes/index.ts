import { Router } from "express";
import healthRouter from "./health";
import toursRouter from "./tours";
import inquiriesRouter from "./inquiries";
import transportRouter from "./transport";

const router = Router();

router.use(healthRouter);
router.use(toursRouter);
router.use(inquiriesRouter);
router.use(transportRouter);

export default router;
