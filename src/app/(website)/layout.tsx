import SiteShell from "@/components/layout/SiteShell";

export default function WebsiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell>{children}</SiteShell>;
}
