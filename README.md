# LP Template

Template de landing page de infoproduto (Next.js + Tailwind), com layout separado do conteúdo.
As imagens e textos atuais são apenas exemplo (Desafio Cookies Lucrativos) — substitua tudo pelo seu produto.

## Como usar em um projeto novo

1. Clique em **Use this template** no GitHub (ou clone este repo).
2. `npm install` e `npm run dev` para rodar localmente.
3. Edite **`lib/content.ts`** — todo o texto, preços e a cor da marca (`theme.brandColor`) estão nesse único arquivo. As imagens aparecem como placeholders até você adicionar os arquivos em **`public/`** e trocar `ImagePlaceholder` por `next/image`.
4. Troque os links de checkout em **`lib/config.ts`**.
5. Adicione suas imagens em **`public/`** (hero, planos, bônus, carrosséis, logo) e substitua os placeholders nos componentes.
6. Atualize o SEO em **`app/layout.tsx`** (title/description/OG) e, se quiser, **`app/icon.png`** e **`app/opengraph-image.png`** (favicon e imagem social).
7. Configure os pixels/tracking em **`app/layout.tsx`** (GTM via `NEXT_PUBLIC_GTM_ID`, Clarity, Utmify — remova o que não usar).
8. Deploy na Vercel.

## Estrutura

- `app/page.tsx` — layout da LP (não precisa mexer para trocar conteúdo)
- `lib/content.ts` — conteúdo completo da página, seção por seção
- `lib/config.ts` — links de checkout
- `components/` — peças reutilizáveis (carrossel Marquee, CTA com tracking, barra sticky, data de hoje)
- `app/globals.css` — tokens de cor/fonte e animações
"# template-lp" 
