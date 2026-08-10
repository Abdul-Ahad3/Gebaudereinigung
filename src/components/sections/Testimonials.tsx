import { Star } from "lucide-react";
import {Container} from "@/components/layout/Container";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { content } from "@/data/content";

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
            {content.homeSections.testimonials.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-green/80">
            {content.homeSections.testimonials.subtitle}
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
              {content.homeSections.testimonials.emptyStateTitle}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-green/70">
              {content.homeSections.testimonials.emptyStateMessage}
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