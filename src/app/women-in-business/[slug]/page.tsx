import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarCheck, ArrowRight } from 'lucide-react';
import PinkPageHero from '@/components/PinkPageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { site } from '@/data/site';
import {
  womenInBusinessQueries,
  getWomenInBusinessQuery,
  categoryLabels,
} from '@/data/womenInBusiness';
import { services } from '@/data/services';
import { breadcrumbSchema, faqSchema, topicServiceSchema } from '@/lib/schema';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return womenInBusinessQueries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWomenInBusinessQuery(slug);
  if (!entry) return {};

  return {
    title: entry.title,
    description: entry.metaDescription,
    alternates: { canonical: `/women-in-business/${entry.slug}` },
  };
}

export default async function WomenInBusinessQueryPage({ params }: Params) {
  const { slug } = await params;
  const entry = getWomenInBusinessQuery(slug);
  if (!entry) notFound();

  const related = womenInBusinessQueries
    .filter((e) => e.category === entry.category && e.slug !== entry.slug)
    .slice(0, 3);

  const relatedService = entry.serviceAnchor
    ? services.find((s) => s.slug === entry.serviceAnchor)
    : undefined;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'For Women in Business', href: '/women-in-business' },
    { label: entry.title, href: `/women-in-business/${entry.slug}` },
  ];

  const schemas = [
    breadcrumbSchema(breadcrumbs),
    topicServiceSchema({
      serviceName: entry.title,
      description: entry.metaDescription,
      url: `/women-in-business/${entry.slug}`,
    }),
    faqSchema(entry.faqs),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Breadcrumbs items={breadcrumbs} />

      <PinkPageHero title={entry.title} intro={entry.dek} />

      <section className="py-16 lg:py-20">
        <div className="container-kj grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal>
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-pink-600">
              {categoryLabels[entry.category]}
            </p>
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl">
              How Elaine Can Help
            </h2>
            <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">{entry.context}</p>
            <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">
              Elaine Bryson is a Chartered Accountant and co-founder of {site.name}, working
              exclusively with women running their own businesses — from solo founders to small
              teams. No jargon, no talking down, just clear answers and an ongoing finance partner
              in your corner.
            </p>

            {relatedService ? (
              <p className="mt-5 text-[15px] leading-[1.7] text-ink-muted">
                This usually sits within our{' '}
                <Link href={`/services#${relatedService.slug}`} className="font-semibold text-pink-600 underline underline-offset-4">
                  {relatedService.title}
                </Link>{' '}
                service.
              </p>
            ) : null}

            <a
              href={site.calendlyElaine}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-8 bg-pink-500 text-white hover:bg-pink-600 hover:shadow-[0_10px_28px_rgba(236,72,153,0.35)]"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              Book a Free Call with Elaine
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full border-b-[3px] border-pink-500 bg-surface-grey p-8 shadow-card">
              <h3 className="text-xl text-ink">About Elaine</h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-ink-muted">
                Co-Founder &amp; Chartered Accountant at {site.name}, focused on financial
                confidence for women running their own businesses.
              </p>
              <Link
                href="/about/elaine"
                className="mt-6 inline-flex items-center gap-2 font-medium text-pink-600"
              >
                Meet Elaine
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-grey py-16 lg:py-20">
        <div className="container-kj grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <p className="mb-4 font-display text-sm font-bold uppercase tracking-[0.08em] text-pink-600">
              FAQ
            </p>
            <h2 className="max-w-[12ch] text-4xl leading-[1.1] text-ink sm:text-5xl">
              Questions, Answered.
            </h2>
            <span aria-hidden="true" className="mt-7 block h-1 w-14 bg-pink-500" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 bg-white p-6 shadow-card sm:p-8">
              {entry.faqs.map((faq) => (
                <div key={faq.question} className="border-l-[3px] border-pink-500 pl-5">
                  <p className="font-display font-bold text-ink">{faq.question}</p>
                  <p className="mt-2 text-[15px] leading-[1.8] text-ink-soft">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {related.length ? (
        <section className="py-16 lg:py-20">
          <div className="container-kj">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-pink-600">
                Related
              </p>
              <h2 className="section-title text-ink">More for Women in Business</h2>
            </Reveal>

            <ul className="mt-10 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/women-in-business/${r.slug}`}
                    className="flex h-full flex-col border-b-[3px] border-pink-500 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
                  >
                    <span className="text-[15px] font-medium text-ink">{r.title}</span>
                    <span className="mt-2 flex-1 text-[14px] leading-[1.6] text-ink-muted">{r.dek}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-center">
              <Link href="/women-in-business" className="font-medium text-pink-600 underline underline-offset-4">
                See all topics for women in business
              </Link>
            </p>
          </div>
        </section>
      ) : null}

      <LetsGetInTouch pink />
    </>
  );
}
