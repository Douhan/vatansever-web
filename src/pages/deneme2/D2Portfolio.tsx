import { projects } from "../../data/projects";
import { Reveal, RevealLink } from "../../components/motion/Reveal";

export function D2Portfolio() {
  return (
    <section id="portfolyo" className="d2-section">
      <div className="d2-container">
        <Reveal className="d2-section-head">
          <span className="d2-eyebrow">Portfolyo</span>
          <h2 className="d2-section-title">Seçili çalışmalar</h2>
          <p className="d2-section-sub">Gerçek projelerimiz ve sürecimizi gösteren demo çalışmalar, sade bir liste düzeninde.</p>
        </Reveal>

        <div className="d2-portfolio-list">
          {projects.map((project, index) => (
            <RevealLink
              key={project.slug}
              delay={Math.min(index, 4) * 50}
              to={`/deneme-2/proje/${project.slug}`}
              className="d2-portfolio-row"
            >
              <span className="d2-portfolio-row__index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="d2-portfolio-row__name">{project.name}</h3>
                <p className="d2-portfolio-row__summary">{project.summary}</p>
              </div>
              <span className="d2-tag">{project.category}</span>
              <span className="d2-portfolio-row__arrow">→</span>
            </RevealLink>
          ))}
        </div>
      </div>
    </section>
  );
}
