export interface Testimonial {
  id: string;
  name: string;
  rating: number; // 1–5
  text: string;
  date: string; // ISO date
  source: "google" | "manual";
}