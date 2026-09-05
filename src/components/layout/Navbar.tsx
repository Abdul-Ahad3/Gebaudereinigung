import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { navLinks } from "@/data/navigation";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-green/10 bg-[#f4f2f3] backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between md:grid md:grid-cols-3">
          <Link
            href="/"
            aria-label="AS Gebäudereinigung — Home"
            className="relative h-12 w-40 shrink-0 sm:h-14 sm:w-48 md:justify-self-start"
          >
            <Image
              src="/images/logos/as-logo.png"
              alt="AS Gebäudereinigung"
              fill
              priority
              sizes="192px"
              className="object-contain object-left"
            />
          </Link>

          <div className="md:flex md:justify-self-center">
            <NavLinks links={navLinks} />
          </div>

          <div className="flex items-center justify-end md:justify-self-end">
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </Container>
    </header>
  );
}