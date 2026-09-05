import { site } from '@/data/site';

export type BreadcrumbItem = { label: string; href: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${site.url}${item.href}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string | string[] }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: Array.isArray(faq.answer) ? faq.answer.join(' ') : faq.answer,
      },
    })),
  };
}

/**
 * Service schema scoped to a place. Deliberately omits `address`: KJ has no
 * public branch network, so we describe coverage via `areaServed` only.
 */
export function areaServiceSchema({
  serviceName,
  description,
  areaName,
  url,
}: {
  serviceName: string;
  description: string;
  areaName: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    name: `${serviceName} in ${areaName}`,
    description,
    url: `${site.url}${url}`,
    provider: {
      '@type': 'AccountingService',
      name: site.name,
      url: site.url,
      telephone: site.phone,
      email: site.email,
    },
    areaServed: { '@type': 'City', name: areaName },
  };
}

/** Article schema for Knowledge Hub posts. */
export function articleSchema({
  title,
  description,
  datePublished,
  url,
  image,
}: {
  title: string;
  description: string;
  datePublished: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    url: `${site.url}${url}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${site.url}${url}` },
    ...(image ? { image: `${site.url}${image}` } : {}),
    author: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/images/logo-header.png`,
      },
    },
  };
}

/** Service schema for topic-led pages that aren't scoped to a single place. */
export function topicServiceSchema({
  serviceName,
  description,
  url,
}: {
  serviceName: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    name: serviceName,
    description,
    url: `${site.url}${url}`,
    provider: {
      '@type': 'AccountingService',
      name: site.name,
      url: site.url,
      telephone: site.phone,
      email: site.email,
    },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'AdministrativeArea', name: 'Scotland' },
    ],
  };
}
