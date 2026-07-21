import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { IndustryDetail } from "@/components/shared/IndustryDetail";
import { industries } from "@/data/industries";
import { Navbar } from "@/components/layout/Navbar";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Industries We Serve | AS Gebäudereinigung",
  description:
    "AS Gebäudereinigung provides tailored cleaning services for offices, residential buildings, apartment complexes, retail stores, medical facilities, restaurants, schools, and commercial properties.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Industries We Serve"
        subtitle="We tailor our cleaning approach to the specific needs of each industry we work with."
        backgroundImage="/images/hero/freiburg3.jpeg"
      />

      <section className="bg-white pb-16 lg:pb-24">
        <Container>
          {industries.map((industry, index) => (
            <IndustryDetail
              key={industry.slug}
              icon={industry.icon}
              name={industry.name}
              description={industry.longDescription ?? industry.description}
              highlights={industry.highlights ?? []}
              reversed={index % 2 === 1}
            />
          ))}
        </Container>
      </section>
    </>
  );
}