import Link from 'next/link';
import { Instagram } from 'lucide-react';
import Logo from './Logo';
import { services } from '@/data/services';
import { areas } from '@/data/areas';
import { site } from '@/data/site';

const allLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const support = [
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact Us', href: '/contact' },
];

const featuredAreas = areas.slice(0, 8);

export default function Footer() {
  return (
    <footer className="bg-white pt-20">
      <div className="container-kj">
        <div className="grid gap-10 border-neutral-200 md:grid-cols-2 md:divide-x md:divide-neutral-200 lg:grid-cols-4">
          <FooterColumn title="Services" className="lg:pr-10">
            {services.map((service) => (
              <FooterLink key={service.slug} href={`/services#${service.slug}`}>
                {service.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Areas We Cover" className="lg:px-10">
            {featuredAreas.map((area) => (
              <FooterLink key={area.slug} href={`/areas/${area.slug}`}>
                Finance Help in {area.name}
              </FooterLink>
            ))}
            <FooterLink href="/areas">All Areas</FooterLink>
          </FooterColumn>

          <FooterColumn title="All Links" className="lg:px-10">
            {allLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
            <FooterLink href="/knowledge-hub">Knowledge Hub</FooterLink>
          </FooterColumn>

          <FooterColumn title="Support" className="lg:pl-10">
            {support.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
            <li className="flex gap-2 pt-4">
              <SocialSquare href={site.socials.tiktok} label="TikTok">
                <TikTokGlyph />
              </SocialSquare>
              <SocialSquare href={site.socials.instagram} label="Instagram">
                <Instagram size={17} />
              </SocialSquare>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-neutral-200 py-8 sm:flex-row">
          <Logo variant="footer" className="h-12 w-auto" />
          <p className="text-center text-sm text-ink-muted sm:text-right">
            &copy; {new Date().getFullYear()} All rights reserved {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
  className = '',
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="text-lg text-ink">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[15px] text-ink-soft transition-colors hover:text-brand"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialSquare({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center bg-brand text-white transition-colors hover:bg-brand-600"
    >
      {children}
    </a>
  );
}

function TikTokGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .77-5.06v-3.1a5.67 5.67 0 0 0-.77-.05A5.66 5.66 0 1 0 15.54 15V8.94a7.32 7.32 0 0 0 4.3 1.38V7.24a4.29 4.29 0 0 1-3.24-1.42Z" />
    </svg>
  );
}
