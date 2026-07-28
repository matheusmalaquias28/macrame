"use client";

import dynamic from "next/dynamic";

const StickyCta = dynamic(() => import("@/components/StickyCta").then((m) => m.StickyCta), {
  ssr: false,
});

export function StickyCtaLoader() {
  return <StickyCta />;
}
