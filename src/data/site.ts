import type { Locale } from "../lib/i18n";

type NavLink = { href: string; label: string };
type SectionIntro = {
  eyebrow: string;
  title: string;
  body: string;
};

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
  home: {
    selectedWorlds: SectionIntro;
    whatIBuild: SectionIntro;
    writing: SectionIntro;
    resumeTitle: string;
    nowTitle: string;
    resumeCta: string;
    nowCta: string;
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
  writing: {
    title: string;
    description: string;
    archiveEyebrow: string;
    archiveTitle: string;
    archiveIntro: string;
    archiveCta: string;
    archiveCountLabel: string;
    curatedEyebrow: string;
    archiveDeckEyebrow: string;
    archiveDeckTitle: string;
    archiveDeckIntro: string;
    archiveSinceLabel: string;
  };
  archive: {
    eyebrow: string;
    sourceLinkLabel: string;
    translatedBadge: string;
    originalBadge: string;
    imageBadge: string;
    fallbackFromEn: string;
    fallbackFromRu: string;
    translatedFromEn: string;
    translatedFromRu: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    codeLicense: string;
    contentRights: string;
    links: NavLink[];
  };
};

export const brandConfig = {
  owner: "Ilya Mirin",
  logoMarkPath: "/brand-mark.svg",
  ogImagePath: "/media/brand/og-space-garden.png"
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
      "Bilingual static site about AI systems, coding agents, operator tools, and generative products, framed as a space-station garden.",
    nav: [
      { href: "/projects", label: "Projects" },
      { href: "/writing", label: "Notes" },
      { href: "/resume", label: "Resume" },
      { href: "/about", label: "About" }
    ],
    hero: {
      overline: "AI systems / operator tools / generative media",
      title: "I build AI systems, generative products, and operator tools that make complex models usable.",
      summary:
        "From coding agents and OpenAI-compatible backends to evaluation harnesses, runtime control planes, and media pipelines, I like systems with clear instrumentation, humane interfaces, and enough character to avoid looking factory-issued.",
      primaryCta: { href: "/projects", label: "Explore Projects" },
      secondaryCta: { href: "/resume", label: "Read Resume" },
      signalStrip: ["Coding agents", "LLM infrastructure", "Generative workflows", "Operator surfaces"]
    },
    home: {
      selectedWorlds: {
        eyebrow: "Selected systems",
        title: "Selected Worlds",
        body: "A few systems that show how I think when the work needs both infrastructure discipline and product taste."
      },
      whatIBuild: {
        eyebrow: "What holds together",
        title: "What I Build",
        body: "The surface range is broad. The underlying logic is consistent: make powerful model behavior observable, steerable, and useful."
      },
      writing: {
        eyebrow: "Field notes",
        title: "Field Notes",
        body: "Short essays, experiments, and production lessons from building AI systems that have to survive contact with reality."
      },
      resumeTitle: "Resume Snapshot",
      nowTitle: "Current Orbit",
      resumeCta: "Read the full resume",
      nowCta: "See what I am exploring"
    },
    whatIBuild: [
      {
        title: "Agent infrastructure",
        body: "Control planes, gateways, evaluation loops, and runtime boundaries that let agent systems behave like products instead of stage props."
      },
      {
        title: "Generative products",
        body: "Media and interface systems where generation is part of a durable workflow, not a one-click party trick."
      },
      {
        title: "Operator surfaces",
        body: "Tools for the humans in the loop: the people who need to inspect, redirect, verify, and occasionally stop the droids before they improvise."
      }
    ],
    sectionLabels: {
      selectedWorlds: "Selected Worlds",
      whatIBuild: "What I Build",
      writing: "Field Notes",
      resume: "Resume Snapshot",
      now: "Current Orbit",
      links: "Signals"
    },
    writing: {
      title: "Notes",
      description:
        "Selected essays and a deeper archive about AI systems, operator tooling, generative products, and technical judgment.",
      archiveEyebrow: "Signal archive",
      archiveTitle: "Field Notes Archive",
      archiveIntro:
        "The curated pieces stay up front. The larger archive remains available as a deeper proof layer, because the public signal matters too.",
      archiveCta: "Open the full archive",
      archiveCountLabel: "posts",
      curatedEyebrow: "Selected notes",
      archiveDeckEyebrow: "Archive deck",
      archiveDeckTitle: "Field Notes Archive",
      archiveDeckIntro:
        "Imported posts from August 2025 onward. Some entries already have hand-shaped translations; the rest stay readable in their original language until the second pass lands.",
      archiveSinceLabel: "From August 2025"
    },
    archive: {
      eyebrow: "Signal archive",
      sourceLinkLabel: "Open on LinkedIn",
      translatedBadge: "Translated for this site",
      originalBadge: "Original text",
      imageBadge: "With artwork",
      fallbackFromEn:
        "Original post language: English. This page keeps the source text for now; a dedicated Russian adaptation is still pending.",
      fallbackFromRu:
        "Original post language: Russian. This page keeps the source text for now; a dedicated English adaptation is still pending.",
      translatedFromEn: "Adapted from the original English post.",
      translatedFromRu: "Adapted from the original Russian post."
    },
    footer: {
      tagline: "A space-station garden for AI systems, field notes, and interfaces that prefer instrumentation over mysticism. Less Death Star, more greenhouse control room.",
      copyright: "© 2026 Ilya Mirin",
      codeLicense: "Code released under the MIT License.",
      contentRights: "Writing, artwork, and original media are © Ilya Mirin. All rights reserved.",
      links: [
        { href: "https://github.com/ilyamirin/ilyamirin.github.io", label: "Site repo" },
        { href: "https://github.com/ilyamirin", label: "GitHub" },
        { href: "https://www.linkedin.com/in/ilyamirin/", label: "LinkedIn" },
        { href: "mailto:ilya.mirin@gmail.com", label: "Email" }
      ]
    }
  },
  ru: {
    siteTitle: "Илья Мирин",
    siteDescription:
      "Двуязычный статический сайт про AI-системы, coding agents, operator tools и генеративные продукты в эстетике космической станции-сада.",
    nav: [
      { href: "/ru/projects", label: "Проекты" },
      { href: "/ru/writing", label: "Заметки" },
      { href: "/ru/resume", label: "Резюме" },
      { href: "/ru/about", label: "Обо мне" }
    ],
    hero: {
      overline: "AI systems / operator tools / generative media",
      title: "Я строю AI-системы, генеративные продукты и операторские инструменты, которые делают сложные модели пригодными для работы.",
      summary:
        "От coding agents и OpenAI-compatible backends до evaluation harnesses, runtime control planes и media pipelines — мне нравятся системы с хорошей телеметрией, человеческим интерфейсом и характером, который не выглядит серийным.",
      primaryCta: { href: "/ru/projects", label: "Смотреть проекты" },
      secondaryCta: { href: "/ru/resume", label: "Читать резюме" },
      signalStrip: ["Coding agents", "LLM-инфраструктура", "Генеративные потоки", "Операторские поверхности"]
    },
    home: {
      selectedWorlds: {
        eyebrow: "Ключевые системы",
        title: "Избранные миры",
        body: "Несколько систем, по которым хорошо видно, как я думаю, когда работе нужны и инженерная дисциплина, и вкус к продукту."
      },
      whatIBuild: {
        eyebrow: "Что всё это связывает",
        title: "Что я строю",
        body: "На поверхности диапазон широкий. Внутри логика одна: сделать сильное модельное поведение наблюдаемым, управляемым и полезным."
      },
      writing: {
        eyebrow: "Полевые заметки",
        title: "Полевые заметки",
        body: "Короткие эссе, эксперименты и производственные наблюдения о том, как собирать AI-системы, которые переживают встречу с реальностью."
      },
      resumeTitle: "Коротко о карьере",
      nowTitle: "Текущая орбита",
      resumeCta: "Читать полное резюме",
      nowCta: "Посмотреть текущий фокус"
    },
    whatIBuild: [
      {
        title: "Агентная инфраструктура",
        body: "Control planes, gateways, evaluation loops и runtime boundaries, которые позволяют агентным системам вести себя как продукт, а не как сценический реквизит."
      },
      {
        title: "Генеративные продукты",
        body: "Медиа- и интерфейсные системы, где генерация встроена в устойчивый рабочий цикл, а не служит одноразовым фокусом."
      },
      {
        title: "Операторские поверхности",
        body: "Инструменты для людей в контуре: тех, кому нужно проверять, перенаправлять, подтверждать и иногда вовремя останавливать дроидов."
      }
    ],
    sectionLabels: {
      selectedWorlds: "Избранные миры",
      whatIBuild: "Что я строю",
      writing: "Полевые заметки",
      resume: "Коротко о карьере",
      now: "Текущая орбита",
      links: "Сигналы"
    },
    writing: {
      title: "Заметки",
      description:
        "Избранные тексты и более глубокий архив о AI-системах, операторских интерфейсах, генеративных продуктах и техническом суждении.",
      archiveEyebrow: "Сигнальный архив",
      archiveTitle: "Архив полевых заметок",
      archiveIntro:
        "Отобранные тексты остаются на первом плане. Большой архив тоже открыт, потому что публичный сигнал не стоит выбрасывать за борт.",
      archiveCta: "Открыть полный архив",
      archiveCountLabel: "постов",
      curatedEyebrow: "Избранные заметки",
      archiveDeckEyebrow: "Архивный отсек",
      archiveDeckTitle: "Архив полевых заметок",
      archiveDeckIntro:
        "Импортированные посты с августа 2025 года. Часть уже переведена и вычитана для сайта; остальные пока честно остаются на языке оригинала до второго прохода.",
      archiveSinceLabel: "С августа 2025"
    },
    archive: {
      eyebrow: "Сигнальный архив",
      sourceLinkLabel: "Открыть в LinkedIn",
      translatedBadge: "Переведено для сайта",
      originalBadge: "Оригинальный текст",
      imageBadge: "С иллюстрацией",
      fallbackFromEn:
        "Язык оригинального поста — английский. Пока страница сохраняет исходный текст; отдельная русская адаптация ещё в работе.",
      fallbackFromRu:
        "Язык оригинального поста — русский. Пока страница сохраняет исходный текст; отдельная английская адаптация ещё в работе.",
      translatedFromEn: "Адаптировано с английского оригинала.",
      translatedFromRu: "Адаптировано с русского оригинала."
    },
    footer: {
      tagline: "Космическая станция-сад для AI-систем, полевых заметок и интерфейсов, где телеметрия важнее мистики. Меньше Звезды Смерти, больше теплицы с контрольной панелью.",
      copyright: "© 2026 Илья Мирин",
      codeLicense: "Код сайта распространяется по лицензии MIT.",
      contentRights: "Тексты, иллюстрации и оригинальные медиа принадлежат Илье Мирину. Все права защищены.",
      links: [
        { href: "https://github.com/ilyamirin/ilyamirin.github.io", label: "Репозиторий сайта" },
        { href: "https://github.com/ilyamirin", label: "GitHub" },
        { href: "https://www.linkedin.com/in/ilyamirin/", label: "LinkedIn" },
        { href: "mailto:ilya.mirin@gmail.com", label: "Email" }
      ]
    }
  }
};
