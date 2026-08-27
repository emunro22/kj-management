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
    ];
  },
};

export default nextConfig;
