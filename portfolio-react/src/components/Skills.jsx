// =========================================================
// SKILLS SECTION — category filters + skill cards
// Data src/data/portfolioConfig.js se aata hai
// =========================================================
import { useState } from "react";
import { skillsData, skillCatLabel } from "../data/portfolioConfig";

const CATEGORIES = ["all", "languages", "frontend", "backend", "database", "tools"];
const CATEGORY_LABELS = {
  all: "All",
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleSkills =
    activeFilter === "all" ? skillsData : skillsData.filter((s) => s.cat === activeFilter);

  return (
    <section id="skills" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">2 · Skills</span>
          <h2>Technologies I work with</h2>
          <p>These are the technologies and tools I use while learning, building projects, and improving my development skills.
</p>
        </div>

        <div className="skill-filters reveal">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        <div className="skills-grid reveal">
          {visibleSkills.map((skill) => (
            <div className="skill-card card" key={skill.name}>
              <i className={skill.icon}></i>
              <h4>{skill.name}</h4>
              <span>{skillCatLabel[skill.cat]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
