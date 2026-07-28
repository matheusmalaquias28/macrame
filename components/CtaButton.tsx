"use client";

import { trackCtaClick } from "@/lib/tracking";

type Props = {
  href: string;
  label: string;
  /** Identificador da posição do CTA na página, enviado ao dataLayer e ao Pixel. */
  id: string;
  /** Nome do plano ("Basico" | "Completo"): dispara o evento CtaPlano<nome> no Pixel. */
  planName?: string;
  className?: string;
};

export function CtaButton({ href, label, id, planName, className = "" }: Props) {
  const isExternalCheckout = href.startsWith("http://") || href.startsWith("https://");

  return (
    <a
      href={href}
      onClick={(e) => {
        void trackCtaClick(id, label, planName);

        if (isExternalCheckout) {
          e.preventDefault();
          e.stopPropagation();
          window.location.assign(e.currentTarget.href);
        }
      }}
      className={`cta-pulse flex h-[60px] w-full max-w-[365px] items-center justify-center bg-cta font-display text-[24px] font-semibold text-white ${className}`}
    >
      {label}
    </a>
  );
}
