/**
 * Alternate phrasings real searchers use (e.g. "finance controller" for
 * Virtual Financial Controller). These are NOT separate indexed pages —
 * near-duplicate content across synonyms is a doorway-page risk — instead
 * every alias URL 308-redirects into the one canonical area/service page,
 * so ranking signal for that keyword consolidates onto a single strong
 * page rather than splitting across near-identical ones. Kept in sync
 * manually with the `aliases` field on each service in src/data/services.ts.
 */
const serviceAliasRedirects = [
  ['management-accountant', 'management-accounting'],
  ['monthly-management-accounts', 'management-accounting'],
  ['outsourced-management-accounts', 'management-accounting'],
  ['year-end-accounts', 'annual-accounts'],
  ['statutory-accounts', 'annual-accounts'],
  ['company-accounts', 'annual-accounts'],
  ['how-do-i-submit-my-taxes', 'annual-accounts'],
  ['tax-return-help', 'annual-accounts'],
  ['cash-flow-management', 'cash-flow-planning'],
  ['cash-flow-forecasting', 'cash-flow-planning'],
  ['cashflow-help', 'cash-flow-planning'],
  ['business-budgeting', 'budgeting-forecasting'],
  ['financial-forecasting', 'budgeting-forecasting'],
  ['budget-planning', 'budgeting-forecasting'],
  ['financial-projections', 'financial-modelling'],
  ['investor-ready-financial-model', 'financial-modelling'],
  ['business-valuation', 'financial-modelling'],
  ['bookkeeper', 'bookkeeping'],
  ['outsourced-bookkeeping', 'bookkeeping'],
  ['xero-bookkeeper', 'bookkeeping'],
  ['finance-controller', 'virtual-financial-controller'],
  ['financial-controller', 'virtual-financial-controller'],
  ['outsourced-finance-director', 'virtual-financial-controller'],
  ['part-time-finance-director', 'virtual-financial-controller'],
];

/** Generic terms that should land on the area hub rather than any one service. */
const areaAliasRedirects = ['accountant', 'accountants', 'small-business-accountant', 'finance-help'];

/**
 * Legacy WordPress permalinks. Before the Next rebuild every article lived at
 * the site root (/what-are-management-accounts...); they now live under
 * /knowledge-hub/. Google still has the old URLs indexed and they were the
 * site's highest-impression pages, so without these they 404 and the ranking
 * signal is thrown away. 308s so the equity transfers to the new URL.
 */
const legacyPostSlugs = [
  'what-are-management-accounts-and-why-every-small-business-should-use-them',
  'why-forecasting-matters-and-how-often-should-you-update-yours',
  'why-every-business-needs-a-profit-and-loss-budget',
  'bookkeeping-made-simple-what-every-business-owner-needs-to-know',
  'annual-accounts-for-uk-businesses-a-complete-guide-for-small-and-micro-companies',
  'what-is-management-accounting-and-why-does-your-business-need-it',
  'common-accounting-terms-explained-for-business-owners',
  'how-to-choose-a-management-accountant-for-your-small-business',
  'virtual-financial-controller-vs-in-house-finance-director',
  'xero-vs-quickbooks-which-bookkeeping-software-is-right-for-your-business',
  'how-much-does-an-accountant-cost-for-a-small-business-in-the-uk',
  'what-is-a-virtual-financial-controller-and-how-do-they-work',
  'sole-trader-vs-limited-company-what-changes-for-your-accounts',
  'vat-registration-explained-when-and-how-small-businesses-must-register',
  'how-to-read-your-management-accounts-a-beginners-guide-for-owners',
  'cash-flow-vs-profit-why-your-business-can-be-profitable-and-still-run-out-of-money',
  'companies-house-filing-deadlines-every-small-business-owner-should-know',
  'what-does-a-bookkeeper-actually-do-a-plain-english-guide',
  'how-to-build-a-cash-flow-forecast-from-scratch',
  'hmrc-self-assessment-a-guide-for-small-business-owners-and-sole-traders',
  'understanding-directors-loan-accounts-what-every-director-should-know',
  'making-tax-digital-what-it-means-for-your-bookkeeping',
];

/**
 * Old permalinks whose wording changed in the rebuild, so they can't be
 * derived from the slug list above. Left-hand side is what Google indexed.
 */
const renamedPostRedirects = [
  [
    'when-does-your-business-need-a-virtual-financial-controller',
    'what-is-a-virtual-financial-controller-and-how-do-they-work',
  ],
  ['what-is-management-accounting', 'what-is-management-accounting-and-why-does-your-business-need-it'],
  ['how-often-should-you-update-your-forecast', 'why-forecasting-matters-and-how-often-should-you-update-yours'],
  ['profit-and-loss-budget', 'why-every-business-needs-a-profit-and-loss-budget'],
  ['management-accounts', 'what-are-management-accounts-and-why-every-small-business-should-use-them'],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'kjmanagementaccountingsolutions.com' },
    ],
  },
  async redirects() {
    return [
      ...serviceAliasRedirects.map(([alias, canonical]) => ({
        source: `/areas/:area/${alias}`,
        destination: `/areas/:area/${canonical}`,
        permanent: true,
      })),
      ...areaAliasRedirects.map((alias) => ({
        source: `/areas/:area/${alias}`,
        destination: '/areas/:area',
        permanent: true,
      })),
      ...legacyPostSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/knowledge-hub/${slug}`,
        permanent: true,
      })),
      ...renamedPostRedirects.map(([legacy, slug]) => ({
        source: `/${legacy}`,
        destination: `/knowledge-hub/${slug}`,
        permanent: true,
      })),
      // WordPress author archives — thin pages that were still picking up
      // impressions. Point them at the real people behind the firm.
      { source: '/author/:slug', destination: '/about/team', permanent: true },
      { source: '/category/:slug', destination: '/knowledge-hub', permanent: true },
      { source: '/tag/:slug', destination: '/knowledge-hub', permanent: true },
    ];
  },
};

export default nextConfig;
