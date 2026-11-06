import type { ReactNode } from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";

export const metadata: Metadata = pageMetadata.buy;

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
