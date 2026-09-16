import { pricingTiers } from "../../data/pricing";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Reveal } from "../motion/Reveal";
import "./Pricing.css";

export function Pricing() {
  return (
    <section id="fiyatlandirma" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Fiyatlandırma"
            title="İhtiyacınıza uygun bir başlangıç noktası"
            subtitle="Aşağıdaki paketler örnek başlangıç fiyatlarıdır; her proje kapsamına göre size özel bir teklif hazırlıyoruz."
          />
        </Reveal>

        <div className="pricing-grid">
          {pricingTiers.map((tier, index) => (
            <Reveal
              key={tier.id}
              delay={index * 90}
              className={`pricing-card card ${tier.highlighted ? "is-highlighted" : ""}`}
            >
              {tier.highlighted ? <span className="pricing-card__ribbon">En çok tercih edilen</span> : null}
              <h3>{tier.name}</h3>
              <p className="pricing-card__desc">{tier.description}</p>
              <div className="pricing-card__price">
                <span>{tier.price}</span>
                <small>{tier.priceNote}</small>
              </div>
              <ul>
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button to="/#iletisim" variant={tier.highlighted ? "primary" : "ghost"} className="pricing-card__cta">
                {tier.ctaLabel}
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
