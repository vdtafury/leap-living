import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Terms of Use | LEAP LIVING", description: "Terms for using the LEAP LIVING website and illustrative property portfolio." };
export default function Layout({ children }: Readonly<{ children: ReactNode }>) { return children; }
