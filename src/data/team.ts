import { site } from './site';

/** Shared identity for the two founders, used by every "book a call" surface. */
export const team = [
  {
    name: 'Kieran Johnston',
    firstName: 'Kieran',
    role: 'Founder & Chartered Accountant',
    href: '/about/kieran',
    calendly: site.calendlyKieran,
    cta: 'Book Kieran',
    photo: '/images/about-founders.png',
    avatar: '/images/avatar-kieran.jpg',
    theme: {
      card: 'border-brand',
      badge: 'bg-brand-50 text-brand-700',
      btn: 'btn-brand',
      ring: 'ring-brand',
      hover: 'hover:border-brand hover:bg-brand-50/60',
    },
  },
  {
    name: 'Elaine Bryson',
    firstName: 'Elaine',
    role: 'Co-Founder & Chartered Accountant',
    href: '/about/elaine',
    calendly: site.calendlyElaine,
    cta: 'Book Elaine',
    photo: '/images/elaine.jpg',
    avatar: '/images/avatar-elaine.jpg',
    theme: {
      card: 'border-pink-500',
      badge: 'bg-pink-50 text-pink-700',
      btn: 'btn bg-pink-500 text-white hover:bg-pink-600 hover:shadow-[0_10px_28px_rgba(236,72,153,0.35)]',
      ring: 'ring-pink-500',
      hover: 'hover:border-pink-500 hover:bg-pink-50/60',
    },
  },
] as const;
