import Image from "next/image";
import Link from "next/link";

export function BrandMark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return <Link className="brand-mark" href="/" aria-label="LEAP LIVING — home">
    <Image
      src={tone === "dark" ? "/brand/brand-dark.png" : "/brand/brand-light.png"}
      alt="LEAP LIVING"
      width={104}
      height={75}
      priority
    />
    <span className="brand-divider" />
    <span className="brand-sub">REAL ESTATE<br />CONSULTANCY</span>
  </Link>;
}
