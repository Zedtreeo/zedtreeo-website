import Button from "./Button";

type CTASectionProps = {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "dark" | "light";
  className?: string;
};

export default function CTASection({
  title,
  description,
  buttonText = "Start Hiring Today",
  buttonHref = "/get-started",
  variant = "dark",
  className = "",
}: CTASectionProps) {
  if (variant === "dark") {
    return (
      <section className={`py-zt-section px-6 ${className}`}>
        <div className="max-w-zt-narrow mx-auto">
          <div className="zt-cta">
            <h3>{title}</h3>
            <p>{description}</p>
            <Button href={buttonHref}>{buttonText}</Button>
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
        <Button href={buttonHref}>{buttonText}</Button>
      </div>
    </section>
  );
}
