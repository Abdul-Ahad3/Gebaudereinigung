import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Contact Us | AS Gebäudereinigung",
  description:
    "Get in touch with AS Gebäudereinigung for a free quote. Reach us by email or phone, or send a message using the contact form.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactSection titleAs="h1" />
    </>
  );
}