import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/writing");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export type Post = PostMeta & { content: string };

function readAll(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        summary: data.summary ?? "",
        content,
      };
    });
}

export function getAllPosts(): PostMeta[] {
  return readAll()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ slug, title, date, summary }) => ({ slug, title, date, summary }));
}

export function getPost(slug: string): Post | undefined {
  return readAll().find((p) => p.slug === slug);
}
