import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bath, BedDouble, Building2, CalendarDays, Eye, Layers3, MapPin, Maximize2 } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PropertyDetailActions } from "@/features/properties/components/PropertyDetailActions";
import { listings } from "@/features/properties/data/listings";
import "./property-detail.css";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return listings.map((listing) => ({ id: listing.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const listing = listings.find((item) => item.id === decodeURIComponent(id));
  if (!listing) return { title: "Property Not Found | LEAP LIVING" };
  return {
    title: `${listing.name} | LEAP LIVING`,
    description: `${listing.type} in ${listing.community}. ${listing.priceLabel}. ${listing.facts.join(", ")}. ${listing.view}.`,
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const listing = listings.find((item) => item.id === decodeURIComponent(id));
  if (!listing) notFound();

  const isCommercial = listing.category === "commercial";

  return <article className="property-detail">
    <div className="wrap">
      <Breadcrumbs crumb="BUY" />
      <Link className="property-detail-back" href={isCommercial ? "/buy?category=commercial" : "/buy"}><ArrowLeft size={15} /> Back to the Catalogue</Link>
      <div className="property-detail-grid">
        <div className="property-detail-media"><Image src={listing.image} alt={listing.alt} fill priority sizes="(max-width: 900px) 100vw, 56vw" /><span>{listing.badge}</span></div>
        <div className="property-detail-content">
          <p className="property-detail-ref">{listing.id} · {listing.type.toUpperCase()} · {listing.developer}</p>
          <h1>{listing.name}</h1>
          <p className="property-detail-location"><MapPin size={16} />{listing.community}</p>
          <p className="property-detail-price">{listing.priceLabel}</p>
          <p className="property-detail-usd">Approx. {listing.usd}</p>
          {listing.availability && <p className="property-detail-availability"><CalendarDays size={16} />Status: <strong>{listing.availability}</strong></p>}
          <div className="property-detail-facts">{listing.facts.map((fact, index) => <div key={fact}>
            {index === 0 ? (isCommercial ? <Building2 size={19} /> : <BedDouble size={19} />) : index === 1 ? (isCommercial ? <Layers3 size={19} /> : <Bath size={19} />) : <Maximize2 size={19} />}
            <span>{fact}</span>
          </div>)}</div>
          <p className="property-detail-view"><Eye size={17} />{listing.view}</p>
          <PropertyDetailActions listing={listing} />
        </div>
      </div>
      <div className="property-detail-note"><h2>Private Acquisition Advisory</h2><p>Request the private dossier for the commercial brief, disclosure pack and advisor-confirmed details. Our team can also arrange a discreet, accompanied viewing around your schedule.</p><p className="disclaimer">Illustrative portfolio · Not verified live inventory. Photography is editorial and indicative. Prices and specifications are subject to advisor confirmation.</p></div>
    </div>
  </article>;
}
