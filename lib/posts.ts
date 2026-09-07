import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/writing");
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export type Post = PostMeta & { content: string };

const readAll = cache((): Post[] => {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      const date = data.date ?? "";
      if (date && !ISO_DATE.test(date)) {
        console.warn(
          `[posts] ${file}: date "${date}" is not ISO (YYYY-MM-DD); sorting may be wrong.`,
        );
      }
      return {
        slug,
        title: data.title ?? slug,
        date,
        summary: data.summary ?? "",
        content,
      };
    });
});

export function getAllPosts(): PostMeta[] {
  return readAll()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ slug, title, date, summary }) => ({ slug, title, date, summary }));
}

export function getPost(slug: string): Post | undefined {
  return readAll().find((p) => p.slug === slug);
}
