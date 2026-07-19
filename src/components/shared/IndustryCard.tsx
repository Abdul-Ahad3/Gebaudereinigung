import type { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
}

export function IndustryCard({ icon: Icon, name, description }: IndustryCardProps) {
  return (
    <article className="flex flex-col items-center rounded-lg border border-brand-green/10 bg-white p-6 text-center">
      <Icon className="h-8 w-8 text-brand-gold" aria-hidden="true" />
      <h3 className="mt-4 text-base font-semibold text-brand-green">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-green/70">
        {description}
      </p>
    </article>
  );
}