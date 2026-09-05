// src/components/sections/Hero.tsx
import Link from "next/link";
import { HeroBackground } from "./HeroBackground";
import { heroImages } from "@/data/heroImages";
import { content } from "@/data/content";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate sm:min-h-[85vh] sm:max-h-[900px] sm:py-16 lg:py-24"
    >
      {/* No fixed height, no aspect ratio, no background fill needed — the
          mobile image simply determines its own height; the desktop
          rotation fills this box once it becomes absolute at sm+. */}
      <div className="w-full sm:absolute sm:inset-0">
        <HeroBackground images={heroImages} objectPosition="center 70%" />
      </div>

      <div className="bg-white p-6 sm:absolute sm:bottom-8 sm:right-8 sm:max-w-md sm:rounded-lg sm:bg-white/60 sm:p-6 sm:backdrop-blur-sm lg:bottom-12 lg:right-16">
        <h1
          id="hero-heading"
          className="text-xl font-semibold leading-snug text-brand-green sm:text-2xl lg:text-3xl"
        >
          {content.hero.tagline}
        </h1>

        <Link
          href="/contact"
          className="mt-5 inline-flex items-center justify-center rounded-md bg-brand-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-green-dark"
        >
          {content.hero.primaryCta}
        </Link>
      </div>
    </section>
  );
}