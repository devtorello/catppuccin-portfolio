import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { WritingIndex } from "@/components/writing-index";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on engineering, testing, infrastructure, and AI systems.",
};

export default function WritingPage() {
  const posts = getAllPosts();
  return <WritingIndex posts={posts} />;
}
