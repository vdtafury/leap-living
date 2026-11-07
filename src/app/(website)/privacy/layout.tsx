import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Privacy Policy | LEAP LIVING", description: "Privacy information for the LEAP LIVING website." };
export default function Layout({ children }: Readonly<{ children: ReactNode }>) { return children; }
