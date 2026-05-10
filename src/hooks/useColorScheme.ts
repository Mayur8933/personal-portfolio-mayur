import { useState, useEffect, useCallback } from "react";

type ColorScheme = "light" | "dark";

const STORAGE_KEY = "mayur-portfolio-theme";

export function useColorScheme() {
  const getInitial = (): ColorScheme => {
    const stored = localStorage.getItem(STORAGE_KEY) as ColorScheme | null;
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [colorScheme, setColorScheme] = useState<ColorScheme>(getInitial);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, colorScheme);
    document.documentElement.setAttribute("data-theme", colorScheme);
  }, [colorScheme]);

  const toggle = useCallback(() => {
    setColorScheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { colorScheme, toggle };
}
