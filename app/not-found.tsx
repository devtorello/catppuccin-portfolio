import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start gap-4 py-24">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        This page went for coffee.
      </h1>
      <p className="max-w-md leading-relaxed text-muted">
        The page you&apos;re looking for isn&apos;t here — maybe it moved, maybe
        it never existed.
      </p>
      <Link
        href="/"
        className="mt-2 w-fit rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Back home
      </Link>
    </div>
  );
}
