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
  {
    slug: "offices",
    icon: Briefcase,
    name: "Offices",
    description: "Clean, presentable workspaces for teams and clients alike.",
  },
  {
    slug: "residential-buildings",
    icon: Building,
    name: "Residential Buildings",
    description: "Reliable upkeep for shared residential spaces.",
  },
  {
    slug: "apartment-complexes",
    icon: Building2,
    name: "Apartment Complexes",
    description: "Consistent cleaning across multi-unit properties.",
  },
  {
    slug: "retail-stores",
    icon: Store,
    name: "Retail Stores",
    description: "Spotless storefronts that welcome every customer.",
  },
  {
    slug: "medical-facilities",
    icon: Stethoscope,
    name: "Medical Facilities",
    description: "Hygiene-focused cleaning for healthcare environments.",
  },
  {
    slug: "restaurants",
    icon: UtensilsCrossed,
    name: "Restaurants",
    description: "Thorough cleaning that supports food-safety standards.",
  },
  {
    slug: "schools",
    icon: GraduationCap,
    name: "Schools",
    description: "Safe, well-maintained spaces for students and staff.",
  },
  {
    slug: "commercial-properties",
    icon: Landmark,
    name: "Commercial Properties",
    description: "Dependable cleaning for a wide range of business properties.",
  },
];