import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { MobileMenu } from "./MobileMenu";
import { navLinks } from "@/data/navigation";
import { content } from "@/data/content";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-green/10 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label="AS Gebäudereinigung — Home"
            className="text-xl font-bold tracking-tight text-brand-green"
          >
            AS <span className="text-brand-gold">Gebäudereinigung</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-brand-green transition-colors hover:text-brand-gold"
                  >
                    {content.nav[link.id]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="tel:"
            className="hidden items-center gap-2 rounded-md bg-brand-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-green-dark md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {content.nav.callToAction}
          </a>

          <MobileMenu links={navLinks} />
        </div>
      </Container>
    </header>
  );
}