import { AnimatedNumber } from "../../components/motion/AnimatedNumber";

export function D1Hero() {
  return (
    <section className="d1-hero">
      <span className="d1-hero__glow d1-hero__glow--violet" aria-hidden="true" />
      <span className="d1-hero__glow d1-hero__glow--indigo" aria-hidden="true" />
      <span className="d1-hero__glow d1-hero__glow--cyan" aria-hidden="true" />

      <div className="d1-container d1-hero__grid">
        <div>
          <span className="d1-eyebrow">Mobil &amp; Web Ajansı</span>
          <h1 className="d1-hero__title">
            Ürününüzü <span className="d1-hero__title-accent">cam berraklığında</span> bir deneyime taşıyoruz
          </h1>
          <p className="d1-hero__subtitle">
            Vatansever; mobil uygulama ve web projelerinizi, modern SaaS ürünlerine yakışan sade ve şeffaf bir
            arayüz diliyle tasarlar, geliştirir.
          </p>
          <div className="d1-hero__actions">
            <a href="#iletisim" className="d1-btn d1-btn-primary">
              Projeni Anlat
            </a>
            <a href="#portfolyo" className="d1-btn d1-btn-ghost">
              Portfolyoyu Gör
            </a>
          </div>
          <div className="d1-hero__badges">
            <span className="d1-glass">React Native</span>
            <span className="d1-glass">Next.js</span>
            <span className="d1-glass">Swift</span>
            <span className="d1-glass">UI/UX</span>
          </div>
        </div>

        <div className="d1-panel d1-glass">
          <div className="d1-panel__row">
            <div className="d1-panel__dot-row">
              <span />
              <span />
              <span />
            </div>
            <span className="d1-panel__live">Canlı önizleme</span>
          </div>
          <div className="d1-panel__stats">
            <div className="d1-panel__stat">
              <strong>
                <AnimatedNumber value="%98" />
              </strong>
              <span>Müşteri memnuniyeti</span>
            </div>
            <div className="d1-panel__stat">
              <strong>
                <AnimatedNumber value="30+" />
              </strong>
              <span>Tamamlanan proje</span>
            </div>
          </div>
          <div className="d1-panel__bars" aria-hidden="true">
            <span style={{ height: "40%" }} />
            <span style={{ height: "65%" }} />
            <span style={{ height: "50%" }} />
            <span style={{ height: "85%" }} />
            <span style={{ height: "60%" }} />
            <span style={{ height: "92%" }} />
            <span style={{ height: "70%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
