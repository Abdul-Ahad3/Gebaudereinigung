import Link from "next/link";
import { CheckCircle2, type LucideIcon } from "lucide-react";

interface ServiceDetailProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  reversed?: boolean;
}

export function ServiceDetail({
  icon: Icon,
  title,
  description,
  benefits,
  reversed = false,
}: ServiceDetailProps) {
  return (
    <article
      className={`grid items-center gap-10 border border-brand-green p-6 m-7 py-12 last:border-b-0 lg:grid-cols-[280px_1fr] lg:gap-16 ${
        reversed ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div className={`flex flex-col items-start ${reversed ? "lg:[direction:ltr]" : ""}`}>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/5">
          <Icon className="h-7 w-7 text-brand-gold" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-brand-green">
          {title}
        </h2>
      </div>

      <div className={reversed ? "lg:[direction:ltr]" : ""}>
        <p className="text-base leading-relaxed text-brand-green/80">
          {description}
        </p>

        <ul className="mt-5 space-y-2">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
                aria-hidden="true"
              />
              <span className="text-sm text-brand-green/80">{benefit}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-brand-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-green-dark"
        >
          Request a Quote
        </Link>
      </div>
    </article>
  );
}