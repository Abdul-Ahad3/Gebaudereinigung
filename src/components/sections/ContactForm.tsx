"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { services } from "@/data/services";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  function onSubmit(values: ContactFormValues) {
    // Submission handling (e.g. Resend) is implemented in a future commit.
    console.log("Contact form submitted:", values);
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

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-md bg-brand-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-green-dark disabled:opacity-60 sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}