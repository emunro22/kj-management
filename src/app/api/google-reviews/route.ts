import { NextResponse } from 'next/server';
import { getGoogleReviews } from '@/lib/google-reviews';

/**
 * Optional JSON endpoint for the review feed, handy for debugging your
 * Featurable / Places setup without rebuilding the page.
 */
export const revalidate = 86_400;

export async function GET() {
  const feed = await getGoogleReviews();
  return NextResponse.json(feed);
}
