import Link from "next/link";
import { ImageIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="max-w-xl">
            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-tight tracking-tight text-brand-green sm:text-5xl lg:text-6xl"
            >
              Reliable Cleaning You Can Trust
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-brand-green/80">
              From offices to stairwells to move-out cleans, AS Gebäudereinigung
              delivers thorough, professional cleaning for homes and businesses
              in Freiburg — done right, every time.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-green-dark"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-brand-green px-6 py-3 text-sm font-medium text-brand-green transition-colors hover:bg-brand-green hover:text-white"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Placeholder image — replace with next/image once real photography is available */}
          <div
            role="img"
            aria-label="Placeholder for cleaning team photograph"
            className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-lg border border-brand-green/15 bg-brand-green/5 lg:aspect-[4/5]"
          >
            <ImageIcon
              className="h-12 w-12 text-brand-green/30"
              aria-hidden="true"
            />
            <span className="text-sm text-brand-green/40">
              Photo coming soon
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}