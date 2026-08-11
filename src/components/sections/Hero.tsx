import Link from "next/link";
import { HeroBackground } from "./HeroBackground";
import { heroImages } from "@/data/heroImages";
import { content } from "@/data/content";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[600px] py-16 lg:min-h-[900px] lg:py-24"
    >
      <HeroBackground images={heroImages} />

      <div className="absolute inset-x-4 bottom-2 rounded-lg bg-white/60 p-6 backdrop-blur-sm sm:inset-x-auto sm:bottom-5 sm:right-8 sm:max-w-xl sm:p-8 lg:bottom-10 lg:right-16 lg:p-10">
        <h1
          id="hero-heading"
          className="text-4xl font-bold leading-tight tracking-tight text-brand-green sm:text-5xl lg:text-5xl"
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