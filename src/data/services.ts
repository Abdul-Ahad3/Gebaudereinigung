import {
  CalendarClock,
  Building2,
  ArrowUpDown,
  AppWindow,
  KeyRound,
  Wand2,
  Home,
} from "lucide-react";
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "maintenance-cleaning",
    icon: CalendarClock,
    title: "Maintenance Cleaning",
    description: "Regular, scheduled cleaning that keeps your space consistently fresh.",
    longDescription:
      "Ongoing cleaning on a schedule that fits your property — weekly, biweekly, or monthly. We keep spaces consistently presentable without you having to think about it.",
    benefits: [
      "Flexible scheduling to match your needs",
      "Consistent standards on every visit",
      "One reliable team you get to know",
    ],
  },
  {
    slug: "office-cleaning",
    icon: Building2,
    title: "Office Cleaning",
    description: "Professional cleaning for offices that keeps your workplace presentable.",
    longDescription:
      "Desks, common areas, kitchens, and restrooms cleaned to a professional standard, scheduled around your working hours so it never disrupts your team.",
    benefits: [
      "Scheduled outside business hours on request",
      "Covers desks, kitchens, and shared spaces",
      "A healthier, more presentable workplace",
    ],
  },
  {
    slug: "stairwell-cleaning",
    icon: ArrowUpDown,
    title: "Stairwell Cleaning",
    description: "Thorough cleaning of stairwells and shared building areas.",
    longDescription:
      "Regular cleaning of stairwells, entrances, and shared circulation areas — keeping the first impression of your building clean for residents and visitors alike.",
    benefits: [
      "Regular cleaning cycles for shared areas",
      "Improves first impressions for visitors",
      "Suited to residential and commercial buildings",
    ],
  },
  {
    slug: "window-cleaning",
    icon: AppWindow,
    title: "Window Cleaning",
    description: "Streak-free window cleaning for homes and commercial buildings.",
    longDescription:
      "Interior and exterior window cleaning that leaves glass genuinely streak-free — for homes, offices, and storefronts where clear windows matter.",
    benefits: [
      "Interior and exterior cleaning available",
      "Streak-free finish",
      "Suitable for homes and commercial storefronts",
    ],
  },
  {
    slug: "final-cleaning",
    icon: KeyRound,
    title: "Final Cleaning",
    description: "Move-out and handover cleaning that leaves a space spotless.",
    longDescription:
      "Thorough end-of-tenancy cleaning that gets a property ready for handover — built to meet the standard landlords and agents expect at move-out.",
    benefits: [
      "Handover-ready results",
      "Covers kitchens, bathrooms, and all rooms",
      "Flexible booking around move-out dates",
    ],
  },
  {
    slug: "special-cleaning",
    icon: Wand2,
    title: "Special Cleaning",
    description: "One-off deep cleans tailored to specific needs and occasions.",
    longDescription:
      "One-time deep cleans for specific situations — post-renovation cleanup, seasonal deep cleans, or preparing a space for a particular event.",
    benefits: [
      "Tailored to your specific situation",
      "One-off booking, no ongoing commitment",
      "Deep cleaning beyond routine upkeep",
    ],
  },
  {
    slug: "household-cleaning",
    icon: Home,
    title: "Household Cleaning / Putzhilfe",
    description: "Reliable household cleaning support for private homes.",
    longDescription:
      "Dependable, ongoing cleaning support for private homes — the same trusted team each time, so you always know who's in your space.",
    benefits: [
      "Consistent, familiar cleaning team",
      "Flexible frequency to fit your household",
      "Careful, respectful work in your home",
    ],
  },
];