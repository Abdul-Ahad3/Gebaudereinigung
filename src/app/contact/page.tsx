import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | AS Gebäudereinigung",
  description:
    "Get in touch with AS Gebäudereinigung for a free quote. Reach us by email or phone, or send a message using the contact form.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Get In Touch"
        subtitle="Have a question or need a quote? Reach out directly or send us a message using the form."
        backgroundImage="/images/hero/freiburg2.jpeg"
      />
      <ContactSection />
    </>
  );
}