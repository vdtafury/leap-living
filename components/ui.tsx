"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Bath, BedDouble, Building2, CalendarDays, Eye,
  Heart, Layers3, MapPin, Maximize2, Sparkles, type LucideIcon,
} from "lucide-react";
import { useSite } from "./AppShell";
import { partners, type Listing } from "./site-data";

export function SectionHeading({ eyebrow, title, supporting, centered = false, light = false }: { eyebrow: string; title: string; supporting?: string; centered?: boolean; light?: boolean }) {
  return <div className={`section-heading${centered ? " is-centered" : ""}${light ? " is-light" : ""}`}>
    <p className="eyebrow">{eyebrow}<span /></p>
    <h2>{title}</h2>
    {supporting && <p className="section-supporting">{supporting}</p>}
  </div>;
}

export function PageHero({ eyebrow, title, description, image, alt, crumb, children }: {
  eyebrow: string; title: string; description: string; image: string; alt: string; crumb: string; children?: React.ReactNode;
}) {
  return <section className="page-hero">
    <div className="page-hero-media"><Image src={image} alt={alt} fill priority sizes="100vw" /><div className="page-hero-fade" /></div>
    <div className="wrap page-hero-inner">
      <p className="breadcrumb"><Link href="/">HOME</Link><span>/</span>{crumb}</p>
      <p className="eyebrow">{eyebrow}<span /></p>
      <h1>{title}</h1>
      <p className="page-hero-lead">{description}</p>
      {children && <div className="page-hero-actions">{children}</div>}
    </div>
  </section>;
}

export function PropertyCard({ item, listView = false }: { item: Listing; listView?: boolean }) {
  const { favorites, toggleFavorite, openModal } = useSite();
  const saved = favorites.includes(item.id);
  const isRent = item.category === "rent";
  const isCommercial = item.category === "commercial";

  return <article className={`property-card${listView ? " is-list-card" : ""}`}>
    <div className="property-photo">
      <Image src={item.image} alt={item.alt} fill sizes={listView ? "(max-width: 760px) 100vw, 36vw" : "(max-width: 760px) 100vw, 33vw"} />
      <span className="property-badge">{item.badge}</span>
      <span className="developer-tag">{item.developer}</span>
      <button className={`favorite${saved ? " saved" : ""}`} onClick={() => toggleFavorite(item.id)} aria-label={`${saved ? "Remove" : "Save"} ${item.name}`} aria-pressed={saved}><Heart size={18} fill={saved ? "currentColor" : "none"} /></button>
      <span className="photo-dots" aria-hidden="true"><i /><i /><i /><i /></span>
    </div>
    <div className="property-body">
      <p className="property-ref">{item.id} <span>·</span> {item.type.toUpperCase()}</p>
      <h3>{item.name}</h3>
      <p className="property-location"><MapPin size={14} /> {item.community}</p>
      <p className="property-price">{item.priceLabel}</p>
      <p className="property-usd">≈ {item.usd}</p>
      {item.availability && <p className="property-availability"><CalendarDays size={14} /> {isRent ? "Availability" : "Status"}: <b>{item.availability}</b></p>}
      <div className="property-facts">
        {item.facts.map((fact, index) => <span key={fact}>{index === 0 ? (isCommercial ? <Building2 size={15} /> : <BedDouble size={15} />) : index === 1 ? (isCommercial ? <Layers3 size={15} /> : <Bath size={15} />) : <Maximize2 size={15} />}{fact}</span>)}
      </div>
      <p className="property-view"><Eye size={15} /> {item.view}</p>
      {isRent && item.features && <div className="property-features">{item.features.map((feature) => <span key={feature}><Sparkles size={12} />{feature}</span>)}</div>}
      <div className="property-actions">
        <button className="button button-teal" onClick={() => openModal({ kind: "dossier", listing: item })}>{isRent ? "Request Lease Brief" : "Request Private Dossier"} <ArrowRight size={16} /></button>
        <button className="button button-outline" onClick={() => openModal({ kind: "viewing", listing: item })}><CalendarDays size={16} /> Schedule Viewing</button>
      </div>
    </div>
  </article>;
}

export function CtaBand({ eyebrow, title, text, button, href, onClick, variant = "dark" }: {
  eyebrow: string; title: string; text: string; button: string; href?: string; onClick?: () => void; variant?: "dark" | "photo";
}) {
  return <section className={`cta-band${variant === "photo" ? " cta-band--photo" : ""}`}>
    {variant === "photo" && <div className="cta-band-photo"><Image src="/images/cta-architecture.jpg" alt="Contemporary glass architecture" fill sizes="30vw" /></div>}
    <div className="wrap cta-band-inner">
      <div><p className="eyebrow eyebrow--light">{eyebrow}<span /></p><h2>{title}</h2><p>{text}</p></div>
      {href ? <Link className="button button-white" href={href}>{button} <ArrowRight size={17} /></Link>
        : <button className="button button-white" onClick={onClick}>{button} <ArrowRight size={17} /></button>}
    </div>
  </section>;
}

export function Steps({ eyebrow, title, supporting, items }: {
  eyebrow: string; title: string; supporting?: string; items: { number: string; title: string; text: string; icon: LucideIcon }[];
}) {
  return <section className="steps-section section-pad"><div className="wrap">
    <SectionHeading eyebrow={eyebrow} title={title} supporting={supporting} centered />
    <div className="steps-grid">{items.map(({ number, title: stepTitle, text, icon: Icon }, index) => <article className="step-card" key={number}>
      <span className="step-number">{number}</span>
      <span className="step-icon"><Icon size={24} strokeWidth={1.6} /></span>
      <h3>{stepTitle}</h3><p>{text}</p>
      {index < items.length - 1 && <span className="step-arrow"><ArrowUpRight size={18} /></span>}
    </article>)}</div>
  </div></section>;
}

export function PartnersRow({ supporting }: { supporting?: string }) {
  return <section className="partners-section" id="partners"><div className="wrap">
    <SectionHeading eyebrow="DEVELOPERS WE WORK WITH" title="Trusted Relationships Across Dubai" supporting={supporting ?? "Deep, enduring relationships with Dubai's premier master developers — ensuring early project access, preferential allocations, and commercial insight."} />
    <div className="partners-list">{partners.map((partner, index) => <div className={`partner-logo partner-${index + 1}`} key={partner}><span>{partner}</span>{index === 0 && <small>PROPERTIES</small>}{index === 3 && <small>REALTY</small>}{index === 6 && <small>DEVELOPMENTS</small>}</div>)}</div>
  </div></section>;
}
