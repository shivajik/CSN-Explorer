import { pgTable, text, serial, integer, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const transportOptionsTable = pgTable("transport_options", {
  id: serial("id").primaryKey(),
  from: text("from").notNull(),
  to: text("to").notNull(),
  vehicleType: text("vehicle_type").notNull(),
  capacity: integer("capacity").notNull(),
  pricePerPerson: real("price_per_person").notNull(),
  duration: text("duration").notNull(),
  description: text("description"),
});

export const insertTransportOptionSchema = createInsertSchema(transportOptionsTable).omit({ id: true });
export type InsertTransportOption = z.infer<typeof insertTransportOptionSchema>;
export type TransportOption = typeof transportOptionsTable.$inferSelect;
