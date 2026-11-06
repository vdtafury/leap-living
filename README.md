# LEAP LIVING — Multi-page site

A responsive, light-themed LEAP LIVING real-estate advisory site built with Next.js App Router, React, TypeScript and locally bundled photography sourced from the web.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Routes

| Route | Content |
| --- | --- |
| `/` | Home — "Unlock your next move" hero, Buy / Rent / Commercial search, company stats, three featured acquisitions, Discover · Decide · Move teaser and advisory CTAs. |
| `/about` | Company story, CEO message, Discover · Decide · Move methodology, commitments and developer partners. |
| `/buy` | Featured homes for sale with prices, bedrooms, bathrooms, square footage and property types; buyer journey and private-dossier flow. |
| `/rent` | Long-term rental listings with monthly pricing, location, availability and key features; leasing journey. |
| `/sell` | Valuation and selling-plan CTA, a prototype valuation request form and the selling process. |
| `/contact` | Name, email and message form, plus office, email, phone and opening-hours details. |

`app/layout.tsx` wraps every route in `components/AppShell.tsx`, which provides the shared floating navigation, active-link highlighting, mobile menu, EN/AR placeholder, favourites, toast notices, enquiry modals, mobile advisory CTA and footer. Shared data lives in `components/site-data.ts`; shared presentation components in `components/ui.tsx`; the reusable Buy/Rent filter catalogue in `components/Catalogue.tsx`.

Home search pushes real URL parameters into `/buy` or `/rent`; the catalogue reads them, applies location/type/bedroom/price filters, supports price sorting, grid/list views, favourites, dossier and viewing requests, and shows a clear empty state. All forms are front-end prototypes — no data leaves the browser and no backend or live listings feed is connected.

## Assets

Photography was downloaded from public web sources, cleaned up (cropped / resized / colour-graded) and stored in `public/images/`, so the site has no runtime dependency on an external image host. See [`public/images/ASSET-SOURCES.md`](public/images/ASSET-SOURCES.md) for credits. Watermarked stock previews were replaced with clean Pexels photography during the multi-page refresh.

> The property photos are editorial placeholders, not verified inventory, and the executive portrait is illustrative — it does not depict Mohab Samak. Replace all of it with approved LEAP LIVING assets before production.
