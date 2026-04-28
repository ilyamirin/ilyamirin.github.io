import type { Locale } from "../lib/i18n";

type NavLink = { href: string; label: string };
type SiteCopy = {
  siteTitle: string;
  siteDescription: string;
  nav: NavLink[];
  hero: {
    overline: string;
    title: string;
    summary: string;
    primaryCta: NavLink;
    secondaryCta: NavLink;
    signalStrip: string[];
  };
  whatIBuild: Array<{ title: string; body: string }>;
  sectionLabels: {
    selectedWorlds: string;
    whatIBuild: string;
    writing: string;
    resume: string;
    now: string;
    links: string;
  };
  footerBlurb: string;
};

export const featuredProjectOrder = [
  "agent-bench-lab",
  "aquarium-nullclaw",
  "replicate-proxy",
  "autocoder",
  "loompilot",
  "cashflow-underwriting-demo"
];

export const featuredWritingOrder = [
  "agent-bench-lab",
  "cached-tokens",
  "streaming-cancellation",
  "deepmind-consciousness-globe",
  "tiny-teams-origin"
];

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    siteTitle: "Ilya Mirin",
    siteDescription:
      "Bilingual GitHub Pages site for AI systems, coding agents, generative products, and unusual interfaces.",
    nav: [
      { href: "/projects", label: "Projects" },
      { href: "/writing", label: "Writing" },
      { href: "/resume", label: "Resume" },
      { href: "/about", label: "About" }
    ],
    hero: {
      overline: "AI systems / generative media / product interfaces",
      title: "I build AI systems, generative products, and unusual interfaces for the real world.",
      summary:
        "From coding agents and OpenAI-compatible backends to media pipelines, evaluation systems, and operator-facing tools, I design technical worlds that are useful, legible, and alive.",
      primaryCta: { href: "/projects", label: "View Projects" },
      secondaryCta: { href: "/resume", label: "Open Resume" },
      signalStrip: ["Coding agents", "AI infrastructure", "Generative pipelines", "Operator tools"]
    },
    whatIBuild: [
      {
        title: "AI systems",
        body: "Benchmarks, model-routing layers, control planes, and operational surfaces that make advanced models dependable."
      },
      {
        title: "Generative products",
        body: "Media and interface systems where generation is not a gimmick but part of the usable product loop."
      },
      {
        title: "Operator interfaces",
        body: "Tools for people who need to supervise, verify, and steer complex AI-assisted workflows."
      }
    ],
    sectionLabels: {
      selectedWorlds: "Selected Worlds",
      whatIBuild: "What I Build",
      writing: "Writing From The Field",
      resume: "Resume Snapshot",
      now: "Now",
      links: "Links"
    },
    footerBlurb:
      "Built as a static world map for strong international AI roles: systems depth first, visual authorship second, no wasted motion."
  },
  ru: {
    siteTitle: "Илья Мирин",
    siteDescription:
      "Двуязычный GitHub Pages сайт про AI systems, coding agents, generative products и необычные интерфейсы.",
    nav: [
      { href: "/ru/projects", label: "Проекты" },
      { href: "/ru/writing", label: "Тексты" },
      { href: "/ru/resume", label: "Резюме" },
      { href: "/ru/about", label: "Обо мне" }
    ],
    hero: {
      overline: "AI systems / generative media / product interfaces",
      title: "Я создаю AI-системы, генеративные продукты и необычные интерфейсы для реального мира.",
      summary:
        "От coding agents и OpenAI-compatible backends до media pipelines, evaluation systems и operator-facing tools — я проектирую технические миры, которые полезны, понятны и живы.",
      primaryCta: { href: "/ru/projects", label: "Смотреть проекты" },
      secondaryCta: { href: "/ru/resume", label: "Открыть резюме" },
      signalStrip: ["Coding agents", "AI infrastructure", "Generative pipelines", "Operator tools"]
    },
    whatIBuild: [
      {
        title: "AI-системы",
        body: "Бенчмарки, model-routing layers, control planes и операционные поверхности, которые делают модели надёжными."
      },
      {
        title: "Генеративные продукты",
        body: "Медиа- и интерфейсные системы, где генерация встроена в рабочий продуктовый цикл, а не служит декорацией."
      },
      {
        title: "Интерфейсы для операторов",
        body: "Инструменты для людей, которым нужно наблюдать, проверять и направлять сложные AI-assisted workflows."
      }
    ],
    sectionLabels: {
      selectedWorlds: "Избранные миры",
      whatIBuild: "Что я строю",
      writing: "Тексты с поля",
      resume: "Коротко о карьере",
      now: "Сейчас",
      links: "Ссылки"
    },
    footerBlurb:
      "Статическая world map для сильных international AI roles: сначала systems depth, потом визуальное авторство, без лишней суеты."
  }
};
