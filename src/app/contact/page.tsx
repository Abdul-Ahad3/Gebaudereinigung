import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactSection } from "@/components/sections/Contact";
import { content } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact Us | AS Gebäudereinigung",
  description:
    "Get in touch with AS Gebäudereinigung for a free quote. Reach us by email or phone, or send a message using the contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={content.contact.heading}
        subtitle={content.contact.subtitle}
        backgroundImage="/images/pages/contact.jpg"
      />
      <ContactSection />
    </>
  );
}