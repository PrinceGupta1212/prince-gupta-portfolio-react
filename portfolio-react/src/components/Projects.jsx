// =========================================================
// PROJECTS SECTION — sirf featured projects dikhte hain
// Data src/data/portfolioConfig.js se aata hai
// =========================================================
import { featuredProjects } from "../data/portfolioConfig";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">3 · Projects</span>
          <h2>Things I've built</h2>
          <p>A few projects I've built while learning full-stack development, working with AI, and exploring modern web technologies.</p>
        </div>

        {featuredProjects.map((project) => (
          <div className="featured-project card reveal" key={project.name}>
            <div className="fp-visual overflow-hidden">
              <div className="img-wrap">
                <img
                  src={project.image || "/assets/ems-image.png"}
                  alt={project.name}
                />
              </div>
            </div>
            <div className="fp-content">
              <span className="pill">
                <span className="dot"></span> Featured Project
              </span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="fp-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}