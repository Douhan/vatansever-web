import { Button } from "../ui/Button";
import { HeroFlow } from "./HeroFlow";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__content">
        <div className="hero__copy">
          <h1 className="hero__title">
            Fikrinizi, insanların <span className="hero__title-accent">günlük hayatında</span> kullandığı bir ürüne
            dönüştürüyoruz
          </h1>
          <p className="hero__subtitle">
            Vatansever; mobil uygulama ve web projelerinizi tasarımdan gerçek kullanıcıya ulaştığı güne kadar uçtan uca
            hayata geçiren bir tasarım &amp; yazılım stüdyosudur.
          </p>
          <div className="hero__actions">
            <Button to="/#iletisim">Projeni Anlat</Button>
            <Button to="/#portfolyo" variant="ghost" className="hero__secondary">
              Portfolyoyu Gör →
            </Button>
          </div>
        </div>

        <div className="hero__showcase">
          <HeroFlow />
        </div>
      </div>
    </section>
  );
}
