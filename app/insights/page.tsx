import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

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

async function listInsightPosts() {
  try {
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/blog/create`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      return [];
    }
    
    const posts: BlogPost[] = await response.json();
    return posts.map(post => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      featuredImage: post.featuredImage
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function Insights() {
  const posts = await listInsightPosts();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 text-white py-20 overflow-hidden h-screen max-h-[500px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/images/insights.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights & Expert Analysis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Stay informed with the latest industry trends, regulatory updates, and expert insights to drive your business success
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Latest Posts (Dynamic) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(({ slug, title, excerpt, featuredImage }) => (
              <Link key={slug} href={`/insights/${slug}`} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {featuredImage ? (
                  <div className="relative h-48">
                    {/* Use native img to avoid external domain config issues */}
                    <Image src={featuredImage} alt={title} width={400} height={200} className="w-full h-full object-cover" />
                  </div>
                ) : null}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-600">
                    {title}
                  </h3>
                  {excerpt ? (
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{excerpt}</p>
                  ) : null}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Featured Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 - Legal Metrology Guide */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="relative h-48">
                <Image 
                  src="/images/legal3.jpg" 
                  alt="Legal Metrology Guide" 
                  width={400}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Legal Metrology in India: A Complete Guide for Businesses in 2025</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Navigate the complex world of weights and measures regulations with our comprehensive guide for businesses.
                </p>
                <Link href="/insights/legal-metrology-guide" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Article 2 - Eat Right India */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="relative h-48">
                <Image 
                  src="/images/eatright.jpg" 
                  alt="Eat Right India Initiative" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Eat Right India Initiative: Transforming Food Safety Standards</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Learn how the Eat Right India movement is revolutionizing food safety and quality standards across the nation.
                </p>
                <Link href="/insights/eat-right-india-initiative" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Article 3 - Business Challenges 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="relative h-48">
                <Image 
                  src="/images/business-challenges.jpg" 
                  alt="Business Challenges 2025" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Top Business Challenges in 2025 and How to Overcome Them</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Discover the key challenges businesses will face in 2025 and strategic solutions to navigate them successfully.
                </p>
                <Link href="/insights/business-challenges-2025" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Featured Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Compliance</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Regulatory updates and compliance strategies</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Business Growth</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Strategies for scaling your business</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Training</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Learning and development insights</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Market Insights</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Industry trends and market analysis</p>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="bg-gradient-to-r from-green-500 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights, regulatory updates, and expert analysis delivered straight to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-blue-200 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </section>
      </div>
    </div>
  );
}
