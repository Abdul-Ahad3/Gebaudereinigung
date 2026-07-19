import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group rounded-lg border border-brand-green/10 bg-white px-6 py-4 open:pb-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2 text-base font-semibold text-brand-green [&::-webkit-details-marker]:hidden">
        {question}
        <ChevronDown
          className="h-5 w-5 shrink-0 text-brand-gold transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <p className="mt-2 text-sm leading-relaxed text-brand-green/80">
        {answer}
      </p>
    </details>
  );
}