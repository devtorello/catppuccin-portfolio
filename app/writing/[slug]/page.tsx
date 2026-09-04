import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";
import { WritingBackLink } from "@/components/writing-back-link";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function PostPage({
  params,
}: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="flex flex-col gap-8 py-8">
      <WritingBackLink />
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
        <p className="font-mono text-xs text-muted">{post.date}</p>
      </header>
      <div className="prose">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
