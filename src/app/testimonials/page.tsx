import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ReviewRail from '@/components/ReviewRail';
import StarRating from '@/components/StarRating';
import Faq from '@/components/Faq';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { site } from '@/data/site';
import { upworkReviews } from '@/data/reviews';
import { getGoogleReviews } from '@/lib/google-reviews';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read what small business owners say about working with KJ Management Accounting Solutions on Google and Upwork.',
  alternates: { canonical: '/testimonials' },
};

export default async function TestimonialsPage() {
  const feed = await getGoogleReviews();

  return (
    <>
      <PageHero
        title="Testimonials"
        intro="We are here to give small businesses the financial clarity and confidence they need to grow. But you do not have to take our word for it: here is what clients say about working with us."
        bgSrc="/images/page-hero-about-testimonials.jpg"
      />

      <section className="bg-surface-grey py-20 lg:py-24">
        <div className="container-kj">
          <SectionHeading eyebrow="Testimonial" title="Our Clients Reviews" />

          <Reveal className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <StarRating rating={feed.rating} size={24} />
              <span className="font-display text-lg font-bold text-ink">
                {feed.rating.toFixed(1)}
              </span>
            </div>
            <p className="text-[15px] text-ink-muted">
              Based on {feed.reviewCount} Google reviews
            </p>
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-neutral-300 bg-white px-6 py-2.5 text-[18px] text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Check out our Google reviews
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </Reveal>

          <div className="mt-12">
            <ReviewRail reviews={feed.reviews} variant="google" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container-kj">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <Image
              src="/images/logo-upwork.png"
              alt="Upwork"
              width={200}
              height={60}
              className="h-12 w-auto object-contain"
            />
            <StarRating rating={5} size={20} />
            <a
              href={site.upworkProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#14A800] px-6 py-2.5 text-[18px] text-white transition-opacity hover:opacity-90"
            >
              Check out Upwork reviews
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </Reveal>

          <div className="mt-12">
            <ReviewRail reviews={upworkReviews} variant="upwork" />
          </div>
        </div>
      </section>

      <Faq />
      <LetsGetInTouch />
    </>
  );
}
