import { HeroBackground } from "@/components/sections/HeroBackground";
import { heroImages } from "@/data/heroImages";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-hero-heading"
      className="relative isolate flex min-h-[320px] items-center justify-center py-16 text-center lg:min-h-[900px]"
    >
      <HeroBackground images={heroImages} />

      <div className="mx-4 max-w-xl rounded-lg bg-white/60 p-8 backdrop-blur-sm sm:mx-8">
        <h1
          id="page-hero-heading"
          className="text-4xl font-bold tracking-tight text-brand-green sm:text-5xl"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg leading-relaxed text-brand-green/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}