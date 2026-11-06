"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import {
  ArrowRight, ArrowUpRight, Building2, ChevronDown, Clock3, Compass, KeyRound,
  Layers3, MapPin, ShieldCheck, SlidersHorizontal, Users,
} from "lucide-react";
import { useSite } from "@/components/layout/SiteContext";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PropertyCard } from "@/features/properties/components/PropertyCard";
import { bedroomOptions, listings, locations, propertyTypes } from "@/features/properties/data/listings";
import { homeApproach } from "@/features/home/data/content";
import { stats } from "@/config/site";
import type { Intent } from "@/types/property";

type Filters = { location: string; type: string; beds: string; min: string; max: string };
const emptyFilters: Filters = { location: "All Locations", type: "All Types", beds: "Any", min: "", max: "" };

const statIcons = [Clock3, Layers3, ShieldCheck, Users];

export default function HomePage() {
  const router = useRouter();
  const { openModal } = useSite();
  const [intent, setIntent] = useState<Intent>("Buy");
  const [draft, setDraft] = useState<Filters>(emptyFilters);

  const runSearch = (event: FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (draft.location !== "All Locations") params.set("location", draft.location);
    if (draft.type !== "All Types") params.set("type", draft.type);
    if (draft.beds !== "Any") params.set("beds", draft.beds);
    if (draft.min) params.set("min", draft.min);
    if (draft.max) params.set("max", draft.max);
    if (intent === "Commercial") params.set("category", "commercial");
    const base = intent === "Rent" ? "/rent" : "/buy";
    router.push(params.toString() ? `${base}?${params.toString()}` : base);
  };

  return <>
    {/* -------------------------------------------------------------- hero */}
    <section className="hero" aria-label="LEAP LIVING real estate advisory">
      <div className="hero-media">
        <Image className="hero-photo" src="/images/hero/hero-skyline.jpg" alt="Dubai skyline and Burj Khalifa under a clear blue sky" fill priority quality={85} sizes="100vw" />
        <div className="hero-fade" />
      </div>
      <Link className="hero-villa" href="/buy" aria-label="Explore the featured residence in the Buy catalogue">
        <Image src="/images/hero/hero-villa.jpg" alt="Curved contemporary villa with warm interior lighting and landscaped gardens" fill quality={85} sizes="(max-width: 1040px) 38vw, 420px" />
        <span className="hero-villa-label">Featured Residence <b>·</b> Palm Jumeirah <ArrowUpRight size={13} /></span>
      </Link>

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">CERTAINTY THROUGH PRECISION <span /></p>
          <h1>Unlock your<br />next move</h1>
          <p className="hero-lead">In a market driven by noise and speculation, Leap Living brings institutional clarity, strategic foresight, and over two decades of Dubai real estate leadership to high-value property decisions.</p>
          <Link className="hero-badge" href="/about"><Building2 size={15} /> EXCLUSIVE DEVELOPER REPRESENTATION <b>·</b> PRIME DUBAI PORTFOLIOS</Link>
          <div className="hero-actions">
            <button className="button button-teal" onClick={() => openModal({ kind: "consultation" })}>Schedule Strategic Consultation <ArrowRight size={17} /></button>
            <Link className="button button-ghost" href="/buy">Explore Properties <ArrowUpRight size={17} /></Link>
          </div>
        </div>

        <form className="search-card" onSubmit={runSearch}>
          <div className="search-tabs" role="tablist" aria-label="Property intent">
            {(["Buy", "Rent", "Commercial"] as Intent[]).map((item) => <button key={item} type="button" role="tab" aria-selected={intent === item} className={intent === item ? "selected" : ""} onClick={() => setIntent(item)}>
              {item === "Buy" ? <KeyRound size={15} /> : item === "Rent" ? <Compass size={15} /> : <Building2 size={15} />}{item}
            </button>)}
          </div>
          <div className="search-fields">
            <label className="field"><span><MapPin size={14} /> LOCATION / COMMUNITY</span><div className="select-shell"><select value={draft.location} onChange={(e) => setDraft({ ...draft, location: e.target.value })}>{locations.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={15} /></div></label>
            <label className="field"><span><Building2 size={14} /> PROPERTY TYPE</span><div className="select-shell"><select value={draft.type} onChange={(e) => setDraft({ ...draft, type: e.target.value })}>{propertyTypes.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={15} /></div></label>
            <label className="field"><span><Layers3 size={14} /> BEDROOMS</span><div className="select-shell"><select value={draft.beds} onChange={(e) => setDraft({ ...draft, beds: e.target.value })}>{bedroomOptions.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={15} /></div></label>
            <fieldset className="field price-field"><legend><SlidersHorizontal size={14} /> {intent === "Rent" ? "MONTHLY RENT (AED)" : "PRICE RANGE (AED)"}</legend><div className="price-inputs"><input aria-label="Minimum price" inputMode="numeric" placeholder="Min Price" value={draft.min} onChange={(e) => setDraft({ ...draft, min: e.target.value })} /><i>—</i><input aria-label="Maximum price" inputMode="numeric" placeholder="Max Price" value={draft.max} onChange={(e) => setDraft({ ...draft, max: e.target.value })} /></div></fieldset>
            <button className="button button-teal search-submit" type="submit">Search Properties <ArrowRight size={16} /></button>
          </div>
        </form>
      </div>
    </section>

    {/* ------------------------------------------------------------- stats */}
    <section className="stats-strip" aria-label="Company at a glance"><div className="wrap stats-inner">
      {stats.map((stat, index) => { const Icon = statIcons[index]; return <div className="stat" key={stat.value}><span className="stat-icon"><Icon size={27} strokeWidth={1.5} /></span><div><strong>{stat.value}</strong><p>{stat.text}</p></div></div>; })}
    </div></section>

    {/* -------------------------------------------------- featured properties */}
    <section className="home-featured section-pad"><div className="wrap">
      <div className="properties-top">
        <SectionHeader eyebrow="CURATED PROPERTIES" title="Featured Properties" supporting="A selection of prime acquisition opportunities, each vetted for location durability, developer track record and long-term capital preservation." />
        <Link className="text-link" href="/buy">View All Properties <ArrowRight size={17} /></Link>
      </div>
      <div className="property-grid">{listings.filter((item) => item.category === "buy").slice(0, 3).map((item) => <PropertyCard key={item.id} item={item} />)}</div>
      <div className="home-featured-links"><Link href="/buy">Explore the Buy Catalogue <ArrowRight size={16} /></Link><Link href="/rent">Explore Rental Residences <ArrowRight size={16} /></Link></div>
    </div></section>

    {/* --------------------------------------------------- approach teaser */}
    <section className="commitments-section"><div className="wrap">
      <SectionHeader eyebrow="OUR ADVISORY METHODOLOGY" title="A Disciplined Approach to Real Estate" supporting="Discover · Decide · Move" centered />
      <div className="home-approach">
        {homeApproach.map(({ number, title, text }) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
      <div className="center-link"><Link className="text-link" href="/about">Read Our Company Profile &amp; Approach <ArrowRight size={17} /></Link></div>
    </div></section>

    {/* --------------------------------------------------------- off-market */}
    <CtaBand variant="photo" eyebrow="PRIVATE & OFF-MARKET ACCESS" title="Looking for Off-Market or Institutional Acquisitions?" text="A substantial portion of Dubai's ultra-prime transactions occur privately. Leap Living maintains discreet, direct access to unlisted penthouses, private island plots, and full-building opportunities." button="Inquire for Private Off-Market Portfolio" onClick={() => openModal({ kind: "offmarket" })} />

    {/* --------------------------------------------------------- final CTA */}
    <CtaBand eyebrow="BEGIN YOUR PROPERTY JOURNEY" title="Begin Your Property Journey with Certainty." text="Schedule a confidential consultation with Founder & CEO Mohab Samak and the Leap Living advisory team." button="Schedule Strategic Consultation" href="/contact" />
  </>;
}
