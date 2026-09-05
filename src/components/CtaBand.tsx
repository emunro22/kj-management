import { CalendarCheck, Phone } from 'lucide-react';
import Reveal from './Reveal';
import { site } from '@/data/site';

export default function CtaBand() {
  return (
    <section className="bg-surface-grey py-20 lg:py-24">
      <div className="container-kj">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="section-title text-ink">Need Expert Financial Support?</h2>

          <p className="mt-7 text-[17px] leading-[1.8] text-ink-soft">
            At <strong className="font-semibold">{site.name}</strong>, we know that every business
            is different, and so are its financial needs. Whether you&rsquo;re looking for ongoing
            finance management or one-off strategic support, we&rsquo;re here to provide tailored
            solutions that fit your business goals.
          </p>

          <p className="mt-5 text-[17px] leading-[1.8] text-ink-soft">
            From simplifying daily accounting to helping you plan for sustainable growth, we take
            the complexity out of finance, so you can focus on running and growing your business
            with confidence.
          </p>

          <p className="mt-5 inline-flex items-start justify-center gap-2 text-left text-[17px] leading-[1.8] text-ink-soft">
            <Phone size={18} className="mt-1 shrink-0 text-brand" aria-hidden="true" />
            <span>
              Let&rsquo;s Chat! Get in touch today, and let&rsquo;s discuss how we can help you take
              control of your finances and build a stronger financial future.
            </span>
          </p>

          <div className="mt-9">
            <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn-brand">
              <CalendarCheck size={20} aria-hidden="true" />
              Schedule a Free Consultation Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
