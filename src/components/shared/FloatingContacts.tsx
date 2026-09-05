import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsApp";
import { whatsappLink } from "@/lib/whatsapp";
import { content } from "@/data/content";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={content.nav.whatsappFull}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      <a
        href="tel:+4917620003395"
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-lg transition-transform hover:scale-105"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}