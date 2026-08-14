import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { posts } from '@/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/about', '/testimonials', '/contact', '/knowledge-hub'].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    }),
  );

  const articles = posts.map((post) => ({
    url: `${site.url}/knowledge-hub/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [
    ...routes,
    ...articles,
    { url: `${site.url}/privacy-policy`, lastModified: new Date(), priority: 0.3 },
  ];
}
