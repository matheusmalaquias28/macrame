"use client";

import { useEffect } from "react";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    __gtmLoaded?: boolean;
  }
}

function loadGtm() {
  if (!GTM_ID || window.__gtmLoaded) return;
  window.__gtmLoaded = true;
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

/** GTM só carrega após interação — não compete com LCP no PageSpeed. */
export function Gtm() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    if (!GTM_ID) return;

    const events: (keyof WindowEventMap)[] = ["scroll", "keydown", "touchstart", "click"];
    const onFirstInteraction = () => {
      loadGtm();
      events.forEach((e) => removeEventListener(e, onFirstInteraction));
    };
    events.forEach((e) => addEventListener(e, onFirstInteraction, { once: true, passive: true }));
    return () => events.forEach((e) => removeEventListener(e, onFirstInteraction));
  }, []);

  return null;
}

export function track(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}
