import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";

export const metadata: Metadata = pageMetadata.rent;

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
