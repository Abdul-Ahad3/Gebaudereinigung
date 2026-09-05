"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { NavLink } from "@/types/navigation";
import { content } from "@/data/content";

interface NavLinksProps {
  links: NavLink[];
}

export function NavLinks({ links }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="hidden md:block">
      <ul className="flex items-center gap-14">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "text-lg font-medium text-brand-gold underline decoration-2 underline-offset-4"
                    : "text-lg font-medium text-brand-green transition-colors hover:text-brand-gold"
                }
              >
                {content.nav[link.id]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}