"use client";

import Link from "next/link";
import { useLang } from "@/components/language-provider";

export function WritingBackLink() {
  const { t } = useLang();
  return (
    <Link href="/writing" className="text-sm text-muted hover:text-accent">
      {t.writing.back}
    </Link>
  );
}
