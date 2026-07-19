import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/data/services";

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
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-green/80">
            From everyday upkeep to specialized cleaning, we offer a full
            range of services for homes and businesses.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href="/services"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}