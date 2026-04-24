import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  image?: string;
  icon?: React.ReactNode;
  badge?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Card({
  title,
  description,
  href,
  image,
  icon,
  badge,
  className = "",
  children,
}: CardProps) {
  const content = (
    <>
      {image && (
        <div className="w-full h-44 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        {badge && (
          <span className="inline-block px-3 py-1 rounded-full bg-zt-accent/15 text-zt-primary text-xs font-bold mb-3">
            {badge}
          </span>
        )}
        {icon && (
          <div className="w-12 h-12 rounded-full bg-zt-accent/15 flex items-center justify-center mb-4 text-xl">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-zt-headings mb-2 group-hover:text-zt-accent transition-colors !mt-0">
          {title}
        </h3>
        <p className="text-sm text-zt-body mb-0">{description}</p>
        {children}
      </div>
    </>
  );

  const cardClasses = `group block rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all overflow-hidden ${className}`;

  if (href) {
    return (
      <Link href={href} className={`${cardClasses} no-underline`}>
        {content}
      </Link>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}
