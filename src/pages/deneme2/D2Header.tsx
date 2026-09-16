import { Link } from "react-router-dom";
import { DesignSwitcher } from "../../components/theme/DesignSwitcher";

const NAV_LINKS = [
  { label: "Hizmetler", href: "/deneme-2#hizmetler" },
  { label: "Portfolyo", href: "/deneme-2#portfolyo" },
  { label: "Fiyatlandırma", href: "/deneme-2#fiyatlandirma" },
  { label: "İletişim", href: "/deneme-2#iletisim" },
];

export function D2Header() {
  return (
    <header className="d2-header">
      <div className="d2-container d2-header__inner">
        <Link to="/deneme-2" className="d2-brand">
          <span className="d2-brand__bracket">&lt;</span>
          Vatansever
          <span className="d2-brand__bracket">/&gt;</span>
        </Link>
        <nav className="d2-nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.href}>
              {link.label}
            </Link>
          ))}
          <Link to="/deneme-2#iletisim" className="d2-btn d2-btn-primary d2-btn-sm d2-nav__cta">
            Projeni Anlat
          </Link>
          <DesignSwitcher />
        </nav>
      </div>
    </header>
  );
}

export { NAV_LINKS as D2_NAV_LINKS };
