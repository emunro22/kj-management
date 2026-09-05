export type Service = {
  /** Matches the anchor used on the live site, e.g. /services#management */
  slug: string;
  /** Keyword-rich slug used in area pages, e.g. /areas/uddingston/management-accounting */
  keywordSlug: string;
  /** Short phrase for area-page copy, e.g. "management accounting support" */
  keyword: string;
  /**
   * Common alternate phrasings real searchers use for this service
   * (e.g. "finance controller" for Virtual Financial Controller). Used to:
   *  - broaden on-page keyword coverage on the canonical area/service page
   *  - generate /areas/[area]/[alias] redirects into the canonical page
   * Deliberately NOT separate indexed pages: near-duplicate content across
   * synonyms is a doorway-page risk, so we consolidate ranking signal onto
   * one strong page per area/service instead of splitting it.
   */
  aliases: { label: string; slug: string }[];
  title: string;
  /** Lucide fallback, used until the real SVG is downloaded. */
  icon: string;
  /** The original icon exported from the WordPress media library. */
  iconSrc: string;
  /** One-line version used on the homepage grid. */
  blurb: string;
  /** Longer intro used on the services page. */
  intro: string;
  points: { label: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: 'management',
    keywordSlug: 'management-accounting',
    keyword: 'management accounting',
    aliases: [
      { label: 'management accountant', slug: 'management-accountant' },
      { label: 'monthly management accounts', slug: 'monthly-management-accounts' },
      { label: 'outsourced management accounts', slug: 'outsourced-management-accounts' },
    ],
    title: 'Management Accounting',
    icon: 'FileSpreadsheet',
    iconSrc: '/images/icons/Management-Accounting.svg',
    blurb:
      'Monthly management accounts that tell you what actually happened in the business, and what to do about it.',
    intro:
      'Understanding your numbers is the foundation of smart business decisions. At KJ Management Accounting Solutions, we go beyond traditional accounting by providing clear, actionable financial insights that help you manage, plan, and grow your business effectively. We don’t just generate reports; we help you interpret the numbers, identify opportunities, and make informed financial decisions with confidence.',
    points: [
      {
        label: 'Regular, Tailored Financial Reports',
        detail: 'Customised reports providing a clear snapshot of your business performance.',
      },
      {
        label: 'Profitability & Efficiency Insights',
        detail: 'Identify areas to increase profit margins and improve cash flow.',
      },
      {
        label: 'Strategic Advice for Growth',
        detail: 'Guidance to scale your business sustainably.',
      },
      {
        label: 'Cost Control & Performance Tracking',
        detail: 'Helping you optimise expenses and improve financial efficiency.',
      },
      {
        label: 'Risk & Opportunity Identification',
        detail: 'Spot financial risks early and seize growth opportunities.',
      },
    ],
  },
  {
    slug: 'annual',
    keywordSlug: 'annual-accounts',
    keyword: 'annual accounts',
    aliases: [
      { label: 'year end accounts', slug: 'year-end-accounts' },
      { label: 'statutory accounts', slug: 'statutory-accounts' },
      { label: 'company accounts', slug: 'company-accounts' },
      { label: 'how do I submit my taxes', slug: 'how-do-i-submit-my-taxes' },
      { label: 'tax return help', slug: 'tax-return-help' },
    ],
    title: 'Annual Accounts',
    icon: 'FileCheck2',
    iconSrc: '/images/icons/Annual-Accounts.svg',
    blurb:
      'Year-end accounts prepared and filed with Companies House and HMRC, on time and without the last-minute scramble.',
    intro:
      'Your annual accounts are more than just a compliance requirement: they provide valuable insights into your business performance. At KJ Management Accounting Solutions, we ensure your financial statements are accurate, timely, and fully compliant with HMRC and Companies House regulations.',
    points: [
      {
        label: 'Preparation of Year-End Accounts',
        detail: 'Ensuring your financial reports meet all regulatory requirements.',
      },
      {
        label: 'Companies House & HMRC Submissions',
        detail: 'Filing your accounts correctly and on time.',
      },
      {
        label: 'Review & Financial Analysis',
        detail: 'Helping you understand your financial position and business performance.',
      },
      {
        label: 'Tax Efficiency Planning',
        detail: 'Identifying opportunities to minimise tax liabilities legally and efficiently.',
      },
      {
        label: 'Support for Sole Traders & Limited Companies',
        detail: 'Tailored services to meet your business needs.',
      },
    ],
  },
  {
    slug: 'cash',
    keywordSlug: 'cash-flow-planning',
    keyword: 'cash flow planning',
    aliases: [
      { label: 'cash flow management', slug: 'cash-flow-management' },
      { label: 'cash flow forecasting', slug: 'cash-flow-forecasting' },
      { label: 'cashflow help', slug: 'cashflow-help' },
    ],
    title: 'Cash Flow Planning',
    icon: 'Coins',
    iconSrc: '/images/icons/Cash-Flow-Planning.svg',
    blurb:
      'Rolling cash flow forecasts so you can see what is coming and make decisions before money gets tight.',
    intro:
      'Managing cash flow effectively is key to business survival and growth. At KJ Management Accounting Solutions, we help you forecast, plan, and manage cash flow, ensuring you have the funds available to cover expenses, invest in growth, and avoid financial stress.',
    points: [
      {
        label: 'Cash Flow Forecasting',
        detail: 'Helping you anticipate financial needs and prevent cash shortages.',
      },
      {
        label: 'Managing Income & Expenses',
        detail: 'Keeping track of your business cash movements for better financial control.',
      },
      {
        label: 'Scenario Planning',
        detail: 'Providing “what-if” analysis to prepare for different financial situations.',
      },
      {
        label: 'Working Capital Management',
        detail: 'Ensuring your business has the right balance of income and expenses.',
      },
      {
        label: 'Growth & Investment Planning',
        detail: 'Aligning cash flow with business expansion and funding needs.',
      },
    ],
  },
  {
    slug: 'budgeting',
    keywordSlug: 'budgeting-forecasting',
    keyword: 'budgeting & forecasting',
    aliases: [
      { label: 'business budgeting', slug: 'business-budgeting' },
      { label: 'financial forecasting', slug: 'financial-forecasting' },
      { label: 'budget planning', slug: 'budget-planning' },
    ],
    title: 'Budgeting & Forecasting',
    icon: 'PencilRuler',
    iconSrc: '/images/icons/Budgeting-Forecasting.svg',
    blurb:
      'Budgets you will actually use, with variance reporting that shows where the plan and reality diverge.',
    intro:
      'A well-structured budget and financial forecast give you the roadmap to business success. At KJ Management Accounting Solutions, we help you set realistic financial targets and anticipate future challenges, ensuring your business remains financially stable.',
    points: [
      {
        label: 'Business Budgeting',
        detail: 'Creating a financial plan tailored to your business goals.',
      },
      {
        label: 'Revenue & Expense Forecasting',
        detail: 'Predicting future income and costs for better planning.',
      },
      {
        label: 'Performance Monitoring',
        detail: 'Comparing actual figures against budgets to stay on track.',
      },
      {
        label: 'Scenario Analysis',
        detail: 'Helping you prepare for different financial situations.',
      },
      {
        label: 'Long-Term Financial Planning',
        detail: 'Setting sustainable targets for future growth.',
      },
    ],
  },
  {
    slug: 'financial',
    keywordSlug: 'financial-modelling',
    keyword: 'financial modelling',
    aliases: [
      { label: 'financial projections', slug: 'financial-projections' },
      { label: 'investor ready financial model', slug: 'investor-ready-financial-model' },
      { label: 'business valuation', slug: 'business-valuation' },
    ],
    title: 'Financial Modelling for Investment',
    icon: 'Search',
    iconSrc: '/images/icons/Financial-Modelling-for-Investment.svg',
    blurb:
      'Investor-ready models and projections built to stand up to scrutiny from lenders and funders.',
    intro:
      'If you’re seeking investment or funding, a solid financial model is crucial. We create detailed, professional financial models to help you secure funding, make strategic decisions, and plan for sustainable growth.',
    points: [
      {
        label: 'Investor-Ready Financial Models',
        detail: 'Professionally structured to support funding applications.',
      },
      {
        label: 'Business Valuation & Projections',
        detail: 'Helping you assess future profitability and business worth.',
      },
      {
        label: 'Scenario Planning',
        detail: 'Analysing potential risks and opportunities for informed decision-making.',
      },
      {
        label: 'Break-Even & Growth Analysis',
        detail: 'Identifying key financial milestones.',
      },
      {
        label: 'Tailored Solutions for Startups & Growing Businesses',
        detail: 'Ensuring your model fits your business needs.',
      },
    ],
  },
  {
    slug: 'bookkeeping',
    keywordSlug: 'bookkeeping',
    keyword: 'bookkeeping',
    aliases: [
      { label: 'bookkeeper', slug: 'bookkeeper' },
      { label: 'outsourced bookkeeping', slug: 'outsourced-bookkeeping' },
      { label: 'Xero bookkeeper', slug: 'xero-bookkeeper' },
    ],
    title: 'Bookkeeping',
    icon: 'BookCheck',
    iconSrc: '/images/icons/Bookkeeping.svg',
    blurb:
      'Accurate, reconciled books kept current in Xero, so every report you rely on starts from clean data.',
    intro:
      'Accurate bookkeeping is essential for maintaining financial clarity, ensuring compliance, and making informed business decisions. At KJ Management Accounting Solutions, we handle the details, so you can focus on running and growing your business with confidence.',
    points: [
      {
        label: 'Recording & Categorising Transactions',
        detail: 'Ensuring your financial records are always up to date.',
      },
      {
        label: 'Bank Reconciliation',
        detail: 'Keeping your accounts accurate and aligned with your bank statements.',
      },
      {
        label: 'Ensuring Compliance',
        detail: 'Helping you meet HMRC requirements and financial regulations.',
      },
      {
        label: 'Payroll & Expense Management',
        detail: 'Managing staff wages, expenses, and financial obligations.',
      },
      {
        label: 'VAT & Tax Record Maintenance',
        detail: 'Keeping track of VAT and tax filings to avoid surprises.',
      },
    ],
  },
  {
    slug: 'virtual',
    keywordSlug: 'virtual-financial-controller',
    keyword: 'virtual financial controller',
    aliases: [
      { label: 'finance controller', slug: 'finance-controller' },
      { label: 'financial controller', slug: 'financial-controller' },
      { label: 'outsourced finance director', slug: 'outsourced-finance-director' },
      { label: 'part-time finance director', slug: 'part-time-finance-director' },
    ],
    title: 'Virtual Financial Controller',
    icon: 'FolderOpen',
    iconSrc: '/images/icons/Virtual-Financial-Controller.svg',
    blurb: 'Senior finance leadership on a part-time basis, without the cost of hiring in-house.',
    intro:
      'Not every business needs a full-time finance director, but every business needs financial leadership. Our Virtual Financial Controller service gives you expert financial management without the cost of hiring in-house.',
    points: [
      {
        label: 'Strategic Financial Planning',
        detail: 'Aligning your finances with business goals.',
      },
      {
        label: 'Cash Flow & Budget Oversight',
        detail: 'Ensuring your business stays financially healthy.',
      },
      {
        label: 'Financial Reporting & Insights',
        detail: 'Providing the data you need to make informed decisions.',
      },
      {
        label: 'Compliance & Risk Management',
        detail: 'Keeping your business financially compliant and risk-aware.',
      },
      {
        label: 'Tailored Support for Scaling Businesses',
        detail: 'Helping you grow sustainably.',
      },
    ],
  },
];

export function getServiceByKeywordSlug(keywordSlug: string) {
  return services.find((service) => service.keywordSlug === keywordSlug);
}
