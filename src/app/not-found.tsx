import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-7xl font-bold text-zt-accent mb-4">404</div>
        <h1 className="text-zt-h2 text-zt-headings mb-4">Page Not Found</h1>
        <p className="text-zt-body mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          If you followed a link from our old website, the content may have been
          reorganized.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="zt-btn no-underline text-center">
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-block px-8 py-3 rounded-zt-pill border-2 border-zt-accent text-zt-accent font-bold hover:bg-zt-accent hover:text-zt-headings transition-all no-underline text-center"
          >
            Browse Services
          </Link>
        </div>
      </div>
    </main>
  );
}
