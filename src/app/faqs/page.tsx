import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FAQItem } from "@/components/shared/FAQItem";
import { faqs } from "@/data/faqs";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "FAQs | AS Gebäudereinigung",
  description:
    "Answers to common questions about AS Gebäudereinigung's cleaning services, pricing, scheduling, and process.",
};

export default function FAQsPage() {
  return (
    <>
      <Navbar />
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brand-green sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-green/80">
            Answers to the questions we hear most often. Can&apos;t find what
            you&apos;re looking for? Reach out directly.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-brand-green px-8 py-10 text-center">
          <p className="text-lg font-medium text-white">
            For more questions, contact us
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-brand-gold px-6 py-3 text-sm font-medium text-brand-green transition-colors hover:bg-brand-gold/90"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
    </>
  );
}