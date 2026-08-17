import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { areas } from '@/data/areas';
import { site } from '@/data/site';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Areas We Cover',
  description:
    'Finance help, bookkeeping and management accounting for small businesses across Uddingston, South & North Lanarkshire and Greater Glasgow.',
  alternates: { canonical: '/areas' },
};

const schema = breadcrumbSchema([
  { label: 'Home', href: '/' },
  { label: 'Areas We Cover', href: '/areas' },
]);

const regions = Array.from(new Set(areas.map((area) => area.region)));

export default function AreasIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Areas We Cover', href: '/areas' }]} />

      <PageHero
        title="Finance Help Across Uddingston & Greater Glasgow"
        intro="KJ Management Accounting Solutions is based in Uddingston and works with small business owners throughout South Lanarkshire, North Lanarkshire and Greater Glasgow — in person where it helps, and remotely via Xero for everything else."
      />

      {regions.map((region) => (
        <section key={region} className="border-b border-neutral-100 py-16 last:border-b-0 lg:py-20">
          <div className="container-kj">
            <Reveal>
              <p className="eyebrow mb-3">{region}</p>
            </Reveal>

            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {areas
                .filter((area) => area.region === region)
                .map((area, i) => (
                  <Reveal key={area.slug} delay={(i % 3) * 0.06}>
                    <li className="h-full border-b-[3px] border-brand bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover">
                      <Link href={`/areas/${area.slug}`} className="group flex h-full flex-col">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-brand">
                          <MapPin size={15} aria-hidden="true" />
                          {area.postcode}
                        </span>
                        <h2 className="mt-2 text-xl text-ink group-hover:text-brand">
                          Finance Help in {area.name}
                        </h2>
                        <p className="mt-2 flex-1 text-[15px] leading-[1.7] text-ink-muted">
                          {area.tagline}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 font-medium text-brand">
                          View services
                          <ArrowRight size={16} aria-hidden="true" />
                        </span>
                      </Link>
                    </li>
                  </Reveal>
                ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-surface-grey py-16 lg:py-20">
        <div className="container-kj">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-3">Don&rsquo;t see your area?</p>
            <h2 className="section-title text-ink">We Work Across the UK &amp; Internationally</h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-ink-soft">
              Every service on {site.shortName} runs on Xero and video calls, so distance from{' '}
              {areas.find((a) => a.isFlagship)?.name ?? 'Uddingston'} is rarely the deciding factor.
              If your business is outside the areas listed here, get in touch — we still want to hear
              from you.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
      <LetsGetInTouch />
    </>
  );
}
