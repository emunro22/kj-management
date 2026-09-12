import type { Metadata } from 'next';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: { index: false, follow: true },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl text-ink">{title}</h2>
      <div className="mt-3 space-y-4 text-[15px] leading-[1.8] text-ink-soft">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <article className="container-kj max-w-3xl py-20">
      <h1 className="text-4xl text-ink">Privacy Policy</h1>
      <p className="mt-4 text-sm text-ink-muted">Last updated 12 September 2026</p>

      <Section title="Who we are">
        <p>
          {site.name} provides management accounting services to small businesses. For anything to do with your data,
          contact{' '}
          <a className="text-brand underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </Section>

      <Section title="What we collect">
        <p>
          <strong className="text-ink">Enquiries.</strong> If you use the contact form, email or call, we keep your name,
          contact details and whatever you tell us about your business, so we can reply and quote for the work.
        </p>
        <p>
          <strong className="text-ink">Client records.</strong> If you become a client, we hold the financial and business
          information needed to carry out the accounting work you have engaged us for.
        </p>
        <p>
          <strong className="text-ink">Site usage.</strong> Covered under Cookies and analytics below.
        </p>
      </Section>

      <Section title="Cookies and analytics">
        <p>
          We always run cookieless traffic analytics (Vercel Analytics) to see which pages are visited and how the site
          performs. It sets no cookies and does not identify you.
        </p>
        <p>
          If you accept via our cookie banner, we additionally load Google Analytics for more detail on how the site is
          used. It sets cookies (such as <code>_ga</code>) and only loads after you accept, never before. Decline and it
          is never loaded.
        </p>
      </Section>

      <Section title="Lawful basis">
        <p>
          We handle enquiry details on the basis of our legitimate interest in responding to you, and client records on
          the basis of performing our contract with you and meeting our legal obligations. Analytics cookies are used
          only with your consent.
        </p>
      </Section>

      <Section title="How long we keep it">
        <p>
          Enquiries that do not become work are deleted within about a year. Client records are kept for the duration of
          our engagement and then for six years, as HMRC requires for financial records.
        </p>
      </Section>

      <Section title="Your rights">
        <p>
          Under UK GDPR you can request a copy of the data we hold about you, ask us to correct it, or ask us to delete
          it where we are not legally required to keep it. Email{' '}
          <a className="text-brand underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{' '}
          and we will respond within 30 days. You can also complain to the Information Commissioner&apos;s Office at
          ico.org.uk.
        </p>
      </Section>
    </article>
  );
}
