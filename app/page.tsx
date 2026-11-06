"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Bath, BedDouble, Building2, CalendarDays, Check,
  CheckCircle2, ChevronDown, Clock3, Compass, Eye, Heart, KeyRound, Layers3,
  LayoutGrid, List, Mail, MapPin, Maximize2, Menu, Phone, Quote, Search, Send,
  ShieldCheck, SlidersHorizontal, Target, TrendingUp, Users, X,
} from "lucide-react";

/* ------------------------------------------------------------------ data */

type Category = "buy" | "rent" | "commercial";
type Intent = "Buy" | "Rent" | "Commercial";

type Listing = {
  id: string;
  name: string;
  community: string;
  location: string;
  developer: string;
  category: Category;
  type: string;
  price: number;
  priceLabel: string;
  usd: string;
  beds: number;
  facts: string[];
  view: string;
  badge: string;
  image: string;
  alt: string;
};

const listings: Listing[] = [
  {
    id: "LL-PJ-048", name: "The Waterfront Sky Villa", community: "Palm Jumeirah · Frond N",
    location: "Palm Jumeirah", developer: "OMNIYAT", category: "buy", type: "Villa",
    price: 14800000, priceLabel: "AED 14,800,000", usd: "USD 4,030,000",
    beds: 5, facts: ["5 Beds", "6 Baths", "6,850 sq.ft"], view: "Full Arabian Gulf & Skyline View",
    badge: "Exclusive Advisory", image: "/images/property-waterfront.jpg",
    alt: "Contemporary illuminated waterfront villa with a reflecting pool at dusk",
  },
  {
    id: "LL-DT-0125", name: "The Boulevard Sky Penthouse", community: "Downtown Dubai · Opera District",
    location: "Downtown Dubai", developer: "EMAAR", category: "buy", type: "Penthouse",
    price: 12500000, priceLabel: "AED 12,500,000", usd: "USD 3,404,000",
    beds: 4, facts: ["4 Beds", "5 Baths", "5,200 sq.ft"], view: "Burj Khalifa & Fountain View",
    badge: "Ready Handover", image: "/images/property-penthouse.jpg",
    alt: "Refined penthouse lounge with panoramic floor-to-ceiling city views",
  },
  {
    id: "LL-DH-096", name: "The Golfside Luxury Duplex", community: "Dubai Hills Estate · Golf Place",
    location: "Dubai Hills Estate", developer: "EMAAR", category: "buy", type: "Duplex",
    price: 9600000, priceLabel: "AED 9,600,000", usd: "USD 2,614,000",
    beds: 4, facts: ["4 Beds", "5 Baths", "4,150 sq.ft"], view: "Championship Golf Course View",
    badge: "Off-Plan · Handover Q4 2027", image: "/images/property-golf.jpg",
    alt: "Modern villas overlooking a manicured golf course at golden hour",
  },
  {
    id: "LL-DM-031", name: "Cavalli Tower by DAMAC", community: "Dubai Marina",
    location: "Dubai Marina", developer: "DAMAC", category: "buy", type: "Apartment",
    price: 7980000, priceLabel: "AED 7,980,000", usd: "USD 2,173,000",
    beds: 3, facts: ["3 Beds", "4 Baths", "2,560 sq.ft"], view: "Marina & Sea View",
    badge: "Exclusive Advisory", image: "/images/property-marina.jpg",
    alt: "Dubai Marina skyline and yachts viewed from the waterfront",
  },
  {
    id: "LL-PJ-077", name: "Palm Jumeirah Garden Villa", community: "Palm Jumeirah · Signature Villas",
    location: "Palm Jumeirah", developer: "NAKHEEL", category: "buy", type: "Villa",
    price: 18400000, priceLabel: "AED 18,400,000", usd: "USD 5,010,000",
    beds: 5, facts: ["5 Beds", "6 Baths", "7,200 sq.ft"], view: "Private Beach & Sea View",
    badge: "Ready Handover", image: "/images/property-palm.jpg",
    alt: "Private swimming pool and sun terrace overlooking the Arabian Gulf",
  },
  {
    id: "LL-BW-019", name: "Bluewaters Sky Residence", community: "Bluewaters Island",
    location: "Bluewaters Island", developer: "MERAAS", category: "buy", type: "Apartment",
    price: 8900000, priceLabel: "AED 8,900,000", usd: "USD 2,423,000",
    beds: 3, facts: ["3 Beds", "4 Baths", "2,410 sq.ft"], view: "Ain Dubai & Sea View",
    badge: "Ready Handover", image: "/images/property-terrace.jpg",
    alt: "Elegant contemporary lounge opening onto a waterfront terrace at dusk",
  },
  {
    id: "LL-BB-204", name: "The Lana Residences", community: "Business Bay · The Lana",
    location: "Business Bay", developer: "OMNIYAT", category: "rent", type: "Apartment",
    price: 950000, priceLabel: "AED 950,000 / year", usd: "USD 259,000 / year",
    beds: 3, facts: ["3 Beds", "4 Baths", "3,220 sq.ft"], view: "Dubai Canal & Downtown View",
    badge: "Ready to Move In", image: "/images/property-residence.jpg",
    alt: "Bright designer living room with garden and pool views",
  },
  {
    id: "LL-MBR-118", name: "Sobha Hartland Garden Villa", community: "Mohammed Bin Rashid City",
    location: "Mohammed Bin Rashid City", developer: "SOBHA REALTY", category: "rent", type: "Villa",
    price: 780000, priceLabel: "AED 780,000 / year", usd: "USD 212,000 / year",
    beds: 4, facts: ["4 Beds", "5 Baths", "4,780 sq.ft"], view: "Lagoon & Park View",
    badge: "Ready to Move In", image: "/images/property-townhouse.jpg",
    alt: "Modern villa with palm trees and a private driveway",
  },
  {
    id: "LL-EH-042", name: "Emirates Hills Estate Villa", community: "Emirates Hills",
    location: "Emirates Hills", developer: "EMAAR", category: "rent", type: "Villa",
    price: 1450000, priceLabel: "AED 1,450,000 / year", usd: "USD 395,000 / year",
    beds: 5, facts: ["5 Beds", "6 Baths", "8,100 sq.ft"], view: "Golf Course & Skyline View",
    badge: "Private Mandate", image: "/images/property-pool.jpg",
    alt: "Evening pool terrace with palm trees and waterfront villas beyond",
  },
  {
    id: "LL-DIFC-01", name: "DIFC Grade-A Whole Floor", community: "DIFC · Gate Avenue",
    location: "DIFC", developer: "DUBAI HOLDING", category: "commercial", type: "Commercial",
    price: 24000000, priceLabel: "AED 24,000,000", usd: "USD 6,535,000",
    beds: 0, facts: ["Whole Floor", "Grade A", "12,400 sq.ft"], view: "DIFC & Downtown Skyline View",
    badge: "Institutional Mandate", image: "/images/method-move.jpg",
    alt: "Curved glass office tower reflecting a clear blue sky",
  },
  {
    id: "LL-BB-COM", name: "Business Bay Land Parcel", community: "Business Bay · Marasi Drive",
    location: "Business Bay", developer: "MERAAS", category: "commercial", type: "Commercial",
    price: 38500000, priceLabel: "AED 38,500,000", usd: "USD 10,484,000",
    beds: 0, facts: ["Freehold Plot", "G+24 Potential", "48,000 sq.ft"], view: "Dubai Canal Frontage",
    badge: "Off-Market", image: "/images/band-architecture.jpg",
    alt: "Modern high-rise tower viewed from below against a blue sky",
  },
];

const locations = ["All Locations", "Palm Jumeirah", "Downtown Dubai", "Dubai Hills Estate", "Dubai Marina", "Bluewaters Island", "Business Bay", "Mohammed Bin Rashid City", "Emirates Hills", "DIFC"];
const propertyTypes = ["All Types", "Apartment", "Villa", "Penthouse", "Duplex", "Townhouse", "Commercial"];
const bedroomOptions = ["Any", "2+", "3+", "4+", "5+"];

const methods = [
  { number: "01", title: "Discover", text: "Direct off-market pipeline, zoning and land viability studies, master developer roadmaps, and unlisted asset access.", icon: Search, image: "/images/method-discover.jpg", alt: "White angular modern facade against a blue sky" },
  { number: "02", title: "Decide", text: "Institutional yield modeling, exit-strategy structuring, comparative asset benchmarking, and regulatory compliance audit.", icon: TrendingUp, image: "/images/method-decide.jpg", alt: "Curved glass architecture with clean geometric lines" },
  { number: "03", title: "Move", text: "High-level negotiation, seamless contract closing, post-acquisition portfolio planning, and long-term asset management.", icon: CheckCircle2, image: "/images/method-move.jpg", alt: "Contemporary glass tower seen from below" },
];

const commitments = [
  { icon: Target, title: "Strategic Advisory", text: "Guidance based on data, analysis and experience rather than market sentiment." },
  { icon: Users, title: "Market Access", text: "Direct relationships across master developers, institutional stakeholders and government entities." },
  { icon: Layers3, title: "Precision", text: "Every recommendation is evaluated against a defined objective and long-term capital outcome." },
  { icon: TrendingUp, title: "Experience", text: "More than two decades of proven leadership across multiple market cycles and asset classes." },
  { icon: ShieldCheck, title: "Trust", text: "Absolute fiduciary integrity, discretion, and client-first execution." },
];

const partners = ["EMAAR", "NAKHEEL", "MERAAS", "SOBHA", "OMNIYAT", "DAMAC", "DUBAI HOLDING"];

const stats = [
  { icon: Clock3, value: "21+ Years", text: "UAE real estate leadership since 2005" },
  { icon: Layers3, value: "AED 12B+", text: "Landmark development commercialization" },
  { icon: ShieldCheck, value: "100% Fiduciary", text: "Long-term advisory over transactions" },
  { icon: Users, value: "Direct Access", text: "Developers, family offices & institutions" },
];

/* ------------------------------------------------------------- components */

function BrandMark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return <a className="brand-mark" href="#top" aria-label="LEAP LIVING — back to top">
    <Image src={tone === "dark" ? "/images/brand-dark.png" : "/images/brand-light.png"} alt="LEAP LIVING" width={104} height={75} priority />
    <span className="brand-divider" />
    <span className="brand-sub">REAL ESTATE<br />CONSULTANCY</span>
  </a>;
}

function SectionHeading({ eyebrow, title, supporting, centered = false }: { eyebrow: string; title: string; supporting?: string; centered?: boolean }) {
  return <div className={`section-heading${centered ? " is-centered" : ""}`}>
    <p className="eyebrow">{eyebrow}<span /></p>
    <h2>{title}</h2>
    {supporting && <p className="section-supporting">{supporting}</p>}
  </div>;
}

type Filters = { location: string; type: string; beds: string; min: string; max: string };
const emptyFilters: Filters = { location: "All Locations", type: "All Types", beds: "Any", min: "", max: "" };

type ModalState = { kind: "dossier" | "viewing" | "valuation" | "consultation" | "offmarket"; listing?: Listing } | null;

export default function Home() {
  const [intent, setIntent] = useState<Intent>("Buy");
  const [category, setCategory] = useState<Category>("buy");
  const [draft, setDraft] = useState<Filters>(emptyFilters);
  const [applied, setApplied] = useState<Filters>(emptyFilters);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState("newest");
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [scrolled, setScrolled] = useState(false);
  const [toast, setToast] = useState("");
  const [modal, setModal] = useState<ModalState>(null);
  const [modalSent, setModalSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 4200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!modal) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") closeModal(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [modal]);

  const nav = [
    { label: "Home", href: "#top", category: null },
    { label: "About", href: "#about", category: null },
    { label: "Buy", href: "#properties", category: "buy" as Category },
    { label: "Rent", href: "#properties", category: "rent" as Category },
    { label: "Sell", href: "#valuation", category: null },
    { label: "Contact", href: "#contact", category: null },
  ];

  const toggleFavorite = (id: string) => setFavorites((saved) => saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id]);

  const openModal = (next: ModalState) => { setModalSent(false); setModal(next); setMenuOpen(false); };
  const closeModal = () => setModal(null);

  const visibleListings = useMemo(() => {
    const min = Number(applied.min.replace(/[^0-9]/g, "")) || 0;
    const max = Number(applied.max.replace(/[^0-9]/g, "")) || Infinity;
    const beds = applied.beds === "Any" ? 0 : Number(applied.beds.replace("+", ""));
    const result = listings.filter((item) => {
      if (item.category !== category) return false;
      if (applied.location !== "All Locations" && item.location !== applied.location) return false;
      if (applied.type !== "All Types" && item.type !== applied.type) return false;
      if (beds && item.beds < beds) return false;
      if (item.price < min || item.price > max) return false;
      return true;
    });
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    return result;
  }, [applied, category, sort]);

  const activeFilters = [
    applied.location !== "All Locations" ? applied.location : "",
    applied.type !== "All Types" ? applied.type : "",
    applied.beds !== "Any" ? `${applied.beds} Bedrooms` : "",
    applied.min ? `Min AED ${applied.min}` : "",
    applied.max ? `Max AED ${applied.max}` : "",
  ].filter(Boolean);

  const runSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setApplied({ ...draft });
    setCategory(intent === "Rent" ? "rent" : intent === "Commercial" ? "commercial" : "buy");
    setToast(`Showing the verified ${intent.toLowerCase()} portfolio matching your criteria.`);
    window.setTimeout(() => document.getElementById("properties")?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  };

  const clearFilters = () => { setDraft(emptyFilters); setApplied(emptyFilters); setToast("All search filters have been cleared."); };

  const modalContent = (() => {
    if (!modal) return { eyebrow: "", title: "", subtitle: "" };
    switch (modal.kind) {
      case "dossier": return { eyebrow: "PRIVATE DOSSIER REQUEST", title: "Request Private Dossier", subtitle: `${modal.listing?.name ?? "This property"} · ${modal.listing?.community ?? ""}. A senior advisor will share the full commercial brief and disclosure pack.` };
      case "viewing": return { eyebrow: "PRIVATE VIEWING", title: "Schedule a Viewing", subtitle: `Arrange a discreet, accompanied viewing of ${modal.listing?.name ?? "this property"} at a time that suits you.` };
      case "valuation": return { eyebrow: "SELLING & VALUATION", title: "Request Valuation & Selling Plan", subtitle: "Receive an objective, data-backed commercial valuation and a discreet private marketing plan." };
      case "offmarket": return { eyebrow: "PRIVATE PORTFOLIO", title: "Off-Market Enquiry", subtitle: "Tell us your acquisition mandate and we will share relevant unlisted opportunities privately." };
      default: return { eyebrow: "PRIVATE ADVISORY", title: "Schedule a Strategic Consultation", subtitle: "Speak with a senior advisor about your acquisition, disposal or portfolio objectives in Dubai." };
    }
  })();

  return <main id="top">
    {/* ------------------------------------------------------------ header */}
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-shell wrap">
        <BrandMark />
        <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {nav.map((item) => <a key={item.label} className={item.label === "Home" ? "active" : ""} href={item.href} onClick={() => { if (item.category) setCategory(item.category); setMenuOpen(false); }}>{item.label}</a>)}
          <div className="mobile-language">
            <button className={language === "EN" ? "selected" : ""} onClick={() => setLanguage("EN")}>EN</button><span>/</span>
            <button className={language === "AR" ? "selected" : ""} onClick={() => { setLanguage("AR"); setToast("The Arabic edition is coming soon. You are viewing the English experience."); }}>AR</button>
          </div>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Choose language">
            <button className={language === "EN" ? "selected" : ""} onClick={() => setLanguage("EN")}>EN</button><i />
            <button className={language === "AR" ? "selected" : ""} onClick={() => { setLanguage("AR"); setToast("The Arabic edition is coming soon. You are viewing the English experience."); }}>AR</button>
          </div>
          <button className="button button-teal header-cta" onClick={() => openModal({ kind: "consultation" })}>Private Advisory <ArrowRight size={16} /></button>
        </div>
      </div>
    </header>

    {/* -------------------------------------------------------------- hero */}
    <section className="hero" aria-label="LEAP LIVING real estate advisory">
      <div className="hero-media">
        <Image className="hero-photo" src="/images/hero-skyline.jpg" alt="Dubai skyline and Burj Khalifa at sunset across calm water" fill priority sizes="100vw" />
        <div className="hero-fade" />
      </div>
      <div className="hero-villa"><Image src="/images/hero-villa.jpg" alt="Curved contemporary villa with warm interior lighting and landscaped gardens" fill sizes="30vw" /></div>

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">CERTAINTY THROUGH PRECISION <span /></p>
          <h1>Unlock your<br />next move</h1>
          <p className="hero-lead">In a market driven by noise and speculation, Leap Living brings institutional clarity, strategic foresight, and over two decades of Dubai real estate leadership to high-value property decisions.</p>
          <a className="hero-badge" href="#partners"><Building2 size={15} /> EXCLUSIVE DEVELOPER REPRESENTATION <b>·</b> PRIME DUBAI PORTFOLIOS</a>
          <div className="hero-actions">
            <button className="button button-teal" onClick={() => openModal({ kind: "consultation" })}>Schedule Strategic Consultation <ArrowRight size={17} /></button>
            <a className="button button-ghost" href="#properties">Explore Properties <ArrowUpRight size={17} /></a>
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
            <label className="field"><span><BedDouble size={14} /> BEDROOMS</span><div className="select-shell"><select value={draft.beds} onChange={(e) => setDraft({ ...draft, beds: e.target.value })}>{bedroomOptions.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={15} /></div></label>
            <fieldset className="field price-field"><legend><SlidersHorizontal size={14} /> PRICE RANGE (AED)</legend><div className="price-inputs"><input aria-label="Minimum price" inputMode="numeric" placeholder="Min Price" value={draft.min} onChange={(e) => setDraft({ ...draft, min: e.target.value })} /><i>—</i><input aria-label="Maximum price" inputMode="numeric" placeholder="Max Price" value={draft.max} onChange={(e) => setDraft({ ...draft, max: e.target.value })} /></div></fieldset>
            <button className="button button-teal search-submit" type="submit"><Search size={16} /> Search Properties <ArrowRight size={16} /></button>
          </div>
        </form>
      </div>
    </section>

    {/* ------------------------------------------------------------- stats */}
    <section className="stats-strip" aria-label="Company at a glance"><div className="wrap stats-inner">
      {stats.map(({ icon: Icon, value, text }) => <div className="stat" key={value}><span className="stat-icon"><Icon size={27} strokeWidth={1.5} /></span><div><strong>{value}</strong><p>{text}</p></div></div>)}
    </div></section>

    {/* -------------------------------------------------------- methodology */}
    <section className="method-section section-pad" id="methodology"><div className="wrap">
      <SectionHeading eyebrow="OUR ADVISORY METHODOLOGY" title="A Disciplined Approach to Real Estate" supporting="Discover · Decide · Move" />
      <div className="method-grid">{methods.map(({ number, title, text, icon: Icon, image, alt }) => <article className="method-card" key={number}>
        <div className="method-image"><Image src={image} alt={alt} fill sizes="(max-width: 760px) 100vw, 30vw" /></div>
        <div className="method-content">
          <div className="method-topline"><span><b>{number}</b> · {title}</span><span className="method-icon"><Icon size={19} /></span></div>
          <h3>{title === "Discover" ? "Market Intelligence & Sourcing" : title === "Decide" ? "Commercial Evaluation & Risk Mitigation" : "Disciplined Execution & Management"}</h3>
          <p>{text}</p>
        </div>
      </article>)}</div>
    </div></section>

    {/* ------------------------------------------------------- commitments */}
    <section className="commitments-section"><div className="wrap">
      <SectionHeading eyebrow="OUR CORE COMMITMENTS" title="What Sets Our Advisory Apart" centered />
      <div className="commitments-grid">{commitments.map(({ icon: Icon, title, text }) => <article className="commitment" key={title}>
        <span className="commitment-icon"><Icon size={25} strokeWidth={1.6} /></span>
        <h3>{title}</h3><i /><p>{text}</p>
      </article>)}</div>
    </div></section>

    {/* -------------------------------------------------------- properties */}
    <section className="properties-section section-pad" id="properties"><div className="wrap">
      <div className="properties-top">
        <SectionHeading eyebrow="CURATED PROPERTIES" title="Featured Properties" supporting="Institutional diligence applied to every asset in the Leap Living portfolio." />
        <div className="category-switch" role="tablist" aria-label="Property category">
          <button role="tab" aria-selected={category === "buy"} className={category === "buy" ? "selected" : ""} onClick={() => setCategory("buy")}>Featured Acquisitions (Buy)</button>
          <button role="tab" aria-selected={category === "rent"} className={category === "rent" ? "selected" : ""} onClick={() => setCategory("rent")}>Prime Residences (Rent)</button>
          <button role="tab" aria-selected={category === "commercial"} className={category === "commercial" ? "selected" : ""} onClick={() => setCategory("commercial")}>Commercial Mandates</button>
        </div>
      </div>

      <div className="results-bar">
        <div className="results-count"><strong>{visibleListings.length} Properties Found</strong><span>{category === "buy" ? "Verified acquisition opportunities" : category === "rent" ? "Prime long-term residences" : "Institutional & off-market mandates"}</span></div>
        <div className="results-actions">
          <label className="sort-control"><SlidersHorizontal size={15} /><span>Sort By</span><select value={sort} onChange={(e) => setSort(e.target.value)}><option value="newest">Newest to Market</option><option value="price-asc">Price: Low to High</option><option value="price-desc">Price: High to Low</option></select><ChevronDown size={14} /></label>
          <div className="view-toggle" aria-label="Layout">
            <button className={view === "grid" ? "selected" : ""} aria-label="Grid view" aria-pressed={view === "grid"} onClick={() => setView("grid")}><LayoutGrid size={16} /></button>
            <button className={view === "list" ? "selected" : ""} aria-label="List view" aria-pressed={view === "list"} onClick={() => setView("list")}><List size={17} /></button>
          </div>
          <button className="map-button" onClick={() => setToast("Interactive map view is not connected in this prototype. Portfolio locations are listed on every card.")}><MapPin size={15} /> Map View</button>
        </div>
      </div>

      {activeFilters.length > 0 && <div className="applied-bar"><span>Active filters:</span>{activeFilters.map((filter) => <span className="filter-chip" key={filter}>{filter}</span>)}<button onClick={clearFilters}><X size={14} /> Clear All</button></div>}

      <div className={`property-grid${view === "list" ? " is-list" : ""}`}>
        {visibleListings.map((item) => <article className="property-card" key={item.id}>
          <div className="property-photo">
            <Image src={item.image} alt={item.alt} fill sizes={view === "list" ? "(max-width: 760px) 100vw, 36vw" : "(max-width: 760px) 100vw, 33vw"} />
            <span className="property-badge">{item.badge}</span>
            <span className="developer-tag">{item.developer}</span>
            <button className={`favorite${favorites.includes(item.id) ? " saved" : ""}`} onClick={() => toggleFavorite(item.id)} aria-label={`${favorites.includes(item.id) ? "Remove" : "Save"} ${item.name}`} aria-pressed={favorites.includes(item.id)}><Heart size={18} fill={favorites.includes(item.id) ? "currentColor" : "none"} /></button>
            <span className="photo-dots" aria-hidden="true"><i /><i /><i /><i /></span>
          </div>
          <div className="property-body">
            <p className="property-ref">{item.id} <span>·</span> {item.type.toUpperCase()}</p>
            <h3>{item.name}</h3>
            <p className="property-location"><MapPin size={14} /> {item.community}</p>
            <p className="property-price">{item.priceLabel}</p>
            <p className="property-usd">≈ {item.usd}</p>
            <div className="property-facts">
              {item.facts.map((fact, index) => <span key={fact}>{index === 0 ? (item.category === "commercial" ? <Building2 size={15} /> : <BedDouble size={15} />) : index === 1 ? (item.category === "commercial" ? <Layers3 size={15} /> : <Bath size={15} />) : <Maximize2 size={15} />}{fact}</span>)}
            </div>
            <p className="property-view"><Eye size={15} /> {item.view}</p>
            <div className="property-actions">
              <button className="button button-teal" onClick={() => openModal({ kind: "dossier", listing: item })}>Request Private Dossier <ArrowRight size={16} /></button>
              <button className="button button-outline" onClick={() => openModal({ kind: "viewing", listing: item })}><CalendarDays size={16} /> Schedule Viewing</button>
            </div>
          </div>
        </article>)}
      </div>

      {visibleListings.length === 0 && <div className="empty-state"><Search size={26} /><h3>No properties match these criteria</h3><p>Try widening the price range or clearing a filter to see the full verified portfolio.</p><button className="button button-teal" onClick={clearFilters}>Clear All Filters <ArrowRight size={16} /></button></div>}

      <div className="catalogue-actions"><a href="#contact" onClick={() => setToast("A senior advisor will share the complete catalogue privately.")}>View Complete Buy Catalogue <ArrowRight size={17} /></a><a href="#contact" onClick={() => setToast("A senior advisor will share the complete catalogue privately.")}>View Complete Rental Catalogue <ArrowRight size={17} /></a></div>
      <p className="disclaimer">Illustrative portfolio · Not verified live inventory. Photography is editorial and indicative. Prices are subject to advisor confirmation.</p>
    </div></section>

    {/* --------------------------------------------------------- off-market */}
    <section className="offmarket-section">
      <div className="offmarket-photo"><Image src="/images/cta-architecture.jpg" alt="Close-up of a contemporary glass facade" fill sizes="30vw" /></div>
      <div className="wrap offmarket-inner">
        <div><p className="eyebrow eyebrow--light">PRIVATE & OFF-MARKET ACCESS <span /></p><h2>Looking for Off-Market or Institutional Acquisitions?</h2><p>A substantial portion of Dubai's ultra-prime transactions occur privately. Leap Living maintains discreet, direct access to unlisted penthouses, private island plots, and full-building opportunities.</p></div>
        <button className="button button-white" onClick={() => openModal({ kind: "offmarket" })}>Inquire for Private Off-Market Portfolio <ArrowRight size={17} /></button>
      </div>
    </section>

    {/* -------------------------------------------------------- leadership */}
    <section className="leadership-section" id="about"><div className="wrap">
      <div className="leadership-grid">
        <div className="leadership-photo"><Image src="/images/ceo-portrait.jpg" alt="Editorial portrait of a business leader in a suit (illustrative)" fill sizes="(max-width: 760px) 100vw, 32vw" /><span>Illustrative editorial portrait</span></div>
        <div className="leadership-message">
          <p className="eyebrow">A MESSAGE FROM OUR CEO <span /></p>
          <blockquote><Quote size={26} /> With more than 21 years of experience across corporate real estate, asset management, leasing, and commercialization, I have built my career around one principle: informed decisions create exceptional outcomes.</blockquote>
          <p className="leader-name">Mohab Samak</p>
          <p className="leader-role">Founder &amp; CEO</p>
          <a className="text-link" href="#methodology">Read Company Profile &amp; Approach <ArrowRight size={17} /></a>
        </div>
        <div className="leadership-facts">
          <div><span><CalendarDays size={19} /></span><div><strong>Active since 2005</strong><p>Two decades in the UAE real estate market.</p></div></div>
          <div><span><Building2 size={19} /></span><div><strong>Senior leadership roles</strong><p>Emaar Properties, Hamptons International, Coldwell Banker, Engel &amp; Völkers, ERA Volke and Metropolitan Premium Properties.</p></div></div>
          <div><span><Layers3 size={19} /></span><div><strong>End-to-end expertise</strong><p>Developer representation, exclusive project sales, commercial &amp; residential advisory, land acquisition, and strategic expansion.</p></div></div>
        </div>
      </div>
    </div></section>

    {/* ---------------------------------------------------------- partners */}
    <section className="partners-section" id="partners"><div className="wrap">
      <SectionHeading eyebrow="DEVELOPERS WE WORK WITH" title="Trusted Relationships Across Dubai" supporting="Deep, enduring relationships with Dubai's premier master developers — ensuring early project access, preferential allocations, and commercial insight." />
      <div className="partners-list">{partners.map((partner, index) => <div className={`partner-logo partner-${index + 1}`} key={partner}><span>{partner}</span>{index === 0 && <small>PROPERTIES</small>}{index === 3 && <small>REALTY</small>}{index === 6 && <small>DEVELOPMENTS</small>}</div>)}</div>
    </div></section>

    {/* --------------------------------------------------------- valuation */}
    <section className="valuation-section" id="valuation">
      <div className="valuation-photo"><Image src="/images/band-architecture.jpg" alt="Modern glass architecture seen from below" fill sizes="100vw" /></div>
      <div className="valuation-overlay" />
      <div className="wrap valuation-inner">
        <div><p className="eyebrow eyebrow--light">PRIVATE SELLING &amp; VALUATION ADVISORY <span /></p><h2>Thinking of Selling or Repositioning<br className="desktop-break" /> Your Prime Asset?</h2><p>Receive an objective, data-backed commercial valuation and a discreet private marketing plan tailored for institutional and private capital.</p></div>
        <div className="valuation-actions">
          <button className="button button-teal" onClick={() => openModal({ kind: "valuation" })}>Request Valuation &amp; Selling Plan <ArrowUpRight size={17} /></button>
          <button className="button button-outline" onClick={() => openModal({ kind: "consultation" })}><Phone size={16} /> Speak Directly with an Advisor</button>
        </div>
      </div>
    </section>

    {/* ------------------------------------------------------------ footer */}
    <footer className="site-footer" id="contact"><div className="wrap">
      <div className="footer-main">
        <div className="footer-brand"><BrandMark tone="light" /><p>Certainty through precision.</p><span>Institutional real estate advisory · Dubai, UAE</span></div>
        <div className="footer-col"><h3>Explore</h3><a href="#top">Home</a><a href="#about">About</a><a href="#methodology">Our Approach</a><a href="#contact">Contact</a></div>
        <div className="footer-col"><h3>Properties</h3><a href="#properties" onClick={() => setCategory("buy")}>Buy</a><a href="#properties" onClick={() => setCategory("rent")}>Rent</a><a href="#properties" onClick={() => setCategory("commercial")}>Commercial</a><a href="#valuation">Sell</a></div>
        <div className="footer-col"><h3>Information</h3><a href="#about">Company Profile</a><a href="#contact">Privacy Policy</a><a href="#contact">Terms of Use</a><a href="#partners">Developer Partners</a></div>
        <div className="footer-col footer-contact"><h3>Location</h3><p><MapPin size={15} /> Dubai, United Arab Emirates<br />Office 3401, Downtown Dubai</p><p><Mail size={15} /> advisory@leapliving.ae</p><p><Phone size={15} /> +971 4 000 0000</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Leap Living Real Estate Consultancy. All Rights Reserved.</span><div><a href="#contact">Privacy Policy</a><i /><a href="#contact">Terms of Use</a></div></div>
    </div></footer>

    <button className="mobile-advisory" onClick={() => openModal({ kind: "consultation" })}>Private Advisory <ArrowRight size={16} /></button>

    {/* -------------------------------------------------------------- toast */}
    {toast && <div className="toast" role="status"><CheckCircle2 size={18} />{toast}<button onClick={() => setToast("")} aria-label="Dismiss message"><X size={15} /></button></div>}

    {/* -------------------------------------------------------------- modal */}
    {modal && <div className="modal-backdrop" onMouseDown={closeModal}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={closeModal} aria-label="Close dialog"><X size={20} /></button>
        <p className="eyebrow">{modalContent.eyebrow} <span /></p>
        <h2 id="modal-title">{modalContent.title}</h2>
        <p className="modal-sub">{modalContent.subtitle}</p>
        {modalSent ? <div className="modal-success"><CheckCircle2 size={38} /><h3>Request received</h3><p>Thank you. A senior Leap Living advisor will be in touch shortly to discuss your objectives in confidence.</p><button className="button button-teal" onClick={closeModal}>Close <Check size={16} /></button></div>
          : <form className="modal-form" onSubmit={(event) => { event.preventDefault(); setModalSent(true); }}>
            <label>Full name<input required placeholder="Your full name" autoComplete="name" /></label>
            <div className="modal-form-row"><label>Email address<input required type="email" placeholder="name@company.com" autoComplete="email" /></label><label>Phone number<input type="tel" placeholder="+971 ..." autoComplete="tel" /></label></div>
            <label>How can we help?<textarea rows={3} placeholder="Tell us about your mandate, timing, or preferred communities" /></label>
            <button className="button button-teal" type="submit">Send Request <Send size={16} /></button>
            <p className="modal-fine">Prototype form — no data leaves this browser.</p>
          </form>}
      </div>
    </div>}
  </main>;
}
