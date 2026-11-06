import { ArrowUpRight, Building2, Layers3, ShieldCheck } from "lucide-react";

const statistics = [
  { title: "21+ Years", lines: ["UAE Real Estate Leadership", "(Since 2005)"], icon: Building2 },
  { title: "AED 12B+", lines: ["Landmark Development", "Commercialization"], icon: Layers3 },
  { title: "100% Fiduciary", lines: ["Long-Term Advisory vs.", "Short-Term Transactional Brokerage"], icon: ShieldCheck },
  { title: "Direct Access", lines: ["Institutional Developers, Family Offices,", "and Government Stakeholders"], icon: ArrowUpRight },
];

export function StatisticsSection() {
  return (
    <section className="stats-strip" aria-label="Company at a glance">
      <div className="stats-inner wrap">
        {statistics.map(({ title, lines, icon: Icon }) => (
          <div className="stat" key={title}>
            <span className="stat-icon"><Icon aria-hidden="true" /></span>
            <div>
              <strong>{title}</strong>
              <p>{lines[0]}<br />{lines[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
