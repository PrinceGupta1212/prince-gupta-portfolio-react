// =========================================================
// EDUCATION SECTION
// =========================================================
import { educationData } from "../data/portfolioConfig";

export default function Education() {
  return (
    <section id="education" className="section" style={{ paddingTop: "30px" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">4 · Education</span>
          <h2>Academic background</h2>
        </div>

        <div className="edu-grid reveal">
          {educationData.map((ed, i) => (
            <div className="edu-card card" key={i}>
              <div className="icon">
                <i className={ed.icon}></i>
              </div>
              <div>
                <h4>{ed.degree}</h4>
                <div className="school">{ed.school}</div>
                <div className="when">{ed.when}</div>
                {ed.score && <div className="score">Score: {ed.score}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
