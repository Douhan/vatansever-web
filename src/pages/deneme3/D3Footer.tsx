import { Link } from "react-router-dom";
import { D3_NAV_LINKS } from "./D3Header";

export function D3Footer() {
  return (
    <footer className="d3-footer">
      <div className="d3-container">
        <div className="d3-footer__top">
          Vatansever; mobil uygulama, web sitesi ve web uygulaması tasarlayan ve geliştiren bir tasarım &amp; yazılım
          stüdyosudur.
          <nav className="d3-footer__links">
            {D3_NAV_LINKS.map((link) => (
              <Link key={link.label} to={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="d3-footer__bottom">© {new Date().getFullYear()} Vatansever. Tüm hakları saklıdır. · Tasarım Konsepti D</div>
      </div>
    </footer>
  );
}
