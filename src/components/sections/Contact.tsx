import { Mail, Phone, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sections/ContactForm";

export function ContactSection() {
  return (
    <section aria-labelledby="contact-heading" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-brand-green sm:text-4xl"
          >
            Get In Touch
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-green/80">
            Have a question or need a quote? Reach out directly or send us a
            message using the form.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact info */}
          <address className="not-italic">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-brand-gold" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-brand-green">Email</p>
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
                  <p className="text-sm font-semibold text-brand-green">Phone</p>
                  <a
                    href="tel:+4917620003395"
                    className="text-sm text-brand-green/80 transition-colors hover:text-brand-gold"
                  >
                    0176 20003395
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 text-brand-gold" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-brand-green">Business Hours</p>
                  <div className="flex justify-between gap-4">
                    <dt>Mon – Fri</dt>
                    <dd>08:00 – 17:00</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Saturday</dt>
                    <dd>09:00 – 17:00</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Sunday</dt>
                    <dd>09:00 – 17:00</dd>
                  </div>
                </div>
              </li>
            </ul>
          </address>

          {/* Form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}