import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { getPost, getRelatedPosts, posts } from '@/data/posts';
import { services } from '@/data/services';
import { site } from '@/data/site';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  // `metaTitle` is the search-result title and can differ from the on-page h1,
  // so the h1 can stay readable while the title tag carries the phrasing people
  // actually search for.
  const title = post.metaTitle ?? post.title;
  const description = post.metaDescription ?? post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: `/knowledge-hub/${post.slug}` },
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      title,
      description,
      url: `${site.url}/knowledge-hub/${post.slug}`,
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

/**
 * Service pages worth linking to from an article, keyed by the words that show
 * up in that article's topic. Search Console shows the commercial demand sits on
 * service terms ("management accounting services", "virtual financial
 * controller", "bookkeeping services"), while the impressions sit on the
 * informational articles, so every article points back at the matching service.
 */
const SERVICE_LINK_HINTS: { match: RegExp; serviceSlug: string }[] = [
  { match: /management-account|management-accounting/, serviceSlug: 'management' },
  { match: /forecast|cash-flow|seasonal/, serviceSlug: 'cash' },
  { match: /budget|break-even|prices|pricing|margin/, serviceSlug: 'budgeting' },
  { match: /bookkeep|xero|quickbooks|making-tax-digital/, serviceSlug: 'bookkeeping' },
  { match: /annual-accounts|companies-house|vat|self-assessment|sole-trader|directors-loan|taxes/, serviceSlug: 'annual' },
  { match: /financial-controller|outsource|finance-function|growing-a-business|finance-help/, serviceSlug: 'virtual' },
  { match: /investment|investor|audit|due-diligence|balance-sheet/, serviceSlug: 'financial' },
];

function serviceLinksFor(slug: string) {
  const matched = SERVICE_LINK_HINTS.filter((hint) => hint.match.test(slug))
    .map((hint) => services.find((service) => service.slug === hint.serviceSlug))
    .filter((service): service is (typeof services)[number] => service !== undefined);

  // Always give the reader at least one route through to a service page.
  if (!matched.length) {
    const fallback = services.find((service) => service.slug === 'management');
    return fallback ? [fallback] : [];
  }
  return matched.slice(0, 3);
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const serviceLinks = serviceLinksFor(post.slug);

  const schema = articleSchema({
    title: post.title,
    description: post.metaDescription ?? post.excerpt,
    datePublished: post.date,
    dateModified: post.updated,
    url: `/knowledge-hub/${post.slug}`,
  });

  const crumbs = breadcrumbSchema([
    { label: 'Home', href: '/' },
    { label: 'Knowledge Hub', href: '/knowledge-hub' },
    { label: post.title, href: `/knowledge-hub/${post.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      {post.faqs?.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faqs)) }}
        />
      ) : null}

      <article className="container-kj max-w-3xl py-16 lg:py-20">
        <Link
          href="/knowledge-hub"
          className="inline-flex items-center gap-2 text-[15px] text-ink-muted hover:text-brand"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Knowledge Hub
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1">
          <time
            dateTime={post.date}
            className="block font-display text-sm font-bold uppercase tracking-[0.06em] text-brand"
          >
            {dateFormat.format(new Date(post.date))}
          </time>
          {post.updated ? (
            <span className="text-[13px] text-ink-muted">
              Updated{' '}
              <time dateTime={post.updated}>{dateFormat.format(new Date(post.updated))}</time>
            </span>
          ) : null}
        </div>

        <h1 className="mt-3 text-3xl leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]">
          {post.title}
        </h1>

        <p className="mt-6 text-lg leading-[1.8] text-ink-soft">{post.excerpt}</p>

        <span aria-hidden="true" className="mt-8 block h-1 w-14 bg-brand" />

        {post.body ? (
          <div
            className="prose-kj mt-8 space-y-5 text-[17px] leading-[1.85] text-ink-soft [&_a]:text-brand [&_a]:underline [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-ink [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_ol_li]:list-decimal [&_strong]:font-semibold [&_strong]:text-ink"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        ) : null}

        {post.faqs?.length ? (
          <section className="mt-14">
            <h2 className="text-2xl text-ink">Frequently asked questions</h2>
            <dl className="mt-6 space-y-6">
              {post.faqs.map((faq) => (
                <div key={faq.question} className="border-l-[3px] border-brand pl-5">
                  <dt className="font-display text-lg font-bold text-ink">{faq.question}</dt>
                  <dd className="mt-2 text-[16px] leading-[1.8] text-ink-soft">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {serviceLinks.length ? (
          <section className="mt-14 bg-surface-grey p-8">
            <h2 className="font-display text-lg font-bold text-ink">
              How we help with this
            </h2>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-2 font-medium text-brand hover:gap-3"
                  >
                    {service.title}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
              We work with business owners across{' '}
              <Link href="/areas" className="text-brand hover:underline">
                Glasgow, Lanarkshire and the rest of the UK
              </Link>
              . Want to talk it through?{' '}
              <a
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand hover:underline"
              >
                Book a free consultation
              </a>
              .
            </p>
          </section>
        ) : null}

        {related.length ? (
          <section className="mt-14 border-t border-neutral-200 pt-10">
            <h2 className="text-2xl text-ink">Keep reading</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug} className="border-b-[3px] border-brand bg-white p-5 shadow-card">
                  <h3 className="text-[17px] leading-snug text-ink">
                    <Link href={`/knowledge-hub/${item.slug}`} className="hover:text-brand">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{item.excerpt}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>

      <LetsGetInTouch />
    </>
  );
}
