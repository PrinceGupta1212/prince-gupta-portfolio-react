// =========================================================
// GITHUB SECTION — profile link + static repo list
// GitHub link add karne ke baad repo names bhi real kar dena
// =========================================================
import { portfolioConfig, githubRepos } from "../data/portfolioConfig";

export default function GithubSection() {
  const githubUrl = portfolioConfig.github === "YOUR_GITHUB_HERE" ? "#" : portfolioConfig.github;

  return (
    <section id="github" className="section" style={{ background: "var(--bg-secondary)", paddingTop: "30px" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">7 · GitHub</span>
          <h2>Code &amp; contributions</h2>
        </div>

        <div className="github-panel card reveal">
          <div>
            <h3>Follow my work on GitHub</h3>
            <p>Here are some of the projects I’ve built while learning and experimenting with different technologies. I’m always working on new ideas and improving my skills through real-world projects.</p>
            <a href={githubUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i> View GitHub Profile
            </a>
          </div>

          <div className="github-repos">
            {githubRepos.map((r) => (
              <div className="repo-row card" key={r.name}>
                <span className="name">
                  <i className="fa-solid fa-code-branch"></i> {r.name}
                </span>
                <span className="lang">{r.lang}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
