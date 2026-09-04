/* ────────────────────────────────────────────────────────────────────────
 *  👋 EDIT EVERYTHING HERE
 *
 *  This is the only file you need to touch to make the site yours.
 *  Checklist:
 *    1. `site`        → your name, company, domain, social links, SEO text
 *    2. `tools`       → the tech you want listed under "Tools"
 *    3. `dict.en`     → all English copy (hero, outcomes, blog labels, …)
 *    4. `dict.pt`     → same in Portuguese (or delete it — see README)
 *
 *  Other things to change live in their own files (see README → "Make it yours"):
 *    • your photo   → public/avatar.jpeg
 *    • colors       → app/globals.css
 *    • OG image     → app/opengraph-image.tsx
 *    • favicon      → app/icon.tsx
 *    • blog posts   → content/writing/*.mdx
 * ──────────────────────────────────────────────────────────────────────── */

// ── 1. Site metadata ──────────────────────────────────────────────────────
export const site = {
  name: "Vitorello",
  company: "Bemobi Wave",
  url: "https://vitorello.dev",
  // Set to false to hide the "Working at …" section (the hiring CTA at the bottom).
  showWorkingAt: true,
  careers: "https://wave-by-bemobi.gupy.io/", // "Working at …" CTA target
  seoDescription:
    "Vitorello — Technical Lead who's still in the code. I build backends, infrastructure, and AI systems that hold up, and care a lot about testing. Grab a coffee?",
  socials: {
    github: "https://github.com/devtorello",
    linkedin: "https://www.linkedin.com/in/vitorellotatiana/",
    email: "mailto:vitorellotts@gmail.com",
  },
};

// ── 2. Tools shown under the expertise section ────────────────────────────
export const tools =
  "Node.js · TypeScript · GCP · OCI · Pulumi · Terraform · PostgreSQL";

// ── 3 + 4. Copy, per language ─────────────────────────────────────────────
export type Locale = "en" | "pt";

type Dict = {
  nav: { expertise: string; writing: string };
  hero: {
    role: string;
    at: string;
    title: string;
    tagline: string;
    intro: string;
    pride: string;
    getInTouch: string;
  };
  now: { label: string; text: string };
  expertise: {
    heading: string;
    items: { headline: string; line: string }[];
    toolsLabel: string;
  };
  beyond: { label: string; text: string };
  workingAt: { label: string; heading: string; body: string; cta: string };
  certifications: { label: string; items: { label: string; detail: string }[] };
  languages: { label: string; items: { name: string; level: string }[] };
  writing: {
    label: string;
    allPosts: string;
    emptyHome: string;
    pageSubtitle: string;
    emptyTitle: string;
    emptyBody: string;
    back: string;
  };
  footer: { builtWith: string; email: string };
};

export const dict: Record<Locale, Dict> = {
  en: {
    nav: { expertise: "Expertise", writing: "Writing" },
    hero: {
      role: "Technical Lead",
      at: "at",
      title: "Grab a coffee.",
      tagline: "I lead engineering teams and still can't stay out of the codebase.",
      intro:
        "I help teams move fast and sleep well: reliable systems, clear decisions, fewer fires. I take quality as seriously as Demon Slayer, Red Velvet and Shinee.",
      pride:
        "I proudly stand for LGBTQIA+ rights and inclusion — in tech, and everywhere.",
      getInTouch: "Get in touch",
    },
    now: {
      label: "Now",
      text: "Digging into agentic development and LLMs, and figuring out how quality and QA fit into the SDLC now that LLMs are in the loop.",
    },
    expertise: {
      heading: "What working with me looks like",
      toolsLabel: "Tools",
      items: [
        {
          headline: "Systems that stay boring.",
          line: "Backends and data that just keep working, so the team can build on top without flinching.",
        },
        {
          headline: "Infra you can trust.",
          line: "Reproducible, reviewable, and calm on deploy day.",
        },
        {
          headline: "Ship without holding your breath.",
          line: "Testing as a practice, not a checkbox, so change stays cheap as things grow.",
        },
        {
          headline: "AI that earns its keep.",
          line: "LLM features measured against real cost and real reliability, not the hype.",
        },
        {
          headline: "A team that moves fast.",
          line: "Clear decisions, honest trade-offs, and engineers who grow.",
        },
      ],
    },
    beyond: {
      label: "Beyond code",
      text: "When I'm not coding, I'm probably playing bass, deep in a philosophy book, or a few episodes into an anime I swore I'd 'just start.' Music, games, and good stories keep me curious.",
    },
    workingAt: {
      label: "Working at Wave",
      heading: "Want to build cool stuff together?",
      body: "We're a company doing genuinely hard, genuinely fun things: agentic systems at real scale, lots of autonomy, and teammates who actually care. It's remote, it's fast, and it's rarely boring. If that sounds like your kind of thing, come say hi.",
      cta: "See open roles →",
    },
    certifications: {
      label: "Certifications",
      items: [
        { label: "Professional Cloud Architect", detail: "Google Cloud" },
        { label: "Professional Cloud Developer", detail: "Google Cloud" },
      ],
    },
    languages: {
      label: "Languages",
      items: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Advanced" },
        { name: "Spanish", level: "Intermediate" },
      ],
    },
    writing: {
      label: "Writing",
      allPosts: "All posts →",
      emptyHome:
        "First posts are on the way. Notes on engineering, testing, infra, and AI systems.",
      pageSubtitle:
        "Notes on engineering, testing, infrastructure, and AI systems.",
      emptyTitle: "No posts yet.",
      emptyBody:
        "I'm brewing the first ones. Check back soon, or grab that coffee in the meantime. ☕",
      back: "← Writing",
    },
    footer: { builtWith: "Built with love 💚", email: "Email" },
  },
  pt: {
    nav: { expertise: "Expertise", writing: "Escrita" },
    hero: {
      role: "Technical Lead",
      at: "na",
      title: "Pega um café.",
      tagline: "Lidero times de engenharia e ainda assim não largo o código.",
      intro:
        "Ajudo times a irem rápido sem perder o sono: sistemas confiáveis, decisões claras, menos incêndios. Levo qualidade tão a sério quanto Demon Slayer, Red Velvet e Shinee.",
      pride:
        "Defendo com orgulho os direitos e a inclusão LGBTQIA+ — na tecnologia e em todo canto.",
      getInTouch: "Fala comigo",
    },
    now: {
      label: "Agora",
      text: "Imergindo em desenvolvimento de aplicações agênticas e LLMs, aprendendo a integrar qualidade e QA no SDLC sem fricção na era das LLMs.",
    },
    expertise: {
      heading: "Como é trabalhar comigo",
      toolsLabel: "Ferramentas",
      items: [
        {
          headline: "Sistemas que não dão dor de cabeça.",
          line: "Backends e dados que simplesmente funcionam, e deixam o time construir por cima sem medo de quebrar nada.",
        },
        {
          headline: "Infra em que dá pra confiar.",
          line: "Reproduzível, fácil de revisar e sem sustos no dia do deploy.",
        },
        {
          headline: "Subir pra produção sem prender a respiração.",
          line: "Teste como parte do processo, não como burocracia — assim mudar continua barato mesmo quando o sistema cresce.",
        },
        {
          headline: "IA que se paga.",
          line: "Recursos com LLM avaliados por custo e confiabilidade de verdade, não pelo hype.",
        },
        {
          headline: "Um time que anda rápido.",
          line: "Decisões claras, trade-offs honestos e gente crescendo junto.",
        },
      ],
    },
    beyond: {
      label: "Além do código",
      text: "Quando não estou codando, provavelmente estou com o baixo na mão, no meio de um livro de filosofia, ou a alguns episódios de um anime que jurei que 'só ia começar'. Música, games e boas histórias mantêm minha curiosidade viva.",
    },
    workingAt: {
      label: "Trabalhar na Wave",
      heading: "Quer construir coisas legais com a gente?",
      body: "Nós somos uma empresa que faz coisas difíceis e divertidas de verdade: aplicações agênticas em escala real, bastante autonomia e gente que se importa. É remoto, é rápido e raramente é chato. Se isso tem a ver com você, chega junto.",
      cta: "Ver vagas →",
    },
    certifications: {
      label: "Certificações",
      items: [
        { label: "Professional Cloud Architect", detail: "Google Cloud" },
        { label: "Professional Cloud Developer", detail: "Google Cloud" },
      ],
    },
    languages: {
      label: "Idiomas",
      items: [
        { name: "Português", level: "Língua materna" },
        { name: "Inglês", level: "Avançado" },
        { name: "Espanhol", level: "Intermediário" },
      ],
    },
    writing: {
      label: "Escrita",
      allPosts: "Todos os posts →",
      emptyHome:
        "Os primeiros posts vêm aí. Notas sobre engenharia, testes, infra e aplicações agênticas.",
      pageSubtitle:
        "Notas sobre engenharia, testes, infraestrutura e aplicações agênticas.",
      emptyTitle: "Nenhum post ainda.",
      emptyBody:
        "Estou preparando os primeiros. Volta em breve, ou pega aquele café enquanto isso. ☕",
      back: "← Escrita",
    },
    footer: { builtWith: "Feito com amor 💚", email: "E-mail" },
  },
};
