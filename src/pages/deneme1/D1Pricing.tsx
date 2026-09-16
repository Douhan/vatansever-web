import { pricingTiers } from "../../data/pricing";
import { Reveal } from "../../components/motion/Reveal";

export function D1Pricing() {
  return (
    <section id="fiyatlandirma" className="d1-section">
      <div className="d1-container">
        <Reveal className="d1-section-head">
          <span className="d1-eyebrow">Fiyatlandırma</span>
          <h2 className="d1-section-title">Şeffaf, basit paketler</h2>
          <p className="d1-section-sub">Örnek başlangıç fiyatları; kapsama göre size özel teklif hazırlıyoruz.</p>
        </Reveal>

        <div className="d1-pricing-grid">
          {pricingTiers.map((tier, index) => (
            <Reveal
              key={tier.id}
              delay={index * 90}
              className={`d1-pricing-card d1-glass ${tier.highlighted ? "is-highlighted" : ""}`}
            >
              {tier.highlighted ? <span className="d1-pricing-card__ribbon">En çok tercih edilen</span> : null}
              <h3>{tier.name}</h3>
              <p className="d1-pricing-card__desc">{tier.description}</p>
              <div className="d1-pricing-card__price">
                <span>{tier.price}</span>
                <small>{tier.priceNote}</small>
              </div>
              <ul>
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                href="#iletisim"
                className={`d1-btn d1-btn-block ${tier.highlighted ? "d1-btn-primary" : "d1-btn-ghost"}`}
              >
                {tier.ctaLabel}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
