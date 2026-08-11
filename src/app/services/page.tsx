import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import {Container} from "@/components/layout/Container";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceDetail } from "@/components/shared/ServiceDetail";
import { services } from "@/data/services";
import { content } from "@/data/content";

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
        title={content.servicesPage.heading}
        subtitle={content.servicesPage.subtitle}
        backgroundImage="/images/pages/services.jpg"
      />

      <section className="bg-white pb-16 lg:pb-24">
        <Container>
          {services.map((service, index) => {
            const text = content.services[service.slug];
            return (
              <ServiceDetail
                key={service.slug}
                icon={service.icon}
                title={text.title}
                description={text.longDescription}
                benefits={text.benefits}
                ctaLabel={content.cta.requestQuote}
                reversed={index % 2 === 1}
              />
            );
          })}
        </Container>
      </section>
      <Footer />
    </>
  );
}