import Image from 'next/image';
import Reveal from './Reveal';
import ReviewRail from './ReviewRail';
import SectionHeading from './SectionHeading';
import StarRating from './StarRating';
import { site } from '@/data/site';
import { upworkReviews } from '@/data/reviews';
import { getGoogleReviews } from '@/lib/google-reviews';

export default async function Testimonials() {
  const feed = await getGoogleReviews();

  return (
    <section id="testimonials" className="bg-surface-grey py-20 lg:py-24">
      <div className="container-kj">
        <SectionHeading eyebrow="Testimonials" title="Our Clients Reviews" />

        {/* Google */}
        <Reveal className="mt-12 grid items-center gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
          <div className="flex flex-col items-center gap-3 bg-white p-7 text-center shadow-card lg:bg-transparent lg:shadow-none">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
            <p className="font-display text-lg font-bold leading-snug text-ink">
              {site.name}
            </p>
            <StarRating rating={feed.rating} size={22} />
            <p className="text-[15px] text-ink-muted">{feed.reviewCount} Google reviews</p>
            <a
              href={site.googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 border border-neutral-300 bg-white px-6 py-2.5 text-[18px] text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Write a review
            </a>
          </div>

          <ReviewRail reviews={feed.reviews} variant="google" />
        </Reveal>

        {/* Upwork */}
        <Reveal delay={0.1} className="mt-16 grid items-center gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <Image
              src="/images/logo-upwork.png"
              alt="Upwork"
              width={160}
              height={48}
              className="h-11 w-auto object-contain"
            />
            <StarRating rating={5} size={18} />
            <a
              href={site.upworkProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 bg-[#14A800] px-6 py-2.5 text-[18px] text-white transition-opacity hover:opacity-90"
            >
              Check reviews
            </a>
          </div>

          <ReviewRail reviews={upworkReviews} variant="upwork" />
        </Reveal>
      </div>
    </section>
  );
}
