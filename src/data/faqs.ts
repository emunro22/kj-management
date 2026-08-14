export type Faq = {
  question: string;
  answer: string[];
  /** Optional tick-list rendered under the paragraphs. */
  list?: string[];
};

export const faqs: Faq[] = [
  {
    question: 'What services do you offer?',
    answer: [
      'At KJ Management Accounting Solutions, we provide a full finance function for small businesses, including:',
    ],
    list: [
      'Management Accounting',
      'Cash Flow Planning',
      'Budgeting & Forecasting',
      'Financial Modelling for Investment',
      'Annual Accounts Preparation',
      'Bookkeeping & Compliance',
      'Virtual Financial Controller Services',
    ],
  },
  {
    question: 'Do you work with small businesses only?',
    answer: [
      'We specialise in working with small businesses across a range of industries, including marketing, e-commerce, IT, and recruitment. However, our expertise is not limited to these sectors. We focus on providing tailored financial support to small business owners who want a hands-on, strategic approach to managing their finances.',
    ],
  },
  {
    question: 'Are you Chartered Accountants and a Xero Partner?',
    answer: [
      'Yes! We are Chartered Accountants, accredited by both ACCA (Association of Chartered Certified Accountants) and ICAS (Institute of Chartered Accountants of Scotland). Our practice has been issued a practising licence by ACCA, and we can be found on the official ACCA directory for verification.',
      'We are also a Xero Partner, using cloud-based accounting solutions to help businesses streamline financial processes, improve efficiency, and gain real-time insights. This ensures that your business remains compliant while benefiting from modern, technology-driven financial management.',
    ],
  },
  {
    question: 'Can you help with tax returns and HMRC compliance?',
    answer: [
      'Yes, we can assist with annual accounts preparation and ensure your financial records are compliant with HMRC and Companies House regulations. While our main focus is management accounting and financial strategy, we ensure all compliance-related matters are handled smoothly.',
    ],
  },
  {
    question: 'Do you offer remote accounting services?',
    answer: [
      'Yes! We work remotely with businesses across the UK and internationally, providing virtual accounting and finance solutions. We use cloud-based software like Xero, QuickBooks, and Google Workspace to keep your finances organised and accessible.',
    ],
  },
  {
    question: 'How can I contact you?',
    answer: ['You can reach us via:'],
    list: ['WhatsApp: +44 7301 064755', 'Email: info@kjmanagementaccountingsolutions.com'],
  },
];
