import rawArchive from "../data/linkedinArchive.json";

export interface ImportedArchivePost {
  activityId: string;
  slug: string;
  date: string;
  createdAt: string;
  originalLocale: "en" | "ru";
  title: string;
  summary: string;
  body: string;
  sourceUrl: string | null;
  coverImage: string | null;
  hasImage: boolean;
  imageUrls: string[];
  translationLocales: string[];
}

export const importedArchive = [...(rawArchive as ImportedArchivePost[])].sort((a, b) =>
  b.createdAt.localeCompare(a.createdAt)
);

export function getImportedArchivePost(slug: string) {
  return importedArchive.find((post) => post.slug === slug);
}
