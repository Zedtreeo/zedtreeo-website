import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
};

const variants = {
  primary: "zt-btn",
  outline:
    "inline-block rounded-zt-pill border-2 border-zt-accent text-zt-accent font-bold hover:bg-zt-accent hover:text-zt-headings transition-all",
  ghost:
    "inline-block text-zt-accent font-semibold hover:text-zt-accent-hover transition-colors",
};

const sizes = {
  sm: "!py-2 !px-5 !text-sm",
  md: "!py-3 !px-8",
  lg: "!py-4 !px-10 !text-lg",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `${variants[variant]} ${sizes[size]} no-underline text-center ${className}`.trim();

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
