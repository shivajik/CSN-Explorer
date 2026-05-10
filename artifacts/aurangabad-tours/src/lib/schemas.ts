import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  tourId: z.coerce.number().nullable().optional(),
  tourName: z.string().nullable().optional(),
  pickupLocation: z.enum(["Mumbai", "Pune", "Aurangabad", "Other"]).nullable().optional(),
  travelDate: z.string().nullable().optional(),
  groupSize: z.coerce.number().min(1, "Group size must be at least 1").nullable().optional(),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
