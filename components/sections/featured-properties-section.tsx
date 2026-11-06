"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, BedDouble, Eye, Heart, Layers3, MapPin } from "lucide-react";
import { propertiesForCategory, type PropertyCategory } from "@/lib/home-data";
import { SectionHeading } from "@/components/section-heading";

export function FeaturedPropertiesSection() {
  const [category, setCategory] = useState<PropertyCategory>("buy");
  const [favorites, setFavorites] = useState<string[]>([]);
  const visibleProperties = propertiesForCategory(category);

  function toggleFavorite(name: string) {
    setFavorites((saved) => saved.includes(name)
      ? saved.filter((item) => item !== name)
      : [...saved, name]);
  }

  return (
    <section className="properties-section section-pad" id="properties">
      <div className="wrap">
        <div className="properties-heading">
          <SectionHeading eyebrow="CURATED PROPERTIES" title="Featured Properties" />
          <div className="category-switch" role="tablist" aria-label="Property category">
            <button
              role="tab"
              aria-selected={category === "buy"}
              className={category === "buy" ? "selected" : ""}
              onClick={() => setCategory("buy")}
            >
              Featured Acquisitions (Buy)
            </button>
            <button
              role="tab"
              aria-selected={category === "rent"}
              className={category === "rent" ? "selected" : ""}
              onClick={() => setCategory("rent")}
            >
              Prime Residences (Rent)
            </button>
          </div>
        </div>

        {visibleProperties.length > 0 ? (
          <div className="property-grid">
            {visibleProperties.map((property) => (
              <article className="property-card" key={property.name}>
                <div className="property-photo">
                  <Image src={property.image} alt={property.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                  <span className="property-badge">{property.badge}</span>
                  <button
                    className={`favorite${favorites.includes(property.name) ? " saved" : ""}`}
                    onClick={() => toggleFavorite(property.name)}
                    aria-label={`${favorites.includes(property.name) ? "Remove" : "Save"} ${property.name}`}
                    aria-pressed={favorites.includes(property.name)}
                  >
                    <Heart size={19} fill={favorites.includes(property.name) ? "currentColor" : "none"} />
                  </button>
                </div>
                <div className="property-info">
                  <p className="property-location"><MapPin size={14} />{property.location}</p>
                  <h3>{property.name}</h3>
                  <p className="property-price">{property.price}</p>
                  <div className="specs">
                    <span><BedDouble size={15} /> {property.beds} Beds</span>
                    <span><span className="bath-icon">▤</span> {property.baths} Baths</span>
                    <span><Layers3 size={14} /> {property.area}</span>
                  </div>
                  <p className="view-line"><Eye size={15} /> {property.view}</p>
                  <a className="details-link" href="#contact">Inspect Property Details <ArrowRight size={17} /></a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rental-empty" role="status" aria-live="polite">
            <h3>Rental listings are coming soon</h3>
            <p>Prime residences will appear here when the rental catalogue is connected.</p>
          </div>
        )}

        <div className="catalogue-actions">
          <a href="#contact">View Complete Buy Catalogue <ArrowRight size={17} /></a>
          <a href="#contact">View Complete Rental Catalogue <ArrowRight size={17} /></a>
        </div>
        <p className="disclaimer">Illustrative portfolio. Not verified live inventory. Prices indicative and subject to advisor confirmation.</p>
      </div>
    </section>
  );
}

