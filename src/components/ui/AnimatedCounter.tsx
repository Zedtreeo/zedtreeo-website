"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string; // e.g. "85+", "94%", "<5 Days", "4.9/5"
  className?: string;
  duration?: number; // ms for the count animation
};

/**
 * Extracts a numeric value from strings like "85+", "94%", "4.9/5", "<5 Days".
 * Returns { num, prefix, suffix, decimals }.
 */
function parseValue(raw: string) {
  const match = raw.match(/^([<>]?)(\d+(?:\.\d+)?)(.*)/);
  if (!match) return null;
  const num = parseFloat(match[2]);
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  return { num, prefix: match[1], suffix: match[3], decimals };
}

export default function AnimatedCounter({
  value,
  className = "",
  duration = 1200,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parsed = parseValue(value);
    if (!parsed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;

          const { num, prefix, suffix, decimals } = parsed;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            /* Ease-out cubic */
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = num * eased;

            setDisplay(
              `${prefix}${decimals > 0 ? current.toFixed(decimals) : Math.round(current)}${suffix}`
            );

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setDisplay(value); // ensure exact final value
            }
          };

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    /* Start from zero display */
    const parsed2 = parseValue(value);
    if (parsed2) {
      setDisplay(
        `${parsed2.prefix}${parsed2.decimals > 0 ? "0." + "0".repeat(parsed2.decimals) : "0"}${parsed2.suffix}`
      );
    }

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
