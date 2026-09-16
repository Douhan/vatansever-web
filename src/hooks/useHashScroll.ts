import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the element matching the URL hash after render. Plain browser
 * hash-scroll-on-load races the SPA's first paint and usually loses (the
 * target id doesn't exist yet), so this re-runs the jump once React has
 * actually rendered the page.
 */
export function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [hash]);
}
