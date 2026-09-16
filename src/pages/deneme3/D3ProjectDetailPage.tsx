import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../../data/projects";
import { D3Header } from "./D3Header";
import { D3Footer } from "./D3Footer";
import { Reveal } from "../../components/motion/Reveal";
import { AnimatedNumber } from "../../components/motion/AnimatedNumber";
import { ImageLightbox } from "../../components/ui/ImageLightbox";
import "./deneme3.css";

interface LightboxState {
  index: number;
  originEl: HTMLImageElement | null;
}

export function D3ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug ?? "");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  if (!project) {
    return <Navigate to="/deneme3" replace />;
  }

  return (
    <div className="d3-page">
      <D3Header />

      <main>
        <article>
          <section className="d3-section d3-detail__hero">
            <div className="d3-container">
              <Link to="/deneme3#portfolyo" className="d3-link d3-detail__back">
                ← Portfolyoya dön
              </Link>

              <span className="d3-eyebrow">{project.category}</span>
              <h1 className="d3-section-title">{project.name}</h1>
              <p className="d3-section-sub">{project.summary}</p>

              <div className="d3-detail__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.screenshot ? (
                <div className={`d3-detail__preview ${project.mockup === "phone" ? "d3-detail__preview--phone" : ""}`}>
                  <img src={project.screenshot} alt={project.name} />
                </div>
              ) : null}
            </div>
          </section>

          <section className="d3-section d3-section--dark">
            <div className="d3-container">
              <div className="d3-detail__stats">
                {project.stats.map((stat, index) => (
                  <Reveal key={stat.label} delay={index * 80} style={{ display: "block" }}>
                    <strong className="d3-detail__stat-value">
                      <AnimatedNumber value={stat.value} />
                    </strong>
                    <span className="d3-detail__stat-label">{stat.label}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="d3-section">
            <div className="d3-container d3-detail__body">
              <Reveal>
                <h2>Genel Bakış</h2>
                <p>{project.overview}</p>
              </Reveal>
              <Reveal delay={60}>
                <h2>Zorluk</h2>
                <p>{project.challenge}</p>
              </Reveal>
              <Reveal delay={120}>
                <h2>Çözüm</h2>
                <p>{project.solution}</p>
              </Reveal>
              <Reveal delay={180}>
                <h2>Sonuç</h2>
                <p>{project.result}</p>
              </Reveal>
            </div>
          </section>

          {project.screenshots && project.screenshots.length > 1 ? (
            <section className="d3-section" style={{ paddingTop: 0 }}>
              <div className="d3-container">
                <Reveal>
                  <h2 className="d3-section-title" style={{ fontSize: "clamp(22px, 3vw, 30px)" }}>
                    Ekran Görüntüleri
                  </h2>
                </Reveal>
                <div className="d3-detail__gallery">
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
              </div>
            </section>
          ) : null}

          {lightbox && project.screenshots ? (
            <ImageLightbox
              src={project.screenshots[lightbox.index]}
              alt={`${project.name} ekran görüntüsü ${lightbox.index + 1}`}
              originEl={lightbox.originEl}
              onClose={() => setLightbox(null)}
            />
          ) : null}

          <section className="d3-section d3-section--dark">
            <div className="d3-container">
              <h2 className="d3-section-title" style={{ fontSize: "clamp(22px, 3vw, 30px)" }}>
                Benzer bir proje mi planlıyorsunuz?
              </h2>
              <div style={{ marginTop: 28 }}>
                <Link to="/deneme3#iletisim" className="d3-btn-pill">
                  Projeni Anlat
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <D3Footer />
    </div>
  );
}
