// =========================================================
// BACK TO TOP — floating button, 500px scroll ke baad dikhta hai
// =========================================================
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button id="back-to-top" className={show ? "show" : ""} onClick={scrollToTop} aria-label="Back to top">
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
