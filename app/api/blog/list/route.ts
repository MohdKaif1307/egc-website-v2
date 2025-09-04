import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET() {
  try {
    const insightsDir = path.join(process.cwd(), 'app', 'insights')
    const entries = await fs.readdir(insightsDir, { withFileTypes: true })

    const posts = [] as Array<{
      slug: string
      title: string
      excerpt?: string
      featuredImage?: string
      publishedAt?: string
    }>

    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      const slug = entry.name
      const metaPath = path.join(insightsDir, slug, 'metadata.json')
      try {
        const raw = await fs.readFile(metaPath, 'utf8')
        const meta = JSON.parse(raw)
        posts.push({
          slug,
          title: meta.title || slug.replace(/-/g, ' '),
          excerpt: meta.excerpt,
          featuredImage: meta.featuredImage,
          publishedAt: meta.publishedAt,
        })
      } catch {
        // skip missing metadata
      }
    }

    // Sort newest first by publishedAt or dir mtime
    const withTime = await Promise.all(posts.map(async (p) => {
      const stat = await fs.stat(path.join(insightsDir, p.slug))
      const time = p.publishedAt ? Date.parse(p.publishedAt) : stat.mtimeMs
      return { ...p, time }
    }))

    withTime.sort((a, b) => b.time - a.time)

    return NextResponse.json({ posts: withTime.map(({ time, ...rest }) => rest) })
  } catch (err) {
    console.error('Error listing blog posts:', err)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}


