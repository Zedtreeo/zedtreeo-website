export default function IndustriesLoading() {
  return (
    <main className="animate-pulse">
      <section className="bg-zt-primary py-16 px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="h-10 w-80 bg-white/10 rounded mb-4" />
          <div className="h-5 w-96 bg-white/10 rounded" />
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-zt-content mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="p-6 rounded-zt bg-white shadow-zt-card border border-zt-border">
              <div className="h-5 w-3/4 bg-zt-near-white rounded mb-3" />
              <div className="h-4 w-full bg-zt-near-white rounded mb-2" />
              <div className="h-4 w-2/3 bg-zt-near-white rounded mb-4" />
              <div className="h-6 w-20 bg-zt-near-white rounded-full" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
