import { NextRequest, NextResponse } from 'next/server';

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

// In-memory storage for blog posts (in production, use a database)
let blogPosts: any[] = [
  {
    id: '1',
    title: 'Legal Metrology in India: A Complete Guide for Businesses in 2025',
    slug: 'legal-metrology-guide',
    excerpt: 'Navigate the complex world of weights and measures regulations with our comprehensive guide for businesses.',
    content: '# Legal Metrology in India\n\nLegal metrology is the science of measurement and its application to trade and commerce. In India, the Legal Metrology Act, 2009, governs the standards of weights and measures used in commercial transactions.\n\n## Key Requirements\n\nAll businesses dealing with packaged commodities must comply with legal metrology requirements. This includes proper labeling, accurate measurements, and adherence to packaging standards.\n\n## Benefits of Compliance\n\nCompliance with legal metrology regulations helps businesses build trust with customers and avoid penalties.',
    metaDescription: 'Navigate the complex world of weights and measures regulations with our comprehensive guide for businesses.',
    keywords: 'legal metrology, weights and measures, business compliance, India regulations',
    category: 'Compliance',
    author: 'EGC Team',
    readTime: 5,
    featuredImage: '/images/legal-metrology-blog.jpg',
    published: true,
    publishedAt: '2024-01-15T00:00:00.000Z',
    createdAt: '2024-01-15T00:00:00.000Z',
  },
  {
    id: '2',
    title: 'Eat Right India Initiative: Transforming Food Safety Standards',
    slug: 'eat-right-india-initiative',
    excerpt: 'Learn how the Eat Right India movement is revolutionizing food safety and quality standards across the nation.',
    content: '# Eat Right India Initiative\n\nThe Eat Right India movement is a flagship program of the Food Safety and Standards Authority of India (FSSAI) aimed at improving food safety and nutrition.\n\n## Key Objectives\n\nThe initiative focuses on three key areas: safe food, healthy diets, and sustainable food systems.\n\n## Impact on Businesses\n\nFood businesses must adapt to new standards and implement better practices to align with the Eat Right India guidelines.',
    metaDescription: 'Learn how the Eat Right India movement is revolutionizing food safety and quality standards across the nation.',
    keywords: 'eat right india, food safety, FSSAI, nutrition, food standards',
    category: 'Food Safety',
    author: 'EGC Team',
    readTime: 4,
    featuredImage: '/images/eat-right-india-bg.jpg',
    published: true,
    publishedAt: '2024-01-10T00:00:00.000Z',
    createdAt: '2024-01-10T00:00:00.000Z',
  },
  {
    id: '3',
    title: 'Top Business Challenges in 2025 and How to Overcome Them',
    slug: 'business-challenges-2025',
    excerpt: 'Discover the key challenges businesses will face in 2025 and strategic solutions to navigate them successfully.',
    content: '# Top Business Challenges in 2025\n\nAs we move into 2025, businesses face unprecedented challenges that require innovative solutions and strategic thinking.\n\n## Key Challenges\n\n1. **Digital Transformation**: Adapting to new technologies\n2. **Regulatory Compliance**: Keeping up with changing regulations\n3. **Sustainability**: Meeting environmental standards\n4. **Talent Management**: Attracting and retaining skilled workers\n\n## Solutions\n\nBusinesses must invest in technology, stay updated with regulations, and focus on sustainable practices.',
    metaDescription: 'Discover the key challenges businesses will face in 2025 and strategic solutions to navigate them successfully.',
    keywords: 'business challenges, 2025, digital transformation, compliance, sustainability',
    category: 'Business Strategy',
    author: 'EGC Team',
    readTime: 6,
    featuredImage: '/images/business-challenges-blog.jpg',
    published: true,
    publishedAt: '2024-01-05T00:00:00.000Z',
    createdAt: '2024-01-05T00:00:00.000Z',
  }
];

export async function POST(request: NextRequest) {
  try {
    const blogData: BlogData = await request.json();
    
    // Sanitize the slug
    const sanitizedSlug = blogData.slug.replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-+|-+$/g, '');
    
    if (!sanitizedSlug) {
      return NextResponse.json({ message: 'Invalid slug' }, { status: 400 });
    }

    // Check if blog with this slug already exists
    const existingPost = blogPosts.find(post => post.slug === sanitizedSlug);
    if (existingPost) {
      return NextResponse.json({ message: 'Blog with this slug already exists' }, { status: 400 });
    }

    // Create blog post data
    const blogPost = {
      id: Date.now().toString(),
      title: blogData.title,
      slug: sanitizedSlug,
      excerpt: blogData.excerpt,
      content: blogData.content,
      metaDescription: blogData.metaDescription,
      keywords: blogData.keywords,
      category: blogData.category,
      author: blogData.author,
      readTime: blogData.readTime,
      featuredImage: blogData.featuredImage || '',
      published: !!blogData.published,
      publishedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };

    // Add to in-memory storage
    blogPosts.push(blogPost);

    return NextResponse.json({ 
      message: 'Blog post created successfully', 
      slug: sanitizedSlug,
      path: `/insights/${sanitizedSlug}`,
      id: blogPost.id
    });

  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ 
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// GET endpoint to retrieve all blog posts
export async function GET() {
  try {
    return NextResponse.json(blogPosts.filter(post => post.published));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ 
      message: 'Internal server error' 
    }, { status: 500 });
  }
}
