import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ServiceDetail } from "@/components/shared/ServiceDetail";
import { services } from "@/data/services";
import { Navbar } from "@/components/layout/Navbar";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Our Services | AS Gebäudereinigung",
  description:
    "Explore our full range of cleaning services — maintenance cleaning, office cleaning, stairwell cleaning, window cleaning, final cleaning, special cleaning, and household cleaning.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="Thorough, professional cleaning for every space — from everyday upkeep to specialized, one-off work."
        backgroundImage="/images/hero/freiburg.jpeg"
      />

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