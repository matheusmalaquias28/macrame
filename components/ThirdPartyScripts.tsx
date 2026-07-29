"use client";

import { useLayoutEffect } from "react";

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

/** Carrega o rastreador de UTMs da Utmify. O pixel fica no <head> (sem atraso). */
export function ThirdPartyScripts() {
  useLayoutEffect(() => {
    loadUtmify();
  }, []);

  return null;
}
