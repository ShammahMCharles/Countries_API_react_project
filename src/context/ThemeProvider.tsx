import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-vh-100 bg-body text-body">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;