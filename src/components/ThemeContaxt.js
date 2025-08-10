import React, { createContext, useEffect, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme-dark");
    if (saved !== null) return saved === "1";
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    const willBeDark = darkMode;
    document.body.style.backgroundColor = willBeDark ? "#0a0a0f" : "#ffffff";
    document.body.style.colorScheme = willBeDark ? "dark" : "light";
    document.documentElement.setAttribute(
      "data-theme",
      willBeDark ? "dark" : "light",
    );
    localStorage.setItem("theme-dark", willBeDark ? "1" : "0");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const willBeDark = !darkMode;
    setDarkMode(willBeDark);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
