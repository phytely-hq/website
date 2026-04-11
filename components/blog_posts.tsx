import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import Link from 'next/link';

const reader = createReader(process.cwd(), keystaticConfig);

export default async function FeaturedPosts() {
  const allPosts = await reader.collections.posts.all();

  const posts = allPosts
    .map(post => ({
      slug: post.slug,
      ...post.entry
    }))
    .sort((a, b) => new Date(b.publishedDate ?? '').getTime() - new Date(a.publishedDate ?? '').getTime())
    .slice(0, 3);

  return (
    <section className="w-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-3 min-h-[90vh]">
        {posts.map((post) => (
          <div 
            key={post.slug}
            className="relative flex flex-col justify-end p-8 md:p-12 min-h-[60vh] md:min-h-full bg-cover bg-center bg-no-repeat bg-fixed group"
            style={{ backgroundImage: `url('${post.coverImage}')` }}
          >
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center text-white pb-8">
              <div className="mb-4 flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] uppercase opacity-90">
                <span>
                  {new Date(post.publishedDate ?? '').toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>

              <h2 className="text-2xl font-black uppercase leading-[0.88] tracking-tighter text-balance my-4">
                <span className="block text-white whitespace-pre-line">
                  {post.title}
                </span>
              </h2>

              <p className="max-w-[280px] text-[11px] leading-relaxed text-gray-200 opacity-90 text-balance mb-8">
                {post.summary}
              </p>

              <Link 
                href={`/blog/${post.slug}`} 
                className="inline-block border border-white/50 px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
              >
                Read Post
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}