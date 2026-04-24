export default function GetStartedLoading() {
  return (
    <main className="animate-pulse">
      {/* Hero skeleton */}
      <section className="bg-zt-primary py-12 px-6">
        <div className="max-w-zt-content mx-auto text-center">
          <div className="h-10 w-96 bg-white/10 rounded mb-4 mx-auto" />
          <div className="h-5 w-80 bg-white/10 rounded mx-auto" />
        </div>
      </section>
      {/* Progress bar skeleton */}
      <div className="bg-white border-b border-zt-border py-4 px-6">
        <div className="max-w-zt-content mx-auto flex items-center justify-center gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-zt-near-white" />
              <div className="h-4 w-20 bg-zt-near-white rounded" />
            </div>
          ))}
        </div>
      </div>
      {/* Form skeleton */}
      <section className="py-12 px-6">
        <div className="max-w-zt-content mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-4">
            <div className="h-8 w-48 bg-zt-border rounded mb-6" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-24 bg-zt-near-white rounded-zt" />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="h-64 bg-zt-near-white rounded-zt" />
          </div>
        </div>
      </section>
    </main>
  );
}
