export default function ServicesLoading() {
  return (
    <main className="animate-pulse">
      {/* Hero skeleton */}
      <section className="bg-zt-primary py-16 px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="h-10 w-80 bg-white/10 rounded mb-4" />
          <div className="h-5 w-96 bg-white/10 rounded" />
        </div>
      </section>
      {/* Cards grid skeleton */}
      <section className="py-16 px-6 bg-zt-light-bg">
        <div className="max-w-zt-content mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-white rounded-zt overflow-hidden shadow-zt-card">
              <div className="h-44 bg-zt-border" />
              <div className="p-6 space-y-3">
                <div className="h-6 w-3/4 bg-zt-near-white rounded" />
                <div className="h-4 w-full bg-zt-near-white rounded" />
                <div className="h-4 w-2/3 bg-zt-near-white rounded" />
                <div className="flex gap-2 mt-4">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="h-6 w-16 bg-zt-near-white rounded" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
