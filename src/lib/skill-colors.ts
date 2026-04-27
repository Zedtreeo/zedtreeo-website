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
