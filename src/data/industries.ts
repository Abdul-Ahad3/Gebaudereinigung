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
    longDescription:
      "Offices need consistent upkeep without disrupting the workday. We schedule around your team's hours and keep desks, kitchens, and meeting rooms consistently presentable.",
    highlights: [
      "Flexible scheduling around business hours",
      "Covers desks, kitchens, and meeting rooms",
      "A consistently presentable space for clients",
    ],
  },
  {
    slug: "residential-buildings",
    icon: Building,
    name: "Residential Buildings",
    description: "Reliable upkeep for shared residential spaces.",
    longDescription:
      "Shared entrances, hallways, and common areas set the tone for residents and visitors. We keep these spaces consistently clean on a regular schedule.",
    highlights: [
      "Regular cleaning of entrances and hallways",
      "Reliable, recurring schedule",
      "Improves the everyday experience for residents",
    ],
  },
  {
    slug: "apartment-complexes",
    icon: Building2,
    name: "Apartment Complexes",
    description: "Consistent cleaning across multi-unit properties.",
    longDescription:
      "Multi-unit properties need cleaning that scales — shared stairwells, lobbies, and common facilities kept to the same standard across the whole building.",
    highlights: [
      "Coordinated cleaning across shared facilities",
      "Consistent standards across the whole property",
      "Suited to property managers and landlords",
    ],
  },
  {
    slug: "retail-stores",
    icon: Store,
    name: "Retail Stores",
    description: "Spotless storefronts that welcome every customer.",
    longDescription:
      "A clean storefront directly affects how customers perceive a business. We work around opening hours to keep retail spaces spotless before doors open.",
    highlights: [
      "Scheduling around store opening hours",
      "Focus on customer-facing areas",
      "A welcoming first impression for shoppers",
    ],
  },
  {
    slug: "medical-facilities",
    icon: Stethoscope,
    name: "Medical Facilities",
    description: "Hygiene-focused cleaning for healthcare environments.",
    longDescription:
      "Healthcare spaces require careful, hygiene-conscious cleaning. We follow thorough cleaning practices suited to environments where cleanliness matters most.",
    highlights: [
      "Hygiene-focused cleaning approach",
      "Careful attention to detail",
      "Reliable, consistent scheduling",
    ],
  },
  {
    slug: "restaurants",
    icon: UtensilsCrossed,
    name: "Restaurants",
    description: "Thorough cleaning that supports food-safety standards.",
    longDescription:
      "Restaurants need cleaning that supports day-to-day food-safety standards, scheduled around service hours so it never gets in the way of the kitchen.",
    highlights: [
      "Scheduled around service hours",
      "Supports food-safety and hygiene standards",
      "Thorough, dependable cleaning",
    ],
  },
  {
    slug: "schools",
    icon: GraduationCap,
    name: "Schools",
    description: "Safe, well-maintained spaces for students and staff.",
    longDescription:
      "Schools need consistently clean, well-maintained spaces for students and staff. We work around term schedules to keep facilities in good shape year-round.",
    highlights: [
      "Scheduling around term and holiday periods",
      "Consistent upkeep across classrooms and halls",
      "Safe, well-maintained learning environments",
    ],
  },
  {
    slug: "commercial-properties",
    icon: Landmark,
    name: "Commercial Properties",
    description: "Dependable cleaning for a wide range of business properties.",
    longDescription:
      "Commercial properties come in many forms — we adapt our cleaning approach to the specific layout and needs of each property, with dependable, recurring service.",
    highlights: [
      "Cleaning tailored to the property type",
      "Dependable, recurring service",
      "Flexible to a wide range of business needs",
    ],
  },
];