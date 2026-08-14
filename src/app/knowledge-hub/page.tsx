import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { posts } from '@/data/posts';

export const metadata: Metadata = {
  title: 'Knowledge Hub',
  description:
    'Straightforward, easy-to-understand financial insights for small business owners — management accounts, forecasting, bookkeeping and more.',
  alternates: { canonical: '/knowledge-hub' },
};

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export default function KnowledgeHubPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        title="Knowledge Hub"
        intro="Your hub for straightforward, easy-to-understand financial insights — helping you make sense of business finance with clarity and confidence."
      />

      <section className="bg-surface-grey py-20 lg:py-24">
        <div className="container-kj">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.08}>
                <li className="flex h-full flex-col border-b-[3px] border-brand bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardHover">
                  <time
                    dateTime={post.date}
                    className="font-display text-sm font-bold uppercase tracking-[0.06em] text-brand"
                  >
                    {dateFormat.format(new Date(post.date))}
                  </time>

                  <h2 className="mt-3 text-xl leading-snug text-ink">
                    <Link href={`/knowledge-hub/${post.slug}`} className="hover:text-brand">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 flex-1 text-[15px] leading-[1.75] text-ink-muted">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/knowledge-hub/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-medium text-brand hover:gap-3"
                  >
                    Read more
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <LetsGetInTouch />
    </>
  );
}
