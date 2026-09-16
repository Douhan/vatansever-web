import { Link } from "react-router-dom";
import { D2_NAV_LINKS } from "./D2Header";

export function D2Footer() {
  return (
    <footer className="d2-footer">
      <div className="d2-container d2-footer__row">
        <Link to="/deneme-2" className="d2-brand">
          Vatansever<span className="d2-brand__dot">.</span>
        </Link>
        <nav className="d2-footer__links">
          {D2_NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="d2-footer__note">© {new Date().getFullYear()} Vatansever · Tasarım Konsepti C</span>
      </div>
    </footer>
  );
}
