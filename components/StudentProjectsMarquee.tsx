import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export type StudentProject = {
  name: string;
  city: string;
  alt: string;
  src?: string;
  size?: { width: number; height: number };
};

type Props = {
  items: StudentProject[];
  duration?: number;
  itemWidth?: number;
  itemHeight?: number;
  imageSize?: { width: number; height: number };
  containerClassName?: string;
};

/** Carrossel infinito de projetos de alunas com card de nome e cidade sobre a imagem. */
export function StudentProjectsMarquee({
  items,
  duration = 30,
  itemWidth = 220,
  itemHeight = 275,
  imageSize = { width: 400, height: 500 },
  containerClassName = "max-w-[480px]",
}: Props) {
  return (
    <div className={`w-full overflow-hidden ${containerClassName}`}>
      <div
        className="marquee-track flex w-max gap-[10px]"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) =>
          items.map((item, i) => {
            const size = item.size ?? imageSize;
            return (
              <figure
                key={`${copy}-${i}`}
                className="relative shrink-0 overflow-hidden rounded-[10px]"
                style={{ width: itemWidth, height: itemHeight }}
                aria-hidden={copy === 1 ? true : undefined}
              >
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={copy === 0 ? item.alt : ""}
                    fill
                    sizes={`${itemWidth}px`}
                    className="object-cover"
                  />
                ) : (
                  <ImagePlaceholder
                    alt={copy === 0 ? item.alt : ""}
                    aria-hidden={copy === 1}
                    width={size.width}
                    height={size.height}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ aspectRatio: "auto" }}
                  />
                )}
                {copy === 0 && (
                  <figcaption className="absolute left-[8px] top-[8px] rounded-[6px] bg-white/95 px-[8px] py-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.12)] backdrop-blur-[2px]">
                    <p className="font-display text-[12px] font-semibold leading-tight text-ink">{item.name}</p>
                    <p className="text-[11px] leading-tight text-muted">{item.city}</p>
                  </figcaption>
                )}
              </figure>
            );
          }),
        )}
      </div>
    </div>
  );
}
