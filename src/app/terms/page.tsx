import type { Metadata } from 'next';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <article className="container-kj max-w-3xl py-20">
      <h1 className="text-4xl text-ink">Terms & Conditions</h1>
      <p className="mt-6 text-[15px] leading-[1.8] text-ink-soft">
        Replace this placeholder with the terms of engagement you want published for the site,
        covering the scope of services, fees and payment terms, cancellation, liability, and the
        law that governs the agreement.
      </p>
      <p className="mt-4 text-[15px] leading-[1.8] text-ink-soft">
        Questions about these terms: <a className="text-brand underline" href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </article>
  );
}
