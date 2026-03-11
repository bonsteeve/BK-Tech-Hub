"use client";

import * as React from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: "dark" | "light" | "system";
};

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {
  React.useEffect(() => {
    const stored = localStorage.getItem("bk-theme");
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark");
    
    if (stored === "dark" || stored === "light") {
      root.classList.add(stored);
    } else if (stored === "system" || !stored) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(stored ? systemTheme : defaultTheme);
      if (!stored) {
        localStorage.setItem("bk-theme", defaultTheme);
      }
    }
  }, [defaultTheme]);

  return <>{children}</>;
}
