// =========================================================
// THEME CONTEXT — Dark/Light mode poori app mein manage karta hai
// -> Kisi bhi component mein useTheme() call karke
//    current theme + toggle function mil jaata hai.
// -> localStorage mein save hota hai taaki refresh pe
//    theme yaad rahe. Agar kabhi save nahi hua, toh
//    system preference (OS dark mode) follow karta hai.
// =========================================================
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  // Jab bhi theme badle, <html> tag pe data-theme attribute set karo
  // (globals.css isi attribute ko dekh ke colors switch karta hai)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook — components isse import karke theme use karenge
export function useTheme() {
  return useContext(ThemeContext);
}
