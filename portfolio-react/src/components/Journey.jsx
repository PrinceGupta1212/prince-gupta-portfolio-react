// =========================================================
// DEVELOPER JOURNEY — horizontal/vertical timeline of steps
// =========================================================
import { journeyData } from "../data/portfolioConfig";

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">8 · Journey</span>
          <h2>How I got here, step by step</h2>
        </div>

        <div className="journey-track reveal">
          {journeyData.map((step, i) => (
            <span key={step} style={{ display: "contents" }}>
              <span className="journey-node">{step}</span>
              {i < journeyData.length - 1 && (
                <span className="journey-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
