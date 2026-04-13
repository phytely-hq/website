import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { notFound } from 'next/navigation';
import EditorialPost from '@/components/blog_section';

const reader = createReader(process.cwd(), keystaticConfig);

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);

  if (!post) notFound();

  const contentData = await post.content(); 

  return (
    <EditorialPost 
      title={post.title}
      summary={post.summary}
      author={post.author}
      date={post.publishedDate ?? 'UNKNOWN'}
      coverImage={post.coverImage ?? ''}
      content={contentData || []} 
    />
  );
}
