import { ShieldCheck, Sparkles, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { content } from "@/data/content";

const featureMeta = [
  { key: "trusted", icon: ShieldCheck },
  { key: "thorough", icon: Sparkles },
  { key: "punctual", icon: Clock },
] as const;

export function About() {
  return (
    <section aria-labelledby="about-heading" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-brand-green sm:text-4xl"
          >
            {content.about.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-green/80">
            {content.about.intro}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-brand-green px-8 py-10 text-center">
          <div className="mx-auto h-0.5 w-12 bg-brand-gold" />
          <p className="mt-4 text-lg font-medium leading-relaxed text-white">
            {content.about.mission}
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {featureMeta.map(({ key, icon: Icon }) => {
            const feature = content.about.features[key];
            return (
              <div key={key} className="flex flex-col items-center text-center">
                <Icon className="h-8 w-8 text-brand-gold" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-brand-green">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-green/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}