type TrustBarProps = {
  variant?: "light" | "dark";
  className?: string;
};

const items = [
  { label: "Trusted by 200+ companies globally", bold: true },
  { label: "ISO 27001 Certified" },
  { label: "CMMI Level 3" },
  { label: "GDPR Compliant" },
  { label: "\u2B50 4.8/5 on Trustpilot" },
];

export default function TrustBar({ variant = "light", className = "" }: TrustBarProps) {
  const bg = variant === "light" ? "bg-zt-near-white" : "bg-zt-primary";
  const text = variant === "light" ? "text-zt-body" : "text-white/70";

  return (
    <section className={`${bg} py-8 px-6 ${className}`}>
      <div className="max-w-zt-content mx-auto flex flex-wrap items-center justify-center gap-8 text-sm">
        {items.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className={`${text} mr-8`}>&bull;</span>}
            <span className={`${item.bold ? "font-semibold" : ""} ${text}`}>
              {item.label}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
