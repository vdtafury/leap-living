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

**Not built yet (later phases of the target architecture):** `src/app/admin/`, `src/app/api/`, `prisma/`, `storage/`, `scripts/`, `[slug]` property-detail pages and `/private-advisory`. Icons come from `lucide-react` and fonts from `@fontsource`, so `public/icons/` and `public/fonts/` are intentionally omitted.

## Navbar

The header is a flat, full-width horizontal bar with straight edges — a solid white surface and a single hairline bottom border that strengthens to `--teal-soft` on scroll. There is no capsule, no outer border radius, no floating gap and no shadow; the bar sits flush with the page so it reads as an architectural, editorial rule rather than a floating object. All geometry is driven by tokens on `.site-header` (`--header-h`, `--header-gap`, `--header-gutter`, `--header-side`, `--logo-w`, `--nav-gap`) and overridden per breakpoint instead of restating raw numbers. The container width matches the `.wrap` content grid, equal side columns keep the six links mathematically centred, and the active indicator uses the official brand teal `--brand-teal: #3B9EA1` (with `aria-current="page"`). `--header-clearance` drives `scroll-padding-top`, anchor `scroll-margin-top` and the toast offset so sticky content never overlaps. The Private Advisory button uses the shared `.button--compact` variant. On tablet and mobile the links collapse into the existing hamburger dropdown, which is attached flush to the bar's bottom edge as a flat panel. Navigation labels, links, the logo artwork, typography and all functionality are unchanged.

## Hero

The home hero uses a `next/image` `fill` photo, not a CSS background: `object-fit: cover` keeps the source proportions (no stretching), `object-position: center 0%` frames the skyline from the top, and a uniform `scale(1.3)` crops the streaked water reflection out of frame. `sizes="130vw"` matches that zoom so the browser requests a source at the real displayed width instead of upscaling a smaller variant; `next.config.ts` adds a 1440 `deviceSizes` step for the same reason. A single alpha mask on `.hero-media` dissolves the band into the white page, replacing the two stacked white overlays that previously produced a milky gradient. The left-to-right scrim is the only remaining overlay, so copy contrast is preserved without tinting the sunset. The featured-villa image is tucked flush beneath the header pill with a true rounded corner, a soft top blend, and its own responsive `sizes`; it sits above the transparent hero content layer so the `/buy` link stays clickable.

## Behaviour and rental availability

Home search pushes real URL parameters into `/buy` or `/rent`; the catalogue reads them, applies location/type/bedroom/price filters, supports price sorting, grid/list views, favourites, dossier and viewing requests, and shows a clear empty state. The rental inventory is intentionally empty until CRM availability is supplied: the `/rent` catalogue explains that status instead of showing sample listings. Buy and commercial records remain illustrative. All forms are front-end prototypes — no data leaves the browser and no backend or live listings feed is connected.

## Automated tests

Vitest and React Testing Library cover the property-category selector, rental empty state, and the acquisition filter-reset action. Add new tests alongside `tests/catalogue.test.tsx` as the listing experience evolves.

## Assets & licensing

Photography was downloaded from public web sources, cleaned up (cropped / resized / colour-graded) and stored in `public/`, so the site has no runtime dependency on an external image host. See [`public/images/ASSET-SOURCES.md`](public/images/ASSET-SOURCES.md) for per-file credits. Watermarked stock previews were replaced with clean Pexels photography.

> The property photos are editorial placeholders, not verified inventory, and the executive portrait is illustrative — it does not depict Mohab Samak. Replace all of it with approved LEAP LIVING assets before production.
