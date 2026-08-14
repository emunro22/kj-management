import { Mail } from 'lucide-react';
import ContactForm from './ContactForm';
import Reveal from './Reveal';
import ZigzagDivider from './ZigzagDivider';
import { site } from '@/data/site';

export default function Contact() {
  return (
    <section id="contact" className="relative isolate bg-surface-dark">
      <ZigzagDivider className="absolute inset-x-0 -top-[5px] sm:-top-[7px]" />

      <div className="container-kj py-20 lg:py-24">
        <p className="mb-10 text-center font-label text-base font-extrabold uppercase tracking-[0.25em] text-white">
          Send Message
        </p>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex items-start gap-6">
              <span aria-hidden="true" className="mt-9 hidden h-[2px] w-14 bg-brand sm:block" />
              <h2 className="max-w-[10ch] text-4xl leading-[1.15] text-white sm:text-6xl">
                Let&rsquo;s Discuss Your Business Finances
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/70">
        <div className="container-kj grid items-stretch gap-px sm:grid-cols-3">
          <div className="flex items-center py-8 pr-6">
            <h3 className="max-w-[8ch] text-3xl leading-tight text-white sm:text-5xl">
              Let&rsquo;s Get in Touch
            </h3>
          </div>

          <ContactTile
            href={`https://wa.me/${site.whatsapp}`}
            label="WhatsApp Us"
            value={site.phone}
            iconBg="bg-[#25D366]"
            icon={<WhatsAppGlyph />}
          />

          <ContactTile
            href={`mailto:${site.email}`}
            label="Email Us"
            value={site.email}
            iconBg="bg-brand"
            icon={<Mail size={22} className="text-white" />}
          />
        </div>
      </div>
    </section>
  );
}

function ContactTile({
  href,
  label,
  value,
  icon,
  iconBg,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 border-l border-white/10 px-6 py-8 transition-colors hover:bg-white/5"
    >
      <span
        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center ${iconBg}`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-accent text-[18px] font-semibold text-brand">{label}</span>
        <span className="block break-all text-[18px] font-medium text-white">{value}</span>
      </span>
    </a>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.01h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Z" />
    </svg>
  );
}
