import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Please provide a few details about your enquiry."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;