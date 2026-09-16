import { services } from "../../data/services";
import { Reveal } from "../../components/motion/Reveal";

export function D2Services() {
  return (
    <section id="hizmetler" className="d2-section">
      <div className="d2-container">
        <Reveal className="d2-section-head">
          <span className="d2-eyebrow">Hizmetler</span>
          <h2 className="d2-section-title">Tek çatı altında dört disiplin</h2>
          <p className="d2-section-sub">
            Mobil uygulama, web ve tasarım ihtiyaçlarınızı tek bir ekiple, sade bir süreçle yönetiyoruz.
          </p>
        </Reveal>
      </div>

      <div className="d2-container">
        <div className="d2-services-grid">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 70} className="d2-service-card">
              <span className="d2-service-card__index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
