import type { Metadata } from 'next';
import Image from 'next/image';
import { CalendarCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Kieran',
  description:
    'Meet Kieran Johnston, founder of KJ Management Accounting Solutions — a Chartered Accountant helping small business owners with cash flow, forecasting and virtual financial controller support.',
  alternates: { canonical: '/about/kieran' },
};

const focusAreas = [
  {
    title: 'Cash Flow & Forecasting',
    body: 'Building forward-looking cash flow models so you always know what’s coming, not just what’s already happened.',
  },
  {
    title: 'Virtual Financial Controller',
    body: 'Acting as an embedded finance lead for growing businesses that aren’t ready for a full-time hire.',
  },
  {
    title: 'Strategic Financial Planning',
    body: 'Turning your numbers into a plan — budgeting, scenario planning, and decisions backed by data.',
  },
  {
    title: 'Compliance Done Properly',
    body: 'Accounts and bookkeeping handled accurately in the background, so nothing slips and nothing surprises you.',
  },
];

export default function AboutKieranPage() {
  return (
    <>
      <PageHero title="Meet Kieran" bgSrc="/images/page-hero-about-testimonials.jpg" />

      <section className="bg-white py-20 lg:py-24">
        <div className="container-kj grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden shadow-card">
              <Image
                src="/images/about-founders.png"
                alt="Kieran Johnston, founder of KJ Management Accounting Solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow mb-3">About Kieran</p>
            <h2 className="section-title text-ink">Kieran Johnston</h2>
            <p className="mt-2 font-display text-sm font-bold uppercase tracking-[0.06em] text-ink-muted">
              Founder &amp; Chartered Accountant
            </p>
            <p className="mt-6 text-[17px] leading-[1.8] text-ink-soft">
              Kieran founded {site.name} to give small business owners the kind of finance
              function usually reserved for much bigger companies — proactive, strategic, and
              built around where the business is heading, not just where it&rsquo;s been.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">
              After years working across financial management and reporting, Kieran saw the same
              gap again and again: business owners who were great at what they do, but were
              flying blind on cash flow and left to make big decisions without clear numbers
              behind them.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">
              Today he works hands-on with a select group of clients as a virtual financial
              controller — forecasting, planning, and making sure the numbers are working for the
              business, not just sitting in a spreadsheet.
            </p>

            <a
              href={site.calendlyKieran}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand mt-8"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              Book a Free Call with Kieran
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-grey py-20 lg:py-24">
        <div className="container-kj">
          <SectionHeading eyebrow="What Kieran Focuses On" title="Where Kieran Adds the Most Value" />

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={(i % 2) * 0.1}>
                <li className="h-full border-b-[3px] border-brand bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-cardHover">
                  <h3 className="text-xl text-ink">{area.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.8] text-ink-muted">{area.body}</p>
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
