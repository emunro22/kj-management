import Image from 'next/image';
import Link from 'next/link';
import { CalendarCheck } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { team } from '@/data/team';

const blurbs: Record<string, string> = {
  'Kieran Johnston':
    'Cash flow planning, forecasting, and virtual financial controller support for small business owners who want a proactive finance partner.',
  'Elaine Bryson':
    'Works closely with women running their own businesses, bringing financial clarity and confidence to founders building something of their own.',
};

export default function BookTeam() {
  return (
    <section id="book" className="scroll-mt-[120px] bg-white py-20 lg:py-24">
      <div className="container-kj">
        <SectionHeading
          eyebrow="Free Consultation"
          title="Book a Free Call with Kieran or Elaine"
        />

        <p className="mx-auto mt-6 max-w-2xl text-center text-[17px] leading-[1.8] text-ink-soft">
          Pick whoever&rsquo;s the right fit for your business and grab a slot directly in their
          calendar, no forms, no waiting.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {team.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col border-b-[3px] bg-surface-grey p-8 shadow-card transition-shadow duration-300 hover:shadow-cardHover ${person.theme.card}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={person.photo}
                    alt={person.name}
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

                <h3 className="mt-3 text-2xl text-ink">{person.name}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-[1.8] text-ink-muted">
                  {blurbs[person.name]}
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
                    About {person.firstName}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
