
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "Light" ? "Dark" : "Light"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-root ${theme.toLowerCase()}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
