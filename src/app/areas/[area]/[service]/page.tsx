import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { areas, getArea } from '@/data/areas';
import { services, getServiceByKeywordSlug } from '@/data/services';
import { getAngle } from '@/data/areaServiceAngles';
import { breadcrumbSchema, faqSchema, areaServiceSchema } from '@/lib/schema';

type Params = { params: Promise<{ area: string; service: string }> };

export function generateStaticParams() {
  return areas.flatMap((area) =>
    services.map((service) => ({ area: area.slug, service: service.keywordSlug })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { area: areaSlug, service: serviceSlug } = await params;
  const area = getArea(areaSlug);
  const service = getServiceByKeywordSlug(serviceSlug);
  if (!area || !service) return {};

  const aliasLabels = service.aliases.map((a) => a.label);

  // Prefer the town-specific opening sentence over the shared service blurb, so
  // the 22 pages for a given service do not all present the same snippet.
  const angle = getAngle(area.slug, service.slug);
  const localSentence = angle?.angle.split('. ')[0];
  const description = localSentence
    ? `${service.title} for businesses in ${area.name}, ${area.region}. ${localSentence}.`.slice(0, 300)
    : `${service.title} for small businesses in ${area.name}, ${area.region}. ${service.blurb}`;

  return {
    title: `${service.title} in ${area.name}`,
    description,
    keywords: [
      `${service.keyword} ${area.name}`,
      ...aliasLabels.map((label) => `${label} ${area.name}`),
      `${service.keyword} near me`,
      `accountant ${area.name}`,
    ],
    alternates: { canonical: `/areas/${area.slug}/${service.keywordSlug}` },
  };
}

export default async function AreaServicePage({ params }: Params) {
  const { area: areaSlug, service: serviceSlug } = await params;
  const area = getArea(areaSlug);
  const service = getServiceByKeywordSlug(serviceSlug);
  if (!area || !service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);
  const nearbyAreas = area.nearby
    .map((n) => getArea(n))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  // Copy written for this specific town and service. Without it these 154 pages
  // shared 55-57% of their phrasing with each other and Google was declining to
  // index most of them.
  const angle = getAngle(area.slug, service.slug);

  const aliasLabels = service.aliases.map((a) => a.label);

  // The alias wording used to appear twice on the page, once as a paragraph and
  // again as an FAQ, identically across all 22 towns for a given service. It is
  // now stated once, compactly, in the paragraph below.
  // The service-specific local question leads, since it is the one unique to
  // this page rather than repeated across every service page for the town.
  const pageFaqs = [...(angle ? [angle.faq] : []), ...area.localFaqs];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Areas We Cover', href: '/areas' },
    { label: area.name, href: `/areas/${area.slug}` },
    { label: service.title, href: `/areas/${area.slug}/${service.keywordSlug}` },
  ];

  const schemas = [
    breadcrumbSchema(breadcrumbs),
    areaServiceSchema({
      serviceName: service.title,
      description: service.blurb,
      areaName: area.name,
      url: `/areas/${area.slug}/${service.keywordSlug}`,
    }),
    faqSchema(pageFaqs),
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

      <PageHero title={`${service.title} in ${area.name}`} intro={service.blurb} />

      <section className="py-16 lg:py-20">
        <div className="container-kj grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-3">{area.name}, {area.region}</p>
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl">
              {service.title} Built Around {area.name} Businesses
            </h2>
            {angle ? (
              <p className="mt-5 border-l-[3px] border-brand pl-5 text-[17px] leading-[1.8] text-ink-soft">
                {angle.angle}
              </p>
            ) : null}
            <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">{area.summary}</p>
            {aliasLabels.length ? (
              <p className="mt-5 text-[15px] leading-[1.7] text-ink-muted">
                Also searched as{' '}
                {aliasLabels.map((label, i) => (
                  <span key={label}>
                    {i > 0 ? (i === aliasLabels.length - 1 ? ' or ' : ', ') : ''}
                    <strong className="font-semibold text-ink">{label}</strong>
                  </span>
                ))}
                .{' '}
                <Link href={`/services#${service.slug}`} className="text-brand hover:underline">
                  How our {service.title.toLowerCase()} service works
                </Link>
                .
              </p>
            ) : null}
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {service.points.map((point) => (
                <li
                  key={point.label}
                  className="flex gap-4 border-l-[3px] border-brand bg-white p-5 shadow-card"
                >
                  <Check size={20} strokeWidth={3} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <p className="font-display font-bold text-ink">{point.label}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">{point.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
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
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 bg-white p-6 shadow-card sm:p-8">
              {pageFaqs.map((faq) => (
                <div key={faq.question} className="border-l-[3px] border-brand pl-5">
                  <p className="font-display font-bold text-ink">{faq.question}</p>
                  <p className="mt-2 text-[15px] leading-[1.8] text-ink-soft">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-kj grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-title text-left text-ink">
              Other Ways We Help {area.name} Businesses
            </h2>
            <ul className="mt-7 space-y-3">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/areas/${area.slug}/${s.keywordSlug}`}
                    className="inline-flex items-center gap-2 text-[15px] font-medium text-ink-soft hover:text-brand"
                  >
                    {s.title} in {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {nearbyAreas.length ? (
            <div>
              <h2 className="section-title text-left text-ink">
                {service.title} Near {area.name}
              </h2>
              <ul className="mt-7 space-y-3">
                {nearbyAreas.map((nearbyArea) => (
                  <li key={nearbyArea.slug}>
                    <Link
                      href={`/areas/${nearbyArea.slug}/${service.keywordSlug}`}
                      className="inline-flex items-center gap-2 text-[15px] font-medium text-ink-soft hover:text-brand"
                    >
                      <MapPin size={14} aria-hidden="true" />
                      {service.title} in {nearbyArea.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <CtaBand />
      <LetsGetInTouch />
    </>
  );
}
