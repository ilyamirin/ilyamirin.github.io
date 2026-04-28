# GitHub Pages Deploy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an official GitHub Actions workflow that builds the Astro site and deploys `dist/` to GitHub Pages on every push to `main`.

**Architecture:** A two-job GitHub Actions workflow will build the Astro site in Ubuntu, upload the build artifact, and deploy it via GitHub Pages' native deployment action. The existing Astro config remains unchanged because the repository is already configured for the `ilyamirin.github.io` user site URL.

**Tech Stack:** GitHub Actions, Node.js, npm, Astro

---

### Task 1: Add GitHub Pages workflow

**Files:**
- Create: `.github/workflows/deploy.yml`
- Test: local build via `npm run build`

- [ ] **Step 1: Create the deployment workflow**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Verify workflow file exists**

Run: `find .github/workflows -maxdepth 1 -type f | sort`
Expected: `.github/workflows/deploy.yml`

- [ ] **Step 3: Run the local build**

Run: `npm run build`
Expected: Astro completes successfully and writes the production site to `dist/`

- [ ] **Step 4: Review for unnecessary config changes**

Run: `sed -n '1,120p' astro.config.mjs`
Expected: Existing `site: "https://ilyamirin.github.io"` is sufficient for GitHub Pages user-site deployment, so no config edit is required
