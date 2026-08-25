"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavLink } from "@/types/navigation";
import { content } from "@/data/content";
import { WhatsAppIcon } from "@/components/shared/WhatsApp"
import { whatsappLink } from "@/lib/whatsapp";

interface MobileMenuProps {
  links: NavLink[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="relative z-[60] flex h-10 w-10 items-center justify-center text-brand-green"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-black" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isOpen &&
        mounted &&
        createPortal(
          <div id="mobile-menu" className="fixed inset-0 z-50 bg-white">
            <nav
              aria-label="Mobile navigation"
              className="flex h-full flex-col gap-1 px-6 pb-8 pt-24"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-brand-green/10 py-3 text-lg font-medium text-brand-green"
                >
                  {content.nav[link.id]}
                </Link>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-5 py-3 text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Contact us on WhatsApp
              </a>
            </nav>
          </div>,
          document.body
        )}
    </div>
  );
}