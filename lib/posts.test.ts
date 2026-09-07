import { describe, it, expect } from "vitest";
import { getAllPosts, getPost, InvalidPostError, parsePost } from "./posts";

describe("posts", () => {
  it("never publishes files that start with '_' (e.g. _template.mdx)", () => {
    expect(getPost("_template")).toBeUndefined();
    expect(getAllPosts().every((p) => !p.slug.startsWith("_"))).toBe(true);
  });

  it("returns undefined for a missing slug", () => {
    expect(getPost("this-post-does-not-exist")).toBeUndefined();
  });

  it("returns posts sorted by date, newest first", () => {
    const posts = getAllPosts();
    for (let i = 1; i < posts.length; i++) {
      expect(posts[i - 1].date >= posts[i].date).toBe(true);
    }
  });

  it("gives every post the required metadata", () => {
    for (const p of getAllPosts()) {
      expect(p.slug).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(typeof p.date).toBe("string");
      expect(typeof p.summary).toBe("string");
    }
  });

  it.each([
    ["missing title", "date: \"2026-01-01\"\nsummary: \"Summary\""],
    ["invalid date", "title: \"Title\"\ndate: \"2026-1-1\"\nsummary: \"Summary\""],
    ["missing summary", "title: \"Title\"\ndate: \"2026-01-01\""],
  ])("rejects posts with %s", (_, frontmatter) => {
    expect(() => parsePost("broken.mdx", `---\n${frontmatter}\n---\nBody`)).toThrow(
      InvalidPostError,
    );
  });

  it("sorts posts with the same date by slug", () => {
    const first = parsePost(
      "z-post.mdx",
      '---\ntitle: "Z"\ndate: "2026-01-01"\nsummary: "Summary"\n---\nBody',
    );
    const second = parsePost(
      "a-post.mdx",
      '---\ntitle: "A"\ndate: "2026-01-01"\nsummary: "Summary"\n---\nBody',
    );
    expect([first, second].toSorted((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug)).map((p) => p.slug)).toEqual([
      "a-post",
      "z-post",
    ]);
  });
});
