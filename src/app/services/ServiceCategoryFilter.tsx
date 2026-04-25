"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─── Category definitions ─── */
export type CategoryKey =
  | "all"
  | "software"
  | "mobile"
  | "ai-data-cloud"
  | "ecommerce"
  | "design"
  | "marketing"
  | "finance"
  | "business";

const categoryMeta: { key: CategoryKey; label: string; icon: string }[] = [
  { key: "all", label: "All Services", icon: "⚡" },
  { key: "software", label: "Software Engineering", icon: "💻" },
  { key: "mobile", label: "Mobile Development", icon: "📱" },
  { key: "ai-data-cloud", label: "AI, Data & Cloud", icon: "🧠" },
  { key: "ecommerce", label: "eCommerce & CMS", icon: "🛒" },
  { key: "design", label: "Design & Creative", icon: "🎨" },
  { key: "marketing", label: "Marketing & Growth", icon: "📈" },
  { key: "finance", label: "Finance & Accounting", icon: "💰" },
  { key: "business", label: "Business Support", icon: "🏢" },
];

export type ServiceCardData = {
  title: string;
  href: string;
  image: string;
  startingRate: string;
  description: string;
  roles: string[];
  category: CategoryKey;
};

export default function ServiceCategoryFilter({
  services,
}: {
  services: ServiceCardData[];
}) {
  const [active, setActive] = useState<CategoryKey>("all");

  const filtered = useMemo(
    () => (active === "all" ? services : services.filter((s) => s.category === active)),
    [active, services]
  );

  const counts = useMemo(() => {
    const map: Partial<Record<CategoryKey, number>> = {};
    for (const s of services) {
      map[s.category] = (map[s.category] || 0) + 1;
    }
    return map;
  }, [services]);

  return (
    <>
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { value: "50+", label: "Role Categories" },
          { value: "500+", label: "Pre-Vetted Candidates" },
          { value: "$5/hr", label: "Starting Rate" },
          { value: "93%", label: "Client Retention" },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-4 rounded-zt bg-white shadow-sm">
            <div className="text-2xl font-bold text-zt-primary">{stat.value}</div>
            <div className="text-xs text-zt-body uppercase tracking-wider mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categoryMeta.map(({ key, label, icon }) => {
          const count = key === "all" ? services.length : (counts[key] || 0);
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold cursor-pointer border-none transition-all ${
                active === key
                  ? "bg-zt-primary text-white shadow-md"
                  : "bg-white text-zt-body hover:bg-zt-accent/15 hover:text-zt-primary shadow-sm"
              }`}
            >
              <span>{icon}</span>
              <span>{label}</span>
              <span
                className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] ${
                  active === key
                    ? "bg-white/20 text-white"
                    : "bg-zt-near-white text-zt-body"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Category Header (when filtered) */}
      {active !== "all" && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-zt-headings mb-1">
            {categoryMeta.find((c) => c.key === active)?.icon}{" "}
            {categoryMeta.find((c) => c.key === active)?.label}
          </h2>
          <p className="text-sm text-zt-body">
            {filtered.length} {filtered.length === 1 ? "role" : "roles"} available
          </p>
        </div>
      )}

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group block rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all no-underline overflow-hidden"
          >
            {cat.image && (
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category badge on card */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-zt-primary">
                  {categoryMeta.find((c) => c.key === cat.category)?.label}
                </span>
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-zt-headings group-hover:text-zt-accent transition-colors !mt-0 mb-0">
                  {cat.title}
                </h3>
                <span className="text-xs text-zt-accent font-bold bg-zt-accent/10 px-2.5 py-1 rounded-full shrink-0 ml-2">
                  From {cat.startingRate}
                </span>
              </div>
              <p className="text-sm text-zt-body mb-3">{cat.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.roles.map((role) => (
                  <span
                    key={role}
                    className="text-xs px-2 py-0.5 rounded bg-zt-near-white text-zt-body"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-zt-body">No services found in this category.</p>
          <button
            onClick={() => setActive("all")}
            className="mt-4 px-6 py-2 rounded-full bg-zt-primary text-white text-sm font-semibold cursor-pointer border-none"
          >
            View All Services
          </button>
        </div>
      )}
    </>
  );
}
