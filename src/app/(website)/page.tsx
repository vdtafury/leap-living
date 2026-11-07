"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import {
  ArrowRight, ArrowUpRight, BarChart3, Building2, Check, ChevronDown, Clock3,
  Compass, KeyRound, Layers3, MapPin, Search, ShieldCheck, SlidersHorizontal, Users,
} from "lucide-react";
import { useSite } from "@/components/layout/SiteContext";
import { CtaBand } from "@/components/shared/CtaBand";
import { PartnersRow } from "@/components/shared/PartnersRow";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PropertyCard } from "@/features/properties/components/PropertyCard";
import { listings, locations, propertyTypes } from "@/features/properties/data/listings";
import { homeApproach } from "@/features/home/data/content";
import { methods } from "@/features/advisory/data/methods";
import { stats } from "@/config/site";
import type { Category, Intent } from "@/types/property";
import "./home.css";

type Filters = { location: string; type: string; min: string; max: string };
const emptyFilters: Filters = { location: "", type: "All Types", min: "", max: "" };
const statIcons = [Clock3, Layers3, ShieldCheck, Users];
const methodIcons = [Search, BarChart3, Check];
const developers = [...new Set(listings.map((item) => item.developer))];

export default function HomePage() {
  const router = useRouter();
  const { openModal } = useSite();
  const [intent, setIntent] = useState<Intent>("Buy");
  const [draft, setDraft] = useState<Filters>(emptyFilters);
  const [featuredCategory, setFeaturedCategory] = useState<Extract<Category, "buy" | "rent">>("buy");

  const runSearch = (event: FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (draft.location.trim()) params.set("location", draft.location.trim());
    if (draft.type !== "All Types") params.set("type", draft.type);
    if (draft.min) params.set("min", draft.min);
    if (draft.max) params.set("max", draft.max);
    if (intent === "Commercial") params.set("category", "commercial");
    const base = intent === "Rent" ? "/rent" : "/buy";
    router.push(params.toString() ? `${base}?${params.toString()}` : base);
  };

  const featuredListings = listings.filter((item) => item.category === featuredCategory).slice(0, 3);

  return <>
    <section className="hero" aria-label="LEAP LIVING real estate advisory">
      <div className="hero-media">
        <Image className="hero-photo" src="/images/hero/hero-skyline.jpg" alt="Dubai skyline and Burj Khalifa at sunset across the water" fill priority quality={85} sizes="100vw" />
        <div className="hero-fade" />
      </div>

      <Link className="hero-villa" href="/buy/LL-PJ-048" aria-label="Inspect the featured residence in Palm Jumeirah">
        <Image src="/images/hero/hero-palm-jumeirah.jpg" alt="Waterfront villas on Palm Jumeirah, Dubai" fill quality={85} sizes="(max-width: 1040px) 40vw, 480px" />
        <span className="hero-villa-label"><span>Featured Residence <b>·</b> Palm Jumeirah</span><ArrowUpRight size={16} /></span>
      </Link>

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">CERTAINTY THROUGH PRECISION <span /></p>
          <h1>Unlock your<br />next move</h1>
          <p className="hero-lead">In a market driven by noise and speculation, Leap Living brings institutional clarity, strategic foresight, and over two decades of Dubai real estate leadership to high-value property decisions.</p>
          <Link className="hero-badge" href="/about"><Building2 size={16} /> EXCLUSIVE DEVELOPER REPRESENTATION <b>·</b> PRIME DUBAI PORTFOLIOS</Link>
          <div className="hero-actions">
            <button className="button button-teal" onClick={() => openModal({ kind: "consultation" })}>Schedule Strategic Consultation <ArrowRight size={17} /></button>
            <Link className="button hero-button-ghost" href="/buy">Explore Properties <ArrowUpRight size={17} /></Link>
          </div>
        </div>

        <form className="search-card" onSubmit={runSearch}>
          <div className="search-tabs" aria-label="Property intent">
            {(["Buy", "Rent", "Commercial"] as Intent[]).map((item) => <button key={item} type="button" aria-pressed={intent === item} className={intent === item ? "selected" : ""} onClick={() => setIntent(item)}>
              {item === "Buy" ? <KeyRound size={16} /> : item === "Rent" ? <Compass size={16} /> : <Building2 size={16} />}{item}
            </button>)}
          </div>
          <div className="search-fields">
            <label className="field search-location"><span><MapPin size={14} /> LOCATION / COMMUNITY / DEVELOPER</span><div className="select-shell"><MapPin size={15} /><input list="home-location-options" aria-label="Location, community or developer" placeholder="e.g. Downtown Dubai, Palm Jumeirah, EMAAR" value={draft.location} onChange={(event) => setDraft({ ...draft, location: event.target.value })} /></div></label>
            <datalist id="home-location-options">{locations.slice(1).map((option) => <option key={option} value={option} />)}{developers.map((option) => <option key={option} value={option} />)}</datalist>
            <label className="field"><span><Building2 size={14} /> PROPERTY TYPE</span><div className="select-shell"><select aria-label="Property type" value={draft.type} onChange={(event) => setDraft({ ...draft, type: event.target.value })}>{propertyTypes.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={15} /></div></label>
            <label className="field"><span><SlidersHorizontal size={14} /> MINIMUM PRICE (AED)</span><div className="select-shell"><input aria-label="Minimum price" inputMode="numeric" placeholder="Min Price" value={draft.min} onChange={(event) => setDraft({ ...draft, min: event.target.value })} /></div></label>
            <label className="field"><span><SlidersHorizontal size={14} /> MAXIMUM PRICE (AED)</span><div className="select-shell"><input aria-label="Maximum price" inputMode="numeric" placeholder="Max Price" value={draft.max} onChange={(event) => setDraft({ ...draft, max: event.target.value })} /></div></label>
            <button className="button button-teal search-submit" type="submit">Explore Verified Properties <ArrowRight size={17} /></button>
          </div>
        </form>
      </div>
    </section>

    <section className="stats-strip" aria-label="Company at a glance"><div className="wrap stats-inner">
      {stats.map((stat, index) => { const Icon = statIcons[index]; return <div className="stat" key={stat.value}><span className="stat-icon"><Icon size={25} strokeWidth={1.45} /></span><div><strong>{stat.value}</strong><p>{stat.text}</p></div></div>; })}
    </div></section>

    <section className="method-section section-pad"><div className="wrap">
      <SectionHeader eyebrow="OUR ADVISORY METHODOLOGY" title="A Disciplined Approach to Real Estate" supporting="Discover · Decide · Move" />
      <div className="method-grid">{methods.map(({ number, title, image, alt }, index) => { const Icon = methodIcons[index]; return <article className="method-card" key={number}>
        <div className="method-image"><Image src={image} alt={alt} fill sizes="(max-width: 760px) 32vw, 12vw" /></div>
        <div className="method-content"><div className="method-topline"><span><b>{number}</b> · {title}</span><Icon size={19} strokeWidth={1.6} /></div><p>{homeApproach[index].text}</p></div>
      </article>; })}</div>
    </div></section>

    <section className="home-featured section-pad"><div className="wrap">
      <div className="properties-top">
        <SectionHeader eyebrow="CURATED PROPERTIES" title="Featured Properties" />
        <div className="category-switch" aria-label="Featured property category">
          <button aria-pressed={featuredCategory === "buy"} className={featuredCategory === "buy" ? "selected" : ""} onClick={() => setFeaturedCategory("buy")}>Featured Acquisitions (Buy)</button>
          <button aria-pressed={featuredCategory === "rent"} className={featuredCategory === "rent" ? "selected" : ""} onClick={() => setFeaturedCategory("rent")}>Prime Residences (Rent)</button>
        </div>
      </div>
      {featuredListings.length > 0
        ? <div className="property-grid home-property-grid">{featuredListings.map((item) => <PropertyCard key={item.id} item={item} featured />)}</div>
        : <div className="home-rent-empty"><Building2 size={26} /><div><h3>Rental residences are being curated</h3><p>Current rental availability will be published once connected to the live portfolio. Our advisors can source a private shortlist for your requirement.</p></div><Link className="text-link" href="/contact">Speak With a Leasing Advisor <ArrowRight size={16} /></Link></div>}
      <div className="home-featured-links"><Link className="button button-outline" href="/buy">View Complete Buy Catalogue <ArrowRight size={16} /></Link><Link className="button button-outline" href="/rent">View Complete Rental Catalogue <ArrowRight size={16} /></Link></div>
    </div></section>

    <section className="home-leadership"><div className="wrap home-leadership-grid">
      <div className="home-leadership-photo"><Image src="/images/leadership/mohab-samak.jpg" alt="Mohab Samak, Founder and CEO of LEAP LIVING" fill sizes="(max-width: 760px) 100vw, 32vw" /></div>
      <div className="home-leadership-quote"><p className="eyebrow">EXECUTIVE LEADERSHIP <span /></p><blockquote>“Informed decisions create exceptional outcomes. Every property decision carries financial, strategic, and personal significance. Our responsibility is to ensure clients have clarity and insight.”</blockquote><strong>Mohab Samak</strong><span>Founder &amp; CEO</span></div>
      <div className="home-leadership-bio"><p>A real estate leader with over two decades of experience shaping Dubai&apos;s skyline, including leadership roles at Emaar Properties, Hamptons International, Engel &amp; Völkers Dubai, and Coldwell Banker.</p><Link className="text-link" href="/about">Read Company Profile &amp; Approach <ArrowRight size={16} /></Link></div>
    </div></section>

    <div className="home-partners"><PartnersRow /></div>

    <div className="home-selling"><CtaBand variant="photo" eyebrow="PRIVATE SELLING & VALUATION ADVISORY" title="Thinking of Selling or Repositioning Your Prime Asset?" text="Receive an objective, data-backed commercial valuation and a discreet private marketing plan tailored for institutional and private capital." button="Request Valuation & Selling Plan" onClick={() => openModal({ kind: "valuation" })} secondaryButton="Speak Directly with an Advisor" secondaryOnClick={() => openModal({ kind: "consultation" })} /></div>
  </>;
}
