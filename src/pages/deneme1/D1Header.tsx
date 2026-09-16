import { Link } from "react-router-dom";
import { DesignSwitcher } from "../../components/theme/DesignSwitcher";

const NAV_LINKS = [
  { label: "Hizmetler", href: "/deneme-1#hizmetler" },
  { label: "Portfolyo", href: "/deneme-1#portfolyo" },
  { label: "Fiyatlandırma", href: "/deneme-1#fiyatlandirma" },
  { label: "İletişim", href: "/deneme-1#iletisim" },
];

export function D1Header() {
  return (
    <header className="d1-header">
      <div className="d1-container">
        <div className="d1-header__inner d1-glass">
          <Link to="/deneme-1" className="d1-brand">
            <span className="d1-brand__mark" />
            Vatansever
          </Link>
          <nav className="d1-nav">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} to={link.href}>
                {link.label}
              </Link>
            ))}
            <Link to="/deneme-1#iletisim" className="d1-btn d1-btn-primary d1-btn-sm d1-nav__cta">
              Projeni Anlat
            </Link>
            <DesignSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}

export { NAV_LINKS as D1_NAV_LINKS };
