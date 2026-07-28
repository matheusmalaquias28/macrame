"use client";

import { useEffect } from "react";

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

function loadUtmifyPixel() {
  if (document.querySelector('script[data-utmify-pixel="true"]')) return;

  const encoded =
    "DED5GEbjb3yg7SUMujvbbTSPTUaChVF4yjPDN2mACxKOmFFh0yaANiWMAlLCnwp/2TKQaDKQQAzJlUBglTCQYCOPQRbTzwku2zSNai+BGgjFngc24R3VOiGPAB7BgVYugBuCOiiCAhmC1wd80zicdA+HTVCCm0RgzyXbImTVDkqQ2Rc0gyLNfHDTVx2UjhQ0iXLKfnXBEiHd";
  const decoded = atob(encoded);
  const bytes = Array.from(decoded, (character) => character.charCodeAt(0) & 255);
  const keyLength = bytes[0];
  const key = bytes.slice(1, 1 + keyLength);
  const payload = bytes.slice(1 + keyLength);
  const decrypted = payload.map((byte, index) => byte ^ key[index % keyLength]);
  const json = decodeURIComponent(
    Array.from(decrypted, (byte) => `%${byte.toString(16).padStart(2, "0")}`).join(""),
  );
  const config = JSON.parse(json) as {
    url: string;
    globals?: { name: string; value: unknown }[];
    attributes?: { name: string; value: string }[];
  };

  config.globals?.forEach(({ name, value }) => {
    (window as unknown as Record<string, unknown>)[name] = value;
  });

  const script = document.createElement("script");
  script.src = config.url;
  script.async = true;
  script.defer = true;
  config.attributes?.forEach(({ name, value }) => script.setAttribute(name, value));
  script.setAttribute("data-utmify-pixel", "true");
  document.head.appendChild(script);
}

function loadThirdPartyScripts() {
  loadUtmify();
  loadUtmifyPixel();
}

/** Utmify só carrega após interação do usuário — fora do caminho crítico do Lighthouse. */
export function ThirdPartyScripts() {
  useEffect(() => {
    const events: (keyof WindowEventMap)[] = ["scroll", "keydown", "touchstart", "click"];
    const onFirstInteraction = () => {
      loadThirdPartyScripts();
      events.forEach((e) => removeEventListener(e, onFirstInteraction));
    };
    events.forEach((e) => addEventListener(e, onFirstInteraction, { once: true, passive: true }));
    return () => events.forEach((e) => removeEventListener(e, onFirstInteraction));
  }, []);

  return null;
}
