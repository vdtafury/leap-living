import { PageHero } from "./PageHero";

export function LegalPage({ eyebrow, title, description, sections }: {
  eyebrow: string; title: string; description: string;
  sections: { title: string; body: string }[];
}) {
  return <>
    <PageHero crumb={eyebrow} eyebrow={`LEAP LIVING · ${eyebrow}`} title={title} description={description} image="/images/hero/band-architecture.jpg" alt="Modern architectural facade" />
    <section className="legal-page"><div className="wrap legal-page-inner">
      {sections.map((section, index) => <article key={section.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{section.title}</h2><p>{section.body}</p></div></article>)}
    </div></section>
  </>;
}
