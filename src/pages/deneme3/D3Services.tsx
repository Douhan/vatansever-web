import { services } from "../../data/services";
import { Reveal } from "../../components/motion/Reveal";

export function D3Services() {
  return (
    <section id="hizmetler" className="d3-section">
      <div className="d3-container">
        <Reveal>
          <span className="d3-eyebrow">Hizmetler</span>
          <h2 className="d3-section-title">Tek ekip. Dört disiplin.</h2>
          <p className="d3-section-sub">
            Mobil uygulama, web ve tasarım ihtiyaçlarınızı tek bir ekiple, uçtan uca yönetiyoruz.
          </p>
        </Reveal>

        <div className="d3-services-grid">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 70} className="d3-service-card">
              <span className="d3-service-card__icon" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
