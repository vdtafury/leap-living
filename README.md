# LEAP LIVING

A responsive, light-themed, **English-only** real-estate advisory site built with Next.js App Router, React, TypeScript and locally bundled photography sourced from the web.

> **Language:** there is no i18n layer, no `[locale]` segment, no `messages/`, no `next-intl` config, no middleware language detection and no language switcher. All routes are flat (`/`, `/about`, `/buy`, …) and `<html lang="en">` is set in `src/app/layout.tsx`.

## Run locally

```bash
npm ci
npm run dev
```

Then open `http://localhost:3000`.

## Quality checks

```bash
npm test
npm run build
npx eslint .
npm audit
```

## Routes

| Route | Content |
| --- | --- |
| `/` | Home — "Unlock your next move" hero, Buy / Rent / Commercial search, company stats, three featured acquisitions, Discover · Decide · Move teaser and advisory CTAs. |
| `/about` | Company story, CEO message, Discover · Decide · Move methodology, commitments and developer partners. |
| `/buy` | Homes for sale with prices, bedrooms, bathrooms, square footage and property types; buyer journey and private-dossier flow. |
| `/buy/[id]` | Statically generated property details, enquiry, viewing and favourite actions for every existing listing. |
| `/privacy` | Privacy information for the current front-end prototype. |
| `/terms` | Website and illustrative-portfolio terms of use. |
| `/rent` | Leasing advisory content with an explicit empty state until CRM-backed rental availability is connected. |
| `/sell` | Valuation and selling-plan CTA, a prototype valuation form and the selling process. |
| `/contact` | Name, email and message form, plus office, email, phone and opening-hours details. |

A custom `src/app/not-found.tsx` handles unknown paths inside the shared `SiteShell` (header and footer included). The hero's rounded villa image is a linked **featured-property visual** with a "Featured Residence · Palm Jumeirah" caption that leads to `/buy`.

## Structure

```
public/
├── brand/            brand-dark.png, brand-light.png, leap-living-logo.png
└── images/
    ├── hero/         photography used in heroes and CTA bands
    ├── properties/   illustrative listing photography
    ├── leadership/   CEO portrait
    ├── methodology/  Discover · Decide · Move imagery
    └── ASSET-SOURCES.md

src/
├── app/
│   ├── (website)/    six public routes + layout.tsx (shared SiteShell)
│   ├── layout.tsx    <html lang="en">, root metadata, globals.css
│   ├── globals.css
│   ├── not-found.tsx
│   └── favicon.ico
├── components/
│   ├── layout/       SiteShell, SiteContext, Header, Footer, Navigation,
│   │                 MobileNavigation, BrandMark
│   ├── ui/           Modal (enquiry dialog)
│   └── shared/       SectionHeader, Breadcrumbs, PageHero, CtaBand, Steps, PartnersRow
├── features/
│   ├── home/data/         home approach content
│   ├── properties/        components, filters/Catalogue, data/listings + category helper
│   └── advisory/data/     methods, commitments, partners
├── config/            navigation.ts, site.ts, metadata.ts
├── types/             property.ts (canonical Category / Intent / Listing types)
└── lib/               reserved for backend services

tests/                  catalogue/category empty-state tests
```

`src/app/(website)/layout.tsx` wraps every public route in `SiteShell`, which owns the shared header, footer, favourites, toast notices, enquiry modal and mobile advisory CTA. Configuration lives in one place (`config/`), domain types in `types/`, and content in `features/`.

**Not built yet (later phases of the target architecture):** `src/app/admin/`, `src/app/api/`, `prisma/`, `storage/`, `scripts/` and `/private-advisory`. Icons come from `lucide-react` and fonts from `@fontsource`, so `public/icons/` and `public/fonts/` are intentionally omitted.

## Navbar

The header is a flat, editorial navigation bar with the six existing routes and Private Advisory action. On the homepage it sits over the dark architectural hero and becomes a white, subtly shadowed bar after scrolling; internal routes use the white surface immediately. The mobile menu is keyboard-dismissible and the active route retains `aria-current="page"`. There is no language switcher. Shared header and footer styling lives in `src/components/layout/chrome.css`.

## Hero

The home hero is a full-width, dark Dubai skyline composition with editorial white typography, a compact Palm Jumeirah feature visual, consultation actions, and an overlapping search panel. Search supports Buy, Rent and Commercial intent plus free-text location, community or developer matching, property type and price bounds. The homepage then follows the reference order: credibility metrics, Discover · Decide · Move cards, tabbed featured properties, executive leadership, developer partners and the selling CTA. Homepage-specific responsive styling lives in `src/app/(website)/home.css`. Property cards link to statically generated `/buy/[id]` detail pages while preserving dossier, viewing and favourite actions.

## Behaviour and rental availability

Home search pushes real URL parameters into `/buy` or `/rent`; the catalogue reads them, applies location/type/bedroom/price filters, supports price sorting, grid/list views, favourites, dossier and viewing requests, and shows a clear empty state. The rental inventory is intentionally empty until CRM availability is supplied: the `/rent` catalogue explains that status instead of showing sample listings. Buy and commercial records remain illustrative. All forms are front-end prototypes — no data leaves the browser and no backend or live listings feed is connected.

## Automated tests

Vitest and React Testing Library cover the property-category selector, rental empty state, and the acquisition filter-reset action. Add new tests alongside `tests/catalogue.test.tsx` as the listing experience evolves.

## Assets & licensing

Photography was downloaded from public web sources, cleaned up (cropped / resized / colour-graded) and stored in `public/`, so the site has no runtime dependency on an external image host. See [`public/images/ASSET-SOURCES.md`](public/images/ASSET-SOURCES.md) for per-file credits. Watermarked stock previews were replaced with clean Pexels photography.

> The property photos and records remain editorial placeholders, not verified inventory. The leadership section uses an authentic corporate press photograph of Mohab Samak, credited in `public/images/ASSET-SOURCES.md`. Replace illustrative listing assets with approved LEAP LIVING inventory before production.
