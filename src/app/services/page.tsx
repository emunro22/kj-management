import type { Metadata } from 'next';
import Image from 'next/image';
import { Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Process from '@/components/Process';
import CtaBand from '@/components/CtaBand';
import Faq from '@/components/Faq';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Management accounting, annual accounts, cash flow planning, budgeting and forecasting, financial modelling, bookkeeping and virtual financial controller services.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" bgSrc="/images/page-hero-services.jpg" />

      {services.map((service, index) => {
        const alternate = index % 2 === 1;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-28 py-16 lg:py-20 ${alternate ? 'bg-surface-grey' : 'bg-white'}`}
          >
            <div className="container-kj grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <Reveal>
                <Image
                  src={service.iconSrc}
                  alt={`${service.title} icon`}
                  width={56}
                  height={56}
                  className="h-14 w-14"
                />
                <h2 className="mt-5 text-3xl leading-tight text-ink sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">{service.intro}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="space-y-4">
                  {service.points.map((point) => (
                    <li
                      key={point.label}
                      className="flex gap-4 border-l-[3px] border-brand bg-white p-5 shadow-card"
                    >
                      <Check
                        size={20}
                        strokeWidth={3}
                        className="mt-0.5 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-display font-bold text-ink">{point.label}</p>
                        <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">
                          {point.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="bg-surface-grey pt-20">
        <div className="container-kj">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-3">Why Choose Us</p>
            <h2 className="section-title text-ink">
              Beyond Compliance – Real Financial Value for Your Business
            </h2>
            <p className="mt-7 text-[17px] leading-[1.8] text-ink-soft">
              For many small businesses, accounting is seen as nothing more than a compliance
              requirement: just ticking boxes for HMRC and Companies House. But at KJ Management
              Accounting Solutions, we believe your finances should do more than just keep you
              compliant; they should work for you, helping you make smarter decisions and grow with
              confidence.
            </p>
          </Reveal>
        </div>
      </section>

      <Process />
      <CtaBand />
      <Faq />
      <LetsGetInTouch />
    </>
  );
}
