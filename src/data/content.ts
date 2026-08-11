import type { SiteContent } from "@/types/content";
import { contentEn } from "./content.en";
import { contentDe } from "./content.de";

type Language = "en" | "de";

// ── Single language switch for the whole site ──
// Change this one value to "de" to switch all content to German.
const currentLanguage: Language = "en";

const contentMap: Record<Language, SiteContent> = {
  en: contentEn,
  de: contentDe,
};

export const content: SiteContent = contentMap[currentLanguage];