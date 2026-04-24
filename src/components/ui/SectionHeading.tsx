type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  badge?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  badge,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-12 ${className}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-zt-accent/15 text-zt-primary text-xs font-bold uppercase tracking-wider mb-4">
          {badge}
        </span>
      )}
      <h2 className="mb-4">{title}</h2>
      {subtitle && (
        <p
          className={`text-zt-body max-w-2xl ${centered ? "mx-auto" : ""}`}
          style={centered ? { marginLeft: "auto", marginRight: "auto" } : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
