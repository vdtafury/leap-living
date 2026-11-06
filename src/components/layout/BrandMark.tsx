import Image from "next/image";
import Link from "next/link";

export function BrandMark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return <Link className="brand-mark" href="/" aria-label="LEAP LIVING — home">
    <Image
      src={tone === "dark" ? "/brand/brand-dark.png" : "/brand/brand-light.png"}
      alt="LEAP LIVING"
      width={104}
      height={75}
      sizes="(max-width: 760px) 70px, (max-width: 1040px) 78px, (max-width: 1280px) 84px, 92px"
      priority
    />
    <span className="brand-divider" />
    <span className="brand-sub">REAL ESTATE<br />CONSULTANCY</span>
  </Link>;
}
