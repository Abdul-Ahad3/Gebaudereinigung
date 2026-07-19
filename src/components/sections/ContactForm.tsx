"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { services } from "@/data/services";
import { submitContactForm } from "@/lib/actions/contact";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    const result = await submitContactForm(values);

    if (result.success) {
      setStatus("success");
      setStatusMessage("Thanks — your message has been sent. We'll get back to you soon.");
      reset();
    } else {
      setStatus("error");
      setStatusMessage(result.error ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-green">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-1 w-full rounded-md border border-brand-green/20 px-4 py-2 text-sm text-brand-green focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-green">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-1 w-full rounded-md border border-brand-green/20 px-4 py-2 text-sm text-brand-green focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-green">
          Phone <span className="font-normal text-brand-green/50">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="mt-1 w-full rounded-md border border-brand-green/20 px-4 py-2 text-sm text-brand-green focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-brand-green">
          Service
        </label>
        <select
          id="service"
          {...register("service")}
          defaultValue=""
          aria-invalid={errors.service ? "true" : "false"}
          aria-describedby={errors.service ? "service-error" : undefined}
          className="mt-1 w-full rounded-md border border-brand-green/20 bg-white px-4 py-2 text-sm text-brand-green focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
        {errors.service && (
          <p id="service-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.service.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-green">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1 w-full rounded-md border border-brand-green/20 px-4 py-2 text-sm text-brand-green focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {status !== "idle" && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm font-medium ${
            status === "success" ? "text-brand-green" : "text-red-600"
          }`}
        >
          {statusMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-md bg-brand-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-green-dark disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}