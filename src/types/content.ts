export interface NavContent {
  home: string;
  services: string;
  industries: string;
  jobs: string;
  faqs: string;
  contact: string;
  callToAction: string;
  whatsappShort: string;
  whatsappFull: string;
}

export interface HeroContent {
  tagline: string;
  primaryCta: string;
}

export interface AboutFeatureContent {
  title: string;
  description: string;
}

export interface AboutContent {
  heading: string;
  intro: string;
  mission: string;
  features: {
    trusted: AboutFeatureContent;
    thorough: AboutFeatureContent;
    punctual: AboutFeatureContent;
  };
}

export interface SectionHeaderContent {
  heading: string;
  subtitle: string;
}

export interface ServiceContent {
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
}

export interface IndustryContent {
  name: string;
  description: string;
  longDescription: string;
  highlights: string[];
}

export interface FAQContent {
  question: string;
  answer: string;
}

export interface TestimonialsContent extends SectionHeaderContent {
  emptyStateTitle: string;
  emptyStateMessage: string;
}

export interface ContactFormContent {
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  phoneOptional: string;
  serviceLabel: string;
  serviceSelectPlaceholder: string;
  otherOption: string;
  messageLabel: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactContent extends SectionHeaderContent {
  emailLabel: string;
  phoneLabel: string;
  hoursLabel: string;
  weekdaysLabel: string;
  saturdayLabel: string;
  sundayLabel: string;
  form: ContactFormContent;
}

export interface FooterContent {
  description: string;
  quickLinksHeading: string;
  servicesHeading: string;
  contactHeading: string;
  rightsReserved: string;
  impressumLabel: string;
  datenschutzLabel: string;
}

export interface JobsContent {
  heading: string;
  notHiringTitle: string;
  notHiringMessage: string;
}

export interface FAQsPageContent extends SectionHeaderContent {
  ctaHeading: string;
  ctaButton: string;
}

export interface SiteContent {
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  homeSections: {
    featuredServices: SectionHeaderContent;
    industries: SectionHeaderContent;
    testimonials: TestimonialsContent;
  };
  cta: {
    requestQuote: string;
  };
  services: Record<string, ServiceContent>;
  servicesPage: SectionHeaderContent;
  industries: Record<string, IndustryContent>;
  industriesPage: SectionHeaderContent;
  faqs: Record<string, FAQContent>;
  faqsPage: FAQsPageContent;
  contact: ContactContent;
  footer: FooterContent;
  jobs: JobsContent;
}