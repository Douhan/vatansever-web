import { services } from "../../data/services";
import { Reveal } from "../../components/motion/Reveal";

export function D1Services() {
  return (
    <section id="hizmetler" className="d1-section">
      <div className="d1-container">
        <Reveal className="d1-section-head">
          <span className="d1-eyebrow">Hizmetler</span>
          <h2 className="d1-section-title">Tek ekipten uçtan uca ürün</h2>
          <p className="d1-section-sub">
            Mobil uygulama, web ve tasarım ihtiyaçlarınızı tek bir ekiple, tek bir dilde yönetiyoruz.
          </p>
        </Reveal>

        <div className="d1-services-grid">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 70} className="d1-service-card d1-glass">
              <span className="d1-service-card__icon" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
