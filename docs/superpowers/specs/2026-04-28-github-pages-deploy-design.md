# GitHub Pages Deploy Design

## Goal

Publish the Astro blog to GitHub Pages automatically on every push to the `main` branch.

## Current State

The repository is an Astro static site with:

- `npm run build` producing the site artifact in `dist/`
- `astro.config.mjs` configured with `site: "https://ilyamirin.github.io"`
- no existing GitHub Actions workflow for deployment

## Chosen Approach

Use the official GitHub Pages deployment flow:

1. Trigger a workflow on `push` to `main` and on manual dispatch.
2. Install dependencies with `npm ci`.
3. Build the site with `npm run build`.
4. Upload `dist/` as the Pages artifact.
5. Deploy the artifact with `actions/deploy-pages`.

This avoids maintaining a `gh-pages` branch and matches GitHub's supported Pages workflow.

## Files

- Create `.github/workflows/deploy.yml` for build and deploy automation.
- Create `docs/superpowers/plans/2026-04-28-github-pages-deploy.md` for the implementation handoff record.

## Error Handling

- Dependency install or build failures stop the workflow before deployment.
- `concurrency` prevents overlapping Pages deployments from racing each other.

## Verification

- Run `npm run build` locally.
- Confirm the workflow YAML is present under `.github/workflows/`.
- After pushing to GitHub, verify that the Pages workflow publishes successfully.
