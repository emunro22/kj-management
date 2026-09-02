import type { Metadata } from 'next';
import Image from 'next/image';
import { CalendarCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Elaine',
  description:
    'Meet Elaine Bryson, co-founder of KJ Management Accounting Solutions — a Chartered Accountant who works closely with women running their own businesses.',
  alternates: { canonical: '/about/elaine' },
};

const whoFor = [
  {
    title: 'Solo & Small Team Founders',
    body: 'Women running their own consultancy, agency or service business who want the numbers handled properly, not just at year-end.',
  },
  {
    title: 'Scaling With Confidence',
    body: 'Founders ready to grow but held back by not knowing what they can actually afford, hire, or invest in next.',
  },
  {
    title: 'A Real Finance Partner',
    body: 'Business owners who want someone in their corner to ask questions to — not just an accountant who appears once a year.',
  },
  {
    title: 'Financial Confidence, Not Jargon',
    body: 'Clear, plain-English explanations of your numbers, so you can make decisions without needing a finance degree.',
  },
];

export default function AboutElainePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[320px] items-center overflow-hidden lg:min-h-[400px]">
        <Image
          src="/images/page-hero-about-testimonials.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pink-900/70 via-pink-800/60 to-pink-950/75" />

        <div className="container-kj py-16 text-center text-white">
          <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">Meet Elaine</h1>
          <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-[1.8] text-white/90">
            Financial clarity and confidence for women building their own businesses.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container-kj grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden shadow-card">
              <Image
                src="/images/elaine.jpg"
                alt="Elaine Bryson, co-founder of KJ Management Accounting Solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-pink-600">
              About Elaine
            </p>
            <h2 className="section-title text-ink">Elaine Bryson</h2>
            <p className="mt-2 font-display text-sm font-bold uppercase tracking-[0.06em] text-ink-muted">
              Co-Founder &amp; Chartered Accountant
            </p>
            <p className="mt-6 text-[17px] leading-[1.8] text-ink-soft">
              Elaine works with women who run their own businesses — from solo founders to small
              teams — giving them a finance partner who genuinely gets what it takes to build
              something from the ground up.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">
              As a Chartered Accountant, she brings the technical rigour, but what clients notice
              first is the approach: no jargon, no talking down, just clear answers to the
              questions that actually keep business owners up at night — can I afford this, what
              happens if that client leaves, am I paying myself properly.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">
              Elaine&rsquo;s focus is helping women feel genuinely confident in their numbers, so
              decisions about pricing, hiring, and growth are made with clarity, not guesswork.
            </p>

            <a
              href={site.calendlyElaine}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-8 bg-pink-500 text-white hover:bg-pink-600 hover:shadow-[0_10px_28px_rgba(236,72,153,0.35)]"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              Book a Free Call with Elaine
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-pink-50 py-20 lg:py-24">
        <div className="container-kj">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-pink-600">
              Who Elaine Works With
            </p>
            <h2 className="section-title text-ink">Built for Women Running Their Own Business</h2>
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {whoFor.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.1}>
                <li className="h-full border-b-[3px] border-pink-500 bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-cardHover">
                  <h3 className="text-xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.8] text-ink-muted">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2} className="mt-14 text-center">
            <a
              href={site.calendlyElaine}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-pink-500 text-white hover:bg-pink-600 hover:shadow-[0_10px_28px_rgba(236,72,153,0.35)]"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              Book Your Free Call
            </a>
          </Reveal>
        </div>
      </section>

      <LetsGetInTouch pink />
    </>
  );
}
