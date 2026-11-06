import type { LucideIcon } from "lucide-react";
import { Check, Search, SlidersHorizontal } from "lucide-react";

export type PropertyCategory = "buy" | "rent";

export type Property = {
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  view: string;
  badge: string;
  image: string;
  alt: string;
};

export type MethodStep = {
  number: string;
  title: string;
  text: string;
  icon: LucideIcon;
  image: string;
  alt: string;
};

export const featuredProperties: Property[] = [
  { name: "The Grand Opera Penthouse", location: "Downtown Dubai", price: "AED 8,500,000", beds: 4, baths: 5, area: "4,250 sq.ft", view: "Burj Khalifa View", badge: "Exclusive Advisory", image: "/images/property-penthouse.jpg", alt: "Contemporary penthouse interior with expansive glazing and sea views" },
  { name: "Palm Jumeirah Signature Villa", location: "Palm Jumeirah", price: "AED 38,000,000", beds: 6, baths: 7, area: "8,900 sq.ft", view: "Sea View", badge: "Off-Plan Handover 2027", image: "/images/property-villa.jpg", alt: "Contemporary Palm Jumeirah villa surrounded by landscaped gardens" },
  { name: "Emaar Beachfront Residences", location: "Emaar Beachfront", price: "AED 5,200,000", beds: 3, baths: 4, area: "2,350 sq.ft", view: "Marina View", badge: "Fully Furnished", image: "/images/property-residence.jpg", alt: "Light-filled contemporary residence with an ocean-facing living area" },
];

// Rental records will be supplied by the CRM. Keep the UI genuinely empty until then.
export const rentalProperties: Property[] = [];

export function propertiesForCategory(
  category: PropertyCategory,
  buy: Property[] = featuredProperties,
  rent: Property[] = rentalProperties,
): Property[] {
  return category === "buy" ? buy : rent;
}

export const methodology: MethodStep[] = [
  { number: "01", title: "Discover", text: "Proprietary market access, unlisted opportunities, and verified intelligence beyond public sentiment.", icon: Search, image: "/images/method-discover.jpg", alt: "Geometric glass facade in warm light" },
  { number: "02", title: "Decide", text: "Objective commercial evaluation, yield modeling, risk analysis, and alignment to your capital strategy.", icon: SlidersHorizontal, image: "/images/method-decide.jpg", alt: "Modern architectural detail viewed from below" },
  { number: "03", title: "Move", text: "Disciplined negotiation, seamless transaction execution, and enduring asset stewardship.", icon: Check, image: "/images/method-move.jpg", alt: "Contemporary architectural facade" },
];

export const developerPartners = ["EMAAR", "NAKHEEL", "MERAAS", "SOBHA", "OMNIYAT", "DUBAI HOLDING"] as const;
