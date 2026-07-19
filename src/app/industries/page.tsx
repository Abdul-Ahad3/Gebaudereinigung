import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { IndustryDetail } from "@/components/shared/IndustryDetail";
import { industries } from "@/data/industries";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Industries We Serve | AS Gebäudereinigung",
  description:
    "AS Gebäudereinigung provides tailored cleaning services for offices, residential buildings, apartment complexes, retail stores, medical facilities, restaurants, schools, and commercial properties.",
};

export default function IndustriesPage() {
  return (
    <>
        <Navbar />
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-brand-green sm:text-5xl">
              Industries We Serve
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-brand-green/80">
              We tailor our cleaning approach to the specific needs of each
              industry we work with.
            </p>
          </div>
        </Container>
      </section>

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