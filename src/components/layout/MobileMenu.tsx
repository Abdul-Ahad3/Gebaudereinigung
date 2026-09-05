"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavLink } from "@/types/navigation";
import { content } from "@/data/content";

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
      {/* Hamburger — only rendered while the menu is closed */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-expanded={false}
          aria-controls="mobile-menu"
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center text-brand-green"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      )}

      {isOpen &&
        mounted &&
        createPortal(
          <div id="mobile-menu" className="fixed inset-0 z-50 bg-white">
            {/* Close button lives INSIDE the portal itself — same stacking
                context as the overlay content, so it can never end up
                painted underneath it. */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-expanded={true}
              aria-label="Close menu"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-brand-green"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>

            <nav
              aria-label="Mobile navigation"
              className="flex h-full flex-col gap-1 px-6 pb-8 pt-28"
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
            </nav>
          </div>,
          document.body
        )}
    </div>
  );
}