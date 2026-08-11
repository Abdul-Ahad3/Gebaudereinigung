import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ image, title, description, href }: ServiceCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-brand-green/10 bg-white transition-shadow hover:shadow-md">
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/85 via-brand-green/10 to-transparent" />
        <h3 className="absolute inset-x-4 bottom-3 text-lg font-semibold text-white">
          {title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex-1 text-sm leading-relaxed text-brand-green/70">
          {description}
        </p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center text-sm font-medium text-brand-green transition-colors hover:text-brand-gold"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}