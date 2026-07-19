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
  },
  {
    slug: "office-cleaning",
    icon: Building2,
    title: "Office Cleaning",
    description: "Professional cleaning for offices that keeps your workplace presentable.",
  },
  {
    slug: "stairwell-cleaning",
    icon: ArrowUpDown,
    title: "Stairwell Cleaning",
    description: "Thorough cleaning of stairwells and shared building areas.",
  },
  {
    slug: "window-cleaning",
    icon: AppWindow,
    title: "Window Cleaning",
    description: "Streak-free window cleaning for homes and commercial buildings.",
  },
  {
    slug: "final-cleaning",
    icon: KeyRound,
    title: "Final Cleaning",
    description: "Move-out and handover cleaning that leaves a space spotless.",
  },
  {
    slug: "special-cleaning",
    icon: Wand2,
    title: "Special Cleaning",
    description: "One-off deep cleans tailored to specific needs and occasions.",
  },
  {
    slug: "household-cleaning",
    icon: Home,
    title: "Household Cleaning / Putzhilfe",
    description: "Reliable household cleaning support for private homes.",
  },
];