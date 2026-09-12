// =========================================================
// APP.jsx — ye poori site ka "master file" hai.
// Yahan sirf components ko sahi order mein jodte hain.
// Naya section add karna ho toh:
//   1) src/components/ mein naya file banao
//   2) yahan import karo
//   3) neeche <main> ke andar sahi jagah pe daal do
// =========================================================
import { ThemeProvider } from "./context/ThemeContext";
import { useScrollReveal } from "./hooks/useScrollReveal";

import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import GithubSection from "./components/GithubSection";
import Journey from "./components/Journey";
import WhyMe from "./components/WhyMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function PortfolioContent() {
  // Scroll hote hi ".reveal" wale sections ko fade-in animate karta hai
  useScrollReveal();

  return (
    <>
      <ScrollProgress />
      <CustomCursor />

      <a href="#main" className="skip-link">Skip to main content</a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <GithubSection />
        <Journey />
        <WhyMe />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  // Poori app ko ThemeProvider se wrap karte hain taaki
  // har component mein dark/light mode ka access ho
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
