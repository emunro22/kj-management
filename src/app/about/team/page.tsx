import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { site } from '@/data/site';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Meet the Team',
  description:
    'Meet Kieran Johnston and Elaine Bryson, the Chartered Accountants behind KJ Management Accounting Solutions.',
  alternates: { canonical: '/about/team' },
};

const team = [
  {
    name: 'Kieran Johnston',
    role: 'Founder & Chartered Accountant',
    bio: 'Kieran founded KJ Management Accounting Solutions to give small business owners the kind of finance function usually reserved for much bigger companies: proactive, strategic, and built around cash flow, forecasting and virtual financial controller support.',
    href: '/about/kieran',
    calendly: site.calendlyKieran,
    cta: 'Book Kieran',
    photo: '/images/about-founders.png',
    theme: {
      border: 'border-brand',
      badge: 'bg-brand-50 text-brand-700',
      btn: 'btn-brand',
    },
  },
  {
    name: 'Elaine Bryson',
    role: 'Co-Founder & Chartered Accountant',
    bio: 'Elaine works closely with women running their own businesses, bringing financial clarity and confidence to founders building something of their own, with no jargon and no talking down.',
    href: '/about/elaine',
    calendly: site.calendlyElaine,
    cta: 'Book Elaine',
    photo: '/images/elaine.jpg',
    theme: {
      border: 'border-pink-500',
      badge: 'bg-pink-50 text-pink-700',
      btn: 'btn bg-pink-500 text-white hover:bg-pink-600 hover:shadow-[0_10px_28px_rgba(236,72,153,0.35)]',
    },
  },
];

export default function TeamPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Meet the Team', href: '/about/team' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <PageHero
        title="Meet the Team"
        intro={`Both Chartered Accountants, ${site.founders} lead every engagement personally: no handing clients off to junior staff.`}
        bgSrc="/images/page-hero-about-testimonials.jpg"
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="container-kj">
          <ul className="grid gap-8 md:grid-cols-2">
            {team.map((person) => (
              <Reveal key={person.name}>
                <li
                  className={`flex h-full flex-col border-b-[3px] bg-surface-grey p-8 shadow-card ${person.theme.border}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={person.photo}
                      alt={`${person.name}, ${person.role.toLowerCase()} at ${site.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <span
                    className={`mt-6 inline-block w-fit rounded-[2px] px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.06em] ${person.theme.badge}`}
                  >
                    {person.role}
                  </span>

                  <h2 className="mt-3 text-2xl text-ink">{person.name}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-[1.8] text-ink-muted">
                    {person.bio}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <a
                      href={person.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={person.theme.btn}
                    >
                      <CalendarCheck size={20} aria-hidden="true" />
                      {person.cta}
                    </a>
                    <Link
                      href={person.href}
                      className="font-body text-sm font-medium uppercase tracking-[0.04em] text-ink underline underline-offset-4 hover:text-brand"
                    >
                      Full bio
                    </Link>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <LetsGetInTouch />
    </>
  );
}
