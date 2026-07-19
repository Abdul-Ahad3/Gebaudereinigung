import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Jobs | AS Gebäudereinigung",
  description:
    "Current job openings at AS Gebäudereinigung. Send us your CV for future opportunities.",
};

export default function JobsPage() {
  return (
    <>
      <Navbar />
      <section className="bg-white py-16 lg:py-24">
        <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brand-green sm:text-5xl">
            Careers
          </h1>
        </div>

        <div className="mx-auto mt-12 max-w-md rounded-lg border border-brand-green/10 bg-white p-10 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/5">
            <Briefcase className="h-7 w-7 text-brand-gold" aria-hidden="true" />
          </span>
          <p className="mt-4 text-base font-semibold text-brand-green">
            We Are Not Currently Hiring
          </p>
          <p className="mt-2 text-sm leading-relaxed text-brand-green/70">
            Feel free to send your CV for future opportunities at{" "}
            <a
              href="mailto:asreinigung.freiburg@gmail.com"
              className="font-medium text-brand-green underline underline-offset-2 transition-colors hover:text-brand-gold"
            >
              asreinigung.freiburg@gmail.com
            </a>
            .
          </p>
        </div>
        </Container>
      </section>
    </>
  );
}