import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ServiceDetailProps {
  image: string;
  title: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  reversed?: boolean;
}

export function ServiceDetail({
  image,
  title,
  description,
  benefits,
  ctaLabel,
  reversed = false,
}: ServiceDetailProps) {
  return (
    <article
      className={`grid items-center gap-10 border-b border-brand-green/10 py-12 last:border-b-0 lg:grid-cols-[320px_1fr] lg:gap-16 ${
        reversed ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div className={reversed ? "lg:[direction:ltr]" : ""}>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 320px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green/85 via-brand-green/10 to-transparent" />
          <h2 className="absolute inset-x-4 bottom-4 text-2xl font-bold tracking-tight text-white">
            {title}
          </h2>
        </div>
      </div>

      <div className={reversed ? "lg:[direction:ltr]" : ""}>
        <p className="text-base leading-relaxed text-brand-green/80">{description}</p>

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
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}