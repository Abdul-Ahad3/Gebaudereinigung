import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-brand-green/10 bg-white p-6 transition-shadow hover:shadow-md">
      <Icon className="h-8 w-8 text-brand-gold" aria-hidden="true" />
      <h3 className="mt-4 text-lg font-semibold text-brand-green">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-green/70">
        {description}
      </p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center text-sm font-medium text-brand-green transition-colors hover:text-brand-gold"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}