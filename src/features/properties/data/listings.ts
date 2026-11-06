import type { Listing } from "@/types/property";

/* Illustrative portfolio — replace with live inventory when the backend is connected. */

export const locations = ["All Locations", "Palm Jumeirah", "Downtown Dubai", "Dubai Hills Estate", "Dubai Marina", "Bluewaters Island", "Business Bay", "Mohammed Bin Rashid City", "Emirates Hills", "DIFC"];
export const propertyTypes = ["All Types", "Apartment", "Villa", "Penthouse", "Duplex", "Townhouse", "Commercial"];
export const bedroomOptions = ["Any", "2+", "3+", "4+", "5+"];

export const listings: Listing[] = [
  /* ------------------------------------------------------------ acquisitions */
  {
    id: "LL-PJ-048", name: "The Waterfront Sky Villa", community: "Palm Jumeirah · Frond N",
    location: "Palm Jumeirah", developer: "OMNIYAT", category: "buy", type: "Villa",
    price: 14800000, priceLabel: "AED 14,800,000", usd: "USD 4,030,000",
    beds: 5, facts: ["5 Beds", "6 Baths", "6,850 sq.ft"], view: "Full Arabian Gulf & Skyline View",
    badge: "Exclusive Advisory", availability: "Ready to Move In", image: "/images/properties/property-waterfront.jpg",
    alt: "Contemporary illuminated waterfront villa with a reflecting pool at dusk",
  },
  {
    id: "LL-DT-0125", name: "The Boulevard Sky Penthouse", community: "Downtown Dubai · Opera District",
    location: "Downtown Dubai", developer: "EMAAR", category: "buy", type: "Penthouse",
    price: 12500000, priceLabel: "AED 12,500,000", usd: "USD 3,404,000",
    beds: 4, facts: ["4 Beds", "5 Baths", "5,200 sq.ft"], view: "Burj Khalifa & Fountain View",
    badge: "Ready Handover", availability: "Ready to Move In", image: "/images/properties/property-penthouse.jpg",
    alt: "Refined penthouse lounge with panoramic floor-to-ceiling city views",
  },
  {
    id: "LL-DH-096", name: "The Golfside Luxury Duplex", community: "Dubai Hills Estate · Golf Place",
    location: "Dubai Hills Estate", developer: "EMAAR", category: "buy", type: "Duplex",
    price: 9600000, priceLabel: "AED 9,600,000", usd: "USD 2,614,000",
    beds: 4, facts: ["4 Beds", "5 Baths", "4,150 sq.ft"], view: "Championship Golf Course View",
    badge: "Off-Plan · Handover Q4 2027", availability: "Handover Q4 2027", image: "/images/properties/property-golf.jpg",
    alt: "Modern villas overlooking a manicured golf course at golden hour",
  },
  {
    id: "LL-DM-031", name: "Cavalli Tower by DAMAC", community: "Dubai Marina",
    location: "Dubai Marina", developer: "DAMAC", category: "buy", type: "Apartment",
    price: 7980000, priceLabel: "AED 7,980,000", usd: "USD 2,173,000",
    beds: 3, facts: ["3 Beds", "4 Baths", "2,560 sq.ft"], view: "Marina & Sea View",
    badge: "Exclusive Advisory", availability: "Ready to Move In", image: "/images/properties/property-marina.jpg",
    alt: "Dubai Marina skyline and yachts viewed from the waterfront",
  },
  {
    id: "LL-PJ-077", name: "Palm Jumeirah Garden Villa", community: "Palm Jumeirah · Signature Villas",
    location: "Palm Jumeirah", developer: "NAKHEEL", category: "buy", type: "Villa",
    price: 18400000, priceLabel: "AED 18,400,000", usd: "USD 5,010,000",
    beds: 5, facts: ["5 Beds", "6 Baths", "7,200 sq.ft"], view: "Private Beach & Sea View",
    badge: "Ready Handover", availability: "Ready to Move In", image: "/images/properties/property-palm.jpg",
    alt: "Private swimming pool and sun terrace overlooking the Arabian Gulf",
  },
  {
    id: "LL-BW-019", name: "Bluewaters Sky Residence", community: "Bluewaters Island",
    location: "Bluewaters Island", developer: "MERAAS", category: "buy", type: "Apartment",
    price: 8900000, priceLabel: "AED 8,900,000", usd: "USD 2,423,000",
    beds: 3, facts: ["3 Beds", "4 Baths", "2,410 sq.ft"], view: "Ain Dubai & Sea View",
    badge: "Ready Handover", availability: "Ready to Move In", image: "/images/properties/property-terrace.jpg",
    alt: "Elegant contemporary lounge opening onto a waterfront terrace at dusk",
  },

  /* Rental records are intentionally omitted until live CRM availability is connected. */

  /* ------------------------------------------------------------ commercial */
  {
    id: "LL-DIFC-01", name: "DIFC Grade-A Whole Floor", community: "DIFC · Gate Avenue",
    location: "DIFC", developer: "DUBAI HOLDING", category: "commercial", type: "Commercial",
    price: 24000000, priceLabel: "AED 24,000,000", usd: "USD 6,535,000",
    beds: 0, facts: ["Whole Floor", "Grade A", "12,400 sq.ft"], view: "DIFC & Downtown Skyline View",
    badge: "Institutional Mandate", availability: "Immediate", image: "/images/methodology/method-move.jpg",
    alt: "Curved glass office tower reflecting a clear blue sky",
  },
  {
    id: "LL-BB-COM", name: "Business Bay Land Parcel", community: "Business Bay · Marasi Drive",
    location: "Business Bay", developer: "MERAAS", category: "commercial", type: "Commercial",
    price: 38500000, priceLabel: "AED 38,500,000", usd: "USD 10,484,000",
    beds: 0, facts: ["Freehold Plot", "G+24 Potential", "48,000 sq.ft"], view: "Dubai Canal Frontage",
    badge: "Off-Market", availability: "By Appointment", image: "/images/hero/band-architecture.jpg",
    alt: "Modern high-rise tower viewed from below against a blue sky",
  },
];
