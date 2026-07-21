import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type Props = {
  /** Plano básico usa só a caixa + 1 ficha, sem o selo de bônus. */
  variant?: "full" | "basic";
  /** Pré-carrega as imagens (usar apenas na dobra inicial). */
  preload?: boolean;
};

/** Composição caixa + fichas de receita + selo "+4 bônus", fiel ao Figma (base 356px). */
export function Collage({ variant = "full", preload = false }: Props) {
  return (
    <div className="relative aspect-square w-full max-w-[383px] overflow-hidden rounded-[10px] bg-[#f3f3f2]">
      <div className="absolute left-[-2%] top-[7.2%] w-[63.6%]">
        <ImagePlaceholder
          alt="Caixa do e-book Cookie Lab com 100 receitas de cookies"
          width={905}
          height={1219}
          preload={preload}
          className="h-auto w-full"
        />
      </div>
      <ImagePlaceholder
        alt="Ficha de receita: Cookie Clássico com Gotas de Chocolate"
        width={659}
        height={988}
        preload={preload}
        className="absolute left-[50.8%] top-[34.2%] w-[46.3%] shadow-[-1px_4px_2px_1px_rgba(0,0,0,0.25)]"
      />
      {variant === "full" && (
        <>
          <ImagePlaceholder
            alt="Ficha do bônus: como conseguir seus primeiros clientes"
            width={659}
            height={988}
            preload={preload}
            className="absolute left-[69%] top-[42%] w-[46.3%] shadow-[-1px_4px_2px_1px_rgba(0,0,0,0.25)]"
          />
          <ImagePlaceholder
            alt="Selo: mais 4 bônus exclusivos"
            width={441}
            height={441}
            preload={preload}
            className="absolute left-[66.2%] top-[0.7%] w-[31%]"
          />
        </>
      )}
    </div>
  );
}
