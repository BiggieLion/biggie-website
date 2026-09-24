import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="bento-card max-w-md w-full p-8 flex flex-col items-center justify-center gap-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold tracking-tighter">404</h1>
          <h2 className="text-2xl font-semibold tracking-tight text-muted">Page not found</h2>
        </div>

        <p className="text-muted text-sm md:text-base">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-4 px-6 py-3 rounded-full bg-foreground text-background font-medium transition-transform hover:scale-105 active:scale-95"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
