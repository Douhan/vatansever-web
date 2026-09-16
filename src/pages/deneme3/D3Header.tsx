import { Link } from "react-router-dom";
import { DesignSwitcher } from "../../components/theme/DesignSwitcher";

const NAV_LINKS = [
  { label: "Hizmetler", href: "/deneme3#hizmetler" },
  { label: "Portfolyo", href: "/deneme3#portfolyo" },
  { label: "Fiyatlandırma", href: "/deneme3#fiyatlandirma" },
  { label: "İletişim", href: "/deneme3#iletisim" },
];

export function D3Header() {
  return (
    <header className="d3-header">
      <div className="d3-container d3-header__inner">
        <Link to="/deneme3" className="d3-brand">
          Vatansever
        </Link>
        <nav className="d3-nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.href}>
              {link.label}
            </Link>
          ))}
          <Link to="/deneme3#iletisim" className="d3-nav__cta">
            Projeni Anlat
          </Link>
          <DesignSwitcher />
        </nav>
      </div>
    </header>
  );
}

export { NAV_LINKS as D3_NAV_LINKS };
