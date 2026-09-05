import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import PinkPageHero from '@/components/PinkPageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { site } from '@/data/site';
import { womenInBusinessQueries, categoryLabels, type WomenInBusinessCategory } from '@/data/womenInBusiness';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'For Women in Business',
  description:
    'Financial guidance, services and answers built for women running their own businesses, from Elaine Bryson, co-founder of KJ Management Accounting Solutions.',
  alternates: { canonical: '/women-in-business' },
};

const schema = breadcrumbSchema([
  { label: 'Home', href: '/' },
  { label: 'For Women in Business', href: '/women-in-business' },
]);

const categories = Object.keys(categoryLabels) as WomenInBusinessCategory[];

export default function WomenInBusinessIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Breadcrumbs
        items={[{ label: 'Home', href: '/' }, { label: 'For Women in Business', href: '/women-in-business' }]}
      />

      <PinkPageHero
        title="For Women in Business"
        intro="Elaine Bryson works exclusively with women running their own businesses: here's guidance, services and straight answers to the questions that come up most."
      />

      {categories.map((category) => (
        <section key={category} className="border-b border-neutral-100 py-16 last:border-b-0 lg:py-20">
          <div className="container-kj">
            <Reveal>
              <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-pink-600">
                {categoryLabels[category]}
              </p>
            </Reveal>

            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {womenInBusinessQueries
                .filter((entry) => entry.category === category)
                .map((entry, i) => (
                  <Reveal key={entry.slug} delay={(i % 3) * 0.06}>
                    <li className="h-full border-b-[3px] border-pink-500 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover">
                      <Link href={`/women-in-business/${entry.slug}`} className="group flex h-full flex-col">
                        <h2 className="text-lg text-ink group-hover:text-pink-600">{entry.title}</h2>
                        <p className="mt-2 flex-1 text-[15px] leading-[1.7] text-ink-muted">{entry.dek}</p>
                        <span className="mt-4 inline-flex items-center gap-2 font-medium text-pink-600">
                          Read more
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

      <section className="bg-pink-50 py-16 lg:py-20">
        <div className="container-kj">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-pink-600">
              Don&rsquo;t see your situation here?
            </p>
            <h2 className="section-title text-ink">Book a Free Call With Elaine</h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-ink-soft">
              Every business is different. If your question isn&rsquo;t answered above, the fastest
              way to get a straight answer is a free 30-minute call.
            </p>
            <div className="mt-9">
              <a
                href={site.calendlyElaine}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-pink-500 text-white hover:bg-pink-600 hover:shadow-[0_10px_28px_rgba(236,72,153,0.35)]"
              >
                <CalendarCheck size={20} aria-hidden="true" />
                Book a Free Call with Elaine
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <LetsGetInTouch pink />
    </>
  );
}
