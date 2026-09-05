export type Review = {
  id: string;
  author: string;
  avatarUrl?: string;
  initial: string;
  /** e.g. "10 months ago" */
  relativeTime: string;
  rating: number;
  text: string;
  source: 'google' | 'upwork';
  /** Upwork only: the job title the review was left against. */
  jobTitle?: string;
};

/**
 * FALLBACK DATA ONLY.
 *
 * Pulled from the live Google review widget on kjmanagementaccountingsolutions.com
 * so the section renders real content before a live feed is connected.
 * Do not treat this as a permanent store:
 *  - Google's terms expect reviews to be displayed live with attribution, not
 *    copied into your own database indefinitely.
 *  - Upwork review text belongs to the client who wrote it.
 *
 * Connect a live source instead: see src/lib/google-reviews.ts and README.md.
 */
export const fallbackGoogleReviews: Review[] = [
  {
    id: 'g-rachel-p',
    author: 'Rachel P',
    initial: 'R',
    relativeTime: '9 months ago',
    rating: 5,
    text: 'Elaine has been fantastic in helping with tax returns and giving advice to help with accounts going forward.',
    source: 'google',
  },
  {
    id: 'g-kirsty-coward',
    author: 'kirsty coward',
    initial: 'K',
    relativeTime: '9 months ago',
    rating: 5,
    text: 'Been dealing with Kieran for the last few months and its been excellent. He is super helpful and proactive and has made it such a simple and easy process- highly recommend.',
    source: 'google',
  },
  {
    id: 'g-andrew-tracey',
    author: 'Andrew Tracey',
    initial: 'A',
    relativeTime: '10 months ago',
    rating: 5,
    text: 'Couldn’t recommend highly enough. Made the process of my first tax return very easy',
    source: 'google',
  },
  {
    id: 'g-amy-mcclymont',
    author: 'Amy McClymont',
    initial: 'A',
    relativeTime: '10 months ago',
    rating: 5,
    text: 'Elaine made the whole experience easy and explained everything clearly',
    source: 'google',
  },
  {
    id: 'g-james-betteley',
    author: 'James Betteley',
    initial: 'J',
    relativeTime: '10 months ago',
    rating: 5,
    text: 'We have been using Kieran to support our business for just over a year now. He is extremely proactive in trying to understand our business and always makes great suggestions for extra support / accounting reports on top of the reporting we are using him for. He has been excellent and I cant recommend him enough.',
    source: 'google',
  },
  {
    id: 'g-devin-derr',
    author: 'Devin Derr',
    initial: 'D',
    relativeTime: '10 months ago',
    rating: 5,
    text: '10/10 service and experience. Kieran handled everything quickly and efficiently. Absolutely would recommend Kieran to anyone.',
    source: 'google',
  },
  {
    id: 'g-clarendon-games',
    author: 'Clarendon Games',
    initial: 'C',
    relativeTime: '10 months ago',
    rating: 5,
    text: 'Very professional, conscientious, fast turnaround in producing management accounts, with invaluable strategic insight across all areas of business. Thank you KJ Management - highly recommend!',
    source: 'google',
  },
  {
    id: 'g-varun-s',
    author: 'Varun S',
    initial: 'V',
    relativeTime: '11 months ago',
    rating: 5,
    text: 'Kieran is an excellent accountant: knowledgeable, meticulous, and always delivers on time. What really stands out is his responsiveness and willingness to help, which makes a huge difference, especially for startups and SMBs where speed and clarity are key. A true professional and a great partner to have as you build your business. Highly recommend working with Kieran!',
    source: 'google',
  },
  {
    id: 'g-andre-elkana',
    author: 'Andre Elkana',
    initial: 'A',
    relativeTime: '11 months ago',
    rating: 5,
    text: 'Kieran provided us with cost-free advice after assessing our QuickBooks and accounts, and even at no charge he stood out. He was the first to identify key issues that others had missed and explained them clearly. His effort, knowledge, and willingness to help were miles ahead of our previous accountant. A genuine professional who clearly cares about helping businesses. Certainly recommend working with his firm!',
    source: 'google',
  },
  {
    id: 'g-suparna-vimal',
    author: 'Suparna Vimal',
    initial: 'S',
    relativeTime: '3 March 2025',
    rating: 5,
    text: 'Kieran is extremely sharp, meticulous, prompt and can problem-solve independently and creatively! He’s an extremely...',
    source: 'google',
  },
  {
    id: 'g-nicole-mcghee',
    author: 'Nicole McGhee',
    initial: 'N',
    relativeTime: '17 February 2025',
    rating: 5,
    text: 'Elaine and Kieran were both extremely professional and went above and beyond to ensure I...',
    source: 'google',
  },
  {
    id: 'g-holly-martin',
    author: 'Holly Martin',
    initial: 'H',
    relativeTime: '17 February 2025',
    rating: 5,
    text: 'Amazing service, highly recommend!! The team were reliable, knowledgable and extremely helpful',
    source: 'google',
  },
  {
    id: 'g-liam',
    author: 'Liam',
    initial: 'L',
    relativeTime: '17 February 2025',
    rating: 5,
    text: 'Kieran & Elaine 2 great accountants very reliable and professional highly recommend.',
    source: 'google',
  },
  {
    id: 'g-carol-fletcher',
    author: 'Carol Fletcher',
    initial: 'C',
    relativeTime: '17 February 2025',
    rating: 5,
    text: 'KJ Management provided an excellent service. All of my questions regarding my accounts were explained...',
    source: 'google',
  },
  {
    id: 'g-lee-sandwith',
    author: 'Lee Sandwith',
    initial: 'L',
    relativeTime: '10 February 2025',
    rating: 5,
    text: 'Top class accountancy firm at a very reasonable price.',
    source: 'google',
  },
  {
    id: 'g-lucy-seabrook',
    author: 'Lucy Seabrook',
    initial: 'L',
    relativeTime: '5 February 2025',
    rating: 5,
    text: 'I have been working with Kieran for nearly a year now and would highly recommend....',
    source: 'google',
  },
  {
    id: 'g-r-mck-crooks',
    author: 'R McK Crooks',
    initial: 'R',
    relativeTime: '1 February 2025',
    rating: 5,
    text: 'Professional and skilled accountants, consistently provide accurate and insightful reports. Quick to respond and great...',
    source: 'google',
  },
  {
    id: 'g-blair-sutherland',
    author: 'Blair Sutherland',
    initial: 'B',
    relativeTime: '1 February 2025',
    rating: 5,
    text: 'Excellent service! Kieran and Elaine are professional, knowledgeable, and always ready to help. Highly recommend!',
    source: 'google',
  },
  {
    id: 'g-josh-byrne',
    author: 'Josh Byrne',
    initial: 'J',
    relativeTime: '1 February 2025',
    rating: 5,
    text: 'Had a great experience with KJ MAS for my business. They are professional, reliable and...',
    source: 'google',
  },
  {
    id: 'g-georgia-beeston',
    author: 'Georgia Beeston',
    initial: 'G',
    relativeTime: '1 February 2025',
    rating: 5,
    text: 'Really recommend KJ Management Accounting Solutions! Kieran is always great to work with.',
    source: 'google',
  },
  {
    id: 'g-j',
    author: 'J',
    initial: 'J',
    relativeTime: '31 January 2025',
    rating: 5,
    text: 'Kieran and the team have been an absolute dream to work with!! Helped with...',
    source: 'google',
  },
  {
    id: 'g-rosey321',
    author: 'Rosey321',
    initial: 'R',
    relativeTime: '31 January 2025',
    rating: 5,
    text: 'Amazing service! The team really helped with my business. No idea why i didn’t outsource...',
    source: 'google',
  },
  {
    id: 'g-michal',
    author: 'Michal',
    initial: 'M',
    relativeTime: '30 January 2025',
    rating: 5,
    text: "Great service. Highly recommend! I've had two accountants before but I finally found someone who...",
    source: 'google',
  },
  {
    id: 'g-safeer-ibrahim',
    author: 'Safeer Ibrahim',
    initial: 'S',
    relativeTime: '30 January 2025',
    rating: 5,
    text: 'Been working with Kieran for the best part of a year now and I cannot...',
    source: 'google',
  },
  {
    id: 'g-kieran-cryans',
    author: 'Kieran Cryans',
    initial: 'K',
    relativeTime: '30 January 2025',
    rating: 5,
    text: 'Done by the deadline, efficient, great communication, highly recommended',
    source: 'google',
  },
  {
    id: 'g-marc-craig',
    author: 'Marc Craig',
    initial: 'M',
    relativeTime: '30 January 2025',
    rating: 5,
    text: "I've had the pleasure of working with KJMAS, and I can't speak highly enough about...",
    source: 'google',
  },
  {
    id: 'g-jay-cumming',
    author: 'Jay Cumming',
    initial: 'J',
    relativeTime: '30 January 2025',
    rating: 5,
    text: 'Great experience with KJ MAS',
    source: 'google',
  },
  {
    id: 'g-conor-campbell',
    author: 'Conor Campbell',
    initial: 'C',
    relativeTime: '16 January 2025',
    rating: 5,
    text: 'Great service from Kieran and Elaine, they go above and beyond to help.',
    source: 'google',
  },
  {
    id: 'g-kelsey-crone',
    author: 'Kelsey Crone',
    initial: 'K',
    relativeTime: '16 January 2025',
    rating: 5,
    text: 'Highly recommend Kieran & Elaine for any of your small business finance needs!',
    source: 'google',
  },
  {
    id: 'g-cameron-johnstone',
    author: 'Cameron Johnstone',
    initial: 'C',
    relativeTime: '16 January 2025',
    rating: 5,
    text: 'Really professional work and would recommend to anyone.',
    source: 'google',
  },
];

/**
 * Upwork has no public reviews API. Paste the reviews you are happy to display
 * here (with the client's wording kept short), or replace this section with a
 * link out to the Upwork profile.
 */
export const upworkReviews: Review[] = [
  {
    id: 'u-accountant',
    author: 'Upwork client',
    initial: 'U',
    relativeTime: '',
    rating: 5,
    jobTitle: 'Accountant',
    text: 'Amazing service from Kieran! Finally an accountant who is proactive and can explain clearly what is he doing. Highly recommend!',
    source: 'upwork',
  },
  {
    id: 'u-finance-manager',
    author: 'Upwork client',
    initial: 'U',
    relativeTime: '',
    rating: 5,
    jobTitle: 'Finance Manager / Accountant',
    text: 'Had a great experience working with Kieran. He is incredibly reliable, completed work on time, and went above and beyond our ask! Would definitely recommend Kieran and rehire him for any project.',
    source: 'upwork',
  },
  {
    id: 'u-uk-accountant-1',
    author: 'Upwork client',
    initial: 'U',
    relativeTime: '',
    rating: 5,
    jobTitle: 'UK Accountant required with qualification such as ACCA, ACA, ICA, CIMA etc',
    text: 'Excellent work, Great communication and very efficient, Went out of his way to help me at short notice.',
    source: 'upwork',
  },
  {
    id: 'u-uk-accountant-2',
    author: 'Upwork client',
    initial: 'U',
    relativeTime: '',
    rating: 5,
    jobTitle: 'Looking for UK Accountant - CIMA, CIPFA, ACCA, ACA',
    text: 'Kieran was diligent, helpful, and responsive. He delivered the work quickly and with high quality. Will definitely hire again.',
    source: 'upwork',
  },
];

export const googleProfile = {
  name: 'KJ Management Accounting Solutions',
  rating: 5.0,
  reviewCount: 57,
};
