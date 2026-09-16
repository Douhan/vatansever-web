import "./DeviceMockup.css";
import type { MockupType } from "../../data/projects";

interface DeviceMockupProps {
  type: MockupType;
  accent: string;
  /** Real product screenshot. When set, replaces the abstract placeholder UI. */
  image?: string;
  alt?: string;
  className?: string;
}

export function DeviceMockup({ type, accent, image, alt, className }: DeviceMockupProps) {
  if (type === "phone") {
    return (
      <div className={`mockup mockup-phone ${className ?? ""}`} style={{ background: accent }}>
        <div className="mockup-phone__notch" />
        {image ? (
          <img className="mockup-phone__image" src={image} alt={alt ?? ""} />
        ) : (
          <div className="mockup-phone__screen">
            <div className="mockup-phone__card">
              <span />
              <span />
            </div>
            <div className="mockup-phone__rows">
              <div />
              <div />
              <div />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`mockup mockup-browser ${className ?? ""}`}>
      <div className="mockup-browser__bar">
        <span className="mockup-browser__dot" />
        <span className="mockup-browser__dot" />
        <span className="mockup-browser__dot" />
        <span className="mockup-browser__url" />
      </div>
      {image ? (
        <img className="mockup-browser__image" src={image} alt={alt ?? ""} />
      ) : (
        <div className="mockup-browser__screen" style={{ background: accent }}>
          <div className="mockup-browser__nav">
            <span />
            <span />
            <span />
          </div>
          <div className="mockup-browser__grid">
            <div />
            <div />
            <div />
          </div>
        </div>
      )}
    </div>
  );
}
