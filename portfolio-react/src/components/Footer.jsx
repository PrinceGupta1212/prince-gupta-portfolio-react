// =========================================================
// FOOTER — brand, nav links, socials, dynamic copyright year
// =========================================================
import { portfolioConfig } from "../data/portfolioConfig";

export default function Footer() {
  const githubUrl = portfolioConfig.github === "YOUR_GITHUB_HERE" ? "#" : portfolioConfig.github;
  const year = new Date().getFullYear(); // har saal khud-ba-khud update hoga

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#hero" className="logo">
              <span className="mark">PG</span> {portfolioConfig.name}
            </a>
            <p>Software developer who enjoys building real-world projects, learning new technologies, and getting better at the fundamentals with every project I work on.
</p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h5>Navigate</h5>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h5>Connect</h5>
              <a href={portfolioConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={`mailto:${portfolioConfig.email}`}>Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} {portfolioConfig.name}. All rights reserved.</span>
          <div className="footer-socials">
            <a href={portfolioConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={`mailto:${portfolioConfig.email}`} aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
