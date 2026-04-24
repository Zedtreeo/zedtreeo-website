export default function BlogPostLoading() {
  return (
    <main className="animate-pulse">
      <article className="max-w-zt-narrow mx-auto px-6 py-16">
        {/* Category + read time */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-6 w-24 bg-zt-near-white rounded-full" />
          <div className="h-4 w-20 bg-zt-near-white rounded" />
        </div>
        {/* Title */}
        <div className="h-10 w-full bg-zt-border rounded mb-3" />
        <div className="h-10 w-3/4 bg-zt-border rounded mb-6" />
        {/* Excerpt */}
        <div className="h-5 w-full bg-zt-near-white rounded mb-2" />
        <div className="h-5 w-2/3 bg-zt-near-white rounded mb-8" />
        {/* Meta */}
        <div className="flex items-center gap-4 mb-10 pb-10 border-b border-zt-border">
          <div className="h-10 w-10 bg-zt-near-white rounded-full" />
          <div className="space-y-2">
            <div className="h-4 w-24 bg-zt-near-white rounded" />
            <div className="h-3 w-32 bg-zt-near-white rounded" />
          </div>
        </div>
        {/* Content blocks */}
        <div className="space-y-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`bg-zt-near-white rounded ${
                i % 4 === 0 ? "h-7 w-2/3" : "h-4 w-full"
              }`}
            />
          ))}
        </div>
      </article>
    </main>
  );
}
