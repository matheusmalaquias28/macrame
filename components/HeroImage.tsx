import { hero } from "@/lib/content";

/**
 * Imagem LCP servida como WebP estático (~114 KiB) — sem pipeline do next/image,
 * com preload no layout para descoberta imediata.
 */
export function HeroImage() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/macrame-hero.webp"
      alt={hero.image.alt}
      width={383}
      height={383}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className="mx-auto mt-[10px] h-auto w-full max-w-[383px] rounded-[10px]"
    />
  );
}
