import { AnimatedNumber } from "../../components/motion/AnimatedNumber";

const STATS = [
  { value: "30+", label: "Tamamlanan proje" },
  { value: "8 yıl", label: "Sektör deneyimi" },
  { value: "%98", label: "Müşteri memnuniyeti" },
];

export function D2Hero() {
  return (
    <section className="d2-container d2-hero__grid">
      <div>
        <span className="d2-eyebrow">Mobil &amp; Web Ajansı</span>
        <h1 className="d2-hero__title">
          Fikirlerinizi <span className="d2-italic">özenle</span> ürüne dönüştürüyoruz
        </h1>
        <p className="d2-hero__subtitle">
          Vatansever; mobil uygulama ve web projelerinizi, sade ve zamansız bir tasarım diliyle uçtan uca hayata
          geçiren bir tasarım &amp; yazılım stüdyosudur.
        </p>
        <div className="d2-hero__actions">
          <a href="#iletisim" className="d2-btn d2-btn-primary">
            Projeni Anlat
          </a>
          <a href="#portfolyo" className="d2-btn d2-btn-ghost">
            Portfolyoyu Gör
          </a>
        </div>
        <dl className="d2-hero__stats">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt>
                <AnimatedNumber value={stat.value} />
              </dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="d2-hero__graphic" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="70" stroke="var(--d2-border-strong)" strokeWidth="1" />
          <rect x="45" y="45" width="110" height="110" rx="2" stroke="var(--d2-accent)" strokeWidth="1.2" transform="rotate(8 100 100)" />
          <line x1="30" y1="100" x2="170" y2="100" stroke="var(--d2-border-strong)" strokeWidth="1" />
          <line x1="100" y1="30" x2="100" y2="170" stroke="var(--d2-border-strong)" strokeWidth="1" />
          <circle cx="100" cy="100" r="4" fill="var(--d2-accent)" />
          <circle cx="150" cy="60" r="3" fill="var(--d2-accent)" />
          <circle cx="55" cy="145" r="3" fill="var(--d2-text)" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
