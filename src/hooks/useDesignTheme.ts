import { useContext } from "react";
import { DesignThemeContext } from "../context/theme";

export function useDesignTheme() {
  const ctx = useContext(DesignThemeContext);
  if (!ctx) throw new Error("useDesignTheme must be used within a DesignThemeProvider");
  return ctx;
}
