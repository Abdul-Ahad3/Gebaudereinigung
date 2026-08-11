import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import {Container} from "@/components/layout/Container";
import { PageHero } from "@/components/shared/PageHero";
import { FAQItem } from "@/components/shared/FAQItem";
import { faqIds } from "@/data/faqs";
import { content } from "@/data/content";

export const metadata: Metadata = {
  title: "FAQs | AS Gebäudereinigung",
  description:
    "Answers to common questions about AS Gebäudereinigung's cleaning services, pricing, scheduling, and process.",
};

export default function FAQsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title={content.faqsPage.heading}
        subtitle={content.faqsPage.subtitle}
        backgroundImage="/images/pages/faqs.jpg"
      />

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqIds.map((id) => {
              const faq = content.faqs[id];
              return <FAQItem key={id} question={faq.question} answer={faq.answer} />;
            })}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-brand-green px-8 py-10 text-center">
            <p className="text-lg font-medium text-white">{content.faqsPage.ctaHeading}</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-brand-gold px-6 py-3 text-sm font-medium text-brand-green transition-colors hover:bg-brand-gold/90"
            >
              {content.faqsPage.ctaButton}
            </Link>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}