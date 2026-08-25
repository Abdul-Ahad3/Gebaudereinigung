import { Mail, Phone, Clock } from "lucide-react";
import {Container} from "@/components/layout/Container";
import { ContactForm } from "./ContactForm";
import { content } from "@/data/content";

interface ContactSectionProps {
  titleAs?: "h1" | "h2";
}

export function ContactSection({ titleAs = "h2" }: ContactSectionProps) {
  const Heading = titleAs;

  return (
    <section aria-labelledby="contact-heading" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-brand-green sm:text-4xl"
          >
            {content.contact.heading}
          </Heading>
          <p className="mt-4 text-lg leading-relaxed text-brand-green/80">
            {content.contact.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <address className="not-italic">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-brand-gold" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-brand-green">
                    {content.contact.emailLabel}
                  </p>
                  <a
                    href="mailto:asreinigung.freiburg@gmail.com"
                    className="text-sm text-brand-green/80 transition-colors hover:text-brand-gold"
                  >
                    asreinigung.freiburg@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-brand-gold" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-brand-green">
                    {content.contact.phoneLabel}
                  </p>
                  <a
                    href="tel:+4917620003395"
                    className="text-sm text-brand-green/80 transition-colors hover:text-brand-gold"
                  >
                    +49 176 20003395
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 text-brand-gold" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-brand-green">
                    {content.contact.hoursLabel}
                  </p>
                  <dl className="mt-1 space-y-0.5 text-sm text-brand-green/80">
                    <div className="flex justify-between gap-4">
                      <dt>{content.contact.weekdaysLabel}</dt>
                      <dd>08:00 – 17:00</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>{content.contact.saturdayLabel}</dt>
                      <dd>09:00 – 17:00</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>{content.contact.sundayLabel}</dt>
                      <dd>09:00 – 17:00</dd>
                    </div>
                  </dl>
                </div>
              </li>
            </ul>
          </address>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}