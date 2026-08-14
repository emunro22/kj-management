export type Post = {
  slug: string;
  title: string;
  /** ISO date — used for sorting and <time>. */
  date: string;
  excerpt: string;
  /**
   * Article body as HTML.
   *
   * Left empty deliberately. Export the real post content from WordPress
   * (Tools → Export → Posts) and paste the HTML in here, or move to MDX /
   * a headless CMS — see README section 7.
   */
  body?: string;
};

export const posts: Post[] = [
  {
    slug: 'what-are-management-accounts-and-why-every-small-business-should-use-them',
    title: 'What Are Management Accounts – And Why Every Small Business Should Use Them',
    date: '2025-03-31',
    excerpt:
      'What management accounts actually contain, how they differ from year-end accounts, and why they change the decisions you make.',
  },
  {
    slug: 'why-forecasting-matters-and-how-often-should-you-update-yours',
    title: 'Why Forecasting Matters – And How Often Should You Update Yours',
    date: '2025-03-31',
    excerpt:
      'A forecast is only useful while it is current. How often to revisit yours, and what to change when you do.',
  },
  {
    slug: 'bookkeeping-made-simple-what-every-business-owner-needs-to-know',
    title: 'Bookkeeping Made Simple: What Every Business Owner Needs to Know',
    date: '2025-03-19',
    excerpt:
      'The bookkeeping habits that keep your records clean, your filings simple, and your reports worth reading.',
  },
  {
    slug: 'annual-accounts-for-uk-businesses-a-complete-guide-for-small-and-micro-companies',
    title: 'Annual Accounts for UK Businesses: A Complete Guide for Small and Micro Companies',
    date: '2025-03-16',
    excerpt:
      'What small and micro companies must file, when it is due, and where owners most often get caught out.',
  },
  {
    slug: 'why-every-business-needs-a-profit-and-loss-budget',
    title: 'Why Every Business Needs a Profit and Loss Budget',
    date: '2025-03-16',
    excerpt:
      'How a P&L budget turns targets into something you can track, and what to do when actuals drift from plan.',
  },
  {
    slug: 'what-is-management-accounting-and-why-does-your-business-need-it',
    title: 'What is Management Accounting and Why Does Your Business Need It?',
    date: '2025-03-16',
    excerpt:
      'Management accounting explained for owners: what it covers, and the decisions it is designed to support.',
  },
  {
    slug: 'common-accounting-terms-explained-for-business-owners',
    title: 'Common Accounting Terms Explained for Business Owners',
    date: '2025-03-16',
    excerpt:
      'A plain-English glossary of the accounting terms that come up most often in conversations with your accountant.',
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
