import type { Metadata } from "next";
import {Container} from "@/components/layout/Container";
import { PageHero } from "@/components/shared/PageHero";
import { IndustryDetail } from "@/components/shared/IndustryDetail";
import { industries } from "@/data/industries";
import { content } from "@/data/content";

export const metadata: Metadata = {
  title: "Industries We Serve | AS Gebäudereinigung",
  description:
    "AS Gebäudereinigung provides tailored cleaning services for offices, residential buildings, apartment complexes, retail stores, medical facilities, restaurants, schools, and commercial properties.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title={content.industriesPage.heading}
        subtitle={content.industriesPage.subtitle}
        backgroundImage="/images/pages/industries.jpg"
      />

      <section className="bg-white pb-16 lg:pb-24">
        <Container>
          {industries.map((industry, index) => {
            const text = content.industries[industry.slug];
            return (
              <IndustryDetail
                key={industry.slug}
                icon={industry.icon}
                name={text.name}
                description={text.longDescription}
                highlights={text.highlights}
                ctaLabel={content.cta.requestQuote}
                reversed={index % 2 === 1}
              />
            );
          })}
        </Container>
      </section>
    </>
  );
}