import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  metaDescription: string;
  keywords: string;
  category: string;
  author: string;
  readTime: number;
  featuredImage: string;
  published: boolean;
  publishedAt: string;
  createdAt: string;
}

// This is a temporary solution - in production, use a proper database
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/blog/create`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      return null;
    }
    
    const posts: BlogPost[] = await response.json();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | EGC World',
    };
  }

  return {
    title: `${post.title} | EGC World`,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      ...(post.featuredImage && { images: [post.featuredImage] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription || post.excerpt,
      ...(post.featuredImage && { images: [post.featuredImage] }),
    },
  };
}

// Format content with basic markdown to JSX conversion
const formatContent = (content: string) => {
  return content
    .split('\n')
    .map(line => {
      if (line.startsWith('# ')) {
        return `<h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-8">${line.slice(2)}</h1>`;
      } else if (line.startsWith('## ')) {
        return `<h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">${line.slice(3)}</h2>`;
      } else if (line.startsWith('### ')) {
        return `<h3 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">${line.slice(4)}</h3>`;
      } else if (line.trim() === '') {
        return '';
      } else {
        return `<p class="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-7">${line}</p>`;
      }
    })
    .join('\n');
};

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const formattedContent = formatContent(post.content);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 text-white py-20 overflow-hidden">
        {post.featuredImage ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{
                backgroundImage: `url('${post.featuredImage}')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-black/20 z-10"></div>
        )}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-blue-100">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
              <span>•</span>
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
            <div 
              className="blog-content prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get expert guidance and solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="/insights" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              More Insights
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
