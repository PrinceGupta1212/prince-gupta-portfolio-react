// =========================================================
// WHY WORK WITH ME — 4 short pitch cards
// Ye static content hai (config file mein daalne ki zarurat nahi
// kyunki ye rarely change hota hai) — agar text badalna ho
// toh seedha yahan edit kar do
// =========================================================
const REASONS = [
{
  icon: "fa-solid fa-diagram-project",
  title: "Problem Solving",
  desc: "I enjoy breaking problems into smaller steps and improving my DSA skills by solving problems regularly.",
},

{
  icon: "fa-solid fa-arrow-trend-up",
  title: "Continuous Learning",
  desc: "I’m always curious to learn something new, whether it’s a technology, tool, or a better way to build things.",
},

{
  icon: "fa-solid fa-hammer",
  title: "Project Driven",
  desc: "I learn best when I build. Working on real projects helps me understand concepts and turn what I learn into something useful.",
},

{
  icon: "fa-solid fa-seedling",
  title: "Growth Mindset",
  desc: "I’m focused on improving a little every day and becoming more confident as I prepare for my software development career.",
},
];

export default function WhyMe() {
  return (
    <section id="why" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">9 · Why Me</span>
          <h2>What I bring to a team</h2>
        </div>

        <div className="why-grid reveal">
          {REASONS.map((r) => (
            <div className="why-card card" key={r.title}>
              <i className={r.icon}></i>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
