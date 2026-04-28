import rawArchive from "../data/linkedinArchive.json";
import { archiveOverrides } from "../data/linkedinArchiveOverrides";
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
}

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
    usesOriginalText: locale !== post.originalLocale && !localeOverride?.body
  };
}

export function getLocalizedImportedArchive(locale: Locale) {
  return importedArchiveBase.map((post) => localizeImportedArchivePost(post, locale));
}

export function getImportedArchivePost(slug: string) {
  return importedArchiveBase.find((post) => post.slug === slug);
}

export function getLocalizedImportedArchivePost(slug: string, locale: Locale) {
  const post = getImportedArchivePost(slug);
  return post ? localizeImportedArchivePost(post, locale) : undefined;
}
