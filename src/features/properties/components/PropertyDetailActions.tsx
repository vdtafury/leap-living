"use client";

import { ArrowRight, CalendarDays, Heart } from "lucide-react";
import { useSite } from "@/components/layout/SiteContext";
import type { Listing } from "@/types/property";

export function PropertyDetailActions({ listing }: { listing: Listing }) {
  const { openModal, favorites, toggleFavorite } = useSite();
  const saved = favorites.includes(listing.id);

  return <div className="property-detail-actions">
    <button className="button button-teal" onClick={() => openModal({ kind: "dossier", listing })}>
      {listing.category === "rent" ? "Request Lease Brief" : "Request Private Dossier"} <ArrowRight size={17} />
    </button>
    <button className="button button-outline" onClick={() => openModal({ kind: "viewing", listing })}><CalendarDays size={16} /> Schedule Viewing</button>
    <button className={`property-detail-save${saved ? " saved" : ""}`} onClick={() => toggleFavorite(listing.id)} aria-pressed={saved}>
      <Heart size={17} fill={saved ? "currentColor" : "none"} />{saved ? "Saved to Favourites" : "Save Property"}
    </button>
  </div>;
}
