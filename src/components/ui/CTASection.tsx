import Button from "./Button";

type CTASectionProps = {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  showScheduleCall?: boolean;
  variant?: "dark" | "light";
  className?: string;
};

export default function CTASection({
  title,
  description,
  buttonText = "Start Hiring Today",
  buttonHref = "/get-started",
  showScheduleCall = true,
  variant = "dark",
  className = "",
}: CTASectionProps) {
  const scheduleLink = (
    <a
      href="https://scheduler.zoom.us/zedtreeo/intro-call"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-sm font-semibold no-underline transition-colors"
      style={{
        color: variant === "dark" ? "rgba(255,255,255,0.8)" : "#374B47",
        textDecoration: "underline",
        textUnderlineOffset: "4px",
      }}
    >
      or Schedule a Call
    </a>
  );

  if (variant === "dark") {
    return (
      <section className={`py-zt-section px-6 ${className}`}>
        <div className="max-w-zt-narrow mx-auto">
          <div className="zt-cta">
            <h3>{title}</h3>
            <p>{description}</p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <Button href={buttonHref}>{buttonText}</Button>
              {showScheduleCall && scheduleLink}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-zt-section px-6 bg-zt-near-white ${className}`}>
      <div className="max-w-zt-narrow mx-auto text-center">
        <h2 className="mb-4">{title}</h2>
        <p className="text-zt-body max-w-xl mb-8" style={{ marginLeft: "auto", marginRight: "auto" }}>
          {description}
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <Button href={buttonHref}>{buttonText}</Button>
          {showScheduleCall && scheduleLink}
        </div>
      </div>
    </section>
  );
}
