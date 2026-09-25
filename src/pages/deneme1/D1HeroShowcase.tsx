import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
import { DeviceMockup } from "../../components/ui/DeviceMockup";
import { MacbookMockup } from "../../components/ui/MacbookMockup";

const SLIDE_MS = 4800;

export function D1HeroShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotionRef.current) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % projects.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const active = projects[index];
  const isWeb = active.mockup === "browser";

  return (
    <div
      className="d1-showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="d1-showcase__stage">
        {isWeb ? (
          <MacbookMockup
            key={active.slug}
            accent={active.accent}
            image={active.screenshot}
            alt={`${active.name} önizlemesi`}
            className="d1-showcase__mac"
          />
        ) : (
          <DeviceMockup
            key={active.slug}
            type="phone"
            accent={active.accent}
            image={active.screenshot}
            alt={`${active.name} önizlemesi`}
            className="d1-showcase__phone"
          />
        )}
      </div>

      <div className="d1-showcase__caption">
        <span className="d1-showcase__badge">{active.category}</span>
        <span className="d1-showcase__name">{active.name}</span>
      </div>

      <div className="d1-showcase__dots" role="tablist" aria-label="Proje önizlemeleri">
        {projects.map((project, i) => (
          <button
            key={project.slug}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={project.name}
            title={project.name}
            className={`d1-showcase__dot ${i === index ? "is-active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
