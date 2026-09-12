// =========================================================
// HERO SECTION — pehli cheez jo recruiter dekhta hai
// -> Left: intro + buttons
// -> Right: animated "typing" code card
// =========================================================
import { useEffect, useState } from "react";

// Ye lines hero ke code-card mein "type" hoti hain
// { t: type-of-token, v: value } — type ke hisaab se color CSS class lagti hai
const CODE_LINES = [

{ t: "kw", v: "const " },

{ t: "fn", v: "developer" },

{ t: "p", v: " = {\n" },

{ t: "p", v: "  " },

{ t: "prop", v: "name" },

{ t: "p", v: ": " },

{ t: "str", v: '"Prince Gupta"' },

{ t: "p", v: ",\n" },

{ t: "p", v: "  " },

{ t: "prop", v: "role" },

{ t: "p", v: ": " },

{ t: "str", v: '"Software Developer"' },

{ t: "p", v: ",\n" },

{ t: "p", v: "  " },

{ t: "prop", v: "build" },

{ t: "p", v: ": " },

{ t: "str", v: '"Full-stack applications"' },

{ t: "p", v: ",\n" },

{ t: "p", v: "  " },

{ t: "prop", v: "stack" },

{ t: "p", v: ": [" },

{ t: "str", v: '"React"' },

{ t: "p", v: ", " },

{ t: "str", v: '"Node.js"' },

{ t: "p", v: ", " },

{ t: "str", v: '"MongoDB"' },

{ t: "p", v: "]" },

{ t: "p", v: ",\n" },

{ t: "p", v: "  " },

{ t: "prop", v: "problemSolving" },

{ t: "p", v: ": " },

{ t: "str", v: '"DSA with Java"' },

{ t: "p", v: ",\n" },

{ t: "p", v: "  " },

{ t: "prop", v: "exploring" },

{ t: "p", v: ": " },

{ t: "str", v: '"AI & APIs"' },

{ t: "p", v: ",\n" },

{ t: "p", v: "  " },

{ t: "prop", v: "mindset" },

{ t: "p", v: ": " },

{ t: "str", v: '"Learn. Build. Improve."' },

{ t: "p", v: "\n" },

{ t: "p", v: "};" },

];



function TypedCode() {
  const [charsShown, setCharsShown] = useState(0);
  const fullText = CODE_LINES.map((l) => l.v).join("");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reducedMotion) {
      setCharsShown(fullText.length);
      return;
    }
    if (charsShown >= fullText.length) return;
    const timer = setTimeout(() => setCharsShown((c) => c + 2), 14);
    return () => clearTimeout(timer);
  }, [charsShown, fullText.length, reducedMotion]);

  // charsShown ke hisaab se har token ka partial/pura text nikaalte hain
  let consumed = 0;
  const rendered = CODE_LINES.map((line, i) => {
    const remaining = charsShown - consumed;
    const chunk = line.v.slice(0, Math.max(0, remaining));
    consumed += line.v.length;
    const cls = line.t === "p" ? "" : line.t;
    return (
      <span key={i} className={cls}>
        {chunk}
      </span>
    );
  });

  return (
    <>
      {rendered}
      {charsShown < fullText.length && <span className="typed-cursor"></span>}
    </>
  );
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-shape shape-1"></div>
      <div className="hero-bg-shape shape-2"></div>

      <div className="container hero-grid">

        <div>
          <span className="pill hero-badge">
            <span className="dot"></span> Available for Opportunities
          </span>

         <h1> Hi, I'm <span>Prince Gupta</span> </h1>

<p className="hero-role">Software Developer — Full Stack &amp; DSA</p>

<p className="hero-desc"> I’m a developer who likes to build things, understand how they work, and keep improving them. My work focuses on full-stack development with React, Node.js, Express, and MongoDB, alongside a strong focus on problem-solving and Data Structures &amp; Algorithms. I’m driven by curiosity, practical projects, and the goal of becoming a developer who can turn real-world problems into thoughtful software. </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-code"></i> View My Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              <i className="fa-regular fa-paper-plane"></i> Let's Connect
            </a>
          </div>
        </div>

        <div style={{ position: "relative", marginTop: "90px" }}>
          <div className="badge-float badge-1">
            <i className="fa-brands fa-java" style={{ color: "#F89820" }}></i> Java
          </div>
          <div className="badge-float badge-2">
            <i className="fa-brands fa-react" style={{ color: "#61DAFB" }}></i> React
          </div>
           <img
  src="/assets/image.jpeg"
  alt="Prince Gupta"
  style={{
    position: "absolute",
    top: "-170px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid black",
    boxShadow: "var(--shadow)",
    zIndex:13,
  }}
/>
          <div className="dev-card">
            <div className="dev-card-head">
              <span></span>
              <span></span>
              <span></span>
              <small>developer.js</small>
            </div>
            <pre className="dev-card-body" style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
              <TypedCode />
            </pre>
          </div>
        </div>
      </div>

  
    </section>
  );
}
