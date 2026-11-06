import Image from "next/image";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand-mark${compact ? " brand-mark--compact" : ""}`} href="#top" aria-label="LEAP LIVING home">
      <span className="brand-logo-crop">
        <Image src="/images/leap-living-logo.png" alt="LEAP LIVING" width={200} height={200} priority={!compact} />
      </span>
      {!compact && <span className="brand-sub">REAL ESTATE<br />CONSULTANCY</span>}
    </a>
  );
}
