import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type Item = { alt: string; size?: { width: number; height: number } };

type Props = {
  items: Item[];
  /** Segundos para a trilha percorrer um ciclo completo. */
  duration?: number;
  /** Largura de cada item em px (define quantos aparecem por vez). */
  itemWidth?: number;
  /** Dimensões intrínsecas das imagens (para o next/image calcular o aspect ratio). */
  imageSize?: { width: number; height: number };
  /** Largura máxima do container do carrossel. */
  containerClassName?: string;
};

/**
 * Carrossel infinito e contínuo, só com CSS.
 * A trilha é renderizada duas vezes; a animação desloca -50% e reinicia sem emenda.
 */
export function Marquee({
  items,
  duration = 20,
  itemWidth = 188,
  imageSize = { width: 386, height: 578 },
  containerClassName = "max-w-[382px]",
}: Props) {
  return (
    <div className={`w-full overflow-hidden rounded-[7px] ${containerClassName}`}>
      <div
        className="marquee-track flex w-max gap-[6px]"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) =>
          items.map((it, i) => (
            <ImagePlaceholder
              key={`${copy}-${i}`}
              alt={copy === 0 ? it.alt : ""}
              aria-hidden={copy === 1}
              width={(it.size ?? imageSize).width}
              height={(it.size ?? imageSize).height}
              className="shrink-0 rounded-[7px] object-cover"
              style={{ width: itemWidth }}
            />
          )),
        )}
      </div>
    </div>
  );
}
