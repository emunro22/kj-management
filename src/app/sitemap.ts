import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { posts } from '@/data/posts';
import { areas } from '@/data/areas';
import { services } from '@/data/services';
import { womenInBusinessQueries } from '@/data/womenInBusiness';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/about',
    '/about/kieran',
    '/about/elaine',
    '/about/team',
    '/testimonials',
    '/contact',
    '/knowledge-hub',
    '/areas',
    '/women-in-business',
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const articles = posts.map((post) => ({
    url: `${site.url}/knowledge-hub/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
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

  // /privacy-policy and /terms carry robots noindex, so they are deliberately
  // left out of the sitemap: submitting a URL you also tell Google not to index
  // is a contradictory signal and shows up as "Excluded by noindex" in the
  // Page indexing report.
  const womenInBusinessPages = womenInBusinessQueries.map((entry) => ({
    url: `${site.url}/women-in-business/${entry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  return [
    ...routes,
    ...articles,
    ...areaHubs,
    ...areaServices,
    ...womenInBusinessPages,
  ];
}
