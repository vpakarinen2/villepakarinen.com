import { getPostData, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug);

  const options = {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  };

  return (
    <article className="max-w-2xl mx-auto px-6 py-20">
      {/* Navigation */}
      <Link 
        href="/blog" 
        className="inline-flex items-center text-sm text-slate-400 hover:text-primary transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Engineering Blog
      </Link>

      {/* Header */}
      <header className="mb-10 pb-8 border-b border-white/10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center text-slate-400 text-sm gap-4">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>{post.author || "Ville Pakarinen"}</span>
        </div>
      </header>

      {/* Content - Lighter text colors for better readability */}
      <div className="prose prose-invert max-w-none 
        prose-headings:font-heading prose-headings:font-bold prose-headings:text-white
        prose-p:text-slate-300 prose-p:leading-relaxed
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-strong:text-white prose-strong:font-semibold
        prose-ul:text-slate-300 prose-li:marker:text-primary
        prose-blockquote:text-slate-400 prose-blockquote:border-l-primary
        prose-code:text-primary prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl"
      >
        <MDXRemote source={post.content} options={options} />
      </div>
    </article>
  );
}
