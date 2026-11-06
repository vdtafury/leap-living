import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import { SectionHeader } from "@/components/shared/SectionHeader";

export default function NotFound() {
  return <SiteShell>
    <section className="section-pad"><div className="wrap" style={{ maxWidth: 680, marginInline: "auto" }}>
      <SectionHeader
        eyebrow="404 · PAGE NOT FOUND"
        title="This page is not available."
        supporting="The page you requested has moved or does not exist. Head back to the homepage, or explore the verified portfolio."
        centered
      />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: 30 }}>
        <Link className="button button-teal" href="/">Back to Home</Link>
        <Link className="button button-outline" href="/buy">Browse Properties</Link>
      </div>
    </div></section>
  </SiteShell>;
}
