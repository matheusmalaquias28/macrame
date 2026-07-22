/**
 * Conteúdo da landing page — edite APENAS este arquivo (e as imagens em /public)
 * para replicar o modelo em outro projeto. O layout em app/page.tsx não precisa mudar.
 *
 * Checklist ao clonar o template:
 * 1. Troque `theme.brandColor` (re-tematiza todos os bg-brand/text-brand).
 * 2. Adicione suas imagens em /public e troque ImagePlaceholder por next/image em app/page.tsx.
 * 3. Revise textos, preços e links de checkout (lib/config.ts).
 * 4. Atualize metadata/favicon em app/layout.tsx, app/icon.png e app/opengraph-image.png.
 * 5. Configure pixels/IDs de tracking em app/layout.tsx.
 */

export const theme = {
  /** Cor principal da marca (sobrescreve --color-brand só nesta página). */
  brandColor: "#914c2e",
};

export const offerBar = {
  text: "OFERTA ESPECIAL DISPONÍVEL APENAS HOJE",
};

const macrameHeroImage = {
  src: "/macrame-hero.jpeg",
  alt: "Mockup do pacote Biblioteca Ilustrada de Mesa Posta em Macramê com bônus",
  width: 1100,
  height: 1100,
};

export const hero = {
  logo: { src: "/logo-macrame2.png", alt: "Biblioteca Ilustrada de Mesa Posta em Macramê", width: 770, height: 514 },
  titleHighlight: "Crie peças de macramê mesa posta ",
  title: "com +50 projetos guiados visualmente passo a passo",
  image: macrameHeroImage,
  subtitle:
    "Você receberá uma coleção organizada de projetos de macramê para mesa posta, com guias visuais que facilitam a produção e garantem resultados incríveis.",
  ctaLabel: "Quero acessar agora",
  note: "📲 Você recebe tudo na hora, direto no seu e-mail",
  checks: [
    "Projetos prontos para seguir passo a passo",
    "Informações claras sobre materiais e medidas",
    "Dicas para evitar erros comuns",
    "Ideal para iniciantes e artesãs experientes",
    "Transforme seu tempo livre em criatividade",
  ],
  deliveryNote: "📲 Você recebe tudo na hora, direto no seu e-mail",
  socialProofLabel: "Mais de 2.000 alunas",
};

export const materials = {
  title: "VEJA OS PROJETOS QUE VOCÊ VAI RECEBER",
  imageSize: { width: 575, height: 863 },
  items: [
    { alt: "Projeto de macramê entregue 1", src: "/entregaveis-macrame (1) (1).jpg" },
    { alt: "Projeto de macramê entregue 2", src: "/entregaveis-macrame (2) (1).jpg" },
    { alt: "Projeto de macramê entregue 3", src: "/entregaveis-macrame (3) (1).jpg" },
    { alt: "Projeto de macramê entregue 4", src: "/entregaveis-macrame (4) (1).jpg" },
    { alt: "Projeto de macramê entregue 5", src: "/entregaveis-macrame (5) (1).jpg" },
    { alt: "Projeto de macramê entregue 6", src: "/entregaveis-macrame (6) (1).jpg" },
    { alt: "Projeto de macramê entregue 7", src: "/entregaveis-macrame (7) (1).jpg" },
    { alt: "Projeto de macramê entregue 8", src: "/entregaveis-macrame (8) (1).jpg" },
  ],
};

export const testimonials = {
  title: "Veja o que nossas clientes já produziram!",
  imageSize: { width: 800, height: 1000 },
  items: [
    { alt: "Peça de macramê para mesa posta", src: "/fotos-macrame-1.jpg" },
    { alt: "Projeto de sousplat em macramê", src: "/fotos-macrame-2.jpg" },
    { alt: "Jogo americano de macramê", src: "/fotos-macrame-3.jpg" },
    { alt: "Caminho de mesa em macramê", src: "/fotos-macrame-4.jpg" },
    { alt: "Decoração de mesa com macramê", src: "/fotos-macrame-5.jpg" },
  ],
};

export const studentProjects = {
  title: "VEJA OS PROJETOS QUE NOSSOS ALUNO(A)S JÁ FIZERAM",
  imageSize: { width: 800, height: 1000 },
  items: [
    {
      name: "Camila R.",
      city: "Curitiba — PR",
      alt: "Sousplat de macramê feito por Camila",
      src: "/feedbacks-macrame-1.jpg",
    },
    {
      name: "Fernanda M.",
      city: "Belo Horizonte — MG",
      alt: "Jogo americano de macramê feito por Fernanda",
      src: "/feedbacks-macrame-2.jpg",
    },
    {
      name: "Marcos S.",
      city: "Florianópolis — SC",
      alt: "Caminho de mesa de macramê feito por Juliana",
      src: "/feedbacks-macrame-3.jpg",
    },
    {
      name: "Patrícia L.",
      city: "Goiânia — GO",
      alt: "Porta-copos de macramê feito por Patrícia",
      src: "/feedbacks-macrame-4.jpg",
    },
    {
      name: "Amanda T.",
      city: "Salvador — BA",
      alt: "Sousplat decorativo feito por Amanda",
      src: "/feedbacks-macrame-5.jpg",
    },
  ],
};

export const whySection = {
  title: "OS PROJETOS DA BIBLIOTECA ILUSTRADA POSSUEM:",
  cards: [
    { icon: "🖼️", text: "Guias visuais detalhadas — siga cada passo com clareza." },
    { icon: "📋", text: "Lista completa de materiais — tudo que você precisa, organizado." },
    { icon: "⏱️", text: "Tempo médio de produção — saiba quanto tempo vai levar." },
    { icon: "✨", text: "Dicas de acabamento — para deixar suas peças ainda mais bonitas." },
    { icon: "⚠️", text: "Erros mais comuns — evite falhas e produza com segurança." },
  ],
};

export const idealSection = {
  title: "ESTA BIBLIOTECA É IDEAL PARA VOCÊ QUE DESEJA",
  items: [
    { title: "APRENDER MACRAMÊ SEM DIFICULDADE", desc: "Siga guias visuais e produza peças incríveis sem estresse e sem erros." },
    { title: "DECORAR SUA CASA COM PEÇAS EXCLUSIVAS", desc: "Crie decorações únicas que refletirão seu estilo pessoal e criatividade." },
    { title: "ENCONTRAR UM HOBBY PRAZEROSO", desc: "Desconecte-se da rotina e relaxe enquanto cria suas próprias peças." },
    { title: "SENTIR ORGULHO DE SUAS CRIAÇÕES", desc: "Finalize cada projeto com satisfação e compartilhe com amigos e familiares." },
    { title: "EVITAR DESPERDÍCIO DE MATERIAIS", desc: "Saiba exatamente o que usar e como executar, evitando erros comuns." },
    { title: "DESENVOLVER UMA HABILIDADE ARTÍSTICA", desc: "Aprimore sua técnica e crie peças cada vez mais sofisticadas." },
  ],
};

export const offerSection = {
  title: "TUDO O QUE VOCÊ VAI RECEBER",
  pill: "⚡ACESSO IMEDIATO",
  cardTitle: "TUDO FOI ORGANIZADO PARA SER SIMPLES E FÁCIL DE APLICAR.",
  image: macrameHeroImage,
  features: [
    "Coleção de Sousplats",
    "Jogos americanos personalizados",
    "Caminhos de mesa decorativos",
    "Porta-copos criativos",
    "Guia de produção passo a passo",
    "Lista de materiais detalhada",
    "Dicas de acabamento",
    "Erros mais comuns a evitar",
    "Guia visual dos nós",
  ],
  moreLabel: "E MUITO MAIS...",
  ctaLabel: "QUERO ACESSAR AGORA",
  deliveryNote: hero.deliveryNote,
};

export const bonusSection = {
  titleLines: ["E NÃO PARA POR AÍ... TEM MAIS!", "Você também vai receber…"],
  pill: "🎁 8 BÔNUS EXCLUSIVOS",
  exclusiveNote: ["BÔNUS INCLUSO APENAS", "NO PLANO COMPLETO"],
  items: [
    { title: "Biblioteca Ilustrada de Decoração para Sala", desc: "Uma coleção de projetos em macramê para compor salas de estar, incluindo painéis, cachepôs e peças decorativas.", price: "R$27", image: { src: "/bonus-cover-1.jpg", alt: "Capa do bônus: Biblioteca Ilustrada de Decoração para Sala", width: 600, height: 800 } },
    { title: "Biblioteca Ilustrada de Decoração para Quarto", desc: "Projetos exclusivos para criar uma decoração aconchegante no quarto, com peças ilustradas e planejamento completo de produção.", price: "R$27", image: { src: "/bonus-cover-2.jpg", alt: "Capa do bônus: Biblioteca Ilustrada de Decoração para Quarto", width: 600, height: 800 } },
    { title: "Biblioteca Ilustrada para Datas Especiais", desc: "Projetos temáticos para Natal, Páscoa, Dia das Mães e outras ocasiões especiais, permitindo renovar a decoração ao longo do ano.", price: "R$27", image: { src: "/bonus-cover-3.jpg", alt: "Capa do bônus: Biblioteca Ilustrada para Datas Especiais", width: 600, height: 800 } },
    { title: "Guia Visual de Combinações de Cores", desc: "Diversas paletas prontas para combinar cordões, tecidos e elementos da mesa posta, facilitando a criação de peças elegantes.", price: "R$27", image: { src: "/bonus-cover-4.jpg", alt: "Capa do bônus: Guia Visual de Combinações de Cores", width: 600, height: 800 } },
    { title: "Biblioteca de Variações dos Projetos", desc: "Versões alternativas dos projetos principais com novos tamanhos, formatos e combinações para ampliar as possibilidades de criação.", price: "R$27", image: { src: "/bonus-cover-5.jpg", alt: "Capa do bônus: Biblioteca de Variações dos Projetos", width: 600, height: 800 } },
    { title: "Guia de Conservação das Peças", desc: "Orientações para limpeza, armazenamento e manutenção das peças em macramê, ajudando a preservar a beleza e a durabilidade do trabalho.", price: "R$27", image: { src: "/bonus-6.jpg", alt: "Capa do bônus: Guia de Conservação das Peças", width: 600, height: 800 } },
    { title: "Primeira Peça Guiada", desc: "Um projeto pensado para quem está começando, apresentado em passo a passo ilustrado que acompanha cada etapa da produção.", price: "R$27", image: { src: "/bonus-cover-7.jpg", alt: "Capa do bônus: Primeira Peça Guiada", width: 600, height: 800 } },
    { title: "Manual de Correção de Erros", desc: "Um guia visual mostrando os erros mais comuns durante a confecção das peças, como identificá-los rapidamente e quais ajustes fazer.", price: "R$27", image: { src: "/bonus-8.jpg", alt: "Capa do bônus: Primeira Peça Guiada", width: 600, height: 800 }  },
  ],
};

/** Itens 🎁 exibidos nas listas dos planos (tachados no Básico, inclusos no Completo). */
export const bonusFeatures = [
  "🎁 BÔNUS - Biblioteca Ilustrada de Decoração para Sala",
  "🎁 BÔNUS - Biblioteca Ilustrada de Decoração para Quarto",
  "🎁 BÔNUS - Biblioteca Ilustrada para Datas Especiais",
  "🎁 BÔNUS - Guia Visual de Combinações de Cores",
  "🎁 BÔNUS - Biblioteca de Variações dos Projetos",
  "🎁 BÔNUS - Guia de Conservação das Peças",
  "🎁 BÔNUS - Primeira Peça Guiada",
  "🎁 BÔNUS - Manual de Correção de Erros",
];

export const plansSection = {
  pill: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
  title: "ESCOLHA A OPÇÃO IDEAL PARA VOCÊ",
  basic: {
    name: "Plano Básico",
    image: { alt: "Mockup do Plano Básico da Biblioteca Ilustrada de Mesa Posta em Macramê", width: 1104, height: 1104 },
    receiveLabel: "Você recebe:",
    features: [
      "Acesso à Biblioteca de Projetos",
      "Guias de Produção",
      "Lista de Materiais",
      "Dicas de Acabamento",
    ],
    oldPrice: "R$37,90",
    price: "R$27,90",
    installments: "ou 4x de R$7,47 no cartão",
    savings: "🟢 Você economiza R$10,00",
    ctaLabel: "QUERO GARANTIR O MEU",
  },
  complete: {
    badge: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
    name: "PLANO COMPLETO",
    allBonusesLabel: "TODOS OS BÔNUS INCLUSOS",
    image: macrameHeroImage,
    pill: "⚡2x MAIS CONTEÚDOS",
    features: [
      "Acesso à Biblioteca de Projetos",
      "Guias de Produção",
      "Lista de Materiais",
      "Dicas de Acabamento",
    ],
    oldPrice: "R$47,90",
    price: "R$37,90",
    installments: "ou 6x de R$6,35 no cartão",
    savings: "🟢 Você economiza R$10,00",
    ctaLabel: "QUERO GARANTIR O MEU COMPLETO",
  },
  upsellNote: {
    alert: "AINDA DÁ TEMPO DE LEVAR A MELHOR OPÇÃO!",
    body: "Leve mais e pague menos, 97% escolhem a nossa",
    highlight: "SUPER OFERTA!",
  },
  paybackBadge: {
    title: "🔒 Compra 100% segura e garantida",
    subtitle: "Pagamento processado por plataforma segura.",
  },
};

export const guarantee = {
  seal: { alt: "Selo de garantia de 7 dias", width: 241, height: 242 },
  title: "GARANTIA DE 7 DIAS",
  intro: "Isso significa que, a qualquer momento, se você achar que:",
  lead: "",
  bullets: [
    "o material não faz sentido para sua produção",
    "os projetos não atendem sua necessidade",
    "ou simplesmente não quiser continuar",
  ],
  outro: "Você pode solicitar o reembolso. Sem prazo, sem burocracia.",
  outroStrong: "O risco fica todo do nosso lado.",
  helpLabel: "Precisa de ajuda? Entre em contato conosco:",
};

export const contact = {
  email: "contato@blogestudos.com",
};

export const stepsSection = {
  title: "COMO É O ACESSO",
  subtitle: "(VEJA COMO É SIMPLES OBTER SEU MATERIAL.)",
  ctaLabel: "QUERO COMEÇAR AGORA",
  steps: [
    {
      icon: "🛒",
      title: "Conclua sua compra",
      desc: "Após o pagamento, seu acesso é liberado automaticamente.",
      items: ["Você recebe um e-mail de confirmação", "Acesse sua área de membros"],
    },
    {
      icon: "🔍",
      title: "Escolha seu projeto",
      desc: "Selecione a peça que deseja produzir.",
      items: ["Veja as opções disponíveis", "Escolha a que mais gosta", "Clique para acessar o guia"],
    },
    {
      icon: "📖",
      title: "Siga o guia passo a passo",
      desc: "Acompanhe as instruções e produza sua peça.",
      items: ["Siga a ordem de produção", "Use a lista de materiais", "Aproveite as dicas de acabamento"],
    },
    {
      icon: "🎉",
      title: "Finalize sua peça",
      desc: "Conclua sua criação e compartilhe com orgulho.",
      items: ["Mostre suas criações para amigos", "Decore sua casa com suas peças", "Sinta-se realizada com seu trabalho"],
    },
  ],
};

export const faq: readonly (readonly [string, string])[] = [
  ["Preciso ter experiência em macramê para começar?", "Não! A Biblioteca foi desenvolvida com guias visuais detalhados que tornam o aprendizado acessível para qualquer pessoa, independente do nível de experiência."],
  ["Os materiais estão inclusos?", "Os materiais físicos (cordões, anéis etc.) não estão inclusos, mas cada projeto traz uma lista completa e detalhada com tudo que você precisa adquirir antes de começar."],
  ["O acesso é imediato após a compra?", "Sim! Assim que o pagamento for confirmado, você recebe o acesso direto no seu e-mail."],
  ["Posso pedir reembolso se não gostar?", "Sim. Você tem 7 dias de garantia total. Basta solicitar o reembolso e devolvemos todo o valor pago, sem burocracia."],
  ["Os projetos são editáveis?", "Os projetos são entregues em formato digital para visualização. Eles não são editáveis, mas estão organizados de forma clara para facilitar o uso."],
  ["Receberei suporte caso tenha dúvidas?", "Sim. Você pode entrar em contato pelo e-mail de suporte e nossa equipe estará disponível para ajudar."],
];

export const footer = {
  legal:
    "Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.",
};
