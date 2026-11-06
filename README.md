# LEAP LIVING

A responsive, light-themed, **English-only** real-estate advisory site built with Next.js App Router, React, TypeScript and locally bundled photography sourced from the web.

> **Language:** there is no i18n layer, no `[locale]` segment, no `messages/`, no `next-intl` config, no middleware language detection and no language switcher. All routes are flat (`/`, `/about`, `/buy`, …) and `<html lang="en">` is set in `src/app/layout.tsx`.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`. Use `npm run build` for a production build and `npx eslint .` to lint.

## Routes

| Route | Content |
| --- | --- |
| `/` | Home — "Unlock your next move" hero, Buy / Rent / Commercial search, company stats, three featured acquisitions, Discover · Decide · Move teaser and advisory CTAs. |
| `/about` | Company story, CEO message, Discover · Decide · Move methodology, commitments and developer partners. |
| `/buy` | Homes for sale with prices, bedrooms, bathrooms, square footage and property types; buyer journey and private-dossier flow. |
| `/rent` | Long-term rentals with monthly pricing, location, availability and key features; leasing journey. |
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
│   ├── properties/        components/PropertyCard, filters/Catalogue, data/listings
│   └── advisory/data/     methods, commitments, partners
├── config/            navigation.ts, site.ts, metadata.ts
├── types/             property.ts (canonical Category / Intent / Listing types)
└── lib/               reserved for backend services
```

`src/app/(website)/layout.tsx` wraps every public route in `SiteShell`, which owns the shared header, footer, favourites, toast notices, enquiry modal and mobile advisory CTA. Configuration lives in one place (`config/`), domain types in `types/`, and content in `features/`.

**Not built yet (later phases of the target architecture):** `src/app/admin/`, `src/app/api/`, `prisma/`, `storage/`, `scripts/`, `[slug]` property-detail pages and `/private-advisory`. Icons come from `lucide-react` and fonts from `@fontsource`, so `public/icons/` and `public/fonts/` are intentionally omitted.

## Navbar

The header is a floating white pill inside a fixed bar that is transparent at rest and gains a subtle white surface, border and shadow once the page scrolls. All geometry is driven by tokens on `.site-header` (`--header-h`, `--header-pad`, `--header-gap`, `--header-gutter`, `--header-radius`, `--header-side`, `--logo-w`, `--nav-gap`) and overridden per breakpoint instead of restating raw numbers. Equal side columns keep the six links mathematically centred, and the active indicator uses the official brand teal `--brand-teal: #3B9EA1` (with `aria-current="page"`). `--header-clearance` drives `scroll-padding-top`, anchor `scroll-margin-top` and the toast offset so sticky content never overlaps. The Private Advisory button uses the shared `.button--compact` variant. Navigation labels, links, the logo artwork and all functionality are unchanged.

## Behaviour

Home search pushes real URL parameters into `/buy` or `/rent`; the catalogue reads them, applies location/type/bedroom/price filters, supports price sorting, grid/list views, favourites, dossier and viewing requests, and shows a clear empty state. All forms are front-end prototypes — no data leaves the browser and no backend or live listings feed is connected.

## Assets & licensing

Photography was downloaded from public web sources, cleaned up (cropped / resized / colour-graded) and stored in `public/`, so the site has no runtime dependency on an external image host. See [`public/images/ASSET-SOURCES.md`](public/images/ASSET-SOURCES.md) for per-file credits. Watermarked stock previews were replaced with clean Pexels photography.

> The property photos are editorial placeholders, not verified inventory, and the executive portrait is illustrative — it does not depict Mohab Samak. Replace all of it with approved LEAP LIVING assets before production.
