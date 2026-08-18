export type Area = {
  slug: string;
  name: string;
  region: string;
  postcode: string;
  /** Short, factual local hook — used under the H1 and in meta descriptions. */
  tagline: string;
  /** 2–3 sentence unique paragraph — why a business owner here would work with KJ Management. */
  summary: string;
  /** Business-relevant local context (business parks, commercial districts, transport links) — not tourist landmarks. */
  landmarks: string[];
  localFaqs: { question: string; answer: string }[];
  /** Slugs of other areas to cross-link from this one. */
  nearby: string[];
  /** Uddingston only — the founders' real base, framed honestly (not a branch network). */
  isFlagship?: boolean;
};

export const areas: Area[] = [
  {
    slug: 'uddingston',
    name: 'Uddingston',
    region: 'South Lanarkshire',
    postcode: 'G71',
    tagline: 'home turf, and home to Tunnock’s, one of Scotland’s best-known manufacturers',
    summary:
      'KJ Management Accounting Solutions is based in Uddingston, so this is where it all started. We work with sole traders and small limited companies across the town — from Main Street independents to trades and services operating out of the surrounding streets — combining the convenience of a local face with the efficiency of a fully cloud-based finance function.',
    landmarks: ['Tunnock’s factory', 'Main Street business community', 'Uddingston railway station'],
    localFaqs: [
      {
        question: 'Are you actually based in Uddingston?',
        answer:
          'Yes — Uddingston is where KJ Management Accounting Solutions is founded and run from. We work with local businesses in person where it helps, and through cloud accounting and video calls for everything else, so you get a local relationship without paying for office overheads you never see.',
      },
      {
        question: 'What size of Uddingston business do you work with?',
        answer:
          'Mostly sole traders and small limited companies — typically businesses with a handful of staff up to a few million in turnover — across sectors like trades, retail, marketing and professional services.',
      },
    ],
    nearby: ['bothwell', 'viewpark', 'tannochside', 'bellshill'],
    isFlagship: true,
  },
  {
    slug: 'bothwell',
    name: 'Bothwell',
    region: 'South Lanarkshire',
    postcode: 'G71',
    tagline: 'a few minutes from our Uddingston base, with a thriving independent Main Street',
    summary:
      'Bothwell sits a few minutes from our Uddingston base, and its mix of independent retailers, consultants and professional practices along Main Street is exactly the kind of business we built our virtual finance function for — owners who want proper management information without hiring a full finance team.',
    landmarks: ['Main Street independents', 'local professional practices'],
    localFaqs: [
      {
        question: 'Do you work with businesses in Bothwell specifically?',
        answer:
          'Yes. Bothwell is right next to our Uddingston base, so on-site visits are straightforward when they add value, alongside the same cloud-based reporting and bookkeeping we run for clients further afield.',
      },
    ],
    nearby: ['uddingston', 'blantyre'],
  },
  {
    slug: 'tannochside',
    name: 'Tannochside',
    region: 'South Lanarkshire',
    postcode: 'G71',
    tagline: 'home to Tannochside Business Park, on the edge of Uddingston',
    summary:
      'A lot of the trades, logistics and small manufacturing businesses we work with are based around Tannochside Business Park. These are businesses with real stock, vehicles and payroll to manage day-to-day, which makes clean bookkeeping and a monthly set of management accounts the difference between guessing and knowing where the cash is.',
    landmarks: ['Tannochside Business Park'],
    localFaqs: [
      {
        question: 'Do you support trades and logistics businesses based at Tannochside?',
        answer:
          'Yes — we work with several trades and logistics businesses in and around Tannochside Business Park, handling bookkeeping, payroll-adjacent reporting and monthly management accounts so owners can see margin by job or contract, not just at year end.',
      },
    ],
    nearby: ['uddingston', 'bellshill', 'viewpark'],
  },
  {
    slug: 'viewpark',
    name: 'Viewpark',
    region: 'South Lanarkshire',
    postcode: 'G71',
    tagline: 'the residential heart bordering Uddingston to the east',
    summary:
      'Viewpark is effectively an extension of Uddingston, and many of the small businesses run from home offices and lock-ups here are exactly who our virtual financial controller and bookkeeping services were designed for — owners doing everything themselves who need their numbers handled properly without hiring in-house.',
    landmarks: ['home-based businesses along Laighstonehall Road'],
    localFaqs: [
      {
        question: 'Can you help a sole trader working from home in Viewpark?',
        answer:
          'Yes — a large share of our client base is exactly this: sole traders and small limited companies run from a home office, who need bookkeeping, VAT and annual accounts handled reliably without the cost of a full-time finance hire.',
      },
    ],
    nearby: ['uddingston', 'tannochside', 'bellshill'],
  },
  {
    slug: 'bellshill',
    name: 'Bellshill',
    region: 'North Lanarkshire',
    postcode: 'ML4',
    tagline: 'the industrial and trades hub at the M8/M74 interchange',
    summary:
      'Bellshill’s position at the M8/M74 interchange has always made it a working town — trades, distribution and manufacturing businesses that live and die by cash flow. That is precisely the gap our cash flow planning and management accounting services fill: knowing what is coming in and going out before it becomes a problem, not after.',
    landmarks: ['Bellshill town centre', 'M8/M74 interchange'],
    localFaqs: [
      {
        question: 'Do you work with trades and manufacturing businesses in Bellshill?',
        answer:
          'Yes — Bellshill has a strong base of trades, distribution and manufacturing businesses, and cash flow forecasting alongside monthly management accounts is usually where we start, so owners can plan around materials, wages and supplier payments with confidence.',
      },
    ],
    nearby: ['uddingston', 'tannochside', 'motherwell', 'coatbridge'],
  },
  {
    slug: 'blantyre',
    name: 'Blantyre',
    region: 'South Lanarkshire',
    postcode: 'G72',
    tagline: 'a growing base of trades, care providers and professional practices',
    summary:
      'Blantyre has grown well beyond its mill-town roots into a mix of trades, care providers and small professional practices. We work with several Blantyre business owners who wanted more than a once-a-year accountant — a finance partner they can ask questions of throughout the year, not just when the tax return is due.',
    landmarks: ['High Blantyre local business community'],
    localFaqs: [
      {
        question: 'Is Blantyre within your local service area?',
        answer:
          'Yes — Blantyre is a short drive from our Uddingston base, so we can meet in person when it is useful, backed by the same cloud-based reporting and monthly accounts we provide to every client, local or remote.',
      },
    ],
    nearby: ['bothwell', 'hamilton'],
  },
  {
    slug: 'hamilton',
    name: 'Hamilton',
    region: 'South Lanarkshire',
    postcode: 'ML3',
    tagline: 'South Lanarkshire’s administrative and commercial centre',
    summary:
      'As South Lanarkshire’s administrative centre, Hamilton has a dense mix of professional services, retail and consultancy businesses. Owners here are often juggling compliance deadlines with genuine growth ambitions, which is exactly where our management accounting and budgeting & forecasting services earn their keep — turning HMRC and Companies House filings into a springboard rather than a chore.',
    landmarks: ['Hamilton town centre', 'South Lanarkshire Council headquarters'],
    localFaqs: [
      {
        question: 'Do you cover Hamilton and the surrounding area?',
        answer:
          'Yes — Hamilton is one of the larger towns in our South Lanarkshire service area, and we work with owners here across management accounting, annual accounts and virtual financial controller support.',
      },
    ],
    nearby: ['blantyre', 'motherwell', 'larkhall', 'east-kilbride'],
  },
  {
    slug: 'motherwell',
    name: 'Motherwell',
    region: 'North Lanarkshire',
    postcode: 'ML1',
    tagline: 'North Lanarkshire’s civic and commercial centre',
    summary:
      'Motherwell’s business base has diversified a long way from its steelmaking past into services, retail and growing SMEs. For owners here who have outgrown a spreadsheet but are not ready to hire a finance director, our virtual financial controller service gives them senior financial oversight at a fraction of the cost.',
    landmarks: ['Motherwell town centre', 'North Lanarkshire Council headquarters'],
    localFaqs: [
      {
        question: 'Can a growing Motherwell business use your virtual financial controller service?',
        answer:
          'Yes — this is one of our most requested services in Motherwell, for businesses that have outgrown basic bookkeeping and need someone senior keeping an eye on cash flow, margin and reporting without the cost of a full-time hire.',
      },
    ],
    nearby: ['bellshill', 'hamilton', 'wishaw', 'airdrie'],
  },
  {
    slug: 'rutherglen',
    name: 'Rutherglen',
    region: 'South Lanarkshire',
    postcode: 'G73',
    tagline: 'on Glasgow’s southern edge, with a strong Main Street and King Street business community',
    summary:
      'Rutherglen sits right on the boundary with Glasgow, and its Main Street and King Street business community reflects that — independent retailers, tradespeople and consultants who want a Scottish, ACCA-qualified accountant rather than a call centre. We handle bookkeeping and annual accounts here the same way we do for every client: reconciled monthly on cloud accounting software, no surprises at year end.',
    landmarks: ['Main Street', 'King Street'],
    localFaqs: [
      {
        question: 'Do you work with businesses in Rutherglen as well as Glasgow?',
        answer:
          'Yes — Rutherglen sits right on the edge of our Glasgow service area, and we support business owners here with the same bookkeeping, annual accounts and management accounting services as clients across South Lanarkshire.',
      },
    ],
    nearby: ['cambuslang', 'glasgow', 'clarkston'],
  },
  {
    slug: 'cambuslang',
    name: 'Cambuslang',
    region: 'South Lanarkshire',
    postcode: 'G72',
    tagline: 'a commuter town with a growing business park on the Clyde',
    summary:
      'Cambuslang’s mix of established trades and newer businesses at Cambuslang Investment Park means we see everything from first-year start-ups to companies preparing their first set of proper management accounts. Either way, our approach is the same: clean bookkeeping first, then reporting you can actually use to make decisions.',
    landmarks: ['Cambuslang Investment Park', 'Main Street'],
    localFaqs: [
      {
        question: 'Do you help start-ups in Cambuslang, not just established businesses?',
        answer:
          'Yes — we work with businesses at every stage, including first-year start-ups around Cambuslang Investment Park who need their bookkeeping and VAT set up correctly from day one.',
      },
    ],
    nearby: ['rutherglen', 'blantyre'],
  },
  {
    slug: 'glasgow',
    name: 'Glasgow',
    region: 'Greater Glasgow',
    postcode: 'G1–G5',
    tagline: 'Scotland’s largest city and its commercial centre',
    summary:
      'Glasgow is home to the largest concentration of small and growing businesses in our service area, from city-centre agencies and consultancies to e-commerce and tech businesses trading nationally. We work with Glasgow-based owners through cloud accounting and video calls where that suits them, or in person when a face-to-face meeting is worth the short drive from our Uddingston base.',
    landmarks: ['Glasgow city centre', 'Merchant City business district', 'Finnieston'],
    localFaqs: [
      {
        question: 'Do you work with businesses across Glasgow, or just the south side?',
        answer:
          'We work with businesses across the whole of Glasgow and its wider commuter belt — city centre, west end, south side and beyond — remotely via cloud accounting and video calls, with in-person meetings available given our base just outside the city.',
      },
    ],
    nearby: ['rutherglen', 'uddingston', 'paisley', 'bearsden', 'bishopbriggs', 'newton-mearns'],
  },
  {
    slug: 'wishaw',
    name: 'Wishaw',
    region: 'South Lanarkshire',
    postcode: 'ML2',
    tagline: 'a market town neighbouring Motherwell',
    summary:
      'Wishaw’s town centre and surrounding trading estates are home to a steady base of independent retailers, trades and healthcare-adjacent businesses. We support owners here with the same core mix as everywhere else in South Lanarkshire — reconciled bookkeeping, monthly management accounts, and annual accounts filed without a last-minute scramble.',
    landmarks: ['Wishaw town centre', 'local trading estates'],
    localFaqs: [
      {
        question: 'Do you take on new clients in Wishaw?',
        answer:
          'Yes — Wishaw sits within our core South Lanarkshire service area, and we work with sole traders and small limited companies here across bookkeeping, management accounting and annual accounts.',
      },
    ],
    nearby: ['motherwell', 'larkhall'],
  },
  {
    slug: 'larkhall',
    name: 'Larkhall',
    region: 'South Lanarkshire',
    postcode: 'ML9',
    tagline: 'a town of long-standing, family-run businesses south of Hamilton',
    summary:
      'Larkhall has a strong tradition of independent, family-run businesses, and that is who we tend to work best with — owners who built something themselves and want a finance partner who explains the numbers in plain English rather than jargon, with reporting that actually gets read.',
    landmarks: ['Larkhall Cross town centre'],
    localFaqs: [
      {
        question: 'Can you help a family-run business in Larkhall with its books?',
        answer:
          'Yes — bookkeeping and annual accounts for owner-managed businesses is core to what we do, and Larkhall is well within our South Lanarkshire service area.',
      },
    ],
    nearby: ['hamilton', 'wishaw'],
  },
  {
    slug: 'east-kilbride',
    name: 'East Kilbride',
    region: 'South Lanarkshire',
    postcode: 'G74–G75',
    tagline: 'Scotland’s largest post-war new town, with a major business base',
    summary:
      'East Kilbride has one of the biggest concentrations of established businesses and business parks in our service area, from long-standing manufacturers to newer professional services firms. For owners here who have outgrown a spreadsheet, our virtual financial controller and budgeting & forecasting services give them the senior financial oversight a growing business needs.',
    landmarks: ['East Kilbride business parks', 'The Plaza shopping and business district'],
    localFaqs: [
      {
        question: 'Do you work with established businesses in East Kilbride, not just start-ups?',
        answer:
          'Yes — East Kilbride has a strong base of established businesses, and a good number of our management accounting and virtual financial controller clients are based here.',
      },
    ],
    nearby: ['hamilton', 'strathaven'],
  },
  {
    slug: 'coatbridge',
    name: 'Coatbridge',
    region: 'North Lanarkshire',
    postcode: 'ML5',
    tagline: 'a trades and manufacturing town twinned with Airdrie',
    summary:
      'Coatbridge’s industrial heritage lives on in a modern base of trades, manufacturing and logistics businesses. These are owners for whom cash flow is everything — materials, wages and supplier terms all moving at once — which is exactly what our cash flow planning and bookkeeping services are built to keep on top of.',
    landmarks: ['Coatbridge town centre'],
    localFaqs: [
      {
        question: 'Do you support trades and manufacturing businesses in Coatbridge?',
        answer:
          'Yes — we work with trades and small manufacturing businesses across Coatbridge, typically starting with bookkeeping and cash flow forecasting before moving into monthly management accounts.',
      },
    ],
    nearby: ['airdrie', 'bellshill'],
  },
  {
    slug: 'airdrie',
    name: 'Airdrie',
    region: 'North Lanarkshire',
    postcode: 'ML6',
    tagline: 'Coatbridge’s twin town on the A8/M8 corridor',
    summary:
      'Airdrie’s position on the M8 corridor makes it a natural base for trades, distribution and retail businesses trading across the central belt. We work with several Airdrie owners on bookkeeping and annual accounts, freeing them up to run the business instead of chasing invoices and reconciling bank feeds.',
    landmarks: ['Airdrie town centre'],
    localFaqs: [
      {
        question: 'Is Airdrie within your service area?',
        answer:
          'Yes — Airdrie is part of our North Lanarkshire service area, and we support business owners here with bookkeeping, annual accounts and management accounting.',
      },
    ],
    nearby: ['coatbridge', 'motherwell'],
  },
  {
    slug: 'strathaven',
    name: 'Strathaven',
    region: 'South Lanarkshire',
    postcode: 'ML10',
    tagline: 'a market town known for independent retail and hospitality businesses',
    summary:
      'Strathaven’s business community leans towards independent retail, hospitality and rural enterprise, where seasonal cash flow can make or break a good year. Our cash flow planning and budgeting & forecasting services help owners here plan around the quiet months instead of being surprised by them.',
    landmarks: ['Strathaven town centre'],
    localFaqs: [
      {
        question: 'Do you work with seasonal or hospitality businesses in Strathaven?',
        answer:
          'Yes — cash flow planning is one of our most-used services with Strathaven’s independent retail and hospitality businesses, helping smooth out seasonal peaks and troughs.',
      },
    ],
    nearby: ['hamilton', 'larkhall'],
  },
  {
    slug: 'newton-mearns',
    name: 'Newton Mearns',
    region: 'East Renfrewshire',
    postcode: 'G77',
    tagline: 'an affluent suburb on Glasgow’s southern edge',
    summary:
      'Newton Mearns is home to a lot of professional services firms, consultants and healthcare practices — businesses where a polished set of monthly management accounts matters as much for client confidence as for the owner’s own decision-making. We build reporting that holds up to scrutiny, whether that is from a bank, an investor, or the owner themselves.',
    landmarks: ['The Avenue shopping centre', 'Mearns Cross'],
    localFaqs: [
      {
        question: 'Do you work with professional services businesses in Newton Mearns?',
        answer:
          'Yes — consultancies, healthcare practices and other professional services firms in Newton Mearns are a good fit for our management accounting and annual accounts services.',
      },
    ],
    nearby: ['clarkston', 'glasgow'],
  },
  {
    slug: 'clarkston',
    name: 'Clarkston',
    region: 'East Renfrewshire',
    postcode: 'G76',
    tagline: 'a suburban village community on Glasgow’s south side',
    summary:
      'Clarkston’s business owners tend to be exactly who benefits most from outsourced bookkeeping — busy running client-facing services with no time or appetite to also be the office finance function. We take that off their plate entirely, from bank reconciliation to VAT, and hand back a clean set of books every month.',
    landmarks: ['Clarkston Toll shopping area', 'Clarkston railway station'],
    localFaqs: [
      {
        question: 'Can you fully take bookkeeping off my hands as a Clarkston business owner?',
        answer:
          'Yes — that is the core of our bookkeeping service: recording and categorising transactions, reconciling the bank, and keeping VAT and tax records current, so Clarkston-based owners never have to touch a spreadsheet.',
      },
    ],
    nearby: ['newton-mearns', 'rutherglen'],
  },
  {
    slug: 'paisley',
    name: 'Paisley',
    region: 'Renfrewshire',
    postcode: 'PA1–PA3',
    tagline: 'Renfrewshire’s largest town, with a varied small business community near Glasgow Airport',
    summary:
      'Paisley has one of the biggest and most varied small business communities west of Glasgow, from long-standing retailers to businesses trading through Glasgow Airport just up the road. We work with Paisley owners entirely through cloud accounting and video calls, giving them the same finance function as a client based five minutes from our door.',
    landmarks: ['Paisley town centre', 'Glasgow Airport'],
    localFaqs: [
      {
        question: 'Do you work remotely with businesses based in Paisley?',
        answer:
          'Yes — the majority of our Paisley clients work with us entirely remotely, using cloud accounting software and video calls for everything from bookkeeping to monthly management accounts reviews.',
      },
    ],
    nearby: ['glasgow'],
  },
  {
    slug: 'bearsden',
    name: 'Bearsden',
    region: 'East Dunbartonshire',
    postcode: 'G61',
    tagline: 'an affluent suburb north-west of Glasgow, home to consultancies and professional practices',
    summary:
      'Bearsden’s business owners are often running consultancies, clinics or professional practices where a credible year-end position matters for mortgages, funding or simply peace of mind. Our annual accounts and management accounting services are built to give that clarity, prepared and filed correctly, on time, every year.',
    landmarks: ['Bearsden Cross'],
    localFaqs: [
      {
        question: 'Do you prepare annual accounts for Bearsden-based professional practices?',
        answer:
          'Yes — annual accounts and tax-efficient planning for consultancies and professional practices in Bearsden is a regular part of our work, prepared and filed with HMRC and Companies House on time.',
      },
    ],
    nearby: ['glasgow', 'bishopbriggs'],
  },
  {
    slug: 'bishopbriggs',
    name: 'Bishopbriggs',
    region: 'East Dunbartonshire',
    postcode: 'G64',
    tagline: 'Glasgow’s northern suburb, just off the M8 and A803',
    summary:
      'Bishopbriggs sits close enough to Glasgow city centre that a lot of the businesses here trade directly with it, while still wanting a finance partner who feels local rather than corporate. We keep that same personal approach — direct access to the person doing your accounts, not a rotating case-handler queue.',
    landmarks: ['Bishopbriggs town centre', 'Kirkintilloch Road business corridor'],
    localFaqs: [
      {
        question: 'Will I deal with the same person each time as a Bishopbriggs client?',
        answer:
          'Yes — every client works directly with our founders, Kieran and Elaine, rather than being passed between different case-handlers, which is exactly what Bishopbriggs owners tell us they were missing from a larger firm.',
      },
    ],
    nearby: ['glasgow', 'bearsden'],
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
