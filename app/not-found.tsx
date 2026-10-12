import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative z-[1] flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="bento-card max-w-md w-full p-8 flex flex-col items-center justify-center gap-6">
        <div className="space-y-2">
          <h1 className="font-display text-6xl font-bold tracking-tighter">404</h1>
          <h2 className="text-xl font-semibold tracking-tight text-muted">
            Page not found
          </h2>
        </div>

        <p className="text-muted text-sm md:text-base">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-2 px-6 py-3 rounded-lg bg-accent text-accent-fg font-medium transition-opacity hover:opacity-90"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
