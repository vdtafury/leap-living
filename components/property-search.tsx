"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Building2, ChevronDown, Compass, KeyRound, MapPin } from "lucide-react";

type Intent = "Buy" | "Rent" | "Commercial";

type SearchCriteria = {
  location: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
};

const intents: Intent[] = ["Buy", "Rent", "Commercial"];

export function PropertySearch() {
  const [intent, setIntent] = useState<Intent>("Buy");
  const [criteria, setCriteria] = useState<SearchCriteria>({
    location: "",
    propertyType: "All property types",
    minPrice: "",
    maxPrice: "",
  });
  const [notice, setNotice] = useState("");

  function updateCriteria<K extends keyof SearchCriteria>(key: K, value: SearchCriteria[K]) {
    setCriteria((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Your search criteria are ready. Live property search will be connected to the CRM.");
  }

  return (
    <form className="property-search" onSubmit={handleSubmit}>
      <div className="search-tabs" role="tablist" aria-label="Property intent">
        {intents.map((item) => {
          const Icon = item === "Buy" ? KeyRound : item === "Rent" ? Compass : Building2;
          return (
            <button
              type="button"
              role="tab"
              aria-selected={intent === item}
              className={intent === item ? "selected" : ""}
              key={item}
              onClick={() => setIntent(item)}
            >
              <Icon size={15} />{item}
            </button>
          );
        })}
      </div>
      <div className="search-fields">
        <label className="search-field location-field">
          <span>Location, Community or Developer</span>
          <div className="input-shell">
            <MapPin size={16} />
            <input
              value={criteria.location}
              onChange={(event) => updateCriteria("location", event.target.value)}
              placeholder="e.g. Downtown Dubai, Palm Jumeirah"
            />
          </div>
        </label>
        <label className="search-field type-field">
          <span>Property Type</span>
          <div className="input-shell">
            <select value={criteria.propertyType} onChange={(event) => updateCriteria("propertyType", event.target.value)}>
              <option>All property types</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Penthouse</option>
              <option>Townhouse</option>
              <option>Commercial</option>
            </select>
            <ChevronDown size={16} />
          </div>
        </label>
        <fieldset className="search-field price-field">
          <legend>Price Range (AED)</legend>
          <div className="price-inputs">
            <input
              aria-label="Minimum price"
              inputMode="numeric"
              placeholder="Min Price"
              value={criteria.minPrice}
              onChange={(event) => updateCriteria("minPrice", event.target.value)}
            />
            <input
              aria-label="Maximum price"
              inputMode="numeric"
              placeholder="Max Price"
              value={criteria.maxPrice}
              onChange={(event) => updateCriteria("maxPrice", event.target.value)}
            />
          </div>
        </fieldset>
        <button className="button button-teal search-submit" type="submit">
          Explore Verified<br className="desktop-break" /> Properties <ArrowRight size={17} />
        </button>
      </div>
      {notice && (
        <p className="form-notice" role="status">
          {notice}
          <button type="button" onClick={() => setNotice("")} aria-label="Dismiss message">×</button>
        </p>
      )}
    </form>
  );
}
