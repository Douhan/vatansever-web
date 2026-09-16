import { HeroScene } from "../three/HeroScene";
import { Button } from "../ui/Button";
import { AnimatedNumber } from "../motion/AnimatedNumber";
import "./Hero.css";

const STATS = [
  { value: "30+", label: "Tamamlanan proje" },
  { value: "8 yıl", label: "Sektör deneyimi" },
  { value: "%98", label: "Müşteri memnuniyeti" },
];

export function Hero() {
  return (
    <section className="hero">
      <HeroScene />
      <div className="hero__scrim" />
      <div className="container hero__content">
        <span className="eyebrow">Mobil &amp; Web Ajansı</span>
        <h1 className="hero__title">
          Fikirlerinizi <span className="hero__title-accent">Mobil ve Web</span> Deneyimlerine Dönüştürüyoruz
        </h1>
        <p className="hero__subtitle">
          Vatansever; tasarımdan geliştirmeye, lansmandan büyümeye kadar mobil uygulama ve web projelerinizi uçtan uca
          hayata geçiren bir tasarım &amp; yazılım stüdyosudur.
        </p>
        <div className="hero__actions">
          <Button to="/#iletisim">Projeni Anlat</Button>
          <Button to="/#portfolyo" variant="ghost">
            Portfolyoyu Gör
          </Button>
        </div>
        <dl className="hero__stats">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt>
                <AnimatedNumber value={stat.value} />
              </dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
