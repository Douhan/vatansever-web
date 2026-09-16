import { DESIGN_THEMES } from "../../data/designThemes";
import { useDesignTheme } from "../../hooks/useDesignTheme";
import "./DesignSwitcher.css";

export function DesignSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useDesignTheme();

  return (
    <div className={`design-switcher ${className ?? ""}`} role="group" aria-label="Tasarım konsepti seç">
      {DESIGN_THEMES.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`design-switcher__swatch ${theme === item.id ? "is-active" : ""}`}
          style={{ background: item.swatch }}
          title={item.label}
          aria-label={item.label}
          aria-pressed={theme === item.id}
          onClick={() => {
            setTheme(item.id);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      ))}
    </div>
  );
}
