"use client";

import Link from "next/link";
import Image from "next/image";
import { site, tools } from "@/lib/content";
import { useLang } from "@/components/language-provider";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import type { PostMeta } from "@/lib/posts";

export function HomeContent({ posts }: { posts: PostMeta[] }) {
  const { t } = useLang();

  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Hero */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <Image
            src="/avatar.jpeg"
            alt={site.name}
            width={192}
            height={192}
            priority
            className="h-24 w-24 shrink-0 rounded-full border object-cover object-center"
          />
          <div className="flex flex-col gap-1">
            <p className="font-mono text-sm text-accent">
              {t.hero.role} {t.hero.at} {site.company}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.hero.title}
            </h1>
          </div>
        </div>
        <p className="max-w-xl text-lg leading-relaxed text-foreground">
          {t.hero.tagline}
        </p>
        <p className="max-w-xl leading-relaxed text-muted">{t.hero.intro}</p>
        <p className="flex items-center gap-2 text-xs font-medium text-foreground">
          <span aria-hidden>🏳️‍🌈</span>
          {t.hero.pride}
        </p>
        <div className="flex flex-wrap gap-4 pt-2 text-sm">
          <a
            href={site.socials.email}
            className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2 font-medium text-background transition-opacity hover:opacity-90"
          >
            <MailIcon />
            {t.hero.getInTouch}
          </a>
          <a
            href={site.socials.linkedin}
            className="flex items-center gap-2 rounded-full border px-4 py-2 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
          <a
            href={site.socials.github}
            className="flex items-center gap-2 rounded-full border px-4 py-2 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon />
            GitHub
          </a>
        </div>
        <div className="flex gap-3 rounded-xl border border-accent/30 bg-card p-4">
          <span className="mt-0.5 font-mono text-xs text-accent">
            {t.now.label}
          </span>
          <p className="text-sm leading-relaxed text-muted">{t.now.text}</p>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="flex flex-col gap-8 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          {t.expertise.heading}
        </h2>
        <div className="flex flex-col divide-y">
          {t.expertise.items.map((item) => (
            <div
              key={item.headline}
              className="flex flex-col gap-1 py-4 first:pt-0"
            >
              <h3 className="font-medium">{item.headline}</h3>
              <p className="text-muted">{item.line}</p>
            </div>
          ))}
        </div>
        <p className="font-mono text-xs text-muted">
          {t.expertise.toolsLabel}: {tools}
        </p>
      </section>

      {/* About cluster: beyond code + certifications + languages */}
      <div className="flex flex-col gap-8">
        {/* Beyond code */}
        <section className="flex flex-col gap-2">
          <h2 className="font-mono text-sm text-accent">{t.beyond.label}</h2>
          <p className="max-w-xl leading-relaxed text-muted">{t.beyond.text}</p>
        </section>

        {/* Certifications & languages */}
        <section className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-sm text-accent">
              {t.certifications.label}
            </h2>
            {t.certifications.items.map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5 text-sm">
                <span className="font-medium leading-snug">{item.label}</span>
                {item.detail && (
                  <span className="text-muted">{item.detail}</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-sm text-accent">
              {t.languages.label}
            </h2>
            {t.languages.items.map((lang) => (
              <div
                key={lang.name}
                className="flex items-baseline justify-between gap-2 text-sm"
              >
                <span className="font-medium">{lang.name}</span>
                <span className="font-mono text-xs text-muted">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Writing */}
      <section className="flex flex-col gap-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            {t.writing.label}
          </h2>
          <Link href="/writing" className="text-sm text-muted hover:text-accent">
            {t.writing.allPosts}
          </Link>
        </div>
        {posts.length > 0 ? (
          <div className="flex flex-col gap-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="group flex flex-col gap-1"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium group-hover:text-accent">
                    {post.title}
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-muted">
                    {post.date}
                  </span>
                </div>
                <p className="text-sm text-muted">{post.summary}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-muted">{t.writing.emptyHome}</p>
        )}
      </section>

      {/* Working at … (optional — toggle with site.showWorkingAt) */}
      {site.showWorkingAt && (
        <section className="flex flex-col gap-4 rounded-xl border border-accent/30 bg-card p-6">
          <span className="font-mono text-xs text-accent">{t.workingAt.label}</span>
          <h2 className="text-2xl font-semibold tracking-tight">
            {t.workingAt.heading}
          </h2>
          <p className="leading-relaxed text-muted">{t.workingAt.body}</p>
          <a
            href={site.careers}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 w-fit rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t.workingAt.cta}
          </a>
        </section>
      )}
    </div>
  );
}
