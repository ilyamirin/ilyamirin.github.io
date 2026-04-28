import rawArchive from "../data/linkedinArchive.json";
import { archiveOverrides, type ArchiveTopic } from "../data/linkedinArchiveOverrides";
import type { Locale } from "./i18n";

export interface ImportedArchivePost {
  activityId: string;
  slug: string;
  date: string;
  createdAt: string;
  originalLocale: Locale;
  title: string;
  summary: string;
  body: string;
  sourceUrl: string | null;
  coverImage: string | null;
  hasImage: boolean;
  imageUrls: string[];
  translationLocales: string[];
}

export interface LocalizedArchivePost extends ImportedArchivePost {
  displayLocale: Locale;
  displayTitle: string;
  displaySummary: string;
  displayBody: string;
  hasHandTranslation: boolean;
  usesOriginalText: boolean;
  topic: ArchiveTopic;
  featured: boolean;
}

export interface LocalizedArchiveGroup {
  topic: ArchiveTopic;
  posts: LocalizedArchivePost[];
}

const topicOrder: ArchiveTopic[] = [
  "ai-systems",
  "agent-infrastructure",
  "generative-media",
  "financial-systems",
  "field-notes"
];

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function stripLeadingNoise(value: string) {
  return value.replace(/^[^\p{L}\p{N}`"«“]+/u, "").trim();
}

function firstSentence(value: string) {
  const compact = stripLeadingNoise(normalizeWhitespace(value));
  const match = compact.match(/^(.{1,110}?[.!?])(?:\s|$)/u);
  if (match) {
    return match[1].trim();
  }
  return compact.slice(0, 110).trim();
}

function summarizeBody(value: string) {
  const compact = stripLeadingNoise(normalizeWhitespace(value));
  if (compact.length <= 180) {
    return compact;
  }
  const sentenceMatch = compact.match(/^(.{110,220}?[.!?])(?:\s|$)/u);
  if (sentenceMatch) {
    return sentenceMatch[1].trim();
  }
  return `${compact.slice(0, 177).trim()}...`;
}

function titleNeedsCleanup(post: ImportedArchivePost) {
  const title = normalizeWhitespace(post.title);
  return (
    title.length > 92 ||
    !/[.!?»”]$/.test(title) ||
    title === title.toUpperCase() ||
    /^linkedin-post-/i.test(post.slug) ||
    /\d{6,}$/.test(post.slug)
  );
}

function containsAny(haystack: string, needles: string[]) {
  return needles.some((needle) => haystack.includes(needle));
}

function detectTopic(post: ImportedArchivePost): ArchiveTopic {
  const override = archiveOverrides[post.slug];
  if (override?.topic) {
    return override.topic;
  }

  const haystack = `${post.slug} ${post.title} ${post.summary} ${post.body}`.toLowerCase();

  if (
    containsAny(haystack, [
      "bnpl",
      "underwriting",
      "fincept",
      "financial",
      "finance",
      "cashflow",
      "market data",
      "paper trading",
      "decision support",
      "macro analysis",
      "credit"
    ])
  ) {
    return "financial-systems";
  }

  if (
    containsAny(haystack, [
      "openclaw",
      "aquarium",
      "runtime",
      "control plane",
      "gateway",
      "secrets",
      "monitoring",
      "observability",
      "hosting",
      "orchestration",
      "agent platform",
      "lifecycle",
      "container"
    ])
  ) {
    return "agent-infrastructure";
  }

  if (
    containsAny(haystack, [
      "cached tokens",
      "streaming cancellation",
      "inference",
      "prompt",
      "llm",
      "coding agent",
      "coding agents",
      "agentic coding",
      "benchmark",
      "aider",
      "openhands",
      "tool calls",
      "model route"
    ])
  ) {
    return "ai-systems";
  }

  if (
    containsAny(haystack, [
      "music",
      "game",
      "games",
      "visual",
      "eyvind",
      "arcane",
      "suno",
      "painted",
      "gallery",
      "image",
      "deck",
      "myth",
      "ritual",
      "culture",
      "science fiction"
    ])
  ) {
    return "generative-media";
  }

  return "field-notes";
}

const importedArchiveBase = [...(rawArchive as ImportedArchivePost[])].sort((a, b) =>
  b.createdAt.localeCompare(a.createdAt)
);

export const importedArchive = importedArchiveBase;

export function localizeImportedArchivePost(post: ImportedArchivePost, locale: Locale): LocalizedArchivePost {
  const override = archiveOverrides[post.slug];
  const localeOverride = override?.locales?.[locale];
  const originalOverride = override?.locales?.[post.originalLocale];
  const autoTitle = titleNeedsCleanup(post) ? firstSentence(post.body) : normalizeWhitespace(post.title);
  const autoSummary = summarizeBody(post.summary.length > 50 ? post.summary : post.body);

  return {
    ...post,
    displayLocale: locale,
    displayTitle: localeOverride?.title ?? originalOverride?.title ?? autoTitle,
    displaySummary: localeOverride?.summary ?? originalOverride?.summary ?? autoSummary,
    displayBody: localeOverride?.body ?? post.body,
    hasHandTranslation: Boolean(localeOverride?.body),
    usesOriginalText: locale !== post.originalLocale && !localeOverride?.body,
    topic: detectTopic(post),
    featured: Boolean(override?.featured)
  };
}

export function getLocalizedImportedArchive(locale: Locale) {
  return importedArchiveBase.map((post) => localizeImportedArchivePost(post, locale));
}

export function getFeaturedImportedArchive(locale: Locale, limit = 8) {
  return getLocalizedImportedArchive(locale)
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getLocalizedArchiveGroups(locale: Locale): LocalizedArchiveGroup[] {
  const localized = getLocalizedImportedArchive(locale);
  const featuredSlugs = new Set(localized.filter((post) => post.featured).map((post) => post.slug));

  return topicOrder
    .map((topic) => ({
      topic,
      posts: localized.filter((post) => post.topic === topic && !featuredSlugs.has(post.slug))
    }))
    .filter((group) => group.posts.length > 0);
}

export function getImportedArchivePost(slug: string) {
  return importedArchiveBase.find((post) => post.slug === slug);
}

export function getLocalizedImportedArchivePost(slug: string, locale: Locale) {
  const post = getImportedArchivePost(slug);
  return post ? localizeImportedArchivePost(post, locale) : undefined;
}
