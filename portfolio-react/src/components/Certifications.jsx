// =========================================================
// CERTIFICATIONS SECTION
// =========================================================
import { certData } from "../data/portfolioConfig";

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">5 · Certifications</span>
          <h2>Achievements &amp; certifications</h2>
        </div>

        <div className="cert-grid reveal">
          {certData.map((c, i) => (
            <div className="cert-card card" key={i}>
              <i className="fa-solid fa-certificate"></i>
              <h4>{c.name}</h4>
              <div className="issuer">{c.issuer}</div>
              <div className="date">{c.date}</div>
              <a href={c.link} target="_blank" rel="noopener noreferrer">
                Verify <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
