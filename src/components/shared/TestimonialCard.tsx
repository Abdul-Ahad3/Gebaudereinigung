import { Star } from "lucide-react";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-brand-green/10 bg-white p-6">
      <div className="flex gap-0.5" aria-label={`Rated ${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={
              index < testimonial.rating
                ? "h-4 w-4 fill-brand-gold text-brand-gold"
                : "h-4 w-4 text-brand-green/15"
            }
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-green/80">
        “{testimonial.text}”
      </p>
      <p className="mt-4 text-sm font-semibold text-brand-green">{testimonial.name}</p>
    </article>
  );
}