export default function HowItWorksLoading() {
  return (
    <main className="animate-pulse">
      <section className="bg-zt-primary py-16 px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="h-4 w-32 bg-white/10 rounded mb-4" />
          <div className="h-10 w-80 bg-white/10 rounded mb-4" />
          <div className="h-5 w-96 bg-white/10 rounded" />
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-zt-content mx-auto space-y-12">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-zt-near-white shrink-0" />
              <div className="flex-1 p-8 rounded-zt bg-white shadow-zt-card border border-zt-border space-y-3">
                <div className="h-6 w-48 bg-zt-near-white rounded" />
                <div className="h-4 w-full bg-zt-near-white rounded" />
                <div className="h-4 w-3/4 bg-zt-near-white rounded" />
                <div className="flex gap-2">
                  <div className="h-7 w-24 bg-zt-near-white rounded-full" />
                  <div className="h-7 w-28 bg-zt-near-white rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
