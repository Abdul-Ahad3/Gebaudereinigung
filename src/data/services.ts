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
  { slug: "maintenance-cleaning", icon: CalendarClock },
  { slug: "office-cleaning", icon: Building2 },
  { slug: "stairwell-cleaning", icon: ArrowUpDown },
  { slug: "window-cleaning", icon: AppWindow },
  { slug: "final-cleaning", icon: KeyRound },
  { slug: "special-cleaning", icon: Wand2 },
  { slug: "household-cleaning", icon: Home },
];