"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-start gap-4 py-24">
      <p className="font-mono text-sm text-accent">Error</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Something spilled.
      </h1>
      <p className="max-w-md leading-relaxed text-muted">
        An unexpected error got in the way. Try again — or head back home and
        grab that coffee.
      </p>
      <div className="flex flex-wrap gap-3 pt-1">
        <button
          type="button"
          onClick={reset}
          className="w-fit rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="w-fit rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
