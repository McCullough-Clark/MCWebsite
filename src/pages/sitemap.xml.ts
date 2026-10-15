import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export const prerender = true

const staticPaths = [
  '/',
  '/systems-integration/',
  '/workflow-automation/',
  '/bookkeeping/',
  '/privacy/',
  '/terms/',
]

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ?? new URL('https://mcculloughclark.com/')
  const posts = (await getCollection('blog'))
    .filter((post) => post.data.status === 'Published')
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())

  const paths = posts.length > 0 ? [...staticPaths, '/blog/'] : staticPaths
  const staticEntries = paths.map((path) => {
    const priority = path === '/' ? '1.0' : path.includes('privacy') || path.includes('terms') ? '0.2' : '0.8'
    return `  <url>\n    <loc>${new URL(path, baseUrl).href}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  })

  const postEntries = posts.map((post) => (
    `  <url>\n    <loc>${new URL(`/blog/${post.id}/`, baseUrl).href}</loc>\n    <lastmod>${post.data.date.toISOString()}</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.6</priority>\n  </url>`
  ))

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticEntries,
    ...postEntries,
    '</urlset>',
    '',
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
