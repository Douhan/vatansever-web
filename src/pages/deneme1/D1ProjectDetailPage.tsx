import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../../data/projects";
import { D1Header } from "./D1Header";
import { D1Footer } from "./D1Footer";
import { Reveal } from "../../components/motion/Reveal";
import { AnimatedNumber } from "../../components/motion/AnimatedNumber";
import { ImageLightbox } from "../../components/ui/ImageLightbox";
import "./deneme1.css";

interface LightboxState {
  index: number;
  originEl: HTMLImageElement | null;
}

export function D1ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug ?? "");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  if (!project) {
    return <Navigate to="/deneme-1" replace />;
  }

  return (
    <div className="d1-page">
      <D1Header />

      <main>
        <article className="d1-detail">
          <div className="d1-container">
            <Link to="/deneme-1#portfolyo" className="d1-detail__back">
              ← Portfolyoya dön
            </Link>

            <header className="d1-detail__header">
              <span className="d1-badge">{project.category}</span>
              <h1>{project.name}</h1>
              <p>{project.summary}</p>
              <div className="d1-detail__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="d1-glass">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {project.screenshot ? (
              <div className={`d1-detail__preview d1-glass ${project.mockup === "phone" ? "d1-detail__preview--phone" : ""}`}>
                <img src={project.screenshot} alt={project.name} />
              </div>
            ) : null}

            <div className="d1-detail__stats">
              {project.stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 80} className="d1-glass d1-detail__stat">
                  <strong>
                    <AnimatedNumber value={stat.value} />
                  </strong>
                  <span>{stat.label}</span>
                </Reveal>
              ))}
            </div>

            <Reveal className="d1-detail__body">
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
                <h2 className="d1-detail__gallery-title">Ekran Görüntüleri</h2>
                <div className="d1-detail__gallery">
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

            <Reveal className="d1-detail__cta">
              <h3>Benzer bir proje mi planlıyorsunuz?</h3>
              <Link to="/deneme-1#iletisim" className="d1-btn d1-btn-primary">
                Projeni Anlat
              </Link>
            </Reveal>
          </div>
        </article>
      </main>

      <D1Footer />
    </div>
  );
}
