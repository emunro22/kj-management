import { fallbackGoogleReviews, googleProfile, type Review } from '@/data/reviews';

export type ReviewFeed = {
  reviews: Review[];
  rating: number;
  reviewCount: number;
  source: 'featurable' | 'places' | 'fallback';
};

type FeaturableReview = {
  reviewId: string;
  reviewer: { profilePhotoUrl?: string; displayName: string };
  starRating: number;
  comment?: string;
  createTime: string;
};

function relativeTimeFrom(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return '';
  const months = Math.round((Date.now() - then) / (1000 * 60 * 60 * 24 * 30.44));
  if (months < 1) return 'recently';
  if (months === 1) return 'a month ago';
  if (months < 12) return `${months} months ago`;
  const years = Math.floor(months / 12);
  return years === 1 ? 'a year ago' : `${years} years ago`;
}

/**
 * Option A — Featurable.
 * Free, no Google Cloud billing, and returns the full review history rather
 * than the 5 most helpful. Create a widget at featurable.com, then set
 * NEXT_PUBLIC_FEATURABLE_WIDGET_ID.
 */
async function fromFeaturable(widgetId: string): Promise<ReviewFeed | null> {
  const res = await fetch(`https://featurable.com/api/v1/widgets/${widgetId}`, {
    next: { revalidate: 86_400 },
  });
  if (!res.ok) return null;

  const data = (await res.json()) as {
    reviews?: FeaturableReview[];
    averageRating?: number;
    totalReviewCount?: number;
  };
  if (!data.reviews?.length) return null;

  return {
    source: 'featurable',
    rating: data.averageRating ?? googleProfile.rating,
    reviewCount: data.totalReviewCount ?? data.reviews.length,
    reviews: data.reviews.map((r) => ({
      id: r.reviewId,
      author: r.reviewer.displayName,
      avatarUrl: r.reviewer.profilePhotoUrl,
      initial: r.reviewer.displayName.charAt(0).toUpperCase(),
      relativeTime: relativeTimeFrom(r.createTime),
      rating: r.starRating,
      text: r.comment ?? '',
      source: 'google' as const,
    })),
  };
}

/**
 * Option B — Google Places API (New).
 * Returns a MAXIMUM of 5 reviews. Requires a billing-enabled key restricted to
 * your server. Google's terms require reviews to be shown with attribution and
 * not cached indefinitely, so this is revalidated daily.
 */
async function fromPlaces(apiKey: string, placeId: string): Promise<ReviewFeed | null> {
  const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
    },
    next: { revalidate: 86_400 },
  });
  if (!res.ok) return null;

  const data = (await res.json()) as {
    rating?: number;
    userRatingCount?: number;
    reviews?: Array<{
      name: string;
      rating: number;
      text?: { text: string };
      relativePublishTimeDescription?: string;
      authorAttribution?: { displayName: string; photoUri?: string };
    }>;
  };
  if (!data.reviews?.length) return null;

  return {
    source: 'places',
    rating: data.rating ?? googleProfile.rating,
    reviewCount: data.userRatingCount ?? googleProfile.reviewCount,
    reviews: data.reviews.map((r, i) => {
      const name = r.authorAttribution?.displayName ?? 'Google user';
      return {
        id: r.name ?? `place-${i}`,
        author: name,
        avatarUrl: r.authorAttribution?.photoUri,
        initial: name.charAt(0).toUpperCase(),
        relativeTime: r.relativePublishTimeDescription ?? '',
        rating: r.rating,
        text: r.text?.text ?? '',
        source: 'google' as const,
      };
    }),
  };
}

export async function getGoogleReviews(): Promise<ReviewFeed> {
  const widgetId = process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  try {
    if (widgetId) {
      const feed = await fromFeaturable(widgetId);
      if (feed) return feed;
    }
    if (apiKey && placeId) {
      const feed = await fromPlaces(apiKey, placeId);
      if (feed) return feed;
    }
  } catch (error) {
    console.error('[google-reviews] fetch failed:', error);
  }

  return {
    source: 'fallback',
    reviews: fallbackGoogleReviews,
    rating: googleProfile.rating,
    reviewCount: googleProfile.reviewCount,
  };
}
