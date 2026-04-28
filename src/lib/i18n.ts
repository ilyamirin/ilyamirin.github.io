import { getCollection, type CollectionEntry } from "astro:content";

export const LOCALES = ["en", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ru: "Русский"
};

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function entrySlug(entry: { id: string }) {
  return entry.id
    .replace(/\.(md|mdx)$/i, "")
    .replace(/^(en|ru)-/, "");
}

export function withLocalePath(locale: Locale, path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized === "/" ? "/" : normalized.replace(/\/+$/, "");
  }
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`.replace(/\/+$/, "");
}

export async function getLocalizedCollection<T extends "posts" | "projects" | "pages">(
  collection: T,
  locale: Locale
) {
  const entries = await getCollection(collection, ({ data }) => data.locale === locale);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPageEntry(locale: Locale, slug: string) {
  const entries = await getLocalizedCollection("pages", locale);
  return entries.find((entry) => entrySlug(entry) === slug);
}

export function getTranslationPath(
  entry: CollectionEntry<"posts" | "projects" | "pages">,
  targetLocale: Locale
) {
  const prefix = entry.collection === "pages" ? "" : `/${entry.collection}`;
  return withLocalePath(targetLocale, `${prefix}/${entrySlug(entry)}`.replace(/\/{2,}/g, "/"));
}
