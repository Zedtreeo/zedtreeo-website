export default function CandidatesLoading() {
  return (
    <main className="animate-pulse">
      {/* Hero skeleton */}
      <section className="bg-zt-primary py-16 px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="h-4 w-40 bg-white/10 rounded mb-6" />
          <div className="h-10 w-80 bg-white/10 rounded mb-4" />
          <div className="h-5 w-96 bg-white/10 rounded mb-8" />
          <div className="h-12 w-80 bg-white/10 rounded-zt-pill" />
        </div>
      </section>
      {/* Filter bar skeleton */}
      <div className="bg-white border-b border-zt-border py-4 px-6">
        <div className="max-w-zt-content mx-auto flex gap-2 flex-wrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-9 w-24 bg-zt-near-white rounded-full" />
          ))}
        </div>
      </div>
      {/* Cards grid skeleton */}
      <section className="py-12 px-6 bg-zt-light-bg">
        <div className="max-w-zt-content mx-auto">
          <div className="h-4 w-40 bg-zt-border rounded mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-white rounded-zt p-6 shadow-zt-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-zt-near-white rounded-full" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-32 bg-zt-near-white rounded" />
                    <div className="h-3 w-40 bg-zt-near-white rounded" />
                  </div>
                  <div className="h-6 w-20 bg-zt-near-white rounded-full" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-3 w-full bg-zt-near-white rounded" />
                  <div className="h-3 w-2/3 bg-zt-near-white rounded" />
                </div>
                <div className="flex gap-1.5 mb-4">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="h-6 w-14 bg-zt-near-white rounded" />
                  ))}
                </div>
                <div className="h-10 w-full bg-zt-near-white rounded-zt-pill" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
