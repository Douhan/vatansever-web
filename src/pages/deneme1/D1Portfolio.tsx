import { projects } from "../../data/projects";
import { Reveal, RevealLink } from "../../components/motion/Reveal";

const D1_ACCENTS = [
  "linear-gradient(160deg, #8b6bff, #6366f1)",
  "linear-gradient(160deg, #6366f1, #22d3ee)",
  "linear-gradient(160deg, #22d3ee, #8b6bff)",
  "linear-gradient(160deg, #a78bfa, #6366f1)",
  "linear-gradient(160deg, #6366f1, #8b6bff)",
  "linear-gradient(160deg, #38bdf8, #8b6bff)",
];

export function D1Portfolio() {
  return (
    <section id="portfolyo" className="d1-section">
      <div className="d1-container">
        <Reveal className="d1-section-head">
          <span className="d1-eyebrow">Portfolyo</span>
          <h2 className="d1-section-title">Örnek proje vitrinimiz</h2>
          <p className="d1-section-sub">
            Gerçek ekran görüntüleriyle hayata geçirdiğimiz projeler ve demo çalışmalar bir arada.
          </p>
        </Reveal>

        <div className="d1-portfolio-grid">
          {projects.slice(0, 6).map((project, index) => (
            <RevealLink
              key={project.slug}
              delay={(index % 3) * 70}
              to={`/deneme-1/proje/${project.slug}`}
              className="d1-portfolio-card d1-glass"
            >
              <div className="d1-portfolio-card__preview" style={!project.screenshot ? { background: D1_ACCENTS[index % D1_ACCENTS.length], opacity: 0.9 } : undefined}>
                {project.screenshot ? (
                  <img src={project.screenshot} alt={project.name} />
                ) : (
                  <div className="d1-portfolio-card__preview-grid">
                    <div />
                    <div />
                    <div />
                  </div>
                )}
              </div>
              <span className="d1-badge">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
            </RevealLink>
          ))}
        </div>
      </div>
    </section>
  );
}
