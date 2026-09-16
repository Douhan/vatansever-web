import { createContext } from "react";

export type DesignTheme = "main" | "d1" | "d2" | "d3";

export interface DesignThemeContextValue {
  theme: DesignTheme;
  setTheme: (theme: DesignTheme) => void;
}

export const DesignThemeContext = createContext<DesignThemeContextValue | null>(null);
