import type { DesignTheme } from "../context/theme";

export interface DesignThemeMeta {
  id: DesignTheme;
  label: string;
  swatch: string;
}

export const DESIGN_THEMES: DesignThemeMeta[] = [
  { id: "main", label: "Orijinal — turuncu & 3D", swatch: "linear-gradient(135deg, #ffcf86 0%, #ff6a1a 55%, #c73f0a 100%)" },
  { id: "d1", label: "Konsept B — cam / SaaS", swatch: "linear-gradient(135deg, #a78bfa 0%, #6366f1 55%, #22d3ee 100%)" },
  { id: "d2", label: "Konsept C — minimal kurumsal", swatch: "linear-gradient(135deg, #faf8f2 0%, #cfead9 55%, #1f6f4a 100%)" },
  { id: "d3", label: "Konsept D — Apple stili", swatch: "linear-gradient(135deg, #ffffff 0%, #0071e3 55%, #06070a 100%)" },
];
