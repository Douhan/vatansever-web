import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./ImageLightbox.css";

interface ImageLightboxProps {
  src: string;
  alt: string;
  originEl: HTMLElement | null;
  onClose: () => void;
}

function transformToMatch(from: DOMRect, to: DOMRect) {
  const scaleX = from.width / to.width;
  const scaleY = from.height / to.height;
  const translateX = from.left + from.width / 2 - (to.left + to.width / 2);
  const translateY = from.top + from.height / 2 - (to.top + to.height / 2);
  return `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
}

export function ImageLightbox({ src, alt, originEl, onClose }: ImageLightboxProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const originRectRef = useRef<DOMRect | null>(originEl ? originEl.getBoundingClientRect() : null);
  const [visible, setVisible] = useState(false);
  const closingRef = useRef(false);

  useLayoutEffect(() => {
    const img = imgRef.current;
    const originRect = originRectRef.current;
    if (!img || !originRect) {
      setVisible(true);
      return;
    }

    const finalRect = img.getBoundingClientRect();
    img.style.transition = "none";
    img.style.transform = transformToMatch(originRect, finalRect);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!imgRef.current) return;
        imgRef.current.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
        imgRef.current.style.transform = "none";
        setVisible(true);
      });
    });
  }, []);

  const handleClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;

    const img = imgRef.current;
    const originRect = originEl ? originEl.getBoundingClientRect() : originRectRef.current;
    setVisible(false);

    if (img && originRect) {
      const finalRect = img.getBoundingClientRect();
      img.style.transition = "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)";
      img.style.transform = transformToMatch(originRect, finalRect);
      window.setTimeout(onClose, 360);
    } else {
      window.setTimeout(onClose, 200);
    }
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div className={`lightbox ${visible ? "lightbox-visible" : ""}`} onClick={handleClose}>
      <button type="button" className="lightbox__close" onClick={handleClose} aria-label="Kapat">
        ✕
      </button>
      <img ref={imgRef} src={src} alt={alt} className="lightbox__image" onClick={(event) => event.stopPropagation()} />
    </div>,
    document.body,
  );
}
