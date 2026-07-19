import { Container } from "@/components/layout/Container";
import { IndustryCard } from "@/components/shared/IndustryCard";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section aria-labelledby="industries-heading" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="industries-heading"
            className="text-3xl font-bold tracking-tight text-brand-green sm:text-4xl"
          >
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-green/80">
            We support a wide range of businesses and properties with
            cleaning services tailored to their needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.slug}
              icon={industry.icon}
              name={industry.name}
              description={industry.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}