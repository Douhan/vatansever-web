import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import { Badge } from "../components/ui/Badge";
import { DeviceMockup } from "../components/ui/DeviceMockup";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/motion/Reveal";
import { AnimatedNumber } from "../components/motion/AnimatedNumber";
import { ImageLightbox } from "../components/ui/ImageLightbox";
import "./ProjectDetailPage.css";

interface LightboxState {
  index: number;
  originEl: HTMLImageElement | null;
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug ?? "");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [renderedSlug, setRenderedSlug] = useState(slug);

  if (slug !== renderedSlug) {
    setRenderedSlug(slug);
    setLightbox(null);
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="project-detail">
      <div className="container">
        <Link to="/#portfolyo" className="project-detail__back">
          ← Portfolyoya dön
        </Link>

        <header className="project-detail__header">
          <Badge>{project.category}</Badge>
          <h1>{project.name}</h1>
          <p>{project.summary}</p>
          <div className="project-detail__tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>

        <div className="project-detail__preview">
          <DeviceMockup
            type={project.mockup}
            accent={project.accent}
            image={project.screenshot}
            alt={project.name}
            className="project-detail__mockup"
          />
        </div>

        <div className="project-detail__stats">
          {project.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80} className="card">
              <strong>
                <AnimatedNumber value={stat.value} />
              </strong>
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="project-detail__body">
          <section>
            <h2>Genel Bakış</h2>
            <p>{project.overview}</p>
          </section>
          <section>
            <h2>Zorluk</h2>
            <p>{project.challenge}</p>
          </section>
          <section>
            <h2>Çözüm</h2>
            <p>{project.solution}</p>
          </section>
          <section>
            <h2>Sonuç</h2>
            <p>{project.result}</p>
          </section>
        </Reveal>

        {project.screenshots && project.screenshots.length > 1 ? (
          <Reveal>
            <h2 className="project-detail__gallery-title">Ekran Görüntüleri</h2>
            <div className="project-detail__gallery">
              {project.screenshots.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.name} ekran görüntüsü ${index + 1}`}
                  loading="lazy"
                  onClick={(event) => setLightbox({ index, originEl: event.currentTarget })}
                />
              ))}
            </div>
          </Reveal>
        ) : null}

        {lightbox && project.screenshots ? (
          <ImageLightbox
            src={project.screenshots[lightbox.index]}
            alt={`${project.name} ekran görüntüsü ${lightbox.index + 1}`}
            originEl={lightbox.originEl}
            onClose={() => setLightbox(null)}
          />
        ) : null}

        <Reveal className="project-detail__cta">
          <h3>Benzer bir proje mi planlıyorsunuz?</h3>
          <Button to="/#iletisim">Projeni Anlat</Button>
        </Reveal>
      </div>
    </article>
  );
}
