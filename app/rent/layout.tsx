import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent Property in Dubai | LEAP LIVING",
  description: "Explore long-term Dubai rental residences with transparent monthly pricing, availability, locations and key features.",
};

export default function RentLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
