export default function HireLoading() {
  return (
    <main className="animate-pulse">
      {/* Hero skeleton */}
      <section className="bg-zt-primary py-zt-section px-6">
        <div className="max-w-zt-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="h-4 w-40 bg-white/10 rounded mb-6" />
            <div className="h-12 w-full bg-white/10 rounded mb-4" />
            <div className="h-6 w-3/4 bg-white/10 rounded mb-8" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-5 w-2/3 bg-white/10 rounded" />
              ))}
            </div>
            <div className="h-12 w-48 bg-white/10 rounded-zt-pill mt-8" />
          </div>
          <div className="h-80 bg-white/10 rounded-zt" />
        </div>
      </section>
      {/* Benefits skeleton */}
      <section className="py-16 px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="h-8 w-72 bg-zt-border rounded mb-8 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-40 bg-zt-near-white rounded-zt" />
            ))}
          </div>
        </div>
      </section>
      {/* Pricing skeleton */}
      <section className="py-16 px-6 bg-zt-primary">
        <div className="max-w-zt-content mx-auto">
          <div className="h-8 w-64 bg-white/10 rounded mb-8 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-64 bg-white/5 rounded-zt" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
