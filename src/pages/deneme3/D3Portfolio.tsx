import { projects } from "../../data/projects";
import { Reveal, RevealLink } from "../../components/motion/Reveal";

const D3_TILES = [
  "linear-gradient(160deg, #4b4b4d, #232325)",
  "linear-gradient(160deg, #e3e4e6, #b7b9bd)",
  "linear-gradient(160deg, #3a5a78, #1d2f3f)",
  "linear-gradient(160deg, #4b5d50, #253029)",
  "linear-gradient(160deg, #5e5470, #2f2a3a)",
  "linear-gradient(160deg, #f0e4d0, #cbb98f)",
];

export function D3Portfolio() {
  return (
    <section id="portfolyo" className="d3-section">
      <div className="d3-container">
        <Reveal>
          <span className="d3-eyebrow">Portfolyo</span>
          <h2 className="d3-section-title">Öne çıkan çalışmalar</h2>
          <p className="d3-section-sub">Hayata geçirdiğimiz projeler ve sürecimizi gösteren demo çalışmalar.</p>
        </Reveal>

        <div className="d3-portfolio-grid">
          {projects.slice(0, 6).map((project, index) => (
            <RevealLink
              key={project.slug}
              delay={(index % 3) * 70}
              to={`/deneme3/proje/${project.slug}`}
              className="d3-portfolio-card"
            >
              <div className="d3-portfolio-card__tile" style={!project.screenshot ? { background: D3_TILES[index % D3_TILES.length] } : undefined}>
                {project.screenshot ? <img src={project.screenshot} alt={project.name} /> : null}
              </div>
              <div className="d3-portfolio-card__body">
                <span>{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
            </RevealLink>
          ))}
        </div>
      </div>
    </section>
  );
}
