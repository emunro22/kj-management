'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BadgeCheck, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { Review } from '@/data/reviews';
import StarRating from './StarRating';

/** Auto-advance interval while the rail is idle (ms). */
const AUTOPLAY_DELAY = 4000;
/** How long a manual interaction pauses autoplay before it resumes (ms). */
const RESUME_DELAY = 8000;

export default function ReviewRail({
  reviews,
  variant,
}: {
  reviews: Review[];
  variant: 'google' | 'upwork';
}) {
  const railRef = useRef<HTMLUListElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [paused, setPaused] = useState(false);

  const cardStep = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return 320;
    const card = rail.querySelector('li');
    return card ? card.clientWidth + 24 : 320;
  }, []);

  const scrollBy = useCallback(
    (direction: 1 | -1) => {
      const rail = railRef.current;
      if (!rail) return;

      const atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
      const atStart = rail.scrollLeft <= 4;

      if (direction === 1 && atEnd) {
        rail.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (direction === -1 && atStart) {
        rail.scrollTo({ left: rail.scrollWidth, behavior: 'smooth' });
      } else {
        rail.scrollBy({ left: cardStep() * direction, behavior: 'smooth' });
      }
    },
    [cardStep],
  );

  const pauseThenResume = useCallback(() => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY);
  }, []);

  const handleManualScroll = (direction: 1 | -1) => {
    scrollBy(direction);
    pauseThenResume();
  };

  // Slide to the next review automatically, pausing on hover/touch/manual nav.
  useEffect(() => {
    if (paused || reviews.length < 2) return;
    const id = setInterval(() => scrollBy(1), AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [paused, reviews.length, scrollBy]);

  useEffect(() => () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  return (
    <div
      className="relative min-w-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={pauseThenResume}
    >
      <RailButton side="left" onClick={() => handleManualScroll(-1)} />
      <RailButton side="right" onClick={() => handleManualScroll(1)} />

      <ul
        ref={railRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-2"
      >
        {reviews.map((review) =>
          variant === 'google' ? (
            <li key={review.id} className="w-[290px] shrink-0 snap-start sm:w-[320px]">
              <div className="relative bg-white p-6 pb-8 shadow-card">
                <div className="flex items-center justify-between">
                  <Quote size={20} className="rotate-180 text-neutral-300" aria-hidden="true" />
                  <div className="flex items-center gap-1.5">
                    <StarRating rating={review.rating} size={14} />
                    <BadgeCheck size={15} className="text-[#4285F4]" aria-hidden="true" />
                  </div>
                </div>

                <ReviewText text={review.text} italic />

                <GoogleGlyph className="absolute bottom-3 right-3" />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-9 h-4 w-4 rotate-45 bg-white shadow-[2px_2px_2px_rgba(0,0,0,0.03)]"
                />
              </div>

              <div className="mt-5 flex items-center gap-3 pl-2">
                {review.avatarUrl ? (
                  <Image
                    src={review.avatarUrl}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white">
                    {review.initial}
                  </span>
                )}
                <div>
                  <p className="font-display text-[15px] font-bold text-ink">{review.author}</p>
                  <p className="text-[13px] text-ink-muted">{review.relativeTime}</p>
                </div>
              </div>
            </li>
          ) : (
            <li
              key={review.id}
              className="w-[290px] shrink-0 snap-start bg-white p-6 shadow-card sm:w-[320px]"
            >
              <p className="font-display text-[15px] font-bold leading-snug text-ink">
                {review.jobTitle}
              </p>

              <div className="mt-3 flex items-center gap-2">
                <StarRating rating={review.rating} />
                <span className="text-sm text-ink-muted">{review.rating.toFixed(1)}</span>
              </div>

              <ReviewText text={review.text} />
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

/** Clamps to four lines with a Read more toggle, like the WP widget did. */
function ReviewText({ text, italic = false }: { text: string; italic?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 150;

  return (
    <div className="mt-3">
      <p
        className={`text-[15px] leading-[1.7] text-ink-soft ${italic ? 'italic' : ''} ${
          !expanded && isLong ? 'line-clamp-4' : ''
        }`}
      >
        {text}
      </p>
      {isLong ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-sm text-ink-muted underline-offset-2 hover:underline"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      ) : null}
    </div>
  );
}

function RailButton({ side, onClick }: { side: 'left' | 'right'; onClick: () => void }) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === 'left' ? 'Previous reviews' : 'Next reviews'}
      className={`absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-muted shadow-card transition-colors hover:text-brand sm:inline-flex ${
        side === 'left' ? '-left-4' : '-right-4'
      }`}
    >
      <Icon size={22} />
    </button>
  );
}

function GoogleGlyph({ className = '' }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.6 2.6 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6c1.9-5.6 7.1-9.7 13.6-9.7Z" />
      <path fill="#4285F4" d="M46.1 24.6c0-1.6-.1-3.2-.4-4.6H24v9.1h12.4c-.5 2.9-2.1 5.4-4.6 7l7.6 5.9c4.4-4.1 6.7-10.1 6.7-17.4Z" />
      <path fill="#FBBC05" d="M10.4 28.8a14.5 14.5 0 0 1 0-9.6l-7.8-6a24 24 0 0 0 0 21.6l7.8-6Z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.8-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.2 2.3-6.5 0-11.7-4.1-13.6-9.8l-7.8 6C6.5 42.6 14.6 48 24 48Z" />
    </svg>
  );
}
