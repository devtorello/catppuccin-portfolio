import { getAllPosts } from "@/lib/posts";
import { HomeContent } from "@/components/home-content";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  return <HomeContent posts={posts} />;
}
