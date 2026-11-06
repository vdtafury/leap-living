/* Canonical property domain types. English-only site. */

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
