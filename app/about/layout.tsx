import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | LEAP LIVING",
  description: "Discover Leap Living's disciplined approach to Dubai real estate advisory, led by two decades of market experience.",
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
