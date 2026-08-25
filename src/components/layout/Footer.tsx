import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";
import {Container} from "@/components/layout/Container";
import { navLinks } from "@/data/navigation";
import { services } from "@/data/services";
import { content } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-green">
      <Container>
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link
              href="/"
              aria-label="AS Gebäudereinigung — Home"
              className="text-xl font-bold tracking-tight text-white"
            >
              AS <span className="text-brand-gold">Gebäudereinigung</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {content.footer.description}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
              {content.footer.quickLinksHeading}
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {content.nav[link.id]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
              {content.footer.servicesHeading}
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {content.services[service.slug].title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
              {content.footer.contactHeading}
            </h3>
            <address className="mt-4 space-y-4 not-italic">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold/15">
                  <Mail className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                </span>
                <a
                  href="mailto:asreinigung.freiburg@gmail.com"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  asreinigung.freiburg@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold/15">
                  <Phone className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                </span>
                <a
                  href="tel:+4917620003395"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  +49 176 20003395
                </a>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold/15">
                  <Clock className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                </span>
                <dl className="space-y-0.5 text-sm text-white/70">
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
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 py-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-white/50">
            © {year} AS Gebäudereinigung. {content.footer.rightsReserved}
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              {content.footer.impressumLabel}
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              {content.footer.datenschutzLabel}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}