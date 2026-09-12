// =========================================================
// CUSTOM CURSOR — sirf desktop pe dikhta hai (touch devices
// aur "reduced motion" preference pe automatically off ho jaata hai)
// =========================================================
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };
    window.addEventListener("mousemove", onMove);

    // Ring ko thoda "lag" ke saath follow karwate hain — smooth trailing effect
    let frameId;
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      frameId = requestAnimationFrame(loop);
    };
    loop();

    // Buttons/links pe hover karte waqt ring thoda expand ho
    const hoverables = document.querySelectorAll("a, button, .skill-card, .project-card");
    const expand = () => ring.classList.add("expand");
    const shrink = () => ring.classList.remove("expand");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameId);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", expand);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
}
