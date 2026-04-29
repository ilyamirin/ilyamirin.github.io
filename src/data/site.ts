import type { Locale } from "../lib/i18n";

type NavLink = { href: string; label: string };
type SectionIntro = {
  eyebrow: string;
  title: string;
  body: string;
};
type ArchiveTopicKey =
  | "ai-systems"
  | "agent-infrastructure"
  | "generative-media"
  | "financial-systems"
  | "field-notes";

type SiteCopy = {
  siteTitle: string;
  siteDescription: string;
  metadata: {
    titleSuffix: string;
  };
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
    writingCta: string;
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
    archiveFeaturedEyebrow: string;
    archiveFeaturedTitle: string;
    archiveFeaturedIntro: string;
    archiveTopicsEyebrow: string;
    archiveTopicsTitle: string;
    archiveTopicsIntro: string;
  };
  archive: {
    eyebrow: string;
    sourceLinkLabel: string;
    translatedBadge: string;
    originalEnglishBadge: string;
    originalRussianBadge: string;
    imageBadge: string;
    fallbackFromEn: string;
    fallbackFromRu: string;
    translatedFromEn: string;
    translatedFromRu: string;
    topicLabels: Record<ArchiveTopicKey, string>;
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
    metadata: {
      titleSuffix: "Ilya Mirin"
    },
    nav: [
      { href: "/projects", label: "Projects" },
      { href: "/writing", label: "Notes" },
      { href: "/resume", label: "Resume" },
      { href: "/about", label: "About" }
    ],
    hero: {
      overline: "AI systems / LLM infrastructure / generative media",
      title: "I build AI systems that people can actually use.",
      summary:
        "Coding agents, LLM infrastructure, evaluation, and generative products — designed for clarity, control, and real work.",
      primaryCta: { href: "/projects", label: "View Projects" },
      secondaryCta: { href: "/resume", label: "Read Resume" },
      signalStrip: ["Coding agents", "LLM systems", "Generative media", "Human-in-the-loop tools"]
    },
    home: {
      selectedWorlds: {
        eyebrow: "Selected work",
        title: "Selected Projects",
        body: "A few projects that show how I think when systems need both technical depth and product judgment."
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
      nowCta: "See what I am exploring",
      writingCta: "Open selected notes"
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
      selectedWorlds: "Selected Projects",
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
      archiveEyebrow: "Public logbook",
      archiveTitle: "Field Notes Archive",
      archiveIntro:
        "Start with the selected notes. The archive stays open as the longer public logbook: launch notes, working theories, and useful rough edges included.",
      archiveCta: "Open the field archive",
      archiveCountLabel: "posts",
      curatedEyebrow: "Selected notes",
      archiveDeckEyebrow: "Public logbook",
      archiveDeckTitle: "Field Notes Archive",
      archiveDeckIntro:
        "Imported posts from August 2025 onward. The strongest entries already have hand-shaped translations; the rest remain available in their original language until the next editorial pass.",
      archiveSinceLabel: "From August 2025",
      archiveFeaturedEyebrow: "Starting points",
      archiveFeaturedTitle: "Start here",
      archiveFeaturedIntro:
        "The strongest translated or strategically important entries, useful if you want the shorter route before wandering through the full station.",
      archiveTopicsEyebrow: "Browse by topic",
      archiveTopicsTitle: "The wider logbook",
      archiveTopicsIntro:
        "Everything else, grouped by the kinds of systems and questions these notes are actually about."
    },
    archive: {
      eyebrow: "Field archive",
      sourceLinkLabel: "View the original on LinkedIn",
      translatedBadge: "Adapted for this site",
      originalEnglishBadge: "Original English post",
      originalRussianBadge: "Original Russian post",
      imageBadge: "Includes artwork",
      fallbackFromEn:
        "This is the original English post. I am keeping it in the archive as part of the public logbook until a Russian adaptation is ready.",
      fallbackFromRu:
        "This is the original Russian post. I am keeping it in the archive as part of the public logbook until an English adaptation is ready.",
      translatedFromEn: "Translated and lightly adapted from the English original for this site.",
      translatedFromRu: "Translated and lightly adapted from the Russian original for this site.",
      topicLabels: {
        "ai-systems": "AI Systems",
        "agent-infrastructure": "Agent Infrastructure",
        "generative-media": "Generative Media & Creative Systems",
        "financial-systems": "Financial & Decision Systems",
        "field-notes": "Field Notes & Other"
      }
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
      "Двуязычный статический сайт Ильи Мирина про AI-системы, агентную инфраструктуру, генеративные продукты и операторские инструменты в эстетике космической станции-сада.",
    metadata: {
      titleSuffix: "Илья Мирин"
    },
    nav: [
      { href: "/ru/projects", label: "Проекты" },
      { href: "/ru/writing", label: "Заметки" },
      { href: "/ru/resume", label: "Резюме" },
      { href: "/ru/about", label: "Обо мне" }
    ],
    hero: {
      overline: "AI-системы / LLM-инфраструктура / генеративные медиа",
      title: "Я строю AI-системы, которыми действительно можно пользоваться.",
      summary:
        "Кодовые агенты, LLM-инфраструктура, оценка качества и генеративные продукты — с упором на ясность, управляемость и практическую пользу.",
      primaryCta: { href: "/ru/projects", label: "Смотреть проекты" },
      secondaryCta: { href: "/ru/resume", label: "Читать резюме" },
      signalStrip: ["Кодовые агенты", "LLM-системы", "Генеративные медиа", "Инструменты для людей в контуре"]
    },
    home: {
      selectedWorlds: {
        eyebrow: "Избранные проекты",
        title: "Избранные проекты",
        body: "Несколько проектов, по которым видно, как я думаю, когда системе нужны и инженерная глубина, и продуктовый вкус."
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
      nowCta: "Посмотреть текущий фокус",
      writingCta: "Открыть избранные заметки"
    },
    whatIBuild: [
      {
        title: "Агентная инфраструктура",
        body: "Контуры управления, шлюзы, циклы оценки и границы рантайма, которые превращают агентные системы в продукт, а не в сценический реквизит."
      },
      {
        title: "Генеративные продукты",
        body: "Медиа- и интерфейсные системы, где генерация встроена в устойчивый рабочий процесс, а не служит одноразовым фокусом."
      },
      {
        title: "Операторские интерфейсы",
        body: "Инструменты для людей в контуре: тех, кому нужно проверять, перенаправлять, подтверждать и иногда вовремя останавливать дроидов."
      }
    ],
    sectionLabels: {
      selectedWorlds: "Избранные проекты",
      whatIBuild: "Что я строю",
      writing: "Полевые заметки",
      resume: "Коротко о карьере",
      now: "Текущая орбита",
      links: "Сигналы"
    },
    writing: {
      title: "Заметки",
      description:
        "Избранные тексты и более глубокий архив об AI-системах, операторских интерфейсах, генеративных продуктах и техническом суждении.",
      archiveEyebrow: "Публичный журнал",
      archiveTitle: "Архив полевых заметок",
      archiveIntro:
        "Сначала — отобранные тексты. Ниже — более длинный публичный журнал: запусковые заметки, рабочие гипотезы и те самые полезные шероховатости.",
      archiveCta: "Открыть архив заметок",
      archiveCountLabel: "постов",
      curatedEyebrow: "Избранные заметки",
      archiveDeckEyebrow: "Публичный журнал",
      archiveDeckTitle: "Архив полевых заметок",
      archiveDeckIntro:
        "Посты, импортированные из LinkedIn начиная с августа 2025 года. Самые сильные записи уже вручную переведены и адаптированы для сайта; остальные пока честно сохранены на языке оригинала.",
      archiveSinceLabel: "С августа 2025",
      archiveFeaturedEyebrow: "С чего начать",
      archiveFeaturedTitle: "Хорошие точки входа",
      archiveFeaturedIntro:
        "Самые сильные переведённые или стратегически важные записи. Удобный короткий маршрут перед тем, как идти в полный журнал станции.",
      archiveTopicsEyebrow: "Навигация по темам",
      archiveTopicsTitle: "Шире по журналу",
      archiveTopicsIntro:
        "Остальные записи, собранные по типам систем и вопросов, о которых они на самом деле говорят."
    },
    archive: {
      eyebrow: "Архив заметок",
      sourceLinkLabel: "Посмотреть оригинал в LinkedIn",
      translatedBadge: "Адаптировано для сайта",
      originalEnglishBadge: "Английский оригинал",
      originalRussianBadge: "Русский оригинал",
      imageBadge: "Есть иллюстрация",
      fallbackFromEn:
        "Перед вами английский оригинал. Я оставил его в архиве как часть публичного журнала, пока отдельная русская адаптация не готова.",
      fallbackFromRu:
        "Перед вами русский оригинал. Я оставил его в архиве как часть публичного журнала, пока отдельная английская адаптация не готова.",
      translatedFromEn: "Текст переведён и слегка адаптирован для сайта с английского оригинала.",
      translatedFromRu: "Текст переведён и слегка адаптирован для сайта с русского оригинала.",
      topicLabels: {
        "ai-systems": "AI-системы",
        "agent-infrastructure": "Агентная инфраструктура",
        "generative-media": "Генеративные медиа и творческие системы",
        "financial-systems": "Финансовые и decision-support системы",
        "field-notes": "Полевые заметки и остальное"
      }
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
