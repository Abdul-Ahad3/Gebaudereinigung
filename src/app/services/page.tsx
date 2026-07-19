import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ServiceDetail } from "@/components/shared/ServiceDetail";
import { services } from "@/data/services";
import { Navbar }from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Our Services | AS Gebäudereinigung",
  description:
    "Explore our full range of cleaning services — maintenance cleaning, office cleaning, stairwell cleaning, window cleaning, final cleaning, special cleaning, and household cleaning.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-brand-green sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-brand-green/80">
              Thorough, professional cleaning for every space — from everyday
              upkeep to specialized, one-off work.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 lg:pb-24">
        <Container>
          {services.map((service, index) => (
            <ServiceDetail
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.longDescription ?? service.description}
              benefits={service.benefits ?? []}
              reversed={index % 2 === 1}
            />
          ))}
        </Container>
      </section>
    </>
  );
}