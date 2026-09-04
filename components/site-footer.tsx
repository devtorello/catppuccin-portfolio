"use client";

import { site } from "@/lib/config";
import { useLang } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="border-t py-8 text-sm text-muted">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span>
          © {site.name} · {t.footer.builtWith}
        </span>
        <div className="flex gap-4">
          <a href={site.socials.github} className="hover:text-highlight">
            GitHub
          </a>
          <a href={site.socials.linkedin} className="hover:text-highlight">
            LinkedIn
          </a>
          <a href={site.socials.email} className="hover:text-highlight">
            {t.footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
