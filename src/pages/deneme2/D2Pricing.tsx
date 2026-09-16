import { pricingTiers } from "../../data/pricing";
import { Reveal } from "../../components/motion/Reveal";

export function D2Pricing() {
  return (
    <section id="fiyatlandirma" className="d2-section">
      <div className="d2-container">
        <Reveal className="d2-section-head">
          <span className="d2-eyebrow">Fiyatlandırma</span>
          <h2 className="d2-section-title">Net ve anlaşılır paketler</h2>
          <p className="d2-section-sub">Örnek başlangıç fiyatları; kapsama göre size özel teklif hazırlıyoruz.</p>
        </Reveal>
      </div>

      <div className="d2-container">
        <div className="d2-pricing-grid">
          {pricingTiers.map((tier, index) => (
            <Reveal
              key={tier.id}
              delay={index * 90}
              className={`d2-pricing-card ${tier.highlighted ? "is-highlighted" : ""}`}
            >
              {tier.highlighted ? <span className="d2-pricing-card__ribbon">En çok tercih edilen</span> : null}
              <h3>{tier.name}</h3>
              <p className="d2-pricing-card__desc">{tier.description}</p>
              <div className="d2-pricing-card__price">
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
                className={`d2-btn d2-btn-block ${tier.highlighted ? "d2-btn-primary" : "d2-btn-ghost"}`}
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
