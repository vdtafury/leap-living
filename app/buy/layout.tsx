import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Property in Dubai | LEAP LIVING",
  description: "Browse curated Dubai homes for sale with prices, bedrooms, bathrooms, square footage and verified property details.",
};

export default function BuyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
