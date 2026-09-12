// =========================================================
// ABOUT SECTION — intro + info cards + quick stats
// =========================================================
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">1 · About</span>
          <h2>A bit about how I got here</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
           <p> I'm a BCA student and aspiring software engineer who enjoys turning ideas into working software. I’m particularly interested in full-stack development, problem-solving, and building applications that are not just functional, but thoughtfully designed and easy to use. </p>

<p> I work primarily with the MERN stack — React, Node.js, Express, and MongoDB and I also explore Java, Python, JavaScript, SQL, and AI integrations. Every project I build is an opportunity to go beyond tutorials, understand how things work under the hood, and become a better developer. </p>

<p> What motivates me most is the process of taking a problem, breaking it down, and turning it into something people can actually use. I'm continuously strengthening my DSA and software development fundamentals, while building real projects that challenge me to think, debug, and improve. </p>

<p> I'm now working toward becoming a well-rounded software engineer — someone who can learn quickly, write reliable code, and contribute meaningfully to products that solve real problems. </p>
          </div>

          <div className="about-cards reveal">
            <div className="info-card card">
              <i className="fa-solid fa-graduation-cap"></i>
              <div>
                <h4>Education</h4>
                <p>Bachelor of Computer Applications (BCA)</p>
              </div>
            </div>
            <div className="info-card card">
              <i className="fa-solid fa-bullseye"></i>
              <div>
                <h4>Current Focus</h4>
                <p>Java, DSA, and Full-Stack Web Development (MERN)</p>
              </div>
            </div>
            <div className="info-card card">
              <i className="fa-solid fa-layer-group"></i>
              <div>
                <h4>Interests</h4>
                <p>Building useful software, solving problems, and learning new technologies</p>
              </div>
            </div>
            <div className="info-card card">
              <i className="fa-solid fa-flag"></i>
              <div>
                <h4>Career Goal</h4>
                <p>To grow as a Software Engineer and build impactful real-world applications</p>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-row reveal">
          <div className="stat-card card">
            <div className="num">Multiple</div>
            <div className="label">Projects Built</div>
          </div>
          <div className="stat-card card">
            <div className="num">10+</div>
            <div className="label">Technologies</div>
          </div>
          <div className="stat-card card">
            <div className="num">Ongoing</div>
            <div className="label">DSA Practice</div>
          </div>
          <div className="stat-card card">
            <div className="num">BCA</div>
            <div className="label">Education</div>
          </div>
        </div>
      </div>
    </section>
  );
}
