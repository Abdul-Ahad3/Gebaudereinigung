import type { NavContent } from "./content";

export type NavId = keyof Omit<NavContent, "callToAction">;

export interface NavLink {
  id: NavId;
  href: string;
}