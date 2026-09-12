// =========================================================
// CONTACT SECTION — contact links + validated form
// -> Ye pure-frontend form hai, kahin submit nahi hota.
// -> Real messages bhejne ke liye Formspree/EmailJS connect
//    karo (neeche comment mein bataya gaya hai kahan).
// =========================================================
import { useState } from "react";
import { portfolioConfig } from "../data/portfolioConfig";
const API_URL = "https://prince-gupta-portfolio-react.onrender.com/api/contact";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const githubUrl = portfolioConfig.github === "YOUR_GITHUB_HERE" ? "#" : portfolioConfig.github;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!emailPattern.test(form.email.trim())) newErrors.email = "Please enter a valid email.";
    if (!form.subject.trim()) newErrors.subject = "Please add a subject.";
    if (!form.message.trim()) newErrors.message = "Please write a message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong.");
    }

    setStatus("Thanks! Your message has been sent — I'll get back to you soon.");
    setForm(EMPTY_FORM);
  } catch (error) {
    setStatus(`Couldn't send message: ${error.message}`);
  }
};

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">10 · Contact</span>
          <h2>Let's Build Something Together</h2>
          <p>Have a project in mind or just want to connect? Feel free to reach out — I’m always open to new ideas, conversations, and opportunities.
</p>
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-links">
              <div className="contact-link-row card">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <span>{portfolioConfig.email}</span>
                  <small>Email</small>
                </div>
                <button className="copy-btn" onClick={copyEmail} aria-label="Copy email">
                  <i className={copied ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
                </button>
              </div>

              <a className="contact-link-row card" href={portfolioConfig.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
                <div>
                  <span>LinkedIn</span>
                  <small>prince-gupta</small>
                </div>
              </a>

              <a className="contact-link-row card" href={githubUrl} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
                <div>
                  <span>GitHub</span>
                  <small>{portfolioConfig.github === "YOUR_GITHUB_HERE" ? "PLACEHOLDER — ADD LINK" : portfolioConfig.github}</small>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form card reveal" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="field">
                <label htmlFor="cf-name">Name</label>
                <input type="text" id="cf-name" name="name" value={form.name} onChange={handleChange} autoComplete="name" />
                <span className="error">{errors.name}</span>
              </div>
              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input type="email" id="cf-email" name="email" value={form.email} onChange={handleChange} autoComplete="email" />
                <span className="error">{errors.email}</span>
              </div>
            </div>

            <div className="field">
              <label htmlFor="cf-subject">Subject</label>
              <input type="text" id="cf-subject" name="subject" value={form.subject} onChange={handleChange} />
              <span className="error">{errors.subject}</span>
            </div>

            <div className="field">
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" name="message" value={form.message} onChange={handleChange}></textarea>
              <span className="error">{errors.message}</span>
            </div>

            <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }}>
              <i className="fa-regular fa-paper-plane"></i> Send Message
            </button>

            {status && <p className="form-status show">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
