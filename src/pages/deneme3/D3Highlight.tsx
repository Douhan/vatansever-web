import { Reveal } from "../../components/motion/Reveal";
import { AnimatedNumber } from "../../components/motion/AnimatedNumber";

const SPECS = [
  { value: "8 hafta", label: "Ortalama proje süresi" },
  { value: "%100", label: "Kod incelemesinden geçer" },
  { value: "30 gün", label: "Lansman sonrası destek" },
];

export function D3Highlight() {
  return (
    <section className="d3-section d3-section--dark">
      <div className="d3-container">
        <Reveal>
          <span className="d3-eyebrow">Yaklaşımımız</span>
          <h2 className="d3-section-title">
            Detaya bu kadar önem verilir mi?
            <br />Evet.
          </h2>
          <p className="d3-section-sub">
            Her piksel, her geçiş, her dokunuş bir amaca hizmet eder. Sade görünen her şeyin arkasında aylarca süren
            ince işçilik vardır.
          </p>
        </Reveal>

        <div className="d3-highlight__stats">
          {SPECS.map((spec, index) => (
            <Reveal key={spec.label} delay={index * 80} style={{ display: "block" }}>
              <strong>
                <AnimatedNumber value={spec.value} />
              </strong>
              <span>{spec.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
