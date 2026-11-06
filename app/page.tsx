"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, BedDouble, Building2, Check, ChevronDown,
  Compass, Eye, Heart, KeyRound, Layers3, MapPin, Menu, Phone, Search, ShieldCheck,
  SlidersHorizontal, X,
} from "lucide-react";

type Property = {
  name: string; location: string; price: string; beds: number; baths: number; area: string;
  view: string; badge: string; image: string; alt: string;
};

const properties: Property[] = [
  { name: "The Grand Opera Penthouse", location: "Downtown Dubai", price: "AED 8,500,000", beds: 4, baths: 5, area: "4,250 sq.ft", view: "Burj Khalifa View", badge: "Exclusive Advisory", image: "/images/property-penthouse.jpg", alt: "Contemporary penthouse interior with expansive glazing and sea views" },
  { name: "Palm Jumeirah Signature Villa", location: "Palm Jumeirah", price: "AED 38,000,000", beds: 6, baths: 7, area: "8,900 sq.ft", view: "Sea View", badge: "Off-Plan Handover 2027", image: "/images/property-villa.jpg", alt: "Contemporary Palm Jumeirah villa surrounded by landscaped gardens" },
  { name: "Emaar Beachfront Residences", location: "Emaar Beachfront", price: "AED 5,200,000", beds: 3, baths: 4, area: "2,350 sq.ft", view: "Marina View", badge: "Fully Furnished", image: "/images/property-residence.jpg", alt: "Light-filled contemporary residence with an ocean-facing living area" },
];

const methods = [
  { number: "01", title: "Discover", text: "Proprietary market access, unlisted opportunities, and verified intelligence beyond public sentiment.", icon: Search, image: "/images/method-discover.jpg", alt: "Geometric glass facade in warm light" },
  { number: "02", title: "Decide", text: "Objective commercial evaluation, yield modeling, risk analysis, and alignment to your capital strategy.", icon: SlidersHorizontal, image: "/images/method-decide.jpg", alt: "Modern architectural detail viewed from below" },
  { number: "03", title: "Move", text: "Disciplined negotiation, seamless transaction execution, and enduring asset stewardship.", icon: Check, image: "/images/method-move.jpg", alt: "Contemporary architectural facade" },
];

const partners = ["EMAAR", "NAKHEEL", "MERAAS", "SOBHA", "OMNIYAT", "DUBAI HOLDING"];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return <a className={`brand-mark${compact ? " brand-mark--compact" : ""}`} href="#top" aria-label="LEAP LIVING home">
    <span className="brand-logo-crop"><Image src="/images/leap-living-logo.png" alt="LEAP LIVING" width={200} height={200} priority /></span>
    {!compact && <span className="brand-sub">REAL ESTATE<br />CONSULTANCY</span>}
  </a>;
}

function SectionHeading({ eyebrow, title, supporting }: { eyebrow: string; title: string; supporting?: string }) {
  return <div className="section-heading">
    <p className="eyebrow">{eyebrow}<span /></p>
    <h2>{title}</h2>
    {supporting && <p className="section-supporting">{supporting}</p>}
  </div>;
}

export default function Home() {
  const [intent, setIntent] = useState("Buy");
  const [category, setCategory] = useState("buy");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [scrolled, setScrolled] = useState(false);
  const [searchNotice, setSearchNotice] = useState("");
  const [catalogueNotice, setCatalogueNotice] = useState("");
  const [languageNotice, setLanguageNotice] = useState("");
  const [searchData, setSearchData] = useState({ location: "", type: "All property types", min: "", max: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [ ["Home", "#top"], ["About", "#about"], ["Buy", "#properties"], ["Rent", "#properties"], ["Sell", "#valuation"], ["Contact", "#contact"] ];
  const toggleFavorite = (name: string) => setFavorites((saved) => saved.includes(name) ? saved.filter((item) => item !== name) : [...saved, name]);

  return <main id="top">
    <section className="hero" aria-label="LEAP LIVING real estate advisory">
      <Image className="hero-image" src="/images/hero-palm.jpg" alt="Dubai skyline beyond the calm waters of Palm Jumeirah" fill priority sizes="100vw" />
      <div className="hero-scrim" />
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="header-inner">
          <BrandMark />
          <span className="header-divider" />
          <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            {nav.map(([label, href], i) => <a key={label} className={i === 0 ? "active" : ""} href={href} onClick={() => { if (label === "Rent") { setCategory("rent"); setCatalogueNotice("Rental catalogue is not connected yet. Showing the available acquisition portfolio."); } setMenuOpen(false); }}>{label}</a>)}
            <div className="mobile-language-switch"><button className={language === "EN" ? "selected" : ""} onClick={() => { setLanguage("EN"); setLanguageNotice(""); }}>EN</button><span>/</span><button className={language === "AR" ? "selected" : ""} onClick={() => { setLanguage("AR"); setLanguageNotice("Arabic edition is coming soon. You are viewing the English experience."); }}>AR</button></div>
          </nav>
          <div className="header-actions">
            <div className="language-switch" aria-label="Choose language">
              <button className={language === "EN" ? "selected" : ""} onClick={() => { setLanguage("EN"); setLanguageNotice(""); }}>EN</button><i />
              <button className={language === "AR" ? "selected" : ""} onClick={() => { setLanguage("AR"); setLanguageNotice("Arabic edition is coming soon. You are viewing the English experience."); }}>AR</button>
            </div>
            <a className="button button-teal header-cta" href="#contact">Private Advisory <ArrowRight size={17} /></a>
          </div>
        </div>
      </header>
      {languageNotice && <div className="language-notice" role="status">{languageNotice}<button onClick={() => setLanguageNotice("")} aria-label="Dismiss message"><X size={14} /></button></div>}
      <div className="hero-copy wrap">
        <p className="hero-eyebrow">CERTAINTY THROUGH PRECISION <span /></p>
        <h1>Unlock your<br />next move</h1>
        <p className="hero-description">In a market driven by noise and speculation, Leap Living brings institutional clarity, strategic foresight, and over two decades of Dubai real estate leadership to high-value property decisions.</p>
        <a className="hero-badge" href="#partners"><Building2 size={16} /> Exclusive Developer Representation <b>·</b> Prime Dubai Portfolios</a>
      </div>
      <div className="search-wrap wrap">
        <form className="property-search" onSubmit={(event) => { event.preventDefault(); setSearchNotice("Your search criteria are ready. Connect the verified listings service to view live results."); }}>
          <div className="search-tabs" role="tablist" aria-label="Property intent">
            {["Buy", "Rent", "Commercial"].map((item) => <button type="button" role="tab" aria-selected={intent === item} className={intent === item ? "selected" : ""} key={item} onClick={() => setIntent(item)}>{item === "Buy" ? <KeyRound size={15} /> : item === "Rent" ? <Compass size={15} /> : <Building2 size={15} />}{item}</button>)}
          </div>
          <div className="search-fields">
            <label className="search-field location-field"><span>Location, Community or Developer</span><div className="input-shell"><MapPin size={16} /><input value={searchData.location} onChange={(e) => setSearchData({ ...searchData, location: e.target.value })} placeholder="e.g. Downtown Dubai, Palm Jumeirah" /></div></label>
            <label className="search-field type-field"><span>Property Type</span><div className="input-shell"><select value={searchData.type} onChange={(e) => setSearchData({ ...searchData, type: e.target.value })}><option>All property types</option><option>Apartment</option><option>Villa</option><option>Penthouse</option><option>Townhouse</option><option>Commercial</option></select><ChevronDown size={16} /></div></label>
            <fieldset className="search-field price-field"><legend>Price Range (AED)</legend><div className="price-inputs"><input aria-label="Minimum price" inputMode="numeric" placeholder="Min Price" value={searchData.min} onChange={(e) => setSearchData({ ...searchData, min: e.target.value })} /><input aria-label="Maximum price" inputMode="numeric" placeholder="Max Price" value={searchData.max} onChange={(e) => setSearchData({ ...searchData, max: e.target.value })} /></div></fieldset>
            <button className="button button-teal search-submit" type="submit">Explore Verified<br className="desktop-break" /> Properties <ArrowRight size={17} /></button>
          </div>
          {searchNotice && <p className="form-notice" role="status">{searchNotice}<button type="button" onClick={() => setSearchNotice("")} aria-label="Dismiss message"><X size={14} /></button></p>}
        </form>
      </div>
    </section>

    <section className="stats-strip" aria-label="Company at a glance"><div className="stats-inner wrap">
      <div className="stat"><span className="stat-icon"><Building2 /></span><div><strong>21+ Years</strong><p>UAE Real Estate Leadership<br />(Since 2005)</p></div></div>
      <div className="stat"><span className="stat-icon"><Layers3 /></span><div><strong>AED 12B+</strong><p>Landmark Development<br />Commercialization</p></div></div>
      <div className="stat"><span className="stat-icon"><ShieldCheck /></span><div><strong>100% Fiduciary</strong><p>Long-Term Advisory vs.<br />Short-Term Transactional Brokerage</p></div></div>
      <div className="stat"><span className="stat-icon"><ArrowUpRight /></span><div><strong>Direct Access</strong><p>Institutional Developers, Family Offices,<br />and Government Stakeholders</p></div></div>
    </div></section>

    <section className="method-section section-pad" id="methodology"><div className="wrap">
      <SectionHeading eyebrow="OUR ADVISORY METHODOLOGY" title="A Disciplined Approach to Real Estate" supporting="Discover · Decide · Move" />
      <div className="method-grid">{methods.map(({ number, title, text, icon: Icon, image, alt }) => <article className="method-card" key={number}>
        <div className="method-image"><Image src={image} alt={alt} fill sizes="(max-width: 760px) 100vw, 30vw" /></div>
        <div className="method-content"><div className="method-topline"><span>{number} · {title}</span><span className="method-icon"><Icon size={21} /></span></div><p>{text}</p></div>
      </article>)}</div>
    </div></section>

    <section className="properties-section section-pad" id="properties"><div className="wrap">
      <div className="properties-heading"><SectionHeading eyebrow="CURATED PROPERTIES" title="Featured Properties" /><div className="category-switch" role="tablist" aria-label="Property category">
        <button role="tab" aria-selected={category === "buy"} className={category === "buy" ? "selected" : ""} onClick={() => { setCategory("buy"); setCatalogueNotice(""); }}>Featured Acquisitions (Buy)</button>
        <button role="tab" aria-selected={category === "rent"} className={category === "rent" ? "selected" : ""} onClick={() => { setCategory("rent"); setCatalogueNotice("Rental catalogue is not connected yet. Showing the available acquisition portfolio."); }}>Prime Residences (Rent)</button>
      </div></div>
      <div className="property-grid">{properties.map((property) => <article className="property-card" key={property.name}>
        <div className="property-photo"><Image src={property.image} alt={property.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /><span className="property-badge">{property.badge}</span><button className={`favorite${favorites.includes(property.name) ? " saved" : ""}`} onClick={() => toggleFavorite(property.name)} aria-label={`${favorites.includes(property.name) ? "Remove" : "Save"} ${property.name}`} aria-pressed={favorites.includes(property.name)}><Heart size={19} fill={favorites.includes(property.name) ? "currentColor" : "none"} /></button></div>
        <div className="property-info"><p className="property-location"><MapPin size={14} />{property.location}</p><h3>{property.name}</h3><p className="property-price">{property.price}</p>
          <div className="specs"><span><BedDouble size={15} /> {property.beds} Beds</span><span><span className="bath-icon">▤</span> {property.baths} Baths</span><span><Layers3 size={14} /> {property.area}</span></div>
          <p className="view-line"><Eye size={15} /> {property.view}</p>
          <a className="details-link" href="#contact">Inspect Property Details <ArrowRight size={17} /></a>
        </div>
      </article>)}</div>
      {catalogueNotice && <p className="catalogue-notice" role="status">{catalogueNotice}<button onClick={() => setCatalogueNotice("")} aria-label="Dismiss"><X size={14} /></button></p>}
      <div className="catalogue-actions"><a href="#contact">View Complete Buy Catalogue <ArrowRight size={17} /></a><a href="#contact">View Complete Rental Catalogue <ArrowRight size={17} /></a></div>
      <p className="disclaimer">Illustrative portfolio. Not verified live inventory. Prices indicative and subject to advisor confirmation.</p>
    </div></section>

    <section className="leadership-section" id="about"><div className="leadership-inner wrap">
      <div className="leadership-image"><Image src="/images/property-residence.jpg" alt="Contemporary residence interior with an ocean-facing window" fill sizes="(max-width: 760px) 100vw, 32vw" /><span>LEAP LIVING / LEADERSHIP</span></div>
      <div className="leadership-quote"><p className="eyebrow">EXECUTIVE LEADERSHIP</p><blockquote>“Informed decisions create exceptional outcomes. Every property decision carries financial, strategic, and personal significance. Our responsibility is to ensure clients have clarity and insight.”</blockquote><p className="leader-name">Mohab Samak</p><p className="leader-role">Founder &amp; CEO</p></div>
      <div className="leadership-bio"><p>A real estate leader with over two decades of experience shaping Dubai’s skyline, including leadership roles at Emaar Properties, Hamptons International, Engel &amp; Völkers Dubai, and Coldwell Banker.</p><a href="#contact">Read Company Profile &amp; Approach <ArrowRight size={17} /></a></div>
    </div></section>

    <section className="partners-section" id="partners"><div className="wrap partners-inner"><div className="partners-intro"><p className="eyebrow">OUR DEVELOPER PARTNERS</p><p>Representing developers and institutional investors across project planning, positioning, commercialization, and global roadshows.</p></div><div className="partners-list">{partners.map((partner, index) => <div className={`partner-logo partner-${index + 1}`} key={partner}><span>{partner}</span>{index === 0 && <small>PROPERTIES</small>}{index === 3 && <small>REALTY</small>}{index === 5 && <small>DEVELOPMENTS</small>}</div>)}</div></div></section>

    <section className="valuation-section" id="valuation"><Image src="/images/method-move.jpg" alt="Close-up of refined contemporary architecture" fill sizes="100vw" /><div className="valuation-overlay" /><div className="valuation-inner wrap"><div><p className="eyebrow">PRIVATE SELLING &amp; VALUATION ADVISORY</p><h2>Thinking of Selling or Repositioning<br className="desktop-break" /> Your Prime Asset?</h2><p>Receive an objective, data-backed commercial valuation and a discrete private marketing plan tailored for institutional and private capital.</p></div><div className="valuation-actions"><a className="button button-teal" href="#contact">Request Valuation &amp; Selling Plan <ArrowUpRight size={17} /></a><a className="button button-outline" href="#contact"><Phone size={16} /> Speak Directly with an Advisor</a></div></div></section>

    <footer className="site-footer" id="contact"><div className="wrap footer-main"><div className="footer-brand"><BrandMark compact /><p>REAL ESTATE CONSULTANCY</p><p>Certainty through precision.</p></div><div className="footer-license"><p>RERA Registered</p><p>License No. 1234567</p></div><div className="footer-address"><MapPin size={18} /><p>Dubai, United Arab Emirates<br />Office 3401, Downtown Dubai</p></div><div className="footer-col"><h3>Explore</h3><a href="#top">Home</a><a href="#about">About</a><a href="#contact">Contact</a></div><div className="footer-col"><h3>Properties</h3><a href="#properties">Buy</a><a href="#properties" onClick={() => { setCategory("rent"); setCatalogueNotice("Rental catalogue is not connected yet. Showing the available acquisition portfolio."); }}>Rent</a><a href="#valuation">Sell</a></div><div className="footer-col"><h3>Resources</h3><a href="#about">Company Profile</a><a href="#methodology">Our Approach</a><a href="#contact">Privacy Policy</a></div><div className="footer-col"><h3>Follow Us</h3><a href="#contact">LinkedIn <ArrowUpRight size={12} /></a><a href="#contact">Instagram <ArrowUpRight size={12} /></a></div></div><div className="footer-bottom wrap"><span>© 2026 Leap Living Real Estate Consultancy. All Rights Reserved.</span><div><a href="#contact">Privacy Policy</a><i /> <a href="#contact">Terms of Use</a></div></div></footer>
    <a className="mobile-advisory" href="#contact">Private Advisory <ArrowRight size={16} /></a>
  </main>;
}
