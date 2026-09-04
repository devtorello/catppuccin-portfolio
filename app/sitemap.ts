import type { MetadataRoute } from "next";
import { site } from "@/lib/config";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/writing/${post.slug}`,
    lastModified: post.date || undefined,
  }));

  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/writing`, priority: 0.8 },
    ...posts,
  ];
}
