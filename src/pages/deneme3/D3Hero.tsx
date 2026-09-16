import { AnimatedNumber } from "../../components/motion/AnimatedNumber";

const STAGE = [
  { value: "30+", label: "Tamamlanan proje" },
  { value: "8 yıl", label: "Sektör deneyimi" },
  { value: "%98", label: "Müşteri memnuniyeti" },
];

export function D3Hero() {
  return (
    <section className="d3-container d3-hero">
      <span className="d3-eyebrow">Vatansever</span>
      <h1 className="d3-hero__title">Mobil ve web.
        <br />Yeniden tasarlandı.</h1>
      <p className="d3-hero__subtitle">
        Fikrinizden mağazaya, ekrandan tarayıcıya. Uçtan uca tasarlanan, özenle geliştirilen ürünler.
      </p>
      <div className="d3-hero__actions">
        <a href="#iletisim" className="d3-btn-pill">
          Projeni Anlat
        </a>
        <a href="#portfolyo" className="d3-link">
          Portfolyoyu gör <span aria-hidden="true">›</span>
        </a>
      </div>

      <div className="d3-hero__stage">
        {STAGE.map((item) => (
          <div key={item.label} className="d3-hero__stage-item">
            <strong>
              <AnimatedNumber value={item.value} />
            </strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
