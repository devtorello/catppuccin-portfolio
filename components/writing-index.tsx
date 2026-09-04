"use client";

import Link from "next/link";
import { useLang } from "@/components/language-provider";
import type { PostMeta } from "@/lib/posts";

export function WritingIndex({ posts }: { posts: PostMeta[] }) {
  const { t } = useLang();

  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {t.writing.label}
        </h1>
        <p className="text-muted">{t.writing.pageSubtitle}</p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-dashed bg-card px-5 py-10 text-center">
          <p className="font-medium">{t.writing.emptyTitle}</p>
          <p className="mt-1 text-sm text-muted">{t.writing.emptyBody}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group flex flex-col gap-1"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-medium group-hover:text-accent">
                  {post.title}
                </h2>
                <span className="shrink-0 font-mono text-xs text-muted">
                  {post.date}
                </span>
              </div>
              <p className="text-sm text-muted">{post.summary}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
