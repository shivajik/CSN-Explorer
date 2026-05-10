import { Router, type IRouter } from "express";
import { db, transportOptionsTable } from "@workspace/db";
import { ListTransportOptionsResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/transport", async (req, res): Promise<void> => {
  const options = await db
    .select()
    .from(transportOptionsTable)
    .orderBy(transportOptionsTable.from);
  res.json(ListTransportOptionsResponse.parse(options));
});

export default router;
