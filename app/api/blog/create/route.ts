import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface BlogData {
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
}

export async function POST(request: NextRequest) {
  try {
    const blogData: BlogData = await request.json();
    
    // Sanitize the slug
    const sanitizedSlug = blogData.slug.replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-+|-+$/g, '');
    
    if (!sanitizedSlug) {
      return NextResponse.json({ message: 'Invalid slug' }, { status: 400 });
    }

    // Create the blog directory path
    const blogDir = path.join(process.cwd(), 'app', 'insights', sanitizedSlug);
    
    // Check if directory already exists
    try {
      await fs.access(blogDir);
      return NextResponse.json({ message: 'Blog with this slug already exists' }, { status: 400 });
    } catch {
      // Directory doesn't exist, which is what we want
    }

    // Create the directory
    await fs.mkdir(blogDir, { recursive: true });

    // Format the content with basic markdown to JSX conversion
    const formatContent = (content: string) => {
      return content
        .split('\n')
        .map(line => {
          if (line.startsWith('# ')) {
            return `        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-8">${line.slice(2)}</h1>`;
          } else if (line.startsWith('## ')) {
            return `        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">${line.slice(3)}</h2>`;
          } else if (line.startsWith('### ')) {
            return `        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">${line.slice(4)}</h3>`;
          } else if (line.trim() === '') {
            return '';
          } else {
            return `        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-7">${line}</p>`;
          }
        })
        .join('\n');
    };

    const formatted = formatContent(blogData.content);

    // Create the page.tsx file content
    const pageContent = `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${blogData.title} | EGC World',
  description: '${blogData.metaDescription || blogData.excerpt}',
  keywords: '${blogData.keywords}',
  openGraph: {
    title: '${blogData.title}',
    description: '${blogData.metaDescription || blogData.excerpt}',
    type: 'article',
    ${blogData.featuredImage ? `images: ['${blogData.featuredImage}'],` : ''}
  },
  twitter: {
    card: 'summary_large_image',
    title: '${blogData.title}',
    description: '${blogData.metaDescription || blogData.excerpt}',
    ${blogData.featuredImage ? `images: ['${blogData.featuredImage}'],` : ''}
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 text-white py-20 overflow-hidden">
        ${blogData.featuredImage ? `
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('${blogData.featuredImage}')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        ` : '<div className="absolute inset-0 bg-black/20 z-10"></div>'}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                ${blogData.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ${blogData.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-blue-100">
              <span>By ${blogData.author}</span>
              <span>•</span>
              <span>${blogData.readTime} min read</span>
              <span>•</span>
              <span>${new Date().toLocaleDateString('en-US', { 
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
            <div className="blog-content">
${formatted}
            </div>
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
}`;

    // Write the page.tsx file
    const pagePath = path.join(blogDir, 'page.tsx');
    await fs.writeFile(pagePath, pageContent, 'utf8');

    return NextResponse.json({ 
      message: 'Blog post created successfully', 
      slug: sanitizedSlug,
      path: `/insights/${sanitizedSlug}`
    });

  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ 
      message: 'Internal server error' 
    }, { status: 500 });
  }
}
