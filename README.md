# LEAP LIVING

Responsive LEAP LIVING real-estate advisory homepage built with Next.js App Router, React, and TypeScript. The public website experience is English-only.

## Run locally

```bash
npm ci
npm run dev
```

Then open `http://localhost:3000`.

## Quality checks

```bash
npm test       # Vitest + React Testing Library
npm run build  # production build and type-check
npm audit      # dependency security audit
```

## Project structure

- `app/` — App Router page, metadata, and global design tokens/styles.
- `components/sections/` — Homepage sections, separated for easier changes.
- `components/` — Shared UI such as navigation, search, brand mark, and section headings.
- `lib/home-data.ts` — Typed homepage examples and category-data selection.
- `tests/` — Tests for search controls, navigation, favorites, and property categories.
- `public/images/ASSET-SOURCES.md` — Interim editorial photography credits and asset notes.

## CRM and assets

Search, property detail, and contact flows are currently UI placeholders; CRM/database integration is intentionally deferred. The rental category shows an explicit empty state until actual rental records are available. Buy properties are illustrative examples, not verified live inventory.

Photos are placeholders and should be replaced with approved LEAP LIVING assets before production. No authentic executive portrait or developer logo files were supplied; the leadership section uses architectural photography and partner names remain text wordmarks.
