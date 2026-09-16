import { useEffect, useRef, useState } from "react";

interface ParsedValue {
  prefix: string;
  number: number;
  suffix: string;
  decimals: number;
}

function parseValue(raw: string): ParsedValue | null {
  const match = raw.match(/^(\D*?)(\d+(?:[.,]\d+)?)(\D*)$/);
  if (!match) return null;

  const [, prefix, numStr, suffix] = match;
  const normalized = numStr.replace(",", ".");
  const decimalPart = normalized.split(".")[1];

  return {
    prefix,
    suffix,
    number: parseFloat(normalized),
    decimals: decimalPart ? decimalPart.length : 0,
  };
}

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

export function AnimatedNumber({ value, duration = 1400 }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = parsed.number * eased;
          setDisplay(`${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
