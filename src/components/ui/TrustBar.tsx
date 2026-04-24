type TrustBarProps = {
  variant?: "light" | "dark";
  className?: string;
};

const certBadges = [
  { icon: "\uD83D\uDEE1\uFE0F", label: "ISO 27001" },
  { icon: "\u2B50", label: "CMMI Level 3" },
  { icon: "\uD83C\uDF10", label: "GDPR Compliant" },
];

export default function TrustBar({ variant = "light", className = "" }: TrustBarProps) {
  const bg = variant === "light" ? "bg-zt-near-white" : "bg-zt-primary";
  const text = variant === "light" ? "text-zt-body" : "text-white/70";
  const badgeBg = variant === "light" ? "bg-white border border-zt-border" : "bg-white/10";
  const accentText = variant === "light" ? "text-zt-primary" : "text-zt-accent";

  return (
    <section className={`${bg} py-6 px-6 ${className}`}>
      <div className="max-w-zt-content mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {/* Trustpilot rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${star <= 4 ? "text-green-500" : "text-green-500"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className={`text-sm font-semibold ${accentText}`}>4.8/5</span>
          <span className={`text-xs ${text}`}>on Trustpilot</span>
        </div>

        {/* Divider */}
        <div className={`hidden md:block w-px h-6 ${variant === "light" ? "bg-zt-border" : "bg-white/20"}`} />

        {/* Companies served */}
        <span className={`text-sm font-semibold ${text}`}>
          Trusted by <span className={accentText}>200+</span> companies globally
        </span>

        {/* Divider */}
        <div className={`hidden md:block w-px h-6 ${variant === "light" ? "bg-zt-border" : "bg-white/20"}`} />

        {/* Certification badges */}
        <div className="flex items-center gap-2">
          {certBadges.map((badge) => (
            <span
              key={badge.label}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${badgeBg} ${text}`}
            >
              <span className="text-sm">{badge.icon}</span>
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
