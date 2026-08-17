import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { posts } from '@/data/posts';
import { areas } from '@/data/areas';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/about',
    '/testimonials',
    '/contact',
    '/knowledge-hub',
    '/areas',
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const articles = posts.map((post) => ({
    url: `${site.url}/knowledge-hub/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const areaHubs = areas.map((area) => ({
    url: `${site.url}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const areaServices = areas.flatMap((area) =>
    services.map((service) => ({
      url: `${site.url}/areas/${area.slug}/${service.keywordSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    })),
  );

  return [
    ...routes,
    ...articles,
    ...areaHubs,
    ...areaServices,
    { url: `${site.url}/privacy-policy`, lastModified: new Date(), priority: 0.3 },
  ];
}
