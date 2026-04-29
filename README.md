# ilyamirin.github.io

Personal bilingual website for [Ilya Mirin](https://github.com/ilyamirin): AI systems builder, coding-agent engineer, and product-minded technical generalist.

The site is built as a fully static Astro project for GitHub Pages. It combines a recruiter-readable resume surface with a deeper public notebook: selected essays, project pages, and an imported LinkedIn archive available in both English and Russian.

## What this repo contains

- A static bilingual site with `en` as the default locale and `ru` as the second layer
- Curated pages for `About`, `Resume`, `Projects`, `Now`, and `Links`
- MDX content collections for selected writing and project case studies
- A translated LinkedIn archive from August 2025 onward
- Custom branding, SVG assets, and a space-station-garden visual system

## Stack

- [Astro](https://astro.build/)
- TypeScript
- MDX
- Hand-written CSS
- Static output only, no server runtime

## Local development

Requirements:

- Node.js 20+
- npm

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Run static checks:

```bash
npm run check
```

Build the site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Content model

The repo uses three main content layers:

- `src/content/pages`
  Long-form static pages such as `About`, `Resume`, `Now`, and `Links`
- `src/content/projects`
  Curated project case studies with bilingual pairing
- `src/content/posts`
  Selected MDX essays highlighted on the public writing surface

The imported LinkedIn archive lives in the data layer:

- `src/data/linkedinArchive.json`
  Raw normalized archive entries
- `src/data/linkedinArchiveOverrides.ts`
  Curated labels, featured flags, topic assignments, and selected editorial overrides
- `src/data/linkedinArchiveFullTranslations.ts`
  Full bilingual archive translations and polishing layer

## Structure

```text
src/
  components/    Shared UI pieces
  content/       MDX pages, posts, and projects
  data/          Site copy, archive data, translation layers
  layouts/       Base and content layouts
  lib/           Archive and i18n helpers
  pages/         Astro routes for EN and RU surfaces
  styles/        Global styling

public/
  brand assets, favicon, OG artwork, and static media
```

## Deployment

This repository is intended for GitHub Pages as the user site for `ilyamirin.github.io`.

The project is static by design:

- no server rendering
- no database
- no runtime dependency on external APIs
- content should remain readable even if JavaScript is limited

## Writing and archive philosophy

The writing surface has two layers:

- `Selected notes`
  Curated entry points for first-time visitors
- `Field archive`
  The longer public notebook: working theories, launch notes, experiments, and LinkedIn posts

The archive is translated and lightly adapted for readability on this site. In practice, that means the wording may be cleaner than the original post while keeping the underlying argument, tone, and direction intact.

## License

This repository uses split licensing:

- Source code is released under the MIT License. See [LICENSE](./LICENSE).
- Writing, illustrations, brand assets, and original media remain © Ilya Mirin. All rights reserved unless explicitly stated otherwise.

If you want to reuse text, artwork, or branded visuals, ask first.
