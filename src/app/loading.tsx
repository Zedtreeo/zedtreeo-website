export default function Loading() {
  return (
    <main className="animate-pulse">
      {/* Hero skeleton */}
      <section className="bg-zt-primary py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="h-12 w-3/4 bg-white/10 rounded mb-4" />
          <div className="h-6 w-1/2 bg-white/10 rounded mb-8" />
          <div className="h-12 w-48 bg-white/10 rounded-zt-pill" />
        </div>
      </section>
      {/* Content skeleton */}
      <section className="py-16 px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="h-8 w-64 bg-zt-border rounded mb-8 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-48 bg-zt-near-white rounded-zt" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
