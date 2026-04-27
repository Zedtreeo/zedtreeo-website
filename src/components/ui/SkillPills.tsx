"use client";

import { useEffect, useRef } from "react";
import { getSkillColor } from "@/lib/skill-colors";

type Props = {
  skills: string[];
  className?: string;
  staggerMs?: number; // delay between each pill
};

export default function SkillPills({
  skills,
  className = "",
  staggerMs = 60,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pills = container.querySelectorAll<HTMLElement>("[data-pill]");

    /* Set initial hidden state */
    pills.forEach((pill) => {
      pill.style.opacity = "0";
      pill.style.transform = "scale(0.7)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          pills.forEach((pill, i) => {
            pill.style.transition = `opacity 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * staggerMs}ms, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * staggerMs}ms`;
            pill.style.opacity = "1";
            pill.style.transform = "scale(1)";
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [skills, staggerMs]);

  return (
    <div ref={containerRef} className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {skills.map((skill) => {
        const color = getSkillColor(skill);
        return (
          <span
            key={skill}
            data-pill
            className="px-4 py-2 rounded-full text-sm font-medium shadow-sm border transition-colors"
            style={{
              backgroundColor: color.bg,
              borderColor: color.border,
              color: color.text,
            }}
          >
            {skill}
          </span>
        );
      })}
    </div>
  );
}
