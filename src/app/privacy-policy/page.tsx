import type { Metadata } from 'next';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="container-kj max-w-3xl py-20">
      <h1 className="text-4xl text-ink">Privacy Policy</h1>
      <p className="mt-6 text-[15px] leading-[1.8] text-ink-soft">
        Replace this placeholder with the privacy policy you are currently publishing on the
        WordPress site. It should cover what data the contact form collects, how long you keep
        enquiries, your lawful basis under UK GDPR, and how someone requests deletion.
      </p>
      <p className="mt-4 text-[15px] leading-[1.8] text-ink-soft">
        Data protection queries: <a className="text-brand underline" href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </article>
  );
}
