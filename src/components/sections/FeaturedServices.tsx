import {Container} from "@/components/layout/Container";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/data/services";
import { content } from "@/data/content";

export function FeaturedServices() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-brand-green/[0.03] py-16 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-brand-green sm:text-4xl"
          >
            {content.homeSections.featuredServices.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-green/80">
            {content.homeSections.featuredServices.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const text = content.services[service.slug];
            return (
              <ServiceCard
                key={service.slug}
                image={service.image}
                title={text.title}
                description={text.description}
                href="/services"
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}