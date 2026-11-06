import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Property | LEAP LIVING",
  description: "Request an objective valuation and a discreet, data-backed selling plan for your prime Dubai asset.",
};

export default function SellLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
