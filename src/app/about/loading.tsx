export default function AboutLoading() {
  return (
    <main className="animate-pulse">
      <section className="bg-zt-primary py-16 px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="h-4 w-32 bg-white/10 rounded mb-6" />
          <div className="h-10 w-80 bg-white/10 rounded mb-4" />
          <div className="h-5 w-96 bg-white/10 rounded" />
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-zt-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="h-8 w-48 bg-zt-border rounded" />
            <div className="h-4 w-full bg-zt-near-white rounded" />
            <div className="h-4 w-full bg-zt-near-white rounded" />
            <div className="h-4 w-3/4 bg-zt-near-white rounded" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-28 bg-zt-near-white rounded-zt" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
