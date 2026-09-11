import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import BookCta from '@/components/BookCta';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Founded by Kieran Johnston and Elaine Bryson, KJ Management Accounting Solutions gives small businesses a full finance function, not just compliance.',
  alternates: { canonical: '/about' },
};

const principles = [
  {
    title: 'Partnership & Growth',
    body: 'We don’t just handle your accounts; we partner with you, providing insights and strategic advice that help your business scale sustainably.',
  },
  {
    title: 'Clarity & Education',
    body: 'We believe in simplifying finance, not just doing the numbers, but helping you understand them so you can make better business decisions with confidence.',
  },
  {
    title: 'Quality Over Quantity',
    body: 'We focus on long-term client relationships, working with a select number of businesses so we can provide dedicated, high-quality support rather than a one-size-fits-all service.',
  },
  {
    title: 'Proactive Financial Management',
    body: 'Instead of just recording history, we help you plan ahead, spotting financial opportunities and risks before they arise.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About" bgSrc="/images/page-hero-about-testimonials.jpg" />

      <section className="bg-white py-20 lg:py-24">
        <div className="container-kj">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-3">About {site.name}</p>
            <h2 className="section-title text-ink">
              Personalised Financial Support for Small Businesses
            </h2>
            <p className="mt-7 text-[17px] leading-[1.8] text-ink-soft">
              At {site.name}, we specialise in providing small businesses with a full finance
              function, from bookkeeping and cash flow planning to strategic financial management.
              Our goal is to simplify your finances, provide clear insights, and help you make
              informed decisions so you can focus on running and growing your business.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">
              We believe accounting is more than just compliance: it&rsquo;s about understanding your
              numbers, using them strategically, and ensuring financial stability for long-term
              success.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-grey py-20 lg:py-24">
        <div className="container-kj grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden shadow-card">
              <Image
                src="/images/about-founders.png"
                alt={`${site.founders}, founders of ${site.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow mb-3">The Idea</p>
            <p className="text-[17px] leading-[1.8] text-ink-soft">
              We understand the challenges entrepreneurs face and provide tailored accounting
              solutions that drive growth and stability.
            </p>
            <h2 className="section-title mt-3 text-ink">Our Story</h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-ink-soft">
              Founded by <strong className="font-semibold">{site.founders}</strong>, both Chartered
              Accountants (ACCA &amp; ICAS) with extensive experience in financial management,{' '}
              {site.name} was created to bridge the gap between traditional accounting and strategic
              financial support for small businesses.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">
              Kieran and Elaine recognised that many small business owners struggle with cash flow,
              financial planning, and compliance, often viewing accounting as a box-ticking exercise
              rather than a tool for business growth. Their shared vision was to change that by
              offering a proactive, insightful, and hands-on approach that truly adds value.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">
              At {site.name}, we don&rsquo;t just process numbers; we partner with you, helping you
              understand your finances, plan ahead, and grow your business sustainably.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about/kieran" className="btn-brand">
                Meet Kieran
              </Link>
              <Link
                href="/about/elaine"
                className="btn bg-pink-500 text-white hover:bg-pink-600 hover:shadow-[0_10px_28px_rgba(236,72,153,0.35)]"
              >
                Meet Elaine
              </Link>
              <Link
                href="/about/team"
                className="font-body text-sm font-medium uppercase tracking-[0.04em] text-ink underline underline-offset-4 hover:text-brand"
              >
                Meet the Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container-kj">
          <SectionHeading eyebrow="Our Guiding Priciples" title="Fast, Convenient, and Accurate" />

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={(i % 2) * 0.1}>
                <li className="h-full border-b-[3px] border-brand bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-cardHover">
                  <h3 className="text-xl text-ink">{principle.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.8] text-ink-muted">{principle.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-surface-grey py-20 lg:py-24">
        <Image
          src="/images/cta-band.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-40"
        />
        <div className="container-kj grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="section-title text-ink">
              Expert Financial Support, Tailored for Small Businesses
            </h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-ink-soft">
              At {site.name}, we know that small businesses need more than just
              compliance-based accounting, they need financial clarity, strategic insights, and a
              trusted partner who understands their goals.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">
              Whether you&rsquo;re a startup looking for guidance or an established small business
              ready to optimise financial operations, we provide tailored support designed to help
              you manage, plan, and grow with confidence.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">
              From cash flow forecasting and budgeting to business planning and financial strategy,
              we ensure that you&rsquo;re not just managing numbers but using them to drive success.
            </p>
            <div className="mt-8">
              <BookCta label="Get the Financial Support You Deserve" align="left" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full border-b-[3px] border-brand bg-white p-8 shadow-card">
              <h3 className="text-xl text-ink">Personalised Consultations</h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-ink-muted">
                Need guidance on cash flow, budgeting, or strategic planning? Our team is here to
                simplify the numbers and provide clear, actionable financial advice that helps your
                business thrive.
              </p>
              <Link href="/contact" className="btn-brand mt-6">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <LetsGetInTouch />
    </>
  );
}
