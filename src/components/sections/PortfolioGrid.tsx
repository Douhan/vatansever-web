import { projects } from "../../data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { DeviceMockup } from "../ui/DeviceMockup";
import { Reveal, RevealLink } from "../motion/Reveal";
import "./PortfolioGrid.css";

export function PortfolioGrid() {
  return (
    <section id="portfolyo" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolyo"
            title="Hayata geçirdiğimiz örnek projeler"
            subtitle="Gerçek ekran görüntüleriyle hayata geçirdiğimiz projeler ve sürecimizi göstermek için hazırlanmış demo çalışmalar bir arada."
          />
        </Reveal>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <RevealLink
              key={project.slug}
              delay={(index % 3) * 70}
              to={`/proje/${project.slug}`}
              className="portfolio-card card"
            >
              <div className="portfolio-card__preview">
                <DeviceMockup
                  type={project.mockup}
                  accent={project.accent}
                  image={project.screenshotThumb ?? project.screenshot}
                  alt={project.name}
                />
              </div>
              <div className="portfolio-card__body">
                <Badge>{project.category}</Badge>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <span className="portfolio-card__link">Vaka çalışmasını gör →</span>
              </div>
            </RevealLink>
          ))}
        </div>
      </div>
    </section>
  );
}
