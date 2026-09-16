import { services } from "../../data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../motion/Reveal";
import "./Services.css";

export function Services() {
  return (
    <section id="hizmetler" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Hizmetler"
            title="Fikirden ürüne, tek çatı altında"
            subtitle="Mobil uygulama, web ve tasarım ihtiyaçlarınızı ayrı ayrı ekiplere böldürmeden, tek bir ekiple uçtan uca yönetiyoruz."
          />
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 70} className="service-card card">
              <span className="service-card__index">{String(index + 1).padStart(2, "0")}</span>
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
