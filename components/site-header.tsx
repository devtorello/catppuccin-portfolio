"use client";

import Link from "next/link";
import { site } from "@/lib/config";
import { useLang } from "@/components/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

export function SiteHeader() {
  const { t } = useLang();

  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-8">
      <Link
        href="/"
        className="font-mono text-sm font-medium tracking-tight hover:text-highlight"
      >
        {site.name.toLowerCase()}
      </Link>
      <nav className="flex items-center gap-4 text-sm text-muted sm:gap-6">
        <Link href="/#expertise" className="hover:text-highlight">
          {t.nav.expertise}
        </Link>
        <Link href="/writing" className="hover:text-highlight">
          {t.nav.writing}
        </Link>
        <LanguageToggle />
        <ThemeToggle />
      </nav>
    </header>
  );
}
