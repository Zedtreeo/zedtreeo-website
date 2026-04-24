export default function BlogLoading() {
  return (
    <main className="animate-pulse">
      {/* Hero skeleton */}
      <section className="bg-zt-primary py-16 px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="h-10 w-72 bg-white/10 rounded mb-4" />
          <div className="h-5 w-96 bg-white/10 rounded" />
        </div>
      </section>
      {/* Filter bar skeleton */}
      <div className="bg-white border-b border-zt-border py-4 px-6">
        <div className="max-w-zt-content mx-auto flex gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-9 w-28 bg-zt-near-white rounded-full" />
          ))}
        </div>
      </div>
      {/* Posts grid skeleton */}
      <section className="py-12 px-6 bg-zt-light-bg">
        <div className="max-w-zt-content mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-zt overflow-hidden">
              <div className="h-48 bg-zt-border" />
              <div className="p-6 space-y-3">
                <div className="h-4 w-20 bg-zt-near-white rounded" />
                <div className="h-6 w-full bg-zt-near-white rounded" />
                <div className="h-4 w-3/4 bg-zt-near-white rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
