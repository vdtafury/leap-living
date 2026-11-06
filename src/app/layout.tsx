import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEAP LIVING | Certainty Through Precision",
  description: "Institutional clarity, strategic foresight, and private real estate advisory across Dubai.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // English-only site: no locale segment, no alternate-language metadata.
  return <html lang="en"><body>{children}</body></html>;
}
