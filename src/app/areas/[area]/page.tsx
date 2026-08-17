import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { areas, getArea } from '@/data/areas';
import { services } from '@/data/services';
import { breadcrumbSchema, faqSchema, areaServiceSchema } from '@/lib/schema';

type Params = { params: Promise<{ area: string }> };

export function generateStaticParams() {
  return areas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  return {
    title: `Finance Help in ${area.name}`,
    description: `Management accounting, bookkeeping and finance help for small businesses in ${area.name}, ${area.region}. ${area.tagline}.`,
    alternates: { canonical: `/areas/${area.slug}` },
  };
}

export default async function AreaPage({ params }: Params) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const nearbyAreas = area.nearby.map((n) => getArea(n)).filter((a): a is NonNullable<typeof a> => Boolean(a));

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Areas We Cover', href: '/areas' },
    { label: area.name, href: `/areas/${area.slug}` },
  ];

  const schemas = [
    breadcrumbSchema(breadcrumbs),
    areaServiceSchema({
      serviceName: 'Management Accounting & Finance Support',
      description: area.summary,
      areaName: area.name,
      url: `/areas/${area.slug}`,
    }),
    faqSchema(area.localFaqs),
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

      <PageHero
        title={`Finance Help in ${area.name}`}
        intro={`${area.tagline[0].toUpperCase()}${area.tagline.slice(1)}. ${area.summary}`}
      />

      <section className="py-16 lg:py-20">
        <div className="container-kj">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-3">Services in {area.name}</p>
            <h2 className="section-title text-ink">
              Every Part of the Finance Function, Covered
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <li className="h-full border-b-[3px] border-brand bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover">
                  <Link
                    href={`/areas/${area.slug}/${service.keywordSlug}`}
                    className="group flex h-full flex-col"
                  >
                    <h3 className="text-lg text-ink group-hover:text-brand">
                      {service.title} in {area.name}
                    </h3>
                    <p className="mt-2 flex-1 text-[15px] leading-[1.7] text-ink-muted">
                      {service.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-medium text-brand">
                      Learn more
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface-grey py-16 lg:py-20">
        <div className="container-kj grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4 text-base">Local FAQ</p>
            <h2 className="max-w-[10ch] text-4xl leading-[1.1] text-ink sm:text-5xl">
              {area.name} Questions, Answered.
            </h2>
            <span aria-hidden="true" className="mt-7 block h-1 w-14 bg-brand" />
            {area.landmarks.length ? (
              <p className="mt-6 flex items-start gap-2 text-[15px] leading-[1.7] text-ink-muted">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <span>Local landmarks: {area.landmarks.join(', ')}.</span>
              </p>
            ) : null}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 bg-white p-6 shadow-card sm:p-8">
              {area.localFaqs.map((faq) => (
                <div key={faq.question} className="border-l-[3px] border-brand pl-5">
                  <p className="font-display font-bold text-ink">{faq.question}</p>
                  <p className="mt-2 text-[15px] leading-[1.8] text-ink-soft">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {nearbyAreas.length ? (
        <section className="py-16 lg:py-20">
          <div className="container-kj">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-3">Nearby</p>
              <h2 className="section-title text-ink">Also Covering the Areas Around {area.name}</h2>
            </Reveal>

            <ul className="mt-10 flex flex-wrap justify-center gap-3">
              {nearbyAreas.map((nearbyArea) => (
                <li key={nearbyArea.slug}>
                  <Link
                    href={`/areas/${nearbyArea.slug}`}
                    className="inline-flex items-center gap-2 border border-neutral-200 bg-white px-5 py-2.5 text-[15px] font-medium text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    <MapPin size={15} aria-hidden="true" />
                    {nearbyArea.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CtaBand />
      <LetsGetInTouch />
    </>
  );
}
