import Image from "next/image";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageHero({ eyebrow, title, description, image, alt, crumb, children }: {
  eyebrow: string; title: string; description: string; image: string; alt: string; crumb: string;
  children?: React.ReactNode;
}) {
  return <section className="page-hero">
    <div className="page-hero-media">
      <Image src={image} alt={alt} fill priority sizes="100vw" />
      <div className="page-hero-fade" />
    </div>
    <div className="wrap page-hero-inner">
      <Breadcrumbs crumb={crumb} />
      <p className="eyebrow">{eyebrow}<span /></p>
      <h1>{title}</h1>
      <p className="page-hero-lead">{description}</p>
      {children && <div className="page-hero-actions">{children}</div>}
    </div>
  </section>;
}
