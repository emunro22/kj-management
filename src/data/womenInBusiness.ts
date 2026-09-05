export type WomenInBusinessCategory = 'core' | 'service' | 'sector' | 'guidance';

export type WomenInBusinessQuery = {
  slug: string;
  /** The natural-language search query this page targets. */
  query: string;
  /** <title> and H1, usually the query, capitalised and lightly tidied. */
  title: string;
  /** One-sentence hero subtitle. */
  dek: string;
  /** Meta description. */
  metaDescription: string;
  /** 2–3 sentence unique paragraph on the specific situation behind this query. */
  context: string;
  category: WomenInBusinessCategory;
  faqs: { question: string; answer: string }[];
  /** Optional related site service anchor, e.g. 'bookkeeping'. */
  serviceAnchor?: string;
};

export const categoryLabels: Record<WomenInBusinessCategory, string> = {
  core: 'Finding the Right Accountant',
  service: 'Services for Women in Business',
  sector: 'Industries We Support',
  guidance: 'Financial Confidence & Guidance',
};

export const womenInBusinessQueries: WomenInBusinessQuery[] = [
  // ---------- CORE ----------
  {
    slug: 'accountant-for-women-in-business',
    query: 'accountant for women in business',
    title: 'Accountant for Women in Business',
    dek: 'A finance partner who works specifically with women running their own businesses.',
    metaDescription:
      'Looking for an accountant for women in business? Elaine Bryson works exclusively with women running their own businesses, bringing financial clarity without the jargon.',
    context:
      'Searching for “accountant for women in business” usually means you have tried a generic firm before and it did not feel like a fit: either too corporate, too slow to respond, or just not interested in the specifics of running your business day to day. Elaine works exclusively with women who run their own businesses, from solo founders to small teams, because that focus lets her actually understand the pressures you are dealing with rather than treating you as one client among hundreds.',
    category: 'core',
    faqs: [
      {
        question: 'Why look specifically for an accountant who works with women in business?',
        answer:
          'It is less about gender and more about fit: an accountant who deliberately works with women in business tends to spend more time on financial confidence and plain-English explanations, rather than assuming a level of finance background you may not have (and do not need) to run a great business.',
      },
      {
        question: 'Does Elaine work with women outside Scotland too?',
        answer:
          'Yes, most of Elaine’s work is done remotely over video call and cloud accounting software, so location is rarely a barrier. In-person meetings are available for clients closer to the Uddingston base.',
      },
    ],
  },
  {
    slug: 'accountant-for-female-business-owners',
    query: 'accountant for female business owners',
    title: 'Accountant for Female Business Owners',
    dek: 'Straightforward financial support built around how female business owners actually work.',
    metaDescription:
      'An accountant for female business owners who wants a real finance partner, not a once-a-year compliance box-tick. Book a free call with Elaine.',
    context:
      'Female business owners searching for this term are often juggling the finances alongside everything else in the business (sales, delivery, hiring) and want someone who will flag problems early rather than waiting for a year-end surprise. Elaine works as an ongoing finance partner, checking in through the year rather than disappearing until the next tax deadline.',
    category: 'core',
    faqs: [
      {
        question: 'What does Elaine actually do for female business owners day to day?',
        answer:
          'Depending on what you need, that ranges from monthly bookkeeping and management accounts to cash flow forecasting and being available to answer questions as they come up, not just at year end.',
      },
      {
        question: 'Is this only for limited companies?',
        answer:
          'No, Elaine works with sole traders and limited companies alike. What matters more is whether you are running your own business and want a proper finance function around it.',
      },
    ],
  },
  {
    slug: 'female-accountant-near-me',
    query: 'female accountant near me',
    title: 'Female Accountant Near Me',
    dek: 'Based in Uddingston, working with clients across Scotland and the UK by video call.',
    metaDescription:
      'Searching for a female accountant near me? Elaine Bryson is based in Uddingston, South Lanarkshire, and works with clients locally and remotely across the UK.',
    context:
      '“Near me” searches usually mean you would like the option of meeting in person, at least occasionally. Elaine is based in Uddingston, South Lanarkshire, and can meet local clients face to face when it is useful, but the day-to-day relationship runs through cloud accounting software and video calls either way, so distance rarely gets in the way of a good working relationship.',
    category: 'core',
    faqs: [
      {
        question: 'Do I need to be based near Uddingston to work with Elaine?',
        answer:
          'No, while in-person meetings are available for local clients, the majority of Elaine’s client relationships run entirely through cloud accounting and video calls, wherever you are based.',
      },
      {
        question: 'What areas does KJ Management Accounting Solutions cover?',
        answer:
          'The team is based in Uddingston and works across Glasgow, South and North Lanarkshire, and further afield across the UK: see the full list on the Areas We Cover page.',
      },
    ],
  },
  {
    slug: 'womens-business-accountant',
    query: "women's business accountant",
    title: "Women's Business Accountant",
    dek: 'Financial clarity built for the way women actually run their businesses.',
    metaDescription:
      "A women's business accountant focused on financial confidence and clarity, not jargon. Meet Elaine Bryson, co-founder of KJ Management Accounting Solutions.",
    context:
      'A women’s business accountant, in Elaine’s view, is simply someone who takes the time to explain the numbers properly and treats you as a serious business owner from the first conversation, no assumptions, no talking down. That is the standard every client gets, whatever stage the business is at.',
    category: 'core',
    faqs: [
      {
        question: 'What makes Elaine different from a general practice accountant?',
        answer:
          'The focus and the approach: a smaller, dedicated client base means more time per client, and a deliberate emphasis on explaining the “why” behind the numbers, not just delivering a report.',
      },
      {
        question: 'How do I get started?',
        answer:
          'Book a free 30-minute call through Elaine’s Calendly link; there is no obligation, and it is a chance to see whether it is the right fit before anything is agreed.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-entrepreneurs',
    query: 'accountant for women entrepreneurs',
    title: 'Accountant for Women Entrepreneurs',
    dek: 'Support built for the realities of building a business from scratch.',
    metaDescription:
      'An accountant for women entrepreneurs who understands the realities of building a business from the ground up. Book a free consultation with Elaine.',
    context:
      'Entrepreneurs searching this term are usually past the very first stage: there is real revenue, real decisions to make about hiring or investing, and a growing need for numbers that can actually be trusted. Elaine works with women entrepreneurs at exactly this stage, turning bookkeeping and reporting into something that supports decisions rather than just satisfying HMRC.',
    category: 'core',
    faqs: [
      {
        question: 'At what stage should I bring in an accountant as an entrepreneur?',
        answer:
          'Earlier than most people think: getting bookkeeping and structure right from the start avoids a messy, expensive clean-up later, but Elaine also works with entrepreneurs at every later stage too.',
      },
      {
        question: 'Can Elaine help with decisions like hiring my first employee?',
        answer:
          'Yes, cash flow forecasting and budgeting are a core part of the service, which is exactly the kind of numbers-backed decision they are built for.',
      },
    ],
  },
  {
    slug: 'female-chartered-accountant-scotland',
    query: 'female chartered accountant Scotland',
    title: 'Female Chartered Accountant in Scotland',
    dek: 'A Chartered Accountant based in South Lanarkshire, working with clients across Scotland.',
    metaDescription:
      'Looking for a female Chartered Accountant in Scotland? Elaine Bryson is a Chartered Accountant and co-founder of KJ Management Accounting Solutions, based in South Lanarkshire.',
    context:
      'Some searches for this term are about qualifications specifically, wanting the assurance of a properly Chartered Accountant rather than an unregulated bookkeeper. Elaine is a Chartered Accountant, bringing that technical grounding to every client while keeping the conversation in plain English rather than accounting jargon.',
    category: 'core',
    faqs: [
      {
        question: 'Is Elaine a qualified Chartered Accountant?',
        answer:
          'Yes, Elaine is a Chartered Accountant and co-founder of KJ Management Accounting Solutions, based in Uddingston, South Lanarkshire.',
      },
      {
        question: 'Does being Chartered make a difference to the service I get?',
        answer:
          'It means the technical work (accounts, tax, compliance) is done to a professional standard you can rely on, while the day-to-day relationship stays personal and jargon-free.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-owned-business',
    query: 'accountant for a women-owned business',
    title: 'Accountant for a Women-Owned Business',
    dek: 'Proper financial management for businesses that are majority or fully women-owned.',
    metaDescription:
      'An accountant for a women-owned business who provides full bookkeeping, reporting and financial planning. Book a free call with Elaine Bryson.',
    context:
      'Whether the business is registered with a women-owned certification or simply founded and run by a woman, the finance needs are the same as any small business: accurate books, clear reporting, and a plan for cash flow and tax. Elaine builds that foundation first, then layers in the strategic support as the business grows.',
    category: 'core',
    faqs: [
      {
        question: 'Do you work with businesses that hold a formal women-owned certification?',
        answer:
          'Yes, the accounting and reporting needs are the same regardless of certification status, and Elaine is happy to support the record-keeping that certifications often require.',
      },
      {
        question: 'What is usually the first step for a new client?',
        answer:
          'A free 30-minute call to understand where the business is now and what is missing, followed by getting bookkeeping and systems set up properly before adding reporting on top.',
      },
    ],
  },
  {
    slug: 'accountant-who-understands-women-in-business',
    query: 'accountant who understands women in business',
    title: 'An Accountant Who Understands Women in Business',
    dek: 'No jargon, no talking down, just clear answers to the questions that actually matter.',
    metaDescription:
      'An accountant who understands women in business, no jargon, no assumptions, just clear financial guidance. Meet Elaine Bryson.',
    context:
      'This search usually comes after a frustrating experience with an accountant who explained things badly, or seemed more interested in ticking compliance boxes than actually helping. Elaine’s approach is built around the opposite: clear answers to the real questions (can I afford this hire, what happens if a client leaves, am I paying myself properly) explained without jargon.',
    category: 'core',
    faqs: [
      {
        question: 'What if I do not have a finance background?',
        answer:
          'That is the norm, not the exception, among Elaine’s clients: you are not expected to understand accounting, just your own business, and Elaine translates the numbers into that language.',
      },
      {
        question: 'Will I feel comfortable asking “basic” questions?',
        answer:
          'Yes, there is no such thing as a silly question in these conversations. Understanding your numbers properly is the whole point of the relationship.',
      },
    ],
  },
  {
    slug: 'best-accountant-for-female-founders',
    query: 'best accountant for female founders',
    title: 'Accountant for Female Founders',
    dek: 'Financial leadership for founders who are ready to grow with confidence.',
    metaDescription:
      'A dedicated accountant for female founders, offering financial clarity, cash flow planning and strategic support. Book a free consultation with Elaine.',
    context:
      '“Best” searches are really about fit rather than a ranking; the right accountant for a female founder is one who matches how far along the business is and how involved you want them to be. Elaine works closely with founders through every stage, from getting the basics right to acting as a virtual financial controller once the business has outgrown a spreadsheet.',
    category: 'core',
    faqs: [
      {
        question: 'How do I know if Elaine is the right fit for my business?',
        answer:
          'The free introductory call is designed exactly for this: a chance to talk through where the business is and what you need, with no obligation either way.',
      },
      {
        question: 'Does Elaine work with pre-revenue founders too?',
        answer:
          'Yes, though most clients are past the very earliest stage. Getting bookkeeping and structure set up correctly from day one is still valuable even before revenue is significant.',
      },
    ],
  },
  {
    slug: 'accountant-for-solo-female-entrepreneurs',
    query: 'accountant for solo female entrepreneurs',
    title: 'Accountant for Solo Female Entrepreneurs',
    dek: 'Support built for founders doing everything themselves.',
    metaDescription:
      'An accountant for solo female entrepreneurs: bookkeeping, tax and financial clarity for founders running the whole business alone.',
    context:
      'Running a business solo means the finance function usually falls to whatever time is left over, which is exactly the gap Elaine fills. Bookkeeping, VAT, annual accounts and cash flow are handled properly in the background, so a solo founder is not trying to be their own finance department on top of everything else.',
    category: 'core',
    faqs: [
      {
        question: 'I run everything myself, do I still need an accountant?',
        answer:
          'Most solo founders benefit hugely from handing off bookkeeping and compliance, freeing up time for the parts of the business only they can do, while getting reporting they can actually trust.',
      },
      {
        question: 'What if my business is still quite small?',
        answer:
          'Elaine works with businesses at every size, and getting the basics (clean bookkeeping, VAT, tax planning) right early on makes growth far smoother later.',
      },
    ],
  },
  {
    slug: 'female-bookkeeper-for-small-business',
    query: 'female bookkeeper for small business',
    title: 'Female Bookkeeper for Small Business',
    dek: 'Accurate, reconciled books kept current every month, not just at year end.',
    metaDescription:
      'Looking for a female bookkeeper for your small business? Elaine Bryson and the KJ Management team handle bookkeeping in Xero, reconciled monthly.',
    context:
      'Bookkeeping is often the first thing to slip when a business gets busy, and it is the foundation everything else (tax returns, management accounts, cash flow forecasts) depends on. Elaine’s team keeps books reconciled monthly in Xero, so the numbers are always current, not scrambled together at year end.',
    category: 'core',
    faqs: [
      {
        question: 'What does the bookkeeping service actually cover?',
        answer:
          'Recording and categorising transactions, reconciling the bank, and keeping VAT and tax records current: see the full Bookkeeping service page for details.',
      },
      {
        question: 'Do I need to already use Xero?',
        answer:
          'No, the team can help set up Xero if you are not already using it, or work within your existing system where practical.',
      },
    ],
    serviceAnchor: 'bookkeeping',
  },
  {
    slug: 'accountant-for-female-consultants',
    query: 'accountant for female consultants',
    title: 'Accountant for Female Consultants',
    dek: 'Financial support built around project-based, fee-earning consultancy work.',
    metaDescription:
      'An accountant for female consultants: handling bookkeeping, tax and cash flow around irregular, project-based income.',
    context:
      'Consultancy income is rarely smooth (a big invoice one month, nothing the next) which makes cash flow planning especially important. Elaine helps female consultants build a clear picture of income and outgoings across the year, so a quiet month never comes as a surprise.',
    category: 'core',
    faqs: [
      {
        question: 'How do you handle irregular consultancy income?',
        answer:
          'Through cash flow forecasting that looks beyond the current month, so you can see how quieter periods are covered by busier ones, and plan tax and drawings accordingly.',
      },
      {
        question: 'Should I operate as a sole trader or limited company as a consultant?',
        answer:
          'It depends on your income level and goals; this is exactly the kind of question worth discussing on a free introductory call before deciding.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-in-business-glasgow',
    query: 'accountant for women in business Glasgow',
    title: 'Accountant for Women in Business in Glasgow',
    dek: 'Working with women-led businesses across Glasgow, in person or remotely.',
    metaDescription:
      'An accountant for women in business in Glasgow; Elaine Bryson works with female founders across the city, remotely or in person from nearby Uddingston.',
    context:
      'Glasgow has one of the largest concentrations of small and growing businesses in the area KJ Management serves, including a strong base of women-led agencies, consultancies and service businesses. Elaine works with Glasgow-based clients through cloud accounting and video calls, with in-person meetings available given the short drive from the Uddingston base.',
    category: 'core',
    faqs: [
      {
        question: 'Do you work with businesses across all of Glasgow?',
        answer:
          'Yes, city centre, west end, south side and the wider commuter belt, either remotely or in person where useful.',
      },
      {
        question: 'Is there a general Glasgow accountancy page too?',
        answer:
          'Yes, see the main Accountancy & Finance Support in Glasgow page for the full service breakdown alongside this women-in-business focused page.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-in-business-scotland',
    query: 'accountant for women in business Scotland',
    title: 'Accountant for Women in Business in Scotland',
    dek: 'Supporting women-led businesses across Scotland, wherever you are based.',
    metaDescription:
      'An accountant for women in business across Scotland; Elaine Bryson works remotely with female founders nationwide, based in South Lanarkshire.',
    context:
      'Scotland-wide searches usually come from business owners outside the immediate Glasgow area who still want a Scottish, Chartered Accountant rather than a faceless national firm. Elaine works with clients right across Scotland through cloud accounting and video calls, so location within the country is rarely a barrier.',
    category: 'core',
    faqs: [
      {
        question: 'Do you work with clients outside South Lanarkshire and Glasgow?',
        answer:
          'Yes, clients across Scotland and further afield in the UK work with Elaine entirely remotely, using the same systems and level of service as local clients.',
      },
      {
        question: 'Is there a cost difference for clients based further away?',
        answer:
          'No, pricing is based on the work involved, not location, since most of the relationship runs through cloud accounting and video calls regardless.',
      },
    ],
  },

  // ---------- SERVICE ----------
  {
    slug: 'bookkeeping-for-women-owned-business',
    query: 'bookkeeping for a women-owned business',
    title: 'Bookkeeping for a Women-Owned Business',
    dek: 'Reconciled, accurate books kept current in Xero every month.',
    metaDescription:
      'Bookkeeping for a women-owned business: accurate, reconciled records kept current in Xero. Book a free call with Elaine Bryson.',
    context:
      'Good bookkeeping is invisible when it is done well: VAT returns are straightforward, tax time is not stressful, and management accounts are accurate because the underlying data is clean. That reliability is what Elaine’s bookkeeping service is built to deliver, month after month.',
    category: 'service',
    faqs: [
      {
        question: 'How often are the books updated?',
        answer:
          'Monthly, as standard, so you always have an accurate, current picture rather than reconstructing months of transactions at year end.',
      },
      {
        question: 'Does this include payroll?',
        answer:
          'Payroll and expense management sit alongside core bookkeeping; get in touch to discuss what your business specifically needs.',
      },
    ],
    serviceAnchor: 'bookkeeping',
  },
  {
    slug: 'cash-flow-planning-for-female-entrepreneurs',
    query: 'cash flow planning for female entrepreneurs',
    title: 'Cash Flow Planning for Female Entrepreneurs',
    dek: 'Know what is coming in and going out before it becomes a problem.',
    metaDescription:
      'Cash flow planning for female entrepreneurs: rolling forecasts that show what is coming before it becomes a problem. Book a free call with Elaine.',
    context:
      'Cash flow, not profit, is what actually keeps a business running day to day, and it is where a lot of founders feel least confident. Elaine builds rolling cash flow forecasts that make the next three, six or twelve months visible, so decisions about hiring, spending or investing are made with real numbers behind them.',
    category: 'service',
    faqs: [
      {
        question: 'How far ahead does a cash flow forecast typically look?',
        answer:
          'It varies by business, but rolling forecasts commonly cover three to twelve months, updated regularly as actual figures come in.',
      },
      {
        question: 'Is cash flow planning only useful for businesses in trouble?',
        answer:
          'No, it is just as valuable for healthy businesses planning growth, hiring or investment, giving confidence that a decision is affordable before it is made.',
      },
    ],
    serviceAnchor: 'cash',
  },
  {
    slug: 'financial-planning-for-women-in-business',
    query: 'financial planning for women in business',
    title: 'Financial Planning for Women in Business',
    dek: 'A clear plan for where the business is heading, backed by real numbers.',
    metaDescription:
      'Financial planning for women in business: budgeting, forecasting and strategic support from Elaine Bryson at KJ Management Accounting Solutions.',
    context:
      'Financial planning covers more than bookkeeping: it means setting realistic budgets, forecasting revenue and costs, and having a plan to test decisions against before committing to them. Elaine works through this with clients as an ongoing process, not a one-off exercise.',
    category: 'service',
    faqs: [
      {
        question: 'What is the difference between bookkeeping and financial planning?',
        answer:
          'Bookkeeping records what has already happened; financial planning uses that data, plus budgets and forecasts, to guide what happens next.',
      },
      {
        question: 'How often is the financial plan reviewed?',
        answer:
          'Typically alongside monthly management accounts, so the plan stays realistic and gets adjusted as the business actually performs.',
      },
    ],
    serviceAnchor: 'budgeting',
  },
  {
    slug: 'management-accounts-for-women-led-business',
    query: 'management accounts for a women-led business',
    title: 'Management Accounts for a Women-Led Business',
    dek: 'Monthly reporting that tells you what happened, and what to do next.',
    metaDescription:
      'Management accounts for a women-led business: monthly reporting with real insight, not just numbers. Book a free call with Elaine Bryson.',
    context:
      'A profit and loss report on its own does not tell you much unless someone helps you read it. Elaine’s monthly management accounts come with the context (profitability trends, cost control, where margin is being lost) so the numbers actually inform decisions.',
    category: 'service',
    faqs: [
      {
        question: 'What is included in a set of management accounts?',
        answer:
          'Typically a profit and loss report, balance sheet position and commentary on performance, tailored to what matters most for your business.',
      },
      {
        question: 'How is this different from what my accountant already sends me?',
        answer:
          'The focus on plain-English commentary and a monthly cadence; many businesses only see figures once a year at annual accounts time, which is too late to act on.',
      },
    ],
    serviceAnchor: 'management',
  },
  {
    slug: 'virtual-financial-controller-for-female-founders',
    query: 'virtual financial controller for female founders',
    title: 'Virtual Financial Controller for Female Founders',
    dek: 'Senior financial oversight without the cost of a full-time hire.',
    metaDescription:
      'A virtual financial controller for female founders: senior financial leadership on a part-time basis. Book a free call with Elaine Bryson.',
    context:
      'Once a business has outgrown basic bookkeeping but is not ready for a full-time finance hire, a virtual financial controller fills the gap: someone senior keeping an eye on cash flow, margin and reporting. Elaine takes on exactly this role for growing, founder-led businesses.',
    category: 'service',
    faqs: [
      {
        question: 'At what size of business does a virtual financial controller make sense?',
        answer:
          'There is no fixed threshold, but it is usually right once you have outgrown a spreadsheet and need someone senior involved regularly, not just at year end.',
      },
      {
        question: 'How much time does Elaine spend on this compared to a full-time hire?',
        answer:
          'A fraction of the time and cost of a full-time finance director, scaled to what the business actually needs.',
      },
    ],
    serviceAnchor: 'virtual',
  },
  {
    slug: 'budgeting-and-forecasting-for-women-in-business',
    query: 'budgeting and forecasting for women in business',
    title: 'Budgeting & Forecasting for Women in Business',
    dek: 'Budgets you will actually use, with variance reporting to keep you on track.',
    metaDescription:
      'Budgeting and forecasting for women in business: realistic budgets with variance reporting from Elaine Bryson at KJ Management Accounting Solutions.',
    context:
      'A budget only helps if it gets checked against reality; otherwise it is just a spreadsheet nobody looks at again. Elaine builds budgets that are actually used, then reviews them regularly against actual performance so drift gets caught early, not at year end.',
    category: 'service',
    faqs: [
      {
        question: 'How do you keep a budget realistic?',
        answer:
          'By basing it on your actual historic numbers and business plans rather than generic assumptions, and revisiting it as circumstances change.',
      },
      {
        question: 'What happens if actual figures diverge from the budget?',
        answer:
          'That is exactly what variance reporting is for: flagging the gap early so you can act, rather than discovering it months later.',
      },
    ],
    serviceAnchor: 'budgeting',
  },
  {
    slug: 'annual-accounts-for-female-sole-traders',
    query: 'annual accounts for female sole traders',
    title: 'Annual Accounts for Female Sole Traders',
    dek: 'Year-end accounts prepared and filed correctly, without the last-minute scramble.',
    metaDescription:
      'Annual accounts for female sole traders, prepared and filed with HMRC on time. Book a free consultation with Elaine Bryson.',
    context:
      'Sole trader accounts are often left until the deadline is looming, which is exactly when mistakes creep in. Elaine prepares annual accounts and self-assessment filings well ahead of deadlines, working from clean bookkeeping through the year rather than a rushed reconstruction in January.',
    category: 'service',
    faqs: [
      {
        question: 'When should I start my annual accounts?',
        answer:
          'As soon as your financial year ends, ideally: working from books that have been kept current all year makes the process far faster and less stressful.',
      },
      {
        question: 'Can Elaine help identify tax savings as part of this?',
        answer:
          'Yes, tax efficiency planning is part of the annual accounts service, looking for legitimate ways to reduce your tax bill.',
      },
    ],
    serviceAnchor: 'annual',
  },
  {
    slug: 'tax-return-help-for-female-business-owners',
    query: 'tax return help for female business owners',
    title: 'Tax Return Help for Female Business Owners',
    dek: 'Self-assessment and company tax handled correctly and on time.',
    metaDescription:
      'Tax return help for female business owners: self-assessment and company tax filed correctly and on time. Book a free call with Elaine Bryson.',
    context:
      'Tax deadlines do not move, and getting a return wrong or late brings penalties that are entirely avoidable. Elaine handles self-assessment and company tax filings for clients as part of the ongoing relationship, so nothing gets left to the last minute.',
    category: 'service',
    faqs: [
      {
        question: 'Do you handle both personal and company tax returns?',
        answer:
          'Yes, self-assessment for sole traders and directors, alongside company tax filings for limited companies.',
      },
      {
        question: 'What information do I need to provide?',
        answer:
          'If your bookkeeping is already up to date with the team, very little extra is needed; that is one of the main benefits of keeping books current through the year.',
      },
    ],
    serviceAnchor: 'annual',
  },
  {
    slug: 'accountant-for-women-returning-to-work-after-maternity-leave',
    query: 'accountant for women returning to work after maternity leave',
    title: 'Accountant for Women Returning to Business After Maternity Leave',
    dek: 'Getting your finances back under control after time away from the business.',
    metaDescription:
      'An accountant for women returning to their business after maternity leave: catching bookkeeping up and rebuilding a clear financial picture.',
    context:
      'Coming back to a business after maternity leave often means bookkeeping has fallen behind and the financial picture feels foggy. Elaine helps clients catch up cleanly, then puts a simple ongoing system in place so it does not happen again.',
    category: 'service',
    faqs: [
      {
        question: 'My bookkeeping is months behind, can you help catch it up?',
        answer:
          'Yes, this is a common starting point, and getting the backlog cleared properly is usually the first piece of work before anything else.',
      },
      {
        question: 'Can we set up a system so this is easier next time?',
        answer:
          'Yes, once caught up, most clients move to monthly bookkeeping and reporting so the numbers never build up into a backlog again.',
      },
    ],
  },
  {
    slug: 'maternity-leave-business-finance-planning',
    query: 'business finance planning around maternity leave',
    title: 'Business Finance Planning Around Maternity Leave',
    dek: 'Planning the numbers before you step away, so the business keeps running smoothly.',
    metaDescription:
      'Business finance planning around maternity leave: cash flow forecasting and financial preparation before you step away. Book a free call with Elaine.',
    context:
      'Planning finances before maternity leave (rather than during or after it) makes a real difference to how smoothly the business runs while you are away. Elaine works with clients on cash flow forecasting and financial preparation ahead of time, so there is a clear plan in place before you step back.',
    category: 'service',
    faqs: [
      {
        question: 'How far ahead should I start planning?',
        answer:
          'The earlier the better; a few months ahead gives time to build cash flow buffers and put reporting systems in place that do not rely on you being hands-on.',
      },
      {
        question: 'Can someone keep an eye on the numbers while I am away?',
        answer:
          'Yes, ongoing bookkeeping and management accounts continue regardless, so you come back to an accurate, up-to-date financial picture.',
      },
    ],
  },
  {
    slug: 'accountant-for-female-coaches-and-consultants',
    query: 'accountant for female coaches and consultants',
    title: 'Accountant for Female Coaches & Consultants',
    dek: 'Financial support built around service-based, client-facing businesses.',
    metaDescription:
      'An accountant for female coaches and consultants: bookkeeping, tax and cash flow support built around service-based businesses.',
    context:
      'Coaching and consultancy businesses tend to run on a mix of retainers, packages and one-off projects, which makes clear, current bookkeeping essential for knowing what you have actually earned versus what is still owed. Elaine keeps that picture clean so pricing and capacity decisions are based on real numbers.',
    category: 'service',
    faqs: [
      {
        question: 'Can you help me price my packages or retainers?',
        answer:
          'Elaine can help make sure your pricing is covering costs and delivering the margin you need, working from your actual cost and time data.',
      },
      {
        question: 'I mix one-off and recurring income, is that a problem?',
        answer:
          'Not at all; this is common among coaching and consultancy clients, and bookkeeping is set up to track both clearly.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-running-an-online-business',
    query: 'accountant for women running an online business',
    title: 'Accountant for Women Running an Online Business',
    dek: 'Bookkeeping and reporting built for online, e-commerce and digital businesses.',
    metaDescription:
      'An accountant for women running an online business: bookkeeping, VAT and reporting for e-commerce and digital businesses.',
    context:
      'Online businesses bring their own bookkeeping quirks (platform fees, multiple payment processors, digital VAT rules) that a generalist accountant can miss. Elaine works with clients running online and e-commerce businesses to keep this properly reconciled and reported.',
    category: 'service',
    faqs: [
      {
        question: 'Do you work with businesses selling through platforms like Etsy or Shopify?',
        answer:
          'Yes, reconciling platform payouts, fees and VAT correctly is a regular part of the bookkeeping work for online sellers.',
      },
      {
        question: 'What about digital VAT rules for online services?',
        answer:
          'These are factored into your bookkeeping and compliance setup where relevant: get in touch to discuss your specific situation.',
      },
    ],
  },
  {
    slug: 'accountant-for-female-led-agencies',
    query: 'accountant for a female-led agency',
    title: 'Accountant for a Female-Led Agency',
    dek: 'Financial oversight for growing, team-based service businesses.',
    metaDescription:
      'An accountant for a female-led agency: management accounts, payroll-adjacent reporting and financial oversight as your team grows.',
    context:
      'Agencies bring a different set of finance challenges once a team is involved (payroll, project margin, capacity planning) on top of the basics. Elaine supports female-led agencies through this stage with management accounts that show margin by client or project, not just overall revenue.',
    category: 'service',
    faqs: [
      {
        question: 'Can you show profitability by client or project?',
        answer:
          'Yes, this is one of the most useful things management accounts can show a growing agency, and it is built into the reporting where relevant.',
      },
      {
        question: 'Do you handle payroll for agency staff?',
        answer:
          'Payroll-adjacent reporting and expense management are part of the bookkeeping service: get in touch to discuss your specific setup.',
      },
    ],
  },
  {
    slug: 'pricing-strategy-support-for-women-in-business',
    query: 'pricing strategy support for women in business',
    title: 'Pricing Strategy Support for Women in Business',
    dek: 'Making sure your pricing actually covers costs and pays you properly.',
    metaDescription:
      'Pricing strategy support for women in business: making sure your prices cover costs and pay you what you are worth. Book a free call with Elaine.',
    context:
      'Underpricing is one of the most common issues Elaine sees among women in business: often built from a rough guess rather than actual cost and margin data. Working from real numbers, she helps clients check their pricing is sustainable, not just busy.',
    category: 'service',
    faqs: [
      {
        question: 'How do you help with pricing specifically?',
        answer:
          'By working through your actual costs, time and margin data so pricing decisions are based on numbers rather than guesswork or what competitors charge.',
      },
      {
        question: 'What if I think I am underpricing but I am not sure?',
        answer:
          'That is exactly the kind of question worth bringing to a management accounts review; the numbers will usually make it clear either way.',
      },
    ],
  },

  // ---------- SECTOR ----------
  {
    slug: 'accountant-for-women-in-beauty-industry',
    query: 'accountant for women in the beauty industry',
    title: 'Accountant for Women in the Beauty Industry',
    dek: 'Bookkeeping and financial support built for salons, clinics and beauty businesses.',
    metaDescription:
      'An accountant for women in the beauty industry: bookkeeping, VAT and cash flow support for salons, clinics and beauty businesses.',
    context:
      'Beauty businesses often mix product sales, treatments and sometimes rented chair or room income, which needs to be tracked separately for clean reporting and VAT. Elaine supports women running salons and beauty businesses with bookkeeping set up to reflect exactly how the business earns money.',
    category: 'sector',
    faqs: [
      {
        question: 'Do you work with businesses that rent chairs to self-employed stylists?',
        answer:
          'Yes, this is a common structure in the beauty industry, and bookkeeping is set up to keep rental income and treatment income clearly separated.',
      },
      {
        question: 'Can you help with VAT on product sales versus services?',
        answer:
          'Yes, VAT treatment can differ between products and services, and this is built into how your bookkeeping is categorised from the start.',
      },
    ],
  },
  {
    slug: 'accountant-for-female-hairdressers-and-salon-owners',
    query: 'accountant for female hairdressers and salon owners',
    title: 'Accountant for Female Hairdressers & Salon Owners',
    dek: 'Financial support for salon owners managing staff, stock and self-employed stylists.',
    metaDescription:
      'An accountant for female hairdressers and salon owners: bookkeeping, payroll-adjacent reporting and cash flow support.',
    context:
      'Running a salon usually means juggling stock, staff or chair renters, and unpredictable footfall, all of which need to show up clearly in the numbers. Elaine works with salon owners to keep this organised, so margin by stylist or service is visible, not guessed at.',
    category: 'sector',
    faqs: [
      {
        question: 'Can you track profitability by stylist or service?',
        answer:
          'Where the data supports it, yes; this kind of breakdown is exactly what management accounts are built to show.',
      },
      {
        question: 'Do you handle stock and product cost tracking?',
        answer:
          'Bookkeeping is set up to capture stock and product costs as part of your overall financial picture: get in touch to discuss your setup.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-in-wellness-and-coaching',
    query: 'accountant for women in wellness and coaching',
    title: 'Accountant for Women in Wellness & Coaching',
    dek: 'Financial clarity for practitioners, therapists and wellness coaches.',
    metaDescription:
      'An accountant for women in wellness and coaching: bookkeeping and financial planning for practitioners and wellness businesses.',
    context:
      'Wellness and coaching businesses often start small and grow organically, which means bookkeeping can be an afterthought until tax time arrives. Elaine helps wellness practitioners get a simple, reliable system in place early, so growth does not come with a paperwork headache attached.',
    category: 'sector',
    faqs: [
      {
        question: 'I am only just starting out, is it too early for an accountant?',
        answer:
          'No, getting bookkeeping and structure right from day one is far easier than untangling a year of mixed personal and business transactions later.',
      },
      {
        question: 'Do you work with practitioners who are also employed elsewhere?',
        answer:
          'Yes, many wellness and coaching businesses start alongside other work, and self-assessment tax handles this combination of income sources.',
      },
    ],
  },
  {
    slug: 'accountant-for-female-tradeswomen',
    query: 'accountant for tradeswomen',
    title: 'Accountant for Tradeswomen',
    dek: 'Bookkeeping and cash flow support for women running trades businesses.',
    metaDescription:
      'An accountant for tradeswomen: bookkeeping, VAT and cash flow planning built around materials, vehicles and job-based work.',
    context:
      'Trades businesses live and die by cash flow: materials, fuel, vehicle costs and staged payments all moving at once. Elaine supports tradeswomen with cash flow forecasting and job-level reporting, so margin per job is visible rather than lost in the overall numbers.',
    category: 'sector',
    faqs: [
      {
        question: 'Can you show profitability by job or contract?',
        answer:
          'Yes, where the underlying data supports it; this is one of the most valuable things management accounts can show a trades business.',
      },
      {
        question: 'Do you help with VAT on materials and CIS if relevant?',
        answer:
          'Bookkeeping and compliance are set up to reflect your specific trade and structure: get in touch to discuss whether CIS or other schemes apply to you.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-in-retail',
    query: 'accountant for women in retail',
    title: 'Accountant for Women in Retail',
    dek: 'Stock, margin and cash flow support for retail and independent shop owners.',
    metaDescription:
      'An accountant for women in retail: bookkeeping, stock and margin tracking, and cash flow support for shop owners.',
    context:
      'Retail businesses need to track stock and margin closely, on top of the usual bookkeeping and VAT requirements, especially with seasonal peaks and troughs to plan around. Elaine helps retail clients keep this visible, so pricing and stock decisions are based on real margin, not gut feel.',
    category: 'sector',
    faqs: [
      {
        question: 'Can you help plan for seasonal cash flow swings?',
        answer:
          'Yes, cash flow forecasting is particularly useful for retail businesses managing quiet and busy seasons, helping smooth out the gaps.',
      },
      {
        question: 'Do you work with both online and physical retail?',
        answer:
          'Yes, many retail clients sell through a mix of channels, and bookkeeping is set up to keep each one clearly reconciled.',
      },
    ],
  },
  {
    slug: 'accountant-for-female-etsy-sellers',
    query: 'accountant for female Etsy and handmade sellers',
    title: 'Accountant for Female Etsy & Handmade Sellers',
    dek: 'Bookkeeping built around marketplace fees, materials and small-batch production.',
    metaDescription:
      'An accountant for female Etsy and handmade sellers: bookkeeping for marketplace fees, materials costs and small-batch production.',
    context:
      'Marketplace selling brings its own bookkeeping details (platform fees, payment processor deductions, materials costs) that need untangling to see true profit per item. Elaine helps handmade and marketplace sellers get a clear view of what they are actually earning after every fee is accounted for.',
    category: 'sector',
    faqs: [
      {
        question: 'Do you understand how Etsy and similar marketplace payouts work?',
        answer:
          'Yes, reconciling marketplace payouts against fees and orders is a routine part of bookkeeping for sellers using these platforms.',
      },
      {
        question: 'Can you help me work out my actual profit per item?',
        answer:
          'Once materials, time and fees are properly tracked, this becomes straightforward to calculate and is genuinely useful for pricing decisions.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-running-a-cleaning-business',
    query: 'accountant for women running a cleaning business',
    title: 'Accountant for Women Running a Cleaning Business',
    dek: 'Bookkeeping and payroll-adjacent support for cleaning and property services businesses.',
    metaDescription:
      'An accountant for women running a cleaning business: bookkeeping, staff costs and cash flow planning for cleaning and property services.',
    context:
      'Cleaning and property services businesses often scale by adding staff or subcontractors, which brings payroll-adjacent reporting and margin-per-contract questions into focus quickly. Elaine helps owners in this sector keep control of costs as the team grows.',
    category: 'sector',
    faqs: [
      {
        question: 'Can you help track profitability per client or contract?',
        answer:
          'Yes, where the data supports it; this kind of breakdown helps identify which contracts are actually worth keeping as you grow.',
      },
      {
        question: 'What about managing staff or subcontractor costs?',
        answer:
          'Payroll-adjacent reporting and expense management are part of the bookkeeping service, tailored to how your team is structured.',
      },
    ],
  },
  {
    slug: 'accountant-for-female-virtual-assistants',
    query: 'accountant for female virtual assistants',
    title: 'Accountant for Female Virtual Assistants',
    dek: 'Simple, reliable bookkeeping for solo, service-based businesses.',
    metaDescription:
      'An accountant for female virtual assistants: simple bookkeeping, tax and cash flow support for solo, service-based businesses.',
    context:
      'Virtual assistant businesses are often lean and solo, which makes it tempting to skip proper bookkeeping; until tax time turns into a scramble. Elaine keeps this simple and current, so admin does not eat into the time you would rather spend on clients.',
    category: 'sector',
    faqs: [
      {
        question: 'My business is small, is it worth outsourcing bookkeeping?',
        answer:
          'For most solo service businesses, yes; it frees up time and avoids errors that are easy to make when bookkeeping is squeezed in around client work.',
      },
      {
        question: 'How much does this typically cost for a small business?',
        answer:
          'Pricing depends on the volume of transactions and services needed; this is best discussed on a free introductory call.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-in-childcare-business',
    query: 'accountant for women in a childcare business',
    title: 'Accountant for Women in a Childcare Business',
    dek: 'Financial support for childminders, nurseries and childcare providers.',
    metaDescription:
      'An accountant for women in a childcare business: bookkeeping and financial planning for childminders and nursery owners.',
    context:
      'Childcare businesses often have specific funding streams, government schemes and staff ratios to manage alongside the usual finance function. Elaine works with childcare providers to keep this all reconciled clearly, so funding income and costs are never mixed up with personal finances.',
    category: 'sector',
    faqs: [
      {
        question: 'Do you understand government childcare funding schemes?',
        answer:
          'Bookkeeping is set up to track funding income separately and clearly, whatever scheme your business is registered under: get in touch to discuss specifics.',
      },
      {
        question: 'Can you help with cash flow around seasonal enrolment changes?',
        answer:
          'Yes, cash flow forecasting is particularly useful for childcare businesses managing seasonal changes in enrolment.',
      },
    ],
  },
  {
    slug: 'accountant-for-female-interior-designers',
    query: 'accountant for female interior designers',
    title: 'Accountant for Female Interior Designers',
    dek: 'Project-based bookkeeping for design and styling businesses.',
    metaDescription:
      'An accountant for female interior designers: bookkeeping for project-based work, supplier costs and client billing.',
    context:
      'Interior design work often runs on project-based billing with supplier costs, deposits and staged invoices to track, which needs a bookkeeping system that reflects the project timeline, not just a monthly snapshot. Elaine helps interior designers keep project profitability clear from quote to completion.',
    category: 'sector',
    faqs: [
      {
        question: 'Can you track profitability per project?',
        answer:
          'Yes, where your data supports it; seeing margin by project is one of the most useful reports for a design business.',
      },
      {
        question: 'Do you handle supplier deposits and staged client payments?',
        answer:
          'Bookkeeping is set up to reflect exactly how your business invoices and pays suppliers: get in touch to discuss your specific workflow.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-in-hospitality',
    query: 'accountant for women in hospitality',
    title: 'Accountant for Women in Hospitality',
    dek: 'Cash flow and cost control for cafés, restaurants and hospitality businesses.',
    metaDescription:
      'An accountant for women in hospitality: cash flow planning, cost control and management accounts for cafés and hospitality businesses.',
    context:
      'Hospitality margins are tight and cash flow can swing sharply with footfall and seasonality, which makes clear, regular reporting essential rather than optional. Elaine supports hospitality business owners with cash flow forecasting and management accounts that flag cost pressures early.',
    category: 'sector',
    faqs: [
      {
        question: 'How do you help with tight margins in hospitality?',
        answer:
          'Management accounts break down cost of sales and overheads clearly, so you can see exactly where margin is being lost and act on it.',
      },
      {
        question: 'Can cash flow planning help with seasonal quiet periods?',
        answer:
          'Yes, this is one of the most valuable uses of cash flow forecasting for hospitality businesses, planning ahead for known quiet periods.',
      },
    ],
  },
  {
    slug: 'accountant-for-female-photographers',
    query: 'accountant for female photographers',
    title: 'Accountant for Female Photographers',
    dek: 'Bookkeeping for project and package-based creative businesses.',
    metaDescription:
      'An accountant for female photographers: bookkeeping for package-based bookings, equipment costs and seasonal income.',
    context:
      'Photography income often comes in seasonal bursts (weddings in summer, portraits at Christmas) alongside equipment costs that need planning for. Elaine helps photographers smooth this out with cash flow forecasting and clear bookkeeping around packages and deposits.',
    category: 'sector',
    faqs: [
      {
        question: 'How do you handle seasonal income swings?',
        answer:
          'Cash flow forecasting spreads seasonal income across the year, so quieter months are planned for rather than a surprise.',
      },
      {
        question: 'Can equipment purchases be planned for tax efficiently?',
        answer:
          'Yes, tax efficiency planning as part of annual accounts looks at timing and structuring larger equipment purchases sensibly.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-in-fitness-industry',
    query: 'accountant for women in the fitness industry',
    title: 'Accountant for Women in the Fitness Industry',
    dek: 'Financial support for personal trainers, studio owners and fitness businesses.',
    metaDescription:
      'An accountant for women in the fitness industry: bookkeeping and cash flow support for personal trainers and studio owners.',
    context:
      'Fitness businesses often mix membership income, class packages and one-off personal training, which needs clear categorisation to see what is actually driving revenue. Elaine helps studio owners and personal trainers keep this organised, so growth decisions are based on real numbers.',
    category: 'sector',
    faqs: [
      {
        question: 'Can you track which revenue streams are most profitable?',
        answer:
          'Yes, separating memberships, packages and one-off sessions in your bookkeeping makes this kind of breakdown possible in your management accounts.',
      },
      {
        question: 'Do you work with both studio owners and freelance trainers?',
        answer:
          'Yes, the service scales from a solo personal trainer up to a studio with staff and multiple revenue streams.',
      },
    ],
  },
  {
    slug: 'accountant-for-female-freelancers',
    query: 'accountant for female freelancers',
    title: 'Accountant for Female Freelancers',
    dek: 'Simple, reliable support for solo freelance businesses.',
    metaDescription:
      'An accountant for female freelancers: bookkeeping, tax and cash flow support built for solo, project-based income.',
    context:
      'Freelance income can be unpredictable, and it is easy to let bookkeeping slide when you are focused on client work. Elaine keeps things simple for freelancers: current books, a clear view of what tax is coming, and cash flow forecasting that smooths out quiet months.',
    category: 'sector',
    faqs: [
      {
        question: 'I am a freelancer with irregular income, can you still help?',
        answer:
          'Yes, irregular income is the norm for freelancers, and cash flow forecasting is specifically useful for planning around it.',
      },
      {
        question: 'Do you handle self-assessment tax for freelancers?',
        answer:
          'Yes, self-assessment tax returns are handled as part of the annual accounts and tax service.',
      },
    ],
    serviceAnchor: 'annual',
  },

  // ---------- GUIDANCE ----------
  {
    slug: 'financial-confidence-for-women-entrepreneurs',
    query: 'financial confidence for women entrepreneurs',
    title: 'Financial Confidence for Women Entrepreneurs',
    dek: 'Understanding your numbers is the fastest route to better business decisions.',
    metaDescription:
      'Financial confidence for women entrepreneurs: clear, plain-English explanations of your numbers. Book a free call with Elaine Bryson.',
    context:
      'Financial confidence does not come from a finance degree: it comes from having someone explain your own numbers clearly and consistently, until they make sense. That is the core of how Elaine works with clients: not just producing reports, but making sure you actually understand what they mean for your business.',
    category: 'guidance',
    faqs: [
      {
        question: 'How long does it take to feel confident with my numbers?',
        answer:
          'It varies, but most clients notice a real shift within a few months of regular management accounts reviews and straightforward explanations.',
      },
      {
        question: 'Do I need to learn accounting to feel confident?',
        answer:
          'No, the goal is understanding your business through the numbers, not becoming an accountant yourself.',
      },
    ],
  },
  {
    slug: 'how-much-should-i-pay-myself-as-a-female-business-owner',
    query: 'how much should I pay myself as a female business owner',
    title: 'How Much Should I Pay Myself as a Business Owner?',
    dek: 'A question worth answering with numbers, not guesswork.',
    metaDescription:
      'How much should you pay yourself as a business owner? Elaine Bryson helps clients work this out properly, based on cash flow and tax efficiency.',
    context:
      'This is one of the most common questions Elaine hears, and the honest answer is: it depends on your cash flow, tax position and business structure, not a rule of thumb. Working through your numbers properly (rather than guessing or paying yourself whatever is left over) usually reveals more room than owners expect, or flags a problem early.',
    category: 'guidance',
    faqs: [
      {
        question: 'Is there a standard percentage I should pay myself?',
        answer:
          'No reliable one: it depends on your profit, cash flow needs and tax structure, which is why this is best worked through with your actual numbers.',
      },
      {
        question: 'Does it matter if I am a sole trader or limited company?',
        answer:
          'Yes, the tax-efficient way to pay yourself differs significantly between the two, and this is worth discussing directly.',
      },
    ],
  },
  {
    slug: 'how-to-price-my-services-as-a-woman-owned-business',
    query: 'how to price my services as a woman-owned business',
    title: 'How to Price My Services',
    dek: 'Pricing built on real cost and margin data, not a guess.',
    metaDescription:
      'How to price your services properly: based on real cost and margin data, not guesswork. Book a free call with Elaine Bryson.',
    context:
      'Underpricing is one of the most common issues Elaine sees, usually because pricing was set early on and never revisited against actual costs and time. Working through your real numbers (materials, time, overheads) almost always reveals whether current pricing is sustainable.',
    category: 'guidance',
    faqs: [
      {
        question: 'How do I know if I am underpricing?',
        answer:
          'Compare your prices against your actual costs and the time each job or client takes: if margin is thin or negative once everything is counted, pricing likely needs to move.',
      },
      {
        question: 'Should I raise prices for existing clients too?',
        answer:
          'This is a business decision as much as a financial one, but the numbers can at least show you clearly what the impact would be either way.',
      },
    ],
  },
  {
    slug: 'how-to-read-a-profit-and-loss-statement-as-a-small-business-owner',
    query: 'how to read a profit and loss statement as a small business owner',
    title: 'How to Read a Profit & Loss Statement',
    dek: 'Understanding your P&L is the first step to using it.',
    metaDescription:
      'How to read a profit and loss statement as a small business owner: a plain-English guide from Elaine Bryson at KJ Management Accounting Solutions.',
    context:
      'A profit and loss statement shows revenue, costs and the profit left over for a given period, but the useful part is understanding trends and ratios, not just the bottom line. Elaine walks clients through their own P&L regularly, so it becomes a tool for decisions rather than a document that gets filed away unread.',
    category: 'guidance',
    faqs: [
      {
        question: 'What is the most important line on a P&L for a small business?',
        answer:
          'There is no single answer; it depends on your business, but gross margin (revenue minus direct costs) is usually the first place worth looking.',
      },
      {
        question: 'How often should I be reviewing my P&L?',
        answer:
          'Monthly is standard practice for businesses that want to catch issues early, rather than only seeing figures once a year.',
      },
    ],
  },
  {
    slug: 'do-i-need-an-accountant-as-a-sole-trader',
    query: 'do I need an accountant as a sole trader',
    title: 'Do I Need an Accountant as a Sole Trader?',
    dek: 'Not legally required, but usually worth it once the numbers get real.',
    metaDescription:
      'Do you need an accountant as a sole trader? Elaine Bryson explains when it is worth it, and what it actually saves you.',
    context:
      'Technically, no; sole traders can file their own self-assessment. In practice, most business owners find that the time saved, mistakes avoided and tax efficiencies identified more than cover the cost, especially once income grows beyond a very small, simple level.',
    category: 'guidance',
    faqs: [
      {
        question: 'At what income level does it become worth hiring an accountant?',
        answer:
          'There is no fixed threshold, but once your affairs involve more than a handful of simple transactions, the time saved usually outweighs the cost.',
      },
      {
        question: 'What can an accountant actually save me?',
        answer:
          'Time, avoided penalties for errors or missed deadlines, and often legitimate tax savings you might not know to claim yourself.',
      },
    ],
  },
  {
    slug: 'how-to-separate-personal-and-business-finances',
    query: 'how to separate personal and business finances',
    title: 'How to Separate Personal and Business Finances',
    dek: 'The single biggest improvement most small business owners can make.',
    metaDescription:
      'How to separate personal and business finances: a practical starting point from Elaine Bryson at KJ Management Accounting Solutions.',
    context:
      'Mixing personal and business spending is one of the most common issues Elaine sees, and it makes bookkeeping, tax and understanding true profitability far harder than it needs to be. A separate business bank account and card is the starting point; everything else in bookkeeping gets easier from there.',
    category: 'guidance',
    faqs: [
      {
        question: 'What is the very first step to separating my finances?',
        answer:
          'Open a dedicated business bank account and run every business transaction through it; this alone makes bookkeeping dramatically simpler.',
      },
      {
        question: 'What if my finances are already mixed together?',
        answer:
          'It can be untangled; this is a common starting point for new clients, and Elaine can help get things properly separated going forward.',
      },
    ],
  },
  {
    slug: 'cash-flow-tips-for-women-led-small-businesses',
    query: 'cash flow tips for women-led small businesses',
    title: 'Cash Flow Tips for Women-Led Small Businesses',
    dek: 'Practical starting points, from someone who reviews cash flow for a living.',
    metaDescription:
      'Cash flow tips for women-led small businesses, from Elaine Bryson at KJ Management Accounting Solutions. Book a free call for a proper review.',
    context:
      'Good cash flow management usually comes down to a few habits: invoicing promptly, forecasting ahead rather than just checking the bank balance, and building a buffer for quiet periods. Elaine works through this properly with clients using rolling cash flow forecasts tailored to the business, rather than generic advice.',
    category: 'guidance',
    faqs: [
      {
        question: 'What is the single biggest cash flow mistake small businesses make?',
        answer:
          'Only looking at the current bank balance rather than forecasting ahead: by the time a shortfall shows up in the balance, it is often too late to plan around it comfortably.',
      },
      {
        question: 'How much of a cash buffer should a small business aim for?',
        answer:
          'It depends on how variable your income is, which is exactly the kind of thing a proper cash flow forecast for your business will show.',
      },
    ],
    serviceAnchor: 'cash',
  },
  {
    slug: 'financial-mentor-for-female-business-owners',
    query: 'financial mentor for female business owners',
    title: 'Financial Mentor for Female Business Owners',
    dek: 'Someone in your corner to ask questions to, not just an accountant who appears once a year.',
    metaDescription:
      'Looking for a financial mentor for your business? Elaine Bryson works as an ongoing finance partner for female business owners, not a once-a-year accountant.',
    context:
      'Some business owners are looking for more than compliance: a genuine sounding board for financial decisions as they come up, not just once a year at tax time. This is how Elaine works with most clients: an ongoing relationship built around regular check-ins, not a single annual meeting.',
    category: 'guidance',
    faqs: [
      {
        question: 'Is this different from a normal accountant relationship?',
        answer:
          'Yes, most clients speak with Elaine far more regularly than once a year, which is what makes the mentoring, advisory side of the relationship possible.',
      },
      {
        question: 'What kind of decisions can I bring to these conversations?',
        answer:
          'Anything with a financial dimension (hiring, pricing, investment, whether a big expense is affordable) grounded in your actual numbers.',
      },
    ],
  },
  {
    slug: 'how-to-plan-for-tax-as-a-self-employed-woman',
    query: 'how to plan for tax as a self-employed woman',
    title: 'How to Plan for Tax as a Self-Employed Business Owner',
    dek: 'Avoiding the January scramble starts months earlier.',
    metaDescription:
      'How to plan for tax as a self-employed business owner: practical guidance from Elaine Bryson at KJ Management Accounting Solutions.',
    context:
      'Tax planning works best as an ongoing habit, not a scramble every January: setting aside a percentage of income as it comes in, and reviewing your position part-way through the year rather than waiting for the deadline. Elaine builds this into the regular bookkeeping relationship, so tax is never a surprise.',
    category: 'guidance',
    faqs: [
      {
        question: 'How much should I set aside for tax as I earn?',
        answer:
          'A common starting rule of thumb is around 25-30%, but your actual rate depends on total income and allowances: worth checking against your real numbers.',
      },
      {
        question: 'When should I start thinking about my tax return?',
        answer:
          'As soon as your financial year ends, ideally: working from bookkeeping that has been kept current makes the whole process faster and less stressful.',
      },
    ],
    serviceAnchor: 'annual',
  },
  {
    slug: 'accountant-for-women-only-networking-groups',
    query: "accountant for women's networking groups",
    title: "Accountant for Women's Networking Groups",
    dek: 'Speaking, workshops and financial guidance for female business networks.',
    metaDescription:
      "An accountant for women's networking groups: available for talks, workshops and guest sessions on financial confidence and business finance.",
    context:
      'Elaine is available to speak with women’s business networking groups on financial confidence, cash flow and the basics every founder should understand: whether as a guest speaker, a short workshop, or an informal Q&A session.',
    category: 'guidance',
    faqs: [
      {
        question: 'Does Elaine speak at networking events or run workshops?',
        answer:
          'Yes, get in touch via the contact page to discuss a talk or workshop for your group, whether in person or online.',
      },
      {
        question: 'What topics does Elaine typically cover?',
        answer:
          'Financial confidence, understanding your numbers, cash flow basics, and practical pricing, tailored to what the group wants to focus on.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-scaling-from-solo-to-team',
    query: 'accountant for women scaling from solo to a team',
    title: 'Accountant for Women Scaling From Solo to a Team',
    dek: 'Getting the finance function ready before your first hire, not after.',
    metaDescription:
      'An accountant for women scaling from solo to a team: cash flow, payroll-adjacent reporting and budgeting support. Book a free call with Elaine.',
    context:
      'Going from solo founder to employer is one of the biggest financial step-changes a business makes: new fixed costs, payroll, and a need for cash flow forecasting that actually accounts for the hire before it happens. Elaine works with clients through this transition, so the first hire is made with confidence, not crossed fingers.',
    category: 'guidance',
    faqs: [
      {
        question: 'How do I know if I can afford to hire someone?',
        answer:
          'A proper cash flow forecast that includes the full cost of the hire (salary, tax, National Insurance, any equipment) will show this clearly, rather than a rough guess.',
      },
      {
        question: 'What changes once I have staff, financially?',
        answer:
          'Payroll and related compliance become part of the picture, alongside more complex cash flow planning around fixed monthly costs.',
      },
    ],
  },
  {
    slug: 'is-it-worth-hiring-an-accountant-as-a-small-female-owned-business',
    query: 'is it worth hiring an accountant as a small female-owned business',
    title: 'Is It Worth Hiring an Accountant as a Small Business?',
    dek: 'Usually, yes, but it depends what you actually need.',
    metaDescription:
      'Is it worth hiring an accountant as a small business? Elaine Bryson breaks down what you actually get for the cost, and when it makes sense.',
    context:
      'The honest answer depends on what stage your business is at and how much time bookkeeping and compliance are currently costing you. For most small business owners, the time saved plus avoided errors and identified tax savings more than covers the cost, but it is worth discussing your specific situation rather than assuming.',
    category: 'guidance',
    faqs: [
      {
        question: 'What is the actual return on hiring an accountant?',
        answer:
          'Time saved, errors avoided, and often legitimate tax savings: the combined value usually outweighs the cost for businesses beyond the very earliest stage.',
      },
      {
        question: 'How do I find out what this would cost for my business?',
        answer:
          'The free introductory call is exactly for this: a no-obligation conversation about your business and what support would actually cost.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-in-business-edinburgh',
    query: 'accountant for women in business Edinburgh',
    title: 'Accountant for Women in Business in Edinburgh',
    dek: 'Supporting Edinburgh-based female founders remotely.',
    metaDescription:
      'An accountant for women in business in Edinburgh; Elaine Bryson works remotely with female founders across the city and the Lothians.',
    context:
      'Edinburgh-based business owners searching for this term are usually looking beyond a local high-street firm for someone with a genuine focus on women in business. Elaine works with Edinburgh clients entirely through cloud accounting and video calls, giving the same level of service as a client based five minutes from the Uddingston office.',
    category: 'guidance',
    faqs: [
      {
        question: 'Do you work with clients based in Edinburgh?',
        answer:
          'Yes, the majority of work happens remotely through cloud accounting and video calls, so Edinburgh and the wider Lothians are well within reach.',
      },
      {
        question: 'Is there a difference in service for clients outside South Lanarkshire?',
        answer:
          'No, the same bookkeeping, reporting and level of support applies wherever you are based in Scotland or the wider UK.',
      },
    ],
  },
  {
    slug: 'accountant-for-women-starting-a-business',
    query: 'accountant for women starting a business',
    title: 'Accountant for Women Starting a Business',
    dek: 'Getting the finance basics right from day one.',
    metaDescription:
      'An accountant for women starting a business: getting bookkeeping, structure and tax registration right from day one. Book a free call with Elaine.',
    context:
      'Starting a business brings a long list of first-time decisions (sole trader or limited company, when to register for VAT, how to set up bookkeeping) and getting these right early avoids a messy, costly clean-up later. Elaine works with women at exactly this stage, setting the finance function up properly from the start.',
    category: 'guidance',
    faqs: [
      {
        question: 'Should I register as a sole trader or limited company?',
        answer:
          'It depends on your expected income, liability considerations and plans for the business: worth discussing on a free introductory call before deciding.',
      },
      {
        question: 'What is the first financial thing I should set up?',
        answer:
          'A separate business bank account and a simple bookkeeping system from day one: everything else builds on having that foundation right.',
      },
    ],
  },
];

export function getWomenInBusinessQuery(slug: string) {
  return womenInBusinessQueries.find((entry) => entry.slug === slug);
}
