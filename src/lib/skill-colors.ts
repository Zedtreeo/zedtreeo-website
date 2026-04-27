/**
 * Deterministic skill → color mapping.
 * Uses a simple hash so the same skill always gets the same color,
 * while visually distributing across 6 distinct tint groups.
 *
 * Palette derived from the Zedtreeo design system.
 */

type SkillColor = {
  bg: string;
  border: string;
  text: string;
};

/* 6 tint groups — all accessible on white & light backgrounds */
const palette: SkillColor[] = [
  /* Green (Zedtreeo accent family) */
  { bg: "#eef8f0", border: "#8FD299", text: "#2d5a35" },
  /* Blue (cool/tech feel) */
  { bg: "#edf3fa", border: "#7badd4", text: "#2a4a6b" },
  /* Purple (creative/design) */
  { bg: "#f3eef8", border: "#a98ec9", text: "#4a2d6b" },
  /* Amber (warm/business) */
  { bg: "#faf3e8", border: "#d4a95a", text: "#6b4f1f" },
  /* Teal (professional/healthcare) */
  { bg: "#edf5f4", border: "#6bb5aa", text: "#1f5c53" },
  /* Rose (legal/compliance) */
  { bg: "#faeef0", border: "#d48a95", text: "#6b2d3a" },
];

/** Simple djb2-style hash → deterministic bucket */
function hashStr(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

const cache = new Map<string, SkillColor>();

export function getSkillColor(skill: string): SkillColor {
  const key = skill.toLowerCase().trim();
  const cached = cache.get(key);
  if (cached) return cached;

  const color = palette[hashStr(key) % palette.length];
  cache.set(key, color);
  return color;
}

/**
 * Returns Tailwind-compatible class strings for candidate card pills.
 * Used in CandidateBrowser where pills sit on white card backgrounds.
 */
export function getSkillPillStyle(skill: string): React.CSSProperties {
  const color = getSkillColor(skill);
  return {
    backgroundColor: color.bg,
    borderColor: color.border,
    color: color.text,
  };
}

/* ─── Category-based card tints (for dark hero backgrounds) ─── */

export type CardTint = {
  bg: string;       // rgba card background
  border: string;   // rgba border
  avatar: string;   // rgba avatar circle
  accent: string;   // accent color (initials, rate)
  role: string;     // muted role text
};

import type { CandidateCategory } from "./candidates-data";

const categoryCardTints: Record<CandidateCategory, CardTint> = {
  "software-development": {
    bg: "rgba(123,173,212,0.15)",
    border: "rgba(123,173,212,0.3)",
    avatar: "rgba(123,173,212,0.3)",
    accent: "#7badd4",
    role: "#9dbfda",
  },
  "virtual-assistant": {
    bg: "rgba(143,210,153,0.15)",
    border: "rgba(143,210,153,0.3)",
    avatar: "rgba(143,210,153,0.3)",
    accent: "#8FD299",
    role: "#a8d5b0",
  },
  "finance-accounting": {
    bg: "rgba(107,181,170,0.15)",
    border: "rgba(107,181,170,0.3)",
    avatar: "rgba(107,181,170,0.3)",
    accent: "#6bb5aa",
    role: "#8ec9c0",
  },
  "digital-marketing": {
    bg: "rgba(169,142,201,0.15)",
    border: "rgba(169,142,201,0.3)",
    avatar: "rgba(169,142,201,0.3)",
    accent: "#a98ec9",
    role: "#baa8d0",
  },
  "legal-compliance": {
    bg: "rgba(212,169,90,0.15)",
    border: "rgba(212,169,90,0.3)",
    avatar: "rgba(212,169,90,0.3)",
    accent: "#d4a95a",
    role: "#d4bd8a",
  },
  "healthcare-rcm": {
    bg: "rgba(212,138,149,0.15)",
    border: "rgba(212,138,149,0.3)",
    avatar: "rgba(212,138,149,0.3)",
    accent: "#d48a95",
    role: "#d4a8af",
  },
  "customer-support": {
    bg: "rgba(143,210,153,0.15)",
    border: "rgba(143,210,153,0.3)",
    avatar: "rgba(143,210,153,0.3)",
    accent: "#8FD299",
    role: "#a8d5b0",
  },
  cybersecurity: {
    bg: "rgba(123,173,212,0.15)",
    border: "rgba(123,173,212,0.3)",
    avatar: "rgba(123,173,212,0.3)",
    accent: "#7badd4",
    role: "#9dbfda",
  },
  design: {
    bg: "rgba(169,142,201,0.15)",
    border: "rgba(169,142,201,0.3)",
    avatar: "rgba(169,142,201,0.3)",
    accent: "#a98ec9",
    role: "#baa8d0",
  },
  "content-seo": {
    bg: "rgba(212,169,90,0.15)",
    border: "rgba(212,169,90,0.3)",
    avatar: "rgba(212,169,90,0.3)",
    accent: "#d4a95a",
    role: "#d4bd8a",
  },
};

export function getCategoryCardTint(category: CandidateCategory): CardTint {
  return categoryCardTints[category];
}
