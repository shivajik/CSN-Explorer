import { Router, type IRouter } from "express";
import healthRouter from "./health";
import toursRouter from "./tours";
import inquiriesRouter from "./inquiries";
import transportRouter from "./transport";

const router: IRouter = Router();

router.use(healthRouter);
router.use(toursRouter);
router.use(inquiriesRouter);
router.use(transportRouter);

export default router;
