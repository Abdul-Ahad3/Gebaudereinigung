import Link from "next/link";
import { HeroBackground } from "./HeroBackground";
import { heroImages } from "@/data/heroImages";
import { content } from "@/data/content";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[600px] items-center py-16 lg:min-h-[700px] lg:py-24"
    >
      <HeroBackground images={heroImages} />

      <div className="mx-4 max-w-xl rounded-lg bg-white/60 p-8 backdrop-blur-sm sm:mx-8 lg:mx-16 lg:p-10">
        <h1
          id="hero-heading"
          className="text-4xl font-bold leading-tight tracking-tight text-brand-green sm:text-5xl lg:text-6xl"
        >
          {content.hero.title}
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-brand-green/80">
          {content.hero.subtitle}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-brand-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-green-dark"
          >
            {content.hero.primaryCta}
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-brand-green px-6 py-3 text-sm font-medium text-brand-green transition-colors hover:bg-brand-green hover:text-white"
          >
            {content.hero.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}