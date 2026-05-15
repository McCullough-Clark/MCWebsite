import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const allPosts = await getCollection('blog');
  const posts = allPosts
    .filter((post) => post.data.status === 'Published')
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'McCullough Clark — Articles',
    description: 'Notes on accounting, AI tools, and running professional services firms.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      author: post.data.author,
      link: `/blog/${post.id}/`,
    })),
  });
}
