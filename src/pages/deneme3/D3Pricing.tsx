import { pricingTiers } from "../../data/pricing";
import { Reveal } from "../../components/motion/Reveal";

export function D3Pricing() {
  return (
    <section id="fiyatlandirma" className="d3-section">
      <div className="d3-container">
        <Reveal>
          <span className="d3-eyebrow">Fiyatlandırma</span>
          <h2 className="d3-section-title">Modeli seçin.</h2>
          <p className="d3-section-sub">Örnek başlangıç fiyatları; kapsama göre size özel teklif hazırlıyoruz.</p>
        </Reveal>

        <div className="d3-pricing-grid">
          {pricingTiers.map((tier, index) => (
            <Reveal
              key={tier.id}
              delay={index * 90}
              className={`d3-pricing-card ${tier.highlighted ? "is-highlighted" : ""}`}
            >
              {tier.highlighted ? <span className="d3-pricing-card__ribbon">En çok tercih edilen</span> : null}
              <h3>{tier.name}</h3>
              <p className="d3-pricing-card__desc">{tier.description}</p>
              <div className="d3-pricing-card__price">
                <span>{tier.price}</span>
                <small>{tier.priceNote}</small>
              </div>
              <ul>
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#iletisim" className={`d3-btn-pill d3-btn-block ${tier.highlighted ? "" : "d3-btn-pill--ghost"}`}>
                {tier.ctaLabel}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
