# LEAP LIVING — Homepage

A responsive, light-themed LEAP LIVING real-estate advisory homepage built with Next.js App Router, React, TypeScript and locally bundled photography sourced from the web.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## What's on the page

- Floating white pill navigation with dark wordmark, EN/AR switch and private-advisory CTA; collapses to a mobile menu.
- Light hero with Dubai skyline photography, curved-villa accent, search card (Buy / Rent / Commercial + location, type, bedrooms and price filters) that actually filters the portfolio.
- Company statistics, the Discover · Decide · Move methodology with architectural photography, and the five core commitments.
- Featured property catalogue with Buy / Rent / Commercial tabs, sort, grid/list views, favourites, private-dossier and viewing request dialogs, and an empty state.
- Off-market enquiry band, CEO message with credentials, developer partner wordmarks, selling & valuation CTA and a full footer.
- Working UI state throughout: client-side search, filter chips, sorting, favourites, toast notices, language placeholder and an accessible enquiry modal. No backend or live listings service is connected.

## Assets

Photography was downloaded from public web sources, cleaned up (cropped / resized / colour-graded) and stored in `public/images/`, so the site has no runtime dependency on an external image host. See [`public/images/ASSET-SOURCES.md`](public/images/ASSET-SOURCES.md) for credits.

> The property photos are editorial placeholders, not verified inventory, and the executive portrait is illustrative — it does not depict Mohab Samak. Replace all of it with approved LEAP LIVING assets before production.
