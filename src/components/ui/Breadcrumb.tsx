import Link from "next/link";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: `https://zedtreeo.com${item.href}`,
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav
        aria-label="Breadcrumb"
        className={`text-sm text-zt-body ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="text-zt-body/40" aria-hidden="true">
                  /
                </span>
              )}
              {i === items.length - 1 ? (
                <span className="text-zt-headings font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-zt-body hover:text-zt-accent no-underline transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
