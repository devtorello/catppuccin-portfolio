import { describe, it, expect } from "vitest";
import { getAllPosts, getPost } from "./posts";

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
});
