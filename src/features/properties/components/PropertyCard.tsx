"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Bath, BedDouble, Building2, CalendarDays, Eye, Heart,
  Layers3, MapPin, Maximize2, Sparkles,
} from "lucide-react";
import { useSite } from "@/components/layout/SiteContext";
import type { Listing } from "@/types/property";

export function PropertyCard({ item, listView = false, featured = false }: { item: Listing; listView?: boolean; featured?: boolean }) {
  const { favorites, toggleFavorite, openModal } = useSite();
  const saved = favorites.includes(item.id);
  const isRent = item.category === "rent";
  const isCommercial = item.category === "commercial";
  const detailsHref = `/buy/${encodeURIComponent(item.id)}`;

  return <article className={`property-card${listView ? " is-list-card" : ""}${featured ? " is-featured" : ""}`}>
    <div className="property-photo">
      <Image src={item.image} alt={item.alt} fill sizes={listView ? "(max-width: 760px) 100vw, 36vw" : "(max-width: 760px) 100vw, 33vw"} />
      <span className="property-badge">{item.badge}</span>
      <span className="developer-tag">{item.developer}</span>
      <button
        className={`favorite${saved ? " saved" : ""}`}
        onClick={() => toggleFavorite(item.id)}
        aria-label={`${saved ? "Remove" : "Save"} ${item.name}`}
        aria-pressed={saved}
      ><Heart size={18} fill={saved ? "currentColor" : "none"} /></button>
      {!featured && <span className="photo-dots" aria-hidden="true"><i /><i /><i /><i /></span>}
    </div>
    <div className="property-body">
      <p className="property-ref">{item.id} <span>·</span> {item.type.toUpperCase()}</p>
      <h3><Link className="property-title-link" href={detailsHref}>{item.name}</Link></h3>
      <p className="property-location"><MapPin size={14} /> {item.community}</p>
      <p className="property-price">{item.priceLabel}</p>
      <p className="property-usd">≈ {item.usd}</p>
      {item.availability && <p className="property-availability">
        <CalendarDays size={14} /> {isRent ? "Availability" : "Status"}: <b>{item.availability}</b>
      </p>}
      <div className="property-facts">
        {item.facts.map((fact, index) => <span key={fact}>
          {index === 0 ? (isCommercial ? <Building2 size={15} /> : <BedDouble size={15} />)
            : index === 1 ? (isCommercial ? <Layers3 size={15} /> : <Bath size={15} />)
              : <Maximize2 size={15} />}{fact}
        </span>)}
      </div>
      <p className="property-view"><Eye size={15} /> {item.view}</p>
      {isRent && item.features && <div className="property-features">
        {item.features.map((feature) => <span key={feature}><Sparkles size={12} />{feature}</span>)}
      </div>}
      {featured
        ? <Link className="property-details-link" href={detailsHref}>Inspect Property Details <ArrowRight size={15} /></Link>
        : <div className="property-actions">
            <Link className="button button-teal" href={detailsHref}>Inspect Property Details <ArrowRight size={16} /></Link>
            <button className="button button-outline" onClick={() => openModal({ kind: "viewing", listing: item })}>
              <CalendarDays size={16} /> Schedule Viewing
            </button>
          </div>}
    </div>
  </article>;
}
