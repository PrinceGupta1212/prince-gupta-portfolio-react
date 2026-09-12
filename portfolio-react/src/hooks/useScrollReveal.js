// =========================================================
// useScrollReveal — jab bhi koi section scroll karke
// screen pe aata hai, usko fade-in + slide-up animation deta hai.
// -> Kisi bhi section ke top-level div pe className="reveal"
//    lagao, ye hook automatically "in" class add kar dega
//    jab wo element visible ho jaye.
// =========================================================
import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target); // ek baar reveal hone ke baad dobara check nahi karna
          }
        });
      },
      { threshold: 0.12 }
    );

    // Poore page ke saare .reveal elements ko observe karo
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
