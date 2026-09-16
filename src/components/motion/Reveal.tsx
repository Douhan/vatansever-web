import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// Set inline so it always wins over any component-level `transition` rule on the
// same element (e.g. a card's own hover transition) — CSS `transition` is a single
// shorthand property, so two competing class-based declarations can't merge; only
// one wins. Inline style sidesteps that: it covers both the reveal fade/slide and
// common hover-state properties (border-color, box-shadow, background) in one place.
// Skipped entirely under prefers-reduced-motion so content has no motion at all.
const REVEAL_TRANSITION = prefersReducedMotion()
  ? undefined
  : "opacity 0.7s var(--ease-out), transform 0.4s var(--ease-out), border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease";

interface RevealProps {
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
  children: ReactNode;
}

export function Reveal({ delay = 0, className, style, id, children }: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      id={id}
      className={["reveal", visible ? "reveal-visible" : "", className].filter(Boolean).join(" ")}
      style={{ ...style, transition: REVEAL_TRANSITION, transitionDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}

interface RevealLinkProps extends LinkProps {
  delay?: number;
}

export function RevealLink({ delay = 0, className, style, children, ...rest }: RevealLinkProps) {
  const { ref, visible } = useInView<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      className={["reveal", visible ? "reveal-visible" : "", className].filter(Boolean).join(" ")}
      style={{ ...style, transition: REVEAL_TRANSITION, transitionDelay: visible ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Link>
  );
}
