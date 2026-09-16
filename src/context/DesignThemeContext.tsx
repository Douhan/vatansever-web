import { useState, type ReactNode } from "react";
import { DesignThemeContext, type DesignTheme } from "./theme";

export function DesignThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<DesignTheme>("main");
  return <DesignThemeContext.Provider value={{ theme, setTheme }}>{children}</DesignThemeContext.Provider>;
}
