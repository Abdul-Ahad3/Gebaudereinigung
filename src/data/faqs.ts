// Ordering only — question/answer text now lives in content.en.ts / content.de.ts,
// keyed by these same ids.
export const faqIds = [
  "services-offered",
  "areas-covered",
  "how-quickly",
  "cost",
  "eco-friendly",
  "maintenance-cleaning",
  "advantages",
  "commissioning",
  "staff-trained-insured",
  "emergency-cleaning",
  "cleaning-methods",
  "outside-hours",
  "get-offer",
  "not-satisfied",
  "special-requirements",
] as const;

export type FaqId = (typeof faqIds)[number];