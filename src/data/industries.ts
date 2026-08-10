import {
  Briefcase,
  Building,
  Building2,
  Store,
  Stethoscope,
  UtensilsCrossed,
  GraduationCap,
  Landmark,
} from "lucide-react";
import type { Industry } from "@/types/industry";

export const industries: Industry[] = [
  { slug: "offices", icon: Briefcase },
  { slug: "residential-buildings", icon: Building },
  { slug: "apartment-complexes", icon: Building2 },
  { slug: "retail-stores", icon: Store },
  { slug: "medical-facilities", icon: Stethoscope },
  { slug: "restaurants", icon: UtensilsCrossed },
  { slug: "schools", icon: GraduationCap },
  { slug: "commercial-properties", icon: Landmark },
];