/* Shared content for every LEAP LIVING page. No page owns the data twice. */

export type Category = "buy" | "rent" | "commercial";
export type Intent = "Buy" | "Rent" | "Commercial";

export type Listing = {
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
  availability?: string;
  features?: string[];
  image: string;
  alt: string;
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Buy", href: "/buy" },
  { label: "Rent", href: "/rent" },
  { label: "Sell", href: "/sell" },
  { label: "Contact", href: "/contact" },
];

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
    badge: "Exclusive Advisory", availability: "Ready to Move In", image: "/images/property-waterfront.jpg",
    alt: "Contemporary illuminated waterfront villa with a reflecting pool at dusk",
  },
  {
    id: "LL-DT-0125", name: "The Boulevard Sky Penthouse", community: "Downtown Dubai · Opera District",
    location: "Downtown Dubai", developer: "EMAAR", category: "buy", type: "Penthouse",
    price: 12500000, priceLabel: "AED 12,500,000", usd: "USD 3,404,000",
    beds: 4, facts: ["4 Beds", "5 Baths", "5,200 sq.ft"], view: "Burj Khalifa & Fountain View",
    badge: "Ready Handover", availability: "Ready to Move In", image: "/images/property-penthouse.jpg",
    alt: "Refined penthouse lounge with panoramic floor-to-ceiling city views",
  },
  {
    id: "LL-DH-096", name: "The Golfside Luxury Duplex", community: "Dubai Hills Estate · Golf Place",
    location: "Dubai Hills Estate", developer: "EMAAR", category: "buy", type: "Duplex",
    price: 9600000, priceLabel: "AED 9,600,000", usd: "USD 2,614,000",
    beds: 4, facts: ["4 Beds", "5 Baths", "4,150 sq.ft"], view: "Championship Golf Course View",
    badge: "Off-Plan · Handover Q4 2027", availability: "Handover Q4 2027", image: "/images/property-golf.jpg",
    alt: "Modern villas overlooking a manicured golf course at golden hour",
  },
  {
    id: "LL-DM-031", name: "Cavalli Tower by DAMAC", community: "Dubai Marina",
    location: "Dubai Marina", developer: "DAMAC", category: "buy", type: "Apartment",
    price: 7980000, priceLabel: "AED 7,980,000", usd: "USD 2,173,000",
    beds: 3, facts: ["3 Beds", "4 Baths", "2,560 sq.ft"], view: "Marina & Sea View",
    badge: "Exclusive Advisory", availability: "Ready to Move In", image: "/images/property-marina.jpg",
    alt: "Dubai Marina skyline and yachts viewed from the waterfront",
  },
  {
    id: "LL-PJ-077", name: "Palm Jumeirah Garden Villa", community: "Palm Jumeirah · Signature Villas",
    location: "Palm Jumeirah", developer: "NAKHEEL", category: "buy", type: "Villa",
    price: 18400000, priceLabel: "AED 18,400,000", usd: "USD 5,010,000",
    beds: 5, facts: ["5 Beds", "6 Baths", "7,200 sq.ft"], view: "Private Beach & Sea View",
    badge: "Ready Handover", availability: "Ready to Move In", image: "/images/property-palm.jpg",
    alt: "Private swimming pool and sun terrace overlooking the Arabian Gulf",
  },
  {
    id: "LL-BW-019", name: "Bluewaters Sky Residence", community: "Bluewaters Island",
    location: "Bluewaters Island", developer: "MERAAS", category: "buy", type: "Apartment",
    price: 8900000, priceLabel: "AED 8,900,000", usd: "USD 2,423,000",
    beds: 3, facts: ["3 Beds", "4 Baths", "2,410 sq.ft"], view: "Ain Dubai & Sea View",
    badge: "Ready Handover", availability: "Ready to Move In", image: "/images/property-terrace.jpg",
    alt: "Elegant contemporary lounge opening onto a waterfront terrace at dusk",
  },

  /* --------------------------------------------------------------- rentals */
  {
    id: "LL-BB-204", name: "The Lana Residences", community: "Business Bay · The Lana",
    location: "Business Bay", developer: "OMNIYAT", category: "rent", type: "Apartment",
    price: 79000, priceLabel: "AED 79,000 / month", usd: "USD 21,500 / month",
    beds: 3, facts: ["3 Beds", "4 Baths", "3,220 sq.ft"], view: "Dubai Canal & Downtown View",
    badge: "Prime Residence", availability: "Available Now",
    features: ["Fully Furnished", "Concierge", "Canal Frontage"], image: "/images/property-residence.jpg",
    alt: "Bright designer living room with garden and pool views",
  },
  {
    id: "LL-MBR-118", name: "Sobha Hartland Garden Villa", community: "Mohammed Bin Rashid City",
    location: "Mohammed Bin Rashid City", developer: "SOBHA REALTY", category: "rent", type: "Villa",
    price: 65000, priceLabel: "AED 65,000 / month", usd: "USD 17,700 / month",
    beds: 4, facts: ["4 Beds", "5 Baths", "4,780 sq.ft"], view: "Lagoon & Park View",
    badge: "Prime Residence", availability: "Available Now",
    features: ["Private Garden", "Maid's Room", "Covered Parking"], image: "/images/property-townhouse.jpg",
    alt: "Modern villa with palm trees and a private driveway",
  },
  {
    id: "LL-EH-042", name: "Emirates Hills Estate Villa", community: "Emirates Hills",
    location: "Emirates Hills", developer: "EMAAR", category: "rent", type: "Villa",
    price: 121000, priceLabel: "AED 121,000 / month", usd: "USD 33,000 / month",
    beds: 5, facts: ["5 Beds", "6 Baths", "8,100 sq.ft"], view: "Golf Course & Skyline View",
    badge: "Private Mandate", availability: "Available from 1 Dec 2026",
    features: ["Infinity Pool", "Golf Frontage", "Smart Home"], image: "/images/property-pool.jpg",
    alt: "Evening pool terrace with palm trees and waterfront villas beyond",
  },
  {
    id: "LL-BW-210", name: "Bluewaters Waterfront Apartment", community: "Bluewaters Island",
    location: "Bluewaters Island", developer: "MERAAS", category: "rent", type: "Apartment",
    price: 62000, priceLabel: "AED 62,000 / month", usd: "USD 16,900 / month",
    beds: 3, facts: ["3 Beds", "4 Baths", "2,410 sq.ft"], view: "Ain Dubai & Sea View",
    badge: "Prime Residence", availability: "Available Now",
    features: ["Sea View Terrace", "Fully Furnished", "Gym & Pool"], image: "/images/property-terrace.jpg",
    alt: "Contemporary lounge with a waterfront terrace at dusk",
  },
  {
    id: "LL-PJ-310", name: "Palm Jumeirah Beach Villa", community: "Palm Jumeirah · Frond N",
    location: "Palm Jumeirah", developer: "NAKHEEL", category: "rent", type: "Villa",
    price: 145000, priceLabel: "AED 145,000 / month", usd: "USD 39,500 / month",
    beds: 5, facts: ["5 Beds", "6 Baths", "7,200 sq.ft"], view: "Private Beach & Sea View",
    badge: "Exclusive Mandate", availability: "Limited Availability",
    features: ["Private Beach", "Infinity Pool", "Staff Quarters"], image: "/images/property-palm.jpg",
    alt: "Sun terrace and pool overlooking the Arabian Gulf",
  },
  {
    id: "LL-DM-220", name: "Dubai Marina Sky Apartment", community: "Dubai Marina",
    location: "Dubai Marina", developer: "DAMAC", category: "rent", type: "Apartment",
    price: 42000, priceLabel: "AED 42,000 / month", usd: "USD 11,400 / month",
    beds: 2, facts: ["2 Beds", "3 Baths", "1,850 sq.ft"], view: "Marina & Yacht View",
    badge: "Prime Residence", availability: "Available Now",
    features: ["Marina View", "Fully Furnished", "Valet Parking"], image: "/images/property-marina.jpg",
    alt: "Dubai Marina skyline and yachts viewed from the waterfront",
  },

  /* ------------------------------------------------------------ commercial */
  {
    id: "LL-DIFC-01", name: "DIFC Grade-A Whole Floor", community: "DIFC · Gate Avenue",
    location: "DIFC", developer: "DUBAI HOLDING", category: "commercial", type: "Commercial",
    price: 24000000, priceLabel: "AED 24,000,000", usd: "USD 6,535,000",
    beds: 0, facts: ["Whole Floor", "Grade A", "12,400 sq.ft"], view: "DIFC & Downtown Skyline View",
    badge: "Institutional Mandate", availability: "Immediate", image: "/images/method-move.jpg",
    alt: "Curved glass office tower reflecting a clear blue sky",
  },
  {
    id: "LL-BB-COM", name: "Business Bay Land Parcel", community: "Business Bay · Marasi Drive",
    location: "Business Bay", developer: "MERAAS", category: "commercial", type: "Commercial",
    price: 38500000, priceLabel: "AED 38,500,000", usd: "USD 10,484,000",
    beds: 0, facts: ["Freehold Plot", "G+24 Potential", "48,000 sq.ft"], view: "Dubai Canal Frontage",
    badge: "Off-Market", availability: "By Appointment", image: "/images/band-architecture.jpg",
    alt: "Modern high-rise tower viewed from below against a blue sky",
  },
];

export const methods = [
  { number: "01", title: "Discover", heading: "Market Intelligence & Sourcing", text: "Direct off-market pipeline, zoning and land viability studies, master developer roadmaps, and unlisted asset access.", image: "/images/method-discover.jpg", alt: "White angular modern facade against a blue sky" },
  { number: "02", title: "Decide", heading: "Commercial Evaluation & Risk Mitigation", text: "Institutional yield modeling, exit-strategy structuring, comparative asset benchmarking, and regulatory compliance audit.", image: "/images/method-decide.jpg", alt: "Curved glass architecture with clean geometric lines" },
  { number: "03", title: "Move", heading: "Disciplined Execution & Management", text: "High-level negotiation, seamless contract closing, post-acquisition portfolio planning, and long-term asset management.", image: "/images/method-move.jpg", alt: "Contemporary glass tower seen from below" },
];

export const commitments = [
  { title: "Strategic Advisory", text: "Guidance based on data, analysis and experience rather than market sentiment." },
  { title: "Market Access", text: "Direct relationships across master developers, institutional stakeholders and government entities." },
  { title: "Precision", text: "Every recommendation is evaluated against a defined objective and long-term capital outcome." },
  { title: "Experience", text: "More than two decades of proven leadership across multiple market cycles and asset classes." },
  { title: "Trust", text: "Absolute fiduciary integrity, discretion, and client-first execution." },
];

export const partners = ["EMAAR", "NAKHEEL", "MERAAS", "SOBHA", "OMNIYAT", "DAMAC", "DUBAI HOLDING"];

export const stats = [
  { value: "21+ Years", text: "UAE real estate leadership since 2005" },
  { value: "AED 12B+", text: "Landmark development commercialization" },
  { value: "100% Fiduciary", text: "Long-term advisory over transactions" },
  { value: "Direct Access", text: "Developers, family offices & institutions" },
];
