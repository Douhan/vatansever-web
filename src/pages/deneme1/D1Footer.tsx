import { Link } from "react-router-dom";
import { D1_NAV_LINKS } from "./D1Header";

export function D1Footer() {
  return (
    <footer className="d1-footer">
      <div className="d1-container d1-footer__row">
        <Link to="/deneme-1" className="d1-brand">
          <span className="d1-brand__bracket">&lt;</span>
          Vatansever
          <span className="d1-brand__bracket">/&gt;</span>
        </Link>
        <nav className="d1-footer__links">
          {D1_NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="d1-footer__note">© {new Date().getFullYear()} Vatansever · Tasarım Konsepti B</span>
      </div>
    </footer>
  );
}
