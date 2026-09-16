import { useLayoutEffect, useState, type ReactNode } from "react";
import { DesignThemeContext, type DesignTheme } from "./theme";

export function DesignThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<DesignTheme>("main");

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [theme]);

  return <DesignThemeContext.Provider value={{ theme, setTheme }}>{children}</DesignThemeContext.Provider>;
}
