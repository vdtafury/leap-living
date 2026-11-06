import { developerPartners } from "@/lib/home-data";

export function PartnersSection() {
  return (
    <section className="partners-section" id="partners">
      <div className="wrap partners-inner">
        <div className="partners-intro">
          <p className="eyebrow">OUR DEVELOPER PARTNERS</p>
          <p>Representing developers and institutional investors across project planning, positioning, commercialization, and global roadshows.</p>
        </div>
        <div className="partners-list">
          {developerPartners.map((partner, index) => (
            <div className={`partner-logo partner-${index + 1}`} key={partner}>
              <span>{partner}</span>
              {index === 0 && <small>PROPERTIES</small>}
              {index === 3 && <small>REALTY</small>}
              {index === 5 && <small>DEVELOPMENTS</small>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
