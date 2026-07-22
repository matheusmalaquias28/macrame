import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { StudentProjectsMarquee } from "@/components/StudentProjectsMarquee";
import { Marquee } from "@/components/Marquee";
import { BonusSeal } from "@/components/BonusSeal";
import { CtaButton } from "@/components/CtaButton";
import { TodayDate } from "@/components/TodayDate";
import { StickyCta } from "@/components/StickyCta";
import { CHECKOUT_BASIC, CHECKOUT_COMPLETE } from "@/lib/config";
import {
  theme,
  offerBar,
  hero,
  materials,
  testimonials,
  studentProjects,
  whySection,
  idealSection,
  offerSection,
  bonusSection,
  bonusFeatures,
  plansSection,
  guarantee,
  contact,
  stepsSection,
  faq,
  footer,
} from "@/lib/content";

/* ---------- peças compartilhadas ---------- */

function Check({ className = "mt-[5px] h-auto w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 13" fill="none" className={`shrink-0 ${className}`} aria-hidden>
      <path d="M17 1L6 12L1 7" stroke="#07C707" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cross({ className = "mt-[5px] h-auto w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" className={`shrink-0 ${className}`} aria-hidden>
      <path d="M1 1L13 13M13 1L1 13" stroke="#E53935" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="z-10 inline-block rounded-full bg-badge px-[14px] py-[10px] text-[14px] font-semibold text-white">
      {children}
    </span>
  );
}

function FeatureList({ items, struckItems = [], light = false }: { items: string[]; struckItems?: string[]; light?: boolean }) {
  return (
    <ul className="flex w-full max-w-[356px] flex-col px-[10px] py-[5px]">
      {items.map((f) => (
        <li
          key={f}
          className={`flex items-center gap-[10px] p-[10px] text-left font-display text-[18px] leading-[1.008] ${light ? "text-white" : "text-black"}`}
        >
          <Check className="h-auto w-4" />
          {f}
        </li>
      ))}
      {struckItems.map((f) => (
        <li
          key={f}
          className={`flex items-center gap-[10px] p-[10px] text-left font-display text-[18px] leading-[1.008] line-through opacity-40 ${light ? "text-white" : "text-black"}`}
        >
          <Cross className="h-auto w-4" />
          {f}
        </li>
      ))}
    </ul>
  );
}

function Avatars() {
  return (
    <div className="flex flex-col items-center gap-[5px]">
      <div className="flex items-center justify-center">
        {[
          ["avatar-2", "size-[29px]"],
          ["avatar-4", "size-[34px]"],
          ["avatar-5", "size-[42px] z-10"],
          ["avatar-3", "size-[34px]"],
          ["avatar-1", "size-[29px]"],
        ].map(([a, cls], i) => (
          <Image
            key={a}
            src={`/${a}.webp`}
            alt=""
            aria-hidden
            width={42}
            height={42}
            className={`rounded-full object-cover ${cls} ${i > 0 ? "-ml-[8px]" : ""}`}
          />
        ))}
      </div>
      <p className="text-[14px] font-semibold text-black">{hero.socialProofLabel}</p>
    </div>
  );
}

/* Carrossel dos materiais entregues (fichas de receita). */
function MaterialsCarousel() {
  return (
    <Marquee
      duration={32}
      itemWidth={260}
      itemHeight={347}
      containerClassName="max-w-[480px] lg:max-w-[560px]"
      imageSize={materials.imageSize}
      items={materials.items}
    />
  );
}

/* Carrossel de prints de depoimentos: 1,5 imagem visível por vez. */
function TestimonialGrid() {
  return (
    <Marquee
      duration={28}
      itemWidth={250}
      itemHeight={320}
      imageSize={testimonials.imageSize}
      items={testimonials.items}
    />
  );
}

function StudentProjectsCarousel() {
  return (
    <StudentProjectsMarquee
      duration={34}
      itemWidth={220}
      containerClassName="max-w-[480px] lg:max-w-[560px]"
      imageSize={studentProjects.imageSize}
      items={studentProjects.items}
    />
  );
}

/* ---------- página ---------- */

export default function Home() {
  return (
    <main className="flex w-full flex-col" style={{ "--color-brand": theme.brandColor } as React.CSSProperties}>
      {/* Barra de oferta */}
      <div className="flex items-center justify-center bg-red-600 p-[10px]">
        <p className="text-center font-display text-[12px] font-semibold leading-[1.6] text-white">
          {offerBar.text} <TodayDate />
        </p>
      </div>
      <StickyCta />

      {/* Hero */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-[16px] px-[10px] pt-[0px] text-center">
        <Image
          src={hero.logo.src}
          alt={hero.logo.alt}
          width={hero.logo.width}
          height={hero.logo.height}
          priority
          className="h-[60px] w-auto"
        />
        <h1 className="font-display text-[38px] font-bold leading-[0.99] text-ink uppercase">
          <span className="text-brand">{hero.titleHighlight}</span>
          {hero.title}
        </h1>
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          priority
          className="mx-auto mt-[10px] h-auto w-full max-w-[383px] rounded-[10px]"
        />
        <p className="max-w-[362px] text-[16px]">{hero.subtitle}</p>

        <CtaButton href="#plano-completo" label={hero.ctaLabel} id="hero" className="max-w-[382px]" />
        <p className="max-w-[362px] text-[14px]">{hero.note}</p>

        <div className="relative left-1/2 grid w-[min(100vw-20px,560px)] -translate-x-1/2 grid-cols-2 gap-x-[12px]">
          {hero.checks.map((t) => (
            <span key={t} className="flex min-w-0 items-start gap-[10px] p-[10px] font-display text-[14px] text-black">
              <Check />
              <span className="text-left">{t}</span>
            </span>
          ))}
        </div>
        <p className="text-[14px] font-semibold text-muted">{hero.deliveryNote}</p>
        <Avatars />
      </section>

      {/* Depoimentos abaixo da hero */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center px-[10px] py-[26px]">
        <TestimonialGrid />
      </section>

      {/* Materiais */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-[20px] px-[10px] py-[30px] text-center lg:max-w-[640px]">
        <h2 className="font-display text-[38px] font-semibold leading-[0.99] text-ink">{materials.title}</h2>
        <MaterialsCarousel />
      </section>

      {/* O que os materiais possuem */}
      <section className="w-full bg-brand px-[39px] py-[37px]">
        <h2 className="mb-[24px] text-center font-display text-[38px] font-semibold leading-[0.99] text-white">
          {whySection.title}
        </h2>
        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-[11px]">
          {whySection.cards.map((c) => (
            <div key={c.text} className="flex w-full items-center gap-[14px] rounded-[10px] bg-white p-[16px]">
              <span className="text-[28px] leading-none" aria-hidden>{c.icon}</span>
              <p className="text-left font-display text-[20px] leading-[1.18] text-black">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ideal para você */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center px-[10px] pt-[35px] lg:max-w-[1000px]">
        <h2 className="mb-[24px] max-w-[380px] text-center font-display text-[38px] font-semibold leading-[0.99] text-ink lg:max-w-[640px]">
          {idealSection.title}
        </h2>
        <div className="grid w-full gap-[11px] lg:grid-cols-3">
          {idealSection.items.map((item) => (
            <div key={item.title} className="flex items-start gap-[12px] rounded-[10px] bg-brand p-[16px] text-left">
              <Check />
              <div className="flex flex-col gap-[6px]">
                <p className="font-display text-[20px] font-semibold leading-[1.1] text-white">{item.title}</p>
                <p className="text-[16px] leading-[1.3] text-white/85">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projetos de alunas */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-[20px] px-[10px] py-[30px] text-center lg:max-w-[640px]">
        <h2 className="max-w-[380px] font-display text-[38px] font-semibold leading-[0.99] text-ink lg:max-w-[520px]">
          {studentProjects.title}
        </h2>
        <StudentProjectsCarousel />
      </section>

      {/* Oferta principal */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center px-[10px] pb-[35px] pt-[35px]">
        <h2 className="mb-[20px] max-w-[350px] text-center font-display text-[38px] font-semibold leading-[0.99] text-ink">
          {offerSection.title}
        </h2>
        <Pill>{offerSection.pill}</Pill>
        <div className="mt-[-17px] flex w-full flex-col items-center gap-[14px] rounded-[16px] bg-dark px-[10px] py-[30px] text-center">
          <h3 className="mt-[10px] font-display text-[32px] font-semibold leading-[1.11] text-white">
            <span>{offerSection.cardTitle}</span>
          </h3>
          <Image
            src={offerSection.image.src}
            alt={offerSection.image.alt}
            width={offerSection.image.width}
            height={offerSection.image.height}
            className="h-auto w-full max-w-[383px] rounded-[10px]"
          />
          <FeatureList items={[...offerSection.features, ...bonusFeatures]} light />
          <p className="font-display text-[18px] text-white">{offerSection.moreLabel}</p>
          <CtaButton href="#plano-completo" label={offerSection.ctaLabel} id="oferta_principal" />
          <p className="text-[14px] font-semibold text-muted">{offerSection.deliveryNote}</p>
        </div>
      </section>

      {/* Bônus */}
      <section className="flex w-full flex-col items-center gap-[10px] bg-brand px-[16px] py-[37px] md:px-[39px]">
        <h2 className="mb-[10px] max-w-[640px] text-center font-display text-[32px] font-semibold leading-[1.11] text-white">
          {bonusSection.titleLines[0]}<br></br>
          {bonusSection.titleLines[1]}<br></br>
          <Pill>{bonusSection.pill}</Pill>
        </h2>
        <div className="mx-auto grid w-full max-w-[1080px] grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-3">
          {bonusSection.items.map((b, i) => (
            <article key={b.title} className="relative flex w-full flex-col items-center gap-[13px] overflow-visible rounded-[20px] bg-white pb-[20px] text-center">
              <BonusSeal number={i + 1} />
              <div className="relative mx-auto aspect-[3/4] w-[60%] overflow-visible rounded-[20px]">
                <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                  {b.image?.src ? (
                    <Image
                      src={b.image.src}
                      alt={b.image.alt}
                      fill
                      sizes="(max-width: 768px) 252px, (max-width: 1024px) 30vw, 204px"
                      className="object-cover"
                    />
                  ) : (
                    <ImagePlaceholder
                      alt={b.title}
                      width={600}
                      height={800}
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ aspectRatio: "auto" }}
                    />
                  )}
                </div>
              </div>
              <h3 className="w-full px-[16px] font-display text-[22px] font-semibold leading-[1.11] text-ink">{b.title}</h3>
              <p className="w-full px-[16px] text-[16px] text-[#6b6b6b]">{b.desc}</p>
              <Pill>
                Valor: <s>{b.price}</s> <strong className="font-extrabold">GRÁTIS</strong>
              </Pill>
              <p className="font-display text-[15px] font-semibold leading-[1.008] text-alert">
                {bonusSection.exclusiveNote[0]}
                <br />
                {bonusSection.exclusiveNote[1]}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Planos */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center px-[10px] pb-[35px] pt-[35px] lg:max-w-[1040px]">
        <Pill>{plansSection.pill}</Pill>
        <h2 className="my-[24px] max-w-[346px] text-center font-display text-[38px] font-semibold leading-[0.99] text-ink lg:max-w-[560px]">
          {plansSection.title}
        </h2>

        <div className="flex w-full flex-col lg:grid lg:grid-cols-2 lg:items-start lg:gap-[24px]">
        {/* Plano Básico */}
        <div className="flex w-full flex-col items-center gap-[14px] rounded-[16px] border border-[#d5d5d5] bg-[#FCE9D8] px-[10px] py-[30px] text-center">
          <h3 className="font-display text-[32px] font-semibold leading-[1.1] text-black">{plansSection.basic.name}</h3>
          <Image
            src="/plano-basico (2).jpeg"
            alt={plansSection.basic.image.alt}
            width={plansSection.basic.image.width}
            height={plansSection.basic.image.height}
            className="h-auto w-full max-w-[383px] rounded-[10px]"
          />
          <h2 className="font-display text-[32px] font-semibold leading-[1.1] text-black">{plansSection.basic.receiveLabel}</h2>
          <FeatureList items={plansSection.basic.features} struckItems={bonusFeatures} />
          <p className="font-display text-[18px] text-alert line-through">{plansSection.basic.oldPrice}</p>
          <p className="font-display text-[64px] font-semibold leading-none text-black">{plansSection.basic.price}</p>
          <p className="font-display text-[18px] text-black">{plansSection.basic.installments}</p>
          <p className="font-display text-[18px] text-black">{plansSection.basic.savings}</p>
          <CtaButton href={CHECKOUT_BASIC} label={plansSection.basic.ctaLabel} id="plano_basico" planName="Basico" />
          <p className="max-w-[280px] font-display text-[18px] font-semibold leading-[1.008] text-alert">
            {plansSection.upsellNote.alert}{" "}
            <span className="text-black">{plansSection.upsellNote.body}</span>{" "}
            <span className="text-badge">{plansSection.upsellNote.highlight}</span>
          </p>
          <svg viewBox="0 0 41.2 41.2" className="w-[36px] lg:hidden" aria-hidden>
            <path d="M20.57 2.57V38.57M2.57 20.57L20.57 38.57L38.57 20.57" stroke="#0C0C0C" strokeWidth="5.14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        {/* Plano Completo */}
        <div id="plano-completo" className="mt-[40px] flex w-full scroll-mt-[20px] flex-col items-center lg:mt-0">
          <Pill>⚡MAIS VENDIDO</Pill>
          <div className="mt-[-17px] flex w-full flex-col items-center gap-[14px] rounded-[16px] bg-dark px-[10px] py-[30px] text-center">
            <span className="mt-[10px] inline-block rounded-full bg-alert px-[14px] py-[8px] text-[14px] font-bold text-white">
              {plansSection.complete.badge}
            </span>
            <p className="bg-brand px-[11px] py-[10px] font-display text-[32px] font-semibold text-white">
              {plansSection.complete.name}
            </p>
            <p className="flex items-center gap-[10px] font-display text-[18px] text-white">
              <Check /> {plansSection.complete.allBonusesLabel}
            </p>

            <Image
              src={plansSection.complete.image.src}
              alt={plansSection.complete.image.alt}
              width={plansSection.complete.image.width}
              height={plansSection.complete.image.height}
              className="h-auto w-full max-w-[383px] rounded-[10px]"
            />
            <Pill>{plansSection.complete.pill}</Pill>
            <FeatureList items={[...plansSection.complete.features, ...bonusFeatures]} light />
            <p className="font-display text-[18px] text-alert line-through">{plansSection.complete.oldPrice}</p>
            <p className="font-display text-[64px] font-semibold leading-none text-white">{plansSection.complete.price}</p>
            <p className="font-display text-[18px] text-white">{plansSection.complete.installments}</p>
            <p className="font-display text-[18px] text-white">{plansSection.complete.savings}</p>
            <CtaButton
              href={CHECKOUT_COMPLETE}
              label={plansSection.complete.ctaLabel}
              id="plano_completo"
              planName="Completo"
              className="min-h-[76px] px-[24px] py-[18px]"
            />
          </div>
          <div className="mt-[14px] flex w-full flex-col items-center gap-[10px] rounded-[12px] border border-badge/40 bg-badge/10 p-[16px] text-center">
            <span className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-badge text-[15px] font-bold text-white" aria-hidden>
              ✓
            </span>
            <div>
              <p className="font-display text-[17px] font-semibold leading-[1.15] text-ink">
                {plansSection.paybackBadge.title}
              </p>
              <p className="mt-[4px] text-[15px] text-muted">{plansSection.paybackBadge.subtitle}</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="flex w-full flex-col items-center gap-[20px] bg-navy px-[49px] py-[35px] text-center">
        <Image
          src="/guarantee-seal.webp"
          alt={guarantee.seal.alt}
          width={guarantee.seal.width}
          height={guarantee.seal.height}
          className="h-auto w-full max-w-[241px]"
        />
        <h2 className="font-display text-[32px] font-semibold leading-[1.11] text-white">{guarantee.title}</h2>
        <div className="max-w-[320px] text-[16px] text-white">
          <p>{guarantee.intro}</p>
          <p className="mt-[16px]">{guarantee.lead}</p>
          <ul className="mx-auto mt-[12px] flex w-fit flex-col gap-[8px] text-left">
            {guarantee.bullets.map((t) => (
              <li key={t} className="flex items-start gap-[10px]">
                <span className="mt-[7px] size-[8px] shrink-0 rounded-full bg-alert" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-[16px]">
            {guarantee.outro} <strong>{guarantee.outroStrong}</strong>
          </p>
          <p className="mt-[20px] text-[14px]">{guarantee.helpLabel}</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-[10px] inline-block rounded-[10px] bg-cta px-[24px] py-[12px] font-display text-[18px] font-semibold text-navy transition hover:brightness-110"
          >
            {contact.email}
          </a>
        </div>
      </section>

      {/* Depoimentos 2 */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-[16px] px-[10px] py-[35px] text-center">
        <Avatars />
        <h2 className="max-w-[356px] font-display text-[38px] font-semibold leading-[0.99] text-ink">
          {testimonials.title}
        </h2>
        <TestimonialGrid />
      </section>

      {/* Como funciona */}
      <section className="flex w-full flex-col items-center gap-[10px] bg-brand px-[39px] py-[37px] text-center">
        <h2 className="font-display text-[38px] font-semibold leading-[0.99] text-white">
          {stepsSection.title}
          <br />
          <span className="text-[18px] font-normal">{stepsSection.subtitle}</span>
        </h2>
        <div className="flex w-full max-w-[640px] flex-col gap-[10px]">
          {stepsSection.steps.map((s) => (
            <div key={s.title} className="flex w-full items-start gap-[14px] rounded-[10px] bg-white p-[16px] text-left">
              <span className="text-[36px] leading-none" aria-hidden>
                {s.icon}
              </span>
              <div className="flex flex-col gap-[4px]">
                <p className="font-display text-[20px] text-black">{s.title}</p>
                <p className="text-[14px] text-[#696969]">{s.desc}</p>
                <ul className="mt-[4px] flex flex-col gap-[2px]">
                  {s.items.map((t) => (
                    <li key={t} className="flex items-center gap-[8px] text-[14px] text-black">
                      <Check className="h-auto w-[13px]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <CtaButton href="#plano-completo" label={stepsSection.ctaLabel} id="passo_a_passo" className="mt-[10px]" />
      </section>

      {/* FAQ */}
      <section className="mx-auto flex w-full flex-col items-center gap-[4px] px-[10px] py-[35px]">
        <h2 className="mb-[20px] text-center font-display text-[38px] font-semibold leading-[0.99] text-ink">
          Perguntas Frequentes
        </h2>
        {faq.map(([q, a]) => (
          <details key={q} className="w-full max-w-[382px] rounded-[10px] bg-[#efefef] lg:max-w-[640px]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-[10px] p-[12px] text-[14px]">
              {q}
              <svg viewBox="0 0 13 7" className="faq-chevron w-[12px] shrink-0 transition-transform duration-200" aria-hidden>
                <path d="M0.5 0.5L6.5 6.5L12.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </summary>
            <p className="px-[12px] pb-[12px] text-[14px] text-muted">{a}</p>
          </details>
        ))}
      </section>

      {/* Rodapé */}
      <footer className="mx-auto w-full max-w-[720px] px-[24px] py-[30px] text-center">
        <p className="text-[14px]">Copyright {new Date().getFullYear()} - Todos os direitos reservados.</p>
        <p className="mt-[8px] text-[14px]">
          Contato:{" "}
          <a href={`mailto:${contact.email}`} className="font-semibold text-brand hover:underline">
            {contact.email}
          </a>
        </p>
        <p className="mt-[20px] text-[12px] text-muted">{footer.legal}</p>
      </footer>
    </main>
  );
}
