import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { getPost, posts } from '@/data/posts';
import { site } from '@/data/site';
import { articleSchema } from '@/lib/schema';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/knowledge-hub/${post.slug}` },
    openGraph: { type: 'article', publishedTime: post.date, title: post.title },
  };
}

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const schema = articleSchema({
    title: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `/knowledge-hub/${post.slug}`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className="container-kj max-w-3xl py-16 lg:py-20">
        <Link
          href="/knowledge-hub"
          className="inline-flex items-center gap-2 text-[15px] text-ink-muted hover:text-brand"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Knowledge Hub
        </Link>

        <time
          dateTime={post.date}
          className="mt-8 block font-display text-sm font-bold uppercase tracking-[0.06em] text-brand"
        >
          {dateFormat.format(new Date(post.date))}
        </time>

        <h1 className="mt-3 text-3xl leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]">
          {post.title}
        </h1>

        <p className="mt-6 text-lg leading-[1.8] text-ink-soft">{post.excerpt}</p>

        <span aria-hidden="true" className="mt-8 block h-1 w-14 bg-brand" />

        {post.body ? (
          <div
            className="prose-kj mt-8 space-y-5 text-[17px] leading-[1.85] text-ink-soft [&_a]:text-brand [&_a]:underline [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-ink [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-ink"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        ) : (
          <div className="mt-8 border-l-[3px] border-brand bg-surface-grey p-6">
            <p className="font-display font-bold text-ink">Article body not migrated yet</p>
            <p className="mt-2 text-[15px] leading-[1.8] text-ink-muted">
              Export this post from WordPress (Tools → Export → Posts) and paste its HTML into the{' '}
              <code className="bg-white px-1.5 py-0.5 text-[13px]">body</code> field for this slug in{' '}
              <code className="bg-white px-1.5 py-0.5 text-[13px]">src/data/posts.ts</code>. The
              layout, metadata and routing are already in place.
            </p>
          </div>
        )}

        <div className="mt-12 border-t border-neutral-200 pt-8">
          <p className="text-[15px] leading-relaxed text-ink-muted">
            Want to talk through what this means for your business?{' '}
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
        </div>
      </article>

      <LetsGetInTouch />
    </>
  );
}
