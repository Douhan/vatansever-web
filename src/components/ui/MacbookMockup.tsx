import "./MacbookMockup.css";

interface MacbookMockupProps {
  accent: string;
  image?: string;
  alt?: string;
  className?: string;
}

export function MacbookMockup({ accent, image, alt, className }: MacbookMockupProps) {
  return (
    <div className={`macbook ${className ?? ""}`}>
      <div className="macbook__screen">
        <span className="macbook__cam" />
        {image ? (
          <img className="macbook__image" src={image} alt={alt ?? ""} />
        ) : (
          <div className="macbook__placeholder" style={{ background: accent }} />
        )}
      </div>
      <div className="macbook__base" />
    </div>
  );
}
