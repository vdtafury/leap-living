import type { ReactNode } from "react";
import SiteShell from "@/components/layout/SiteShell";

export default function WebsiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <SiteShell>{children}</SiteShell>;
}
