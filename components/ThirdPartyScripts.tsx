"use client";

import { useLayoutEffect } from "react";

declare global {
  interface Window {
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

function loadUtmify() {
  if (document.querySelector('script[data-utmify="true"]')) return;

  const script = document.createElement("script");
  script.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
  script.async = true;
  script.defer = true;
  script.setAttribute("data-utmify-prevent-subids", "");
  script.setAttribute("data-utmify", "true");
  document.head.appendChild(script);
}

function loadClarity() {
  if (window.clarity) return;

  window.clarity = function (...args: unknown[]) {
    (window.clarity!.q = window.clarity!.q || []).push(args);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.clarity.ms/tag/xo7jsjm0j0";
  document.head.appendChild(script);
}

/** Carrega Utmify e Microsoft Clarity sem tags <script> no JSX (compatível com React 19). */
export function ThirdPartyScripts() {
  useLayoutEffect(() => {
    loadUtmify();
    loadClarity();
  }, []);

  return null;
}
