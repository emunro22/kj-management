import type { Metadata } from 'next';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import LetsGetInTouch from '@/components/LetsGetInTouch';
import { WhatsAppGlyph } from '@/components/WhatsAppGlyph';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with KJ Management Accounting Solutions — WhatsApp, email, or book a free 30-minute consultation.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" bgSrc="/images/page-hero-contact.jpg" />

      <section className="bg-white py-20 lg:py-24">
        <div className="container-kj grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-3">Contact us today</p>
            <h2 className="section-title text-ink">
              Your small business deserves more than just compliance
            </h2>

            <ul className="mt-10 space-y-6">
              <DetailRow icon={<MapPin size={22} className="text-white" />} label="Address">
                {site.addressLine}
              </DetailRow>

              <DetailRow icon={<Mail size={22} className="text-white" />} label="Email Us">
                <a href={`mailto:${site.email}`} className="break-all hover:text-brand">
                  {site.email}
                </a>
              </DetailRow>

              <DetailRow
                icon={<WhatsAppGlyph size={22} />}
                label="Whatsapp Us"
                iconBg="bg-[#25D366]"
              >
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  {site.phone}
                </a>
              </DetailRow>
            </ul>

            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand mt-10"
            >
              Schedule a Free Consultation
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm variant="full" theme="light" />
          </Reveal>
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
        <div className="container-kj">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="section-title text-ink">
              Expert Financial Support, Tailored for Small Businesses
            </h2>
            <p className="mt-7 text-[17px] leading-[1.8] text-ink-soft">
              At {site.name}, we know that small businesses need more than just
              compliance-based accounting—they need financial clarity, strategic insights, and a
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
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand mt-9"
            >
              Get the Financial Support You Deserve
            </a>
          </Reveal>
        </div>
      </section>

      <LetsGetInTouch />
    </>
  );
}

function DetailRow({
  icon,
  label,
  children,
  iconBg = 'bg-brand',
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  iconBg?: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span
        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center ${iconBg}`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span>
        <span className="block font-display font-bold text-ink">{label}</span>
        <span className="mt-1 block text-[15px] leading-relaxed text-ink-muted">{children}</span>
      </span>
    </li>
  );
}
