import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, toursTable } from "@workspace/db";
import {
  GetTourParams,
  GetTourResponse,
  ListToursResponse,
  ListFeaturedToursResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/tours", async (req, res): Promise<void> => {
  const tours = await db.select().from(toursTable).orderBy(toursTable.name);
  res.json(ListToursResponse.parse(tours));
});

router.get("/tours/featured", async (req, res): Promise<void> => {
  const tours = await db
    .select()
    .from(toursTable)
    .where(eq(toursTable.featured, true));
  res.json(ListFeaturedToursResponse.parse(tours));
});

router.get("/tours/:id", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = GetTourParams.safeParse({ id: raw });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [tour] = await db
    .select()
    .from(toursTable)
    .where(eq(toursTable.id, params.data.id));

  if (!tour) {
    res.status(404).json({ error: "Tour not found" });
    return;
  }

  res.json(GetTourResponse.parse(tour));
});

export default router;
