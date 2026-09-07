import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/writing");
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export class InvalidPostError extends Error {
  constructor(file: string, message: string) {
    super(`[posts] ${file}: ${message}`);
    this.name = "InvalidPostError";
  }
}

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export type Post = PostMeta & { content: string };

export function parsePost(file: string, raw: string): Post {
  const slug = file.replace(/\.mdx$/, "");
  const { data, content } = matter(raw);
  const { title, date, summary } = data;

  if (typeof title !== "string" || !title.trim()) {
    throw new InvalidPostError(file, "title must be a non-empty string");
  }
  if (typeof date !== "string" || !ISO_DATE.test(date)) {
    throw new InvalidPostError(file, "date must use YYYY-MM-DD format");
  }
  if (typeof summary !== "string" || !summary.trim()) {
    throw new InvalidPostError(file, "summary must be a non-empty string");
  }

  return { slug, title, date, summary, content };
}

const readAll = cache((): Post[] => {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((file) => parsePost(file, fs.readFileSync(path.join(POSTS_DIR, file), "utf-8")));
});

export function getAllPosts(): PostMeta[] {
  return readAll()
    .toSorted(
      (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug),
    )
    .map(({ slug, title, date, summary }) => ({ slug, title, date, summary }));
}

export function getPost(slug: string): Post | undefined {
  return readAll().find((p) => p.slug === slug);
}
