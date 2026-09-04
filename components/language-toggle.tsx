"use client";

import { useLang } from "@/components/language-provider";

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1 font-mono text-xs">
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={
          lang === "en"
            ? "text-accent"
            : "text-muted transition-colors hover:text-highlight"
        }
      >
        EN
      </button>
      <span className="text-muted">/</span>
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={
          lang === "pt"
            ? "text-accent"
            : "text-muted transition-colors hover:text-highlight"
        }
      >
        PT
      </button>
    </div>
  );
}
