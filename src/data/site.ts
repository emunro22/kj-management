export const site = {
  name: 'KJ Management Accounting Solutions',
  shortName: 'KJ Management',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kjmanagementaccountingsolutions.com',
  description:
    'A complete finance function for small business owners — management accounting, cash flow planning, forecasting, bookkeeping and virtual financial controller services.',
  email: 'info@kjmanagementaccountingsolutions.com',
  phone: '+447301064755',
  phoneDisplay: '+44 7301 064755',
  whatsapp: '447301064755',
  whatsappUrl: 'https://wa.me/447301064755?text=Hi',
  addressLine: 'Serving businesses remotely across the UK & internationally',
  calendly: 'https://calendly.com/kjmanagementaccountingsolutions-info/30min',
  founders: 'Kieran Johnston & Elaine Bryson',
  socials: {
    tiktok: 'https://www.tiktok.com/@kjmasolutions',
    instagram: 'https://www.instagram.com/kjmasolutions/',
  },
  // Pulled from the live site's review widget link
  googlePlaceId: process.env.GOOGLE_PLACE_ID ?? 'ChIJmwD7OSpriEgRr1SmXy16-zA',
  googleReviewsUrl:
    'https://search.google.com/local/reviews?placeid=ChIJmwD7OSpriEgRr1SmXy16-zA',
  googleWriteReviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJmwD7OSpriEgRr1SmXy16-zA',
  upworkProfileUrl: 'https://www.upwork.com/freelancers/kieranmanagementaccounting',
  accaLicence: '24616840',
} as const;

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Knowledge Hub', href: '/knowledge-hub' },
] as const;
