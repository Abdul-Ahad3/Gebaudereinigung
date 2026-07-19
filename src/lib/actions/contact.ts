"use server";

import { Resend } from "resend";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { ContactEmail } from "@/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ActionResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(values: ContactFormValues): Promise<ActionResult> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Please check the form and try again." };
  }

  const { name, email, phone, service, message } = parsed.data;

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.CONTACT_EMAIL_TO ?? "mabdulahad3746@gmail.com",
    replyTo: email,
    subject: `New Enquiry from ${name}`,
    react: ContactEmail({ name, email, phone, service, message }),
  });

  if (error) {
    return { success: false, error: "Something went wrong. Please try again later." };
  }

  return { success: true };
}