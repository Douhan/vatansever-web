import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { DesignSwitcher } from "../theme/DesignSwitcher";
import "./Header.css";

const NAV_LINKS = [
  { label: "Hizmetler", to: "/#hizmetler" },
  { label: "Portfolyo", to: "/#portfolyo" },
  { label: "Fiyatlandırma", to: "/#fiyatlandirma" },
  { label: "İletişim", to: "/#iletisim" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__row">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand__mark" />
          Vatansever
        </Link>

        <div className="site-header__actions">
          <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <Link key={link.label} to={link.to} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button to="/#iletisim" size="sm" className="site-nav__cta" onClick={() => setMenuOpen(false)}>
              Projeni Anlat
            </Button>
          </nav>

          <DesignSwitcher className="site-header__switcher" />

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            aria-label="Menüyü aç/kapat"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
