import { Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-brand-green/[0.03] py-16 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold tracking-tight text-brand-green sm:text-4xl"
          >
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-green/80">
            Real feedback from the people and businesses we work with.
          </p>
        </div>

        {testimonials.length === 0 ? (
          <div className="mx-auto mt-12 max-w-md rounded-lg border border-brand-green/10 bg-white p-10 text-center">
            <div className="flex justify-center gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-6 w-6 text-brand-gold" />
              ))}
            </div>
            <p className="mt-4 text-base font-semibold text-brand-green">
              Reviews Coming Soon
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-green/70">
              We&apos;re a new company building our reputation one job at a
              time. Customer reviews will appear here as they come in.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}