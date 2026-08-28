import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Vercel Cron hits this monthly (see vercel.json) to force the Google/Upwork
 * review data to refresh even on low-traffic periods where ISR's own
 * revalidate window would otherwise wait for a real visitor to trigger it.
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  revalidatePath('/');
  revalidatePath('/testimonials');
  revalidatePath('/api/google-reviews');

  return NextResponse.json({ ok: true, revalidatedAt: new Date().toISOString() });
}
