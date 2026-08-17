"use client";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/** Empurra eventos customizados para o dataLayer do GTM. */
export function track(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}
