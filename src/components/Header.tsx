'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Instagram, Menu, X } from 'lucide-react';
import { nav, site } from '@/data/site';
import Logo from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_18px_rgba(0,0,0,0.08)]' : ''
      }`}
    >
      <div className="container-kj flex h-[107px] items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
          <Logo className="h-[83px] w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-2 font-body text-[13px] font-medium uppercase tracking-[1px] text-ink transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-[width] after:duration-300 hover:text-brand hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SocialLink href={site.socials.tiktok} label="TikTok">
            <TikTokIcon />
          </SocialLink>
          <SocialLink href={site.socials.instagram} label="Instagram">
            <Instagram size={20} />
          </SocialLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <SocialLink href={site.socials.tiktok} label="TikTok" compact>
            <TikTokIcon />
          </SocialLink>
          <SocialLink href={site.socials.instagram} label="Instagram" compact>
            <Instagram size={18} />
          </SocialLink>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] text-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-neutral-200 bg-white lg:hidden"
          >
            <ul className="container-kj flex flex-col py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-neutral-100 py-4 font-body text-base font-medium uppercase tracking-[0.04em] text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function SocialLink({
  href,
  label,
  children,
  compact = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center rounded-[2px] bg-brand text-white transition-colors hover:bg-brand-600 ${
        compact ? 'h-9 w-9' : 'h-10 w-10'
      }`}
    >
      {children}
    </a>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .77-5.06v-3.1a5.67 5.67 0 0 0-.77-.05A5.66 5.66 0 1 0 15.54 15V8.94a7.32 7.32 0 0 0 4.3 1.38V7.24a4.29 4.29 0 0 1-3.24-1.42Z" />
    </svg>
  );
}
