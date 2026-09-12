// =========================================================
// NAVBAR — sticky top navigation
// -> Scroll karne pe glass/blur effect apply hota hai
// -> Mobile pe hamburger menu khulta hai
// =========================================================
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { portfolioConfig } from "../data/portfolioConfig";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll hote hi navbar ko "scrolled" class dena (glass effect ke liye)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <a href="#hero" className="logo">
          <span className="mark">PG</span> {portfolioConfig.name}
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark and light mode">
            <i className={theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
          </button>

          <a
            href={portfolioConfig.resume}
            className="btn btn-secondary resume-btn desktop-only"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-file-arrow-down"></i> Resume
          </a>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-label="Mobile">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a
          href={portfolioConfig.resume}
          className="btn btn-primary resume-btn"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <i className="fa-solid fa-file-arrow-down"></i> Download Resume
        </a>
      </nav>
    </header>
  );
}
