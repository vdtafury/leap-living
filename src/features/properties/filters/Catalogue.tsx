"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight, BedDouble, Building2, ChevronDown, LayoutGrid, List, MapPin,
  Search, SlidersHorizontal, X,
} from "lucide-react";
import { useSite } from "@/components/layout/SiteContext";
import { PropertyCard } from "@/features/properties/components/PropertyCard";
import { CatalogueEmptyState } from "@/features/properties/components/CatalogueEmptyState";
import { getListingsByCategory } from "@/features/properties/data/category";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { bedroomOptions, listings, locations, propertyTypes } from "@/features/properties/data/listings";
import type { Category } from "@/types/property";

type Filters = { location: string; type: string; beds: string; min: string; max: string };
const emptyFilters: Filters = { location: "All Locations", type: "All Types", beds: "Any", min: "", max: "" };

export default function Catalogue({ category, allowCommercial = false, eyebrow = "CURATED PROPERTIES", title = "Featured Properties", supporting, id = "catalogue" }: {
  category: Category; allowCommercial?: boolean; eyebrow?: string; title?: string; supporting?: string; id?: string;
}) {
  const { showToast } = useSite();
  const [activeCategory, setActiveCategory] = useState<Category>(category);
  const [draft, setDraft] = useState<Filters>(emptyFilters);
  const [applied, setApplied] = useState<Filters>(emptyFilters);
  const [sort, setSort] = useState("newest");
  const [view, setView] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (allowCommercial && params.get("category") === "commercial") setActiveCategory("commercial");
    const fromUrl: Filters = {
      location: params.get("location") ?? "All Locations",
      type: params.get("type") ?? "All Types",
      beds: params.get("beds") ?? "Any",
      min: params.get("min") ?? "",
      max: params.get("max") ?? "",
    };
    if (locations.includes(fromUrl.location) && propertyTypes.includes(fromUrl.type) && bedroomOptions.includes(fromUrl.beds)) {
      setDraft(fromUrl); setApplied(fromUrl);
    }
  }, [allowCommercial]);

  const visible = useMemo(() => {
    const min = Number(applied.min.replace(/[^0-9]/g, "")) || 0;
    const max = Number(applied.max.replace(/[^0-9]/g, "")) || Infinity;
    const beds = applied.beds === "Any" ? 0 : Number(applied.beds.replace("+", ""));
    const result = getListingsByCategory(listings, activeCategory).filter((item) => {
      if (applied.location !== "All Locations" && item.location !== applied.location) return false;
      if (applied.type !== "All Types" && item.type !== applied.type) return false;
      if (beds && item.beds < beds) return false;
      if (item.price < min || item.price > max) return false;
      return true;
    });
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    return result;
  }, [applied, activeCategory, sort]);

  const activeFilters = [
    applied.location !== "All Locations" ? applied.location : "",
    applied.type !== "All Types" ? applied.type : "",
    applied.beds !== "Any" ? `${applied.beds} Bedrooms` : "",
    applied.min ? `Min AED ${applied.min}` : "",
    applied.max ? `Max AED ${applied.max}` : "",
  ].filter(Boolean);

  const clearFilters = () => { setDraft(emptyFilters); setApplied(emptyFilters); showToast("All search filters have been cleared."); };
  const switchCategory = (next: Category) => { setActiveCategory(next); setDraft(emptyFilters); setApplied(emptyFilters); };
  const isRent = activeCategory === "rent";

  return <section className="catalogue-section section-pad" id={id}><div className="wrap">
    <div className="properties-top">
      <SectionHeader eyebrow={eyebrow} title={title} supporting={supporting ?? (isRent ? "Rental properties will be listed here once current availability is connected to the CRM." : "Institutional diligence applied to every asset in the Leap Living portfolio.")} />
      {allowCommercial && <div className="category-switch" role="tablist" aria-label="Property category">
        <button role="tab" aria-selected={activeCategory === "buy"} className={activeCategory === "buy" ? "selected" : ""} onClick={() => switchCategory("buy")}>Featured Acquisitions (Buy)</button>
        <button role="tab" aria-selected={activeCategory === "commercial"} className={activeCategory === "commercial" ? "selected" : ""} onClick={() => switchCategory("commercial")}>Commercial Mandates</button>
      </div>}
    </div>

    <form className="catalogue-filters" onSubmit={(event) => { event.preventDefault(); setApplied({ ...draft }); showToast(`Showing ${isRent ? "rental" : "verified"} opportunities matching your criteria.`); }}>
      <label className="filter-field"><span><MapPin size={14} /> LOCATION / COMMUNITY</span><div className="select-shell"><select value={draft.location} onChange={(e) => setDraft({ ...draft, location: e.target.value })}>{locations.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={15} /></div></label>
      <label className="filter-field"><span><Building2 size={14} /> PROPERTY TYPE</span><div className="select-shell"><select value={draft.type} onChange={(e) => setDraft({ ...draft, type: e.target.value })}>{propertyTypes.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={15} /></div></label>
      <label className="filter-field"><span><BedDouble size={14} /> BEDROOMS</span><div className="select-shell"><select value={draft.beds} onChange={(e) => setDraft({ ...draft, beds: e.target.value })}>{bedroomOptions.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={15} /></div></label>
      <fieldset className="filter-field price-field"><legend><SlidersHorizontal size={14} /> {isRent ? "MONTHLY RENT (AED)" : "PRICE RANGE (AED)"}</legend><div className="price-inputs"><input aria-label="Minimum price" inputMode="numeric" placeholder="Min" value={draft.min} onChange={(e) => setDraft({ ...draft, min: e.target.value })} /><i>—</i><input aria-label="Maximum price" inputMode="numeric" placeholder="Max" value={draft.max} onChange={(e) => setDraft({ ...draft, max: e.target.value })} /></div></fieldset>
      <button className="button button-teal filter-submit" type="submit"><Search size={16} /> Search Properties <ArrowRight size={16} /></button>
    </form>

    <div className="results-bar">
      <div className="results-count"><strong>{isRent && visible.length === 0 ? "No Rental Residences Listed Yet" : `${visible.length} Properties Found`}</strong><span>{isRent ? "Rental catalogue awaiting CRM availability" : activeCategory === "commercial" ? "Institutional & off-market mandates" : "Verified acquisition opportunities"}</span></div>
      <div className="results-actions">
        <label className="sort-control"><SlidersHorizontal size={15} /><span>Sort By</span><select value={sort} onChange={(e) => setSort(e.target.value)}><option value="newest">Newest to Market</option><option value="price-asc">Price: Low to High</option><option value="price-desc">Price: High to Low</option></select><ChevronDown size={14} /></label>
        <div className="view-toggle" aria-label="Layout">
          <button className={view === "grid" ? "selected" : ""} aria-label="Grid view" aria-pressed={view === "grid"} onClick={() => setView("grid")}><LayoutGrid size={16} /></button>
          <button className={view === "list" ? "selected" : ""} aria-label="List view" aria-pressed={view === "list"} onClick={() => setView("list")}><List size={17} /></button>
        </div>
        <button className="map-button" onClick={() => showToast("Interactive map view is not connected in this prototype. Portfolio locations are listed on every card.")}><MapPin size={15} /> Map View</button>
      </div>
    </div>

    {activeFilters.length > 0 && <div className="applied-bar"><span>Active filters:</span>{activeFilters.map((filter) => <span className="filter-chip" key={filter}>{filter}</span>)}<button onClick={clearFilters}><X size={14} /> Clear All</button></div>}

    <div className={`property-grid${view === "list" ? " is-list" : ""}`}>
      {visible.map((item) => <PropertyCard key={item.id} item={item} listView={view === "list"} />)}
    </div>

    {visible.length === 0 && <CatalogueEmptyState category={activeCategory} onClear={clearFilters} />}

    <p className="disclaimer">Illustrative portfolio · Not verified live inventory. Photography is editorial and indicative. Prices are subject to advisor confirmation.</p>
  </div></section>;
}
