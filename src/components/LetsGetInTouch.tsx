import { Mail } from 'lucide-react';
import { site } from '@/data/site';
import { WhatsAppGlyph } from './WhatsAppGlyph';

/** The dark contact strip that closes every page on the live site. */
export default function LetsGetInTouch({ pink = false }: { pink?: boolean }) {
  return (
    <section className="bg-surface-dark">
      <div className="container-kj grid items-stretch gap-px sm:grid-cols-3">
        <div className="flex items-center py-8 pr-6">
          <h2 className="max-w-[8ch] text-3xl leading-tight text-white sm:text-5xl">
            Let&rsquo;s Get in Touch
          </h2>
        </div>

        <ContactTile
          href={site.whatsappUrl}
          label="WhatsApp Us"
          value={site.phone}
          iconBg="bg-[#25D366]"
          icon={<WhatsAppGlyph size={22} />}
          pink={pink}
        />

        <ContactTile
          href={`mailto:${site.email}`}
          label="Email Us"
          value={site.email}
          iconBg={pink ? 'bg-pink-500' : 'bg-brand'}
          icon={<Mail size={22} className="text-white" />}
          pink={pink}
        />
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
  pink,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
  pink: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 border-l border-white/10 px-6 py-8 transition-colors hover:bg-white/5"
    >
      <span
        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center ${iconBg}`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span
          className={`block font-accent text-[18px] font-semibold ${pink ? 'text-pink-500' : 'text-brand'}`}
        >
          {label}
        </span>
        <span className="block break-all text-[18px] font-medium text-white">{value}</span>
      </span>
    </a>
  );
}
