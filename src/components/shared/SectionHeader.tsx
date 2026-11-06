export function SectionHeader({
  eyebrow, title, supporting, centered = false, light = false,
}: { eyebrow: string; title: string; supporting?: string; centered?: boolean; light?: boolean }) {
  return <div className={`section-heading${centered ? " is-centered" : ""}${light ? " is-light" : ""}`}>
    <p className="eyebrow">{eyebrow}<span /></p>
    <h2>{title}</h2>
    {supporting && <p className="section-supporting">{supporting}</p>}
  </div>;
}
