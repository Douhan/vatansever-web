import { Link } from "react-router-dom";
import "./Footer.css";

const FOOTER_LINKS = [
  { label: "Hizmetler", to: "/#hizmetler" },
  { label: "Portfolyo", to: "/#portfolyo" },
  { label: "Fiyatlandırma", to: "/#fiyatlandirma" },
  { label: "İletişim", to: "/#iletisim" },
];

const SOCIALS = [
  {
    label: "E-posta",
    href: "mailto:doguhanvatansever27@gmail.com",
    path: "M3 6h18v12H3z M3 6l9 7 9-7",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M4 9h3v11H4zM5.5 4a1.8 1.8 0 1 1 0 3.6A1.8 1.8 0 0 1 5.5 4zM10.5 9h3v1.7c.5-.9 1.7-1.9 3.4-1.9 3.1 0 3.6 2 3.6 4.6V20h-3v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20h-3z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17 6.5h.01",
  },
  {
    label: "GitHub",
    href: "#",
    path: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2z",
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <Link to="/" className="brand">
            <span className="brand__bracket">&lt;</span>
            Vatansever
            <span className="brand__bracket">/&gt;</span>
          </Link>
          <p className="site-footer__desc">
            Mobil uygulama, web sitesi ve web uygulaması tasarlıyor; fikirlerinizi uçtan uca ürüne dönüştürüyoruz.
          </p>
          <div className="site-footer__socials">
            {SOCIALS.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} title={social.label}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d={social.path} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__col">
          <span className="site-footer__heading">Site</span>
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <span className="site-footer__heading">İletişim</span>
          <ul>
            <li>
              <a href="mailto:doguhanvatansever27@gmail.com">doguhanvatansever27@gmail.com</a>
            </li>
            <li>
              <span style={{ color: "var(--color-text-faint)" }}>İstanbul, Türkiye</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Vatansever. Tüm hakları saklıdır.</span>
        <span className="site-footer__demo-note">Bu site demo/tanıtım amaçlıdır.</span>
      </div>
    </footer>
  );
}
