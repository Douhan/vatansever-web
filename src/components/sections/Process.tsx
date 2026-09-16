import { Reveal } from "../motion/Reveal";
import "./Process.css";

const STEPS = [
  { step: "01", title: "Keşif", description: "Hedeflerinizi, kullanıcılarınızı ve kapsamı birlikte netleştiriyoruz." },
  { step: "02", title: "Tasarım", description: "Kullanıcı akışları ve arayüzleri markanıza özel olarak tasarlıyoruz." },
  { step: "03", title: "Geliştirme", description: "Mobil ve web tarafında hızlı, test edilmiş sprintlerle geliştiriyoruz." },
  { step: "04", title: "Lansman & Destek", description: "Yayına alıyor, sonrasında bakım ve büyüme desteği sunuyoruz." },
];

export function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="process-grid">
          {STEPS.map((item, index) => (
            <Reveal key={item.step} delay={index * 70} className="process-item">
              <span className="process-item__step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {index < STEPS.length - 1 ? <span className="process-item__line" aria-hidden="true" /> : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
