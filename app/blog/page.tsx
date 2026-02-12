import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-heading text-4xl font-bold text-white mb-12">Engineering Blog</h1>
      
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.id} className="relative flex flex-col items-start">
            
            <h2 className="text-2xl font-bold tracking-tight text-white">
              <Link 
                href={`/blog/${post.id}`} 
                className="hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
            </h2>

            <time className="order-first mb-3 flex items-center text-sm text-secondary">
              {post.date}
            </time>

            <p className="mt-2 text-secondary leading-relaxed">
              {post.description}
            </p>

            <Link href={`/blog/${post.id}`} className="mt-4 text-sm font-semibold text-primary hover:text-blue-400">
              Read Article →
            </Link>

          </article>
        ))}
      </div>
    </div>
  );
}
