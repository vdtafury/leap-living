type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  supporting?: string;
};

export function SectionHeading({ eyebrow, title, supporting }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}<span /></p>
      <h2>{title}</h2>
      {supporting && <p className="section-supporting">{supporting}</p>}
    </div>
  );
}
