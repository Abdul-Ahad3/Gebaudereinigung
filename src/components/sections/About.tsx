import { ShieldCheck, Sparkles, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    description: "Consistent, dependable service you can count on every time.",
  },
  {
    icon: Sparkles,
    title: "Thorough Cleaning",
    description: "Detail-focused work that leaves every space genuinely clean.",
  },
  {
    icon: Clock,
    title: "Punctual Service",
    description: "We show up on schedule and respect your time.",
  },
];

export function About() {
  return (
    <section aria-labelledby="about-heading" className="bg-white py-16 lg:py-24">
      <Container>
        {/* Intro */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-brand-green sm:text-4xl"
          >
            About AS Gebäudereinigung
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-green/80">
            AS Gebäudereinigung is a Freiburg-based cleaning company built on
            reliability and attention to detail. We work with private
            households, offices, and residential buildings — bringing the
            same standard of care to every job, large or small.
          </p>
        </div>

        {/* Mission callout */}
        <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-brand-green px-8 py-10 text-center">
          <div className="mx-auto h-0.5 w-12 bg-brand-gold" />
          <p className="mt-4 text-lg font-medium leading-relaxed text-white">
            Our mission is simple: deliver cleaning you can rely on, without
            compromise — so our customers can trust their spaces are truly
            taken care of.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <feature.icon
                className="h-8 w-8 text-brand-gold"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-base font-semibold text-brand-green">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-green/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}