type Props = {
  number: number;
};

const SCALLOPED_SEAL_POINTS = Array.from({ length: 32 }, (_, index) => {
  const angle = (index * Math.PI) / 16 - Math.PI / 2;
  const radius = index % 2 === 0 ? 46 : 40;

  return `${50 + Math.cos(angle) * radius},${50 + Math.sin(angle) * radius}`;
}).join(" ");

/** Selo ondulado vermelho: fundo gira, texto estático. Metade fica fora do card (top-left). */
export function BonusSeal({ number }: Props) {
  return (
    <div
      className="pointer-events-none absolute right-0 top-0 z-20 translate-x-[30%] -translate-y-1/2"
      aria-hidden
    >
      <div className="relative flex size-[80px] items-center justify-center">
        <div className="bonus-seal-spin absolute inset-0 origin-center">
          <svg viewBox="0 0 100 100" className="size-full drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]" aria-hidden>
            <polygon
              points={SCALLOPED_SEAL_POINTS}
              fill="#e30000"
              stroke="#e30000"
              strokeWidth="5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="relative z-10 text-center font-display text-[10px] font-bold uppercase leading-[1.05] tracking-[0.06em] text-white">
          BÔNUS
          <span className="mt-[1px] block text-[17px] leading-none tracking-normal">{number}</span>
        </p>
      </div>
    </div>
  );
}
