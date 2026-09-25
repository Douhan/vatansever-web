import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
import { RealDeviceFrame } from "../ui/RealDeviceFrame";
import "./HeroShowcase.css";

const SLIDE_MS = 4800;
const SLIDES = projects.filter((project) => project.screenshot);

export function HeroShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotionRef.current) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const active = SLIDES[index];
  const isWeb = active.mockup === "browser";

  return (
    <div
      className="hero-showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={`hero-showcase__stage ${isWeb ? "is-web" : "is-mobile"}`}>
        <RealDeviceFrame
          key={active.slug}
          frame={isWeb ? "mac" : "phone"}
          screenshot={active.screenshot}
          alt={`${active.name} önizlemesi`}
          className="hero-showcase__frame"
        />
      </div>

      <p className="hero-showcase__caption">{active.name}</p>

      <div className="hero-showcase__dots" role="tablist" aria-label="Proje önizlemeleri">
        {SLIDES.map((project, i) => (
          <button
            key={project.slug}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={project.name}
            title={project.name}
            className={`hero-showcase__dot ${i === index ? "is-active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
