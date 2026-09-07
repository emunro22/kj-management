import type { Service } from './services';
import type { Area } from './areas';

/**
 * Per area-and-service copy for /areas/[area]/[service].
 *
 * These 154 pages were built from one template holding a shared
 * `service.intro` and `service.points`, with only the area name and
 * `area.summary` varying. Measured across the built HTML, any two of them for
 * the same service shared 55-57% of their 8-word phrases, and Search Console
 * was reporting the bulk of them as "Discovered/Crawled - currently not
 * indexed": Google had seen them and declined to index a template refilled
 * with a different town name.
 *
 * Each entry below is written for one specific town and one specific service,
 * grounded in the local business mix already described in `areas.ts`, so the
 * page says something a reader in that town could not get from the generic
 * service page. Keyed `${areaSlug}:${serviceSlug}`.
 */
export type AreaServiceAngle = {
  /** 60-90 words tying this service to this town's actual business make-up. */
  angle: string;
  /** One question a business owner in this town would genuinely ask about this service. */
  faq: { question: string; answer: string };
};

export type AngleKey = `${Area['slug']}:${Service['slug']}`;

export const areaServiceAngles: Record<string, AreaServiceAngle> = {
  'uddingston:management': {
    angle:
      'Most of the Uddingston businesses we produce monthly accounts for are Main Street independents and trades operating out of the surrounding streets, and the question is almost always the same: which parts of the week actually make money. A monthly pack splits the result by income stream rather than leaving it as one figure, so a shop can see the difference between counter trade and orders, and a trade can see which jobs carry the margin.',
    faq: {
      question: 'Can we go through our management accounts in person in Uddingston?',
      answer:
        'Yes. Uddingston is where the firm is based, so if you would rather sit down with the pack and talk through it face to face, that is straightforward to arrange. Plenty of clients prefer a video call and the same conversation happens either way.',
    },
  },
  'uddingston:annual': {
    angle:
      'Uddingston has a steady stream of businesses making the step from sole trader to limited company, and the first set of statutory accounts is usually where the differences land: a company year end, a Companies House filing date, a corporation tax return and a director’s loan account that nobody mentioned. We prepare the accounts and explain what changed, rather than sending a PDF and a signature request.',
    faq: {
      question: 'We are an Uddingston sole trader thinking of incorporating. When should we talk?',
      answer:
        'Before the switch rather than after. The timing of your year end, how you take money out, and what happens to existing equipment all get easier to structure if they are decided up front instead of unpicked at the first year end.',
    },
  },
  'uddingston:cash': {
    angle:
      'For the trades and service businesses around Uddingston, cash rarely fails because the work is unprofitable. It fails on timing: materials and subcontractors paid this week, the customer invoice settled in six. A forecast that lays the next twelve weeks out properly shows that squeeze while there is still room to stage a supplier payment or chase a debtor, instead of the week the wages run.',
    faq: {
      question: 'We are busy but always short of cash. Is that normal for an Uddingston trade business?',
      answer:
        'It is extremely common, and it is a timing problem rather than a profit problem. Growth makes it worse, because you fund more materials and labour before any of the new work pays. A weekly or monthly forecast is what makes it visible early enough to manage.',
    },
  },
  'uddingston:budgeting': {
    angle:
      'Uddingston retail and hospitality does not earn evenly across the year, so a budget split into twelve equal months tells you almost nothing. We phase the plan around how trade actually falls locally, then track each month against it, so a quiet February reads as expected rather than as a crisis and a strong December is measured against what it should have delivered.',
    faq: {
      question: 'Our takings swing a lot month to month. Does a budget still work?',
      answer:
        'It works better, provided it is phased. The point of the budget is to encode the swing you expect, so the only thing that shows up as a variance is a genuine departure from it rather than the normal shape of your year.',
    },
  },
  'uddingston:financial': {
    angle:
      'When an Uddingston business goes for lending, whether that is a van, a fit-out or a step into a bigger unit, the lender wants to see the repayment modelled against realistic trading rather than asserted. We build the projections from your own figures, show the assumptions plainly, and stress the downside, which is the version that survives a credit committee.',
    faq: {
      question: 'What do we need before approaching a lender?',
      answer:
        'Up-to-date accounts, a forecast that reconciles to them, and a clear statement of what the money buys and how it gets repaid. Applications usually stall on the third point, because the numbers show the borrowing but not the return that services it.',
    },
  },
  'uddingston:bookkeeping': {
    angle:
      'Because we are based in Uddingston, handover can be as simple as dropping paperwork in, though in practice most local clients moved to photographing receipts against the transaction years ago. Either way the work is the same: reconciled monthly, coded consistently, and kept current enough that the VAT return and the year end are summaries of records that already exist.',
    faq: {
      question: 'Do we need to bring paperwork to you in Uddingston?',
      answer:
        'No. Everything runs through cloud software, so receipts and invoices can be captured on a phone as they happen. Being local simply means dropping something in is an option if you would rather.',
    },
  },
  'uddingston:virtual': {
    angle:
      'The usual trigger in Uddingston is an owner still doing the books at night while the business has grown past the point where that is sensible. A virtual financial controller takes the reporting, the forecasting and the month-end discipline off you, at a few days a month rather than a salary, and gives you someone to think through the decisions with.',
    faq: {
      question: 'Is our Uddingston business big enough for a financial controller?',
      answer:
        'It is about complexity rather than size. Once there is payroll, more than one income stream, or a real gap between doing work and being paid for it, the numbers stop being obvious and start needing to be produced properly.',
    },
  },
  'bothwell:management': {
    angle:
      'Bothwell has a high concentration of consultants and professional practices billing for time, and for them the number that matters is recoverable hours against capacity, not turnover. We build the monthly pack around utilisation and fee margin by client, which is usually where it emerges that the largest account is also the one absorbing the most unbilled time.',
    faq: {
      question: 'We are a Bothwell consultancy. What should our management accounts actually show?',
      answer:
        'Fee income and margin by client or engagement, time recovered against time available, and where write-offs are happening. Turnover on its own hides the two things that decide whether a practice is profitable.',
    },
  },
  'bothwell:annual': {
    angle:
      'A lot of Bothwell’s professional practices run as small limited companies with one or two director-shareholders, so the year end is as much about how money came out of the company as what it earned. Salary and dividend splits, the director’s loan position and the tax that follows are worth settling before the year closes, not after.',
    faq: {
      question: 'Do you handle the directors’ personal tax as well as the company accounts?',
      answer:
        'Yes, and they are best looked at together. How you draw money from the company changes both the company position and your own, so treating them as two unrelated jobs tends to cost more than it saves.',
    },
  },
  'bothwell:cash': {
    angle:
      'Bothwell’s Main Street food, retail and hospitality businesses take money daily but pay out on very different rhythms: stock weekly, staff monthly, rent quarterly, VAT quarterly. A forecast built to that shape shows which weeks are genuinely tight, rather than the reassuring but useless picture you get from looking at a healthy till at the end of a good Saturday.',
    faq: {
      question: 'Takings look fine but the quarter end always hurts. Why?',
      answer:
        'Because the quarterly costs, rent and VAT in particular, land on top of the normal weekly and monthly outgoings. A forecast that places them in the right week shows the pinch a month or two out, which is when you can still do something about it.',
    },
  },
  'bothwell:budgeting': {
    angle:
      'For Bothwell’s independent retailers, the budget question is usually about stock and staffing: how much to hold and how many hours to roster against a season you are predicting rather than observing. Setting a phased plan and then reviewing the variance monthly turns those into decisions you adjust with evidence rather than a judgement made once in advance.',
    faq: {
      question: 'How far ahead should an independent retailer budget?',
      answer:
        'A full year, phased by month, so seasonal buying and staffing are planned against it. Then review monthly against actuals so the back half of the year is corrected by what the first half actually did.',
    },
  },
  'bothwell:financial': {
    angle:
      'Practice expansion in Bothwell tends to mean taking on an additional fee earner or buying into a partnership, and both are questions about whether the additional capacity fills fast enough to cover its own cost. We model the ramp explicitly, including the months where the cost is live and the fees are not yet, which is the part that is usually assumed away.',
    faq: {
      question: 'How do we work out whether we can afford another fee earner?',
      answer:
        'By modelling the gap. Salary starts immediately, billable work builds over months, and the answer depends almost entirely on how long that build takes and what your cash position tolerates in the meantime.',
    },
  },
  'bothwell:bookkeeping': {
    angle:
      'Bothwell’s hospitality and retail businesses generate card settlements, delivery platform payouts and daily takings that all have to reconcile back to the bank, and it is the kind of volume that quietly falls behind. Doing it weekly rather than at the quarter end keeps the VAT return straightforward and keeps the sales figure something you can trust mid-month.',
    faq: {
      question: 'Our card and delivery platform payments are a mess to reconcile. Can you take that on?',
      answer:
        'Yes, that is routine work. Platform payouts arrive net of fees and on a delay, which is exactly why they drift out of line with the sales figure unless someone reconciles them consistently.',
    },
  },
  'bothwell:virtual': {
    angle:
      'Bothwell consultancies that have grown past the founder tend to reach a point where someone needs to own the numbers without that being a full finance hire. A virtual financial controller sets the monthly rhythm, keeps the forecast honest and sits in on the decisions about pricing and hiring, for a fraction of the cost of the salary the role would otherwise command.',
    faq: {
      question: 'What does a virtual financial controller do that our accountant does not?',
      answer:
        'Compliance work looks backwards and happens once a year. A controller runs the monthly reporting, owns the forecast, and is involved in decisions before they are made rather than reporting on them afterwards.',
    },
  },
  'tannochside:management': {
    angle:
      'The businesses around Tannochside Business Park carry stock, vehicles and payroll, which means the gap between turnover and profit is wide and easy to misread. We report gross margin by job or contract rather than in total, because on this kind of work the busiest month and the most profitable month are frequently not the same one.',
    faq: {
      question: 'We are on Tannochside Business Park. Can you report profit by contract?',
      answer:
        'Yes, and for stock and vehicle-heavy businesses it is usually the only view that answers the real question. Total margin averages your best and worst work together and hides both.',
    },
  },
  'tannochside:annual': {
    angle:
      'Plant, vehicles and equipment dominate the balance sheet for most Tannochside Business Park operations, so the year end turns on how that spend is treated: what qualifies for capital allowances, what is deductible now, and how finance agreements are reflected. Getting it right changes the tax bill materially, and it is decided by how the year was recorded, not by what is claimed afterwards.',
    faq: {
      question: 'We bought vehicles and equipment this year. Does that reduce our tax bill?',
      answer:
        'Usually yes, but how much and in which year depends on what was bought and how it was financed. It is worth raising before the year end, because some of the options close once the year has closed.',
    },
  },
  'tannochside:cash': {
    angle:
      'Cash around Tannochside Business Park is squeezed from both ends: fuel, materials and subcontractors go out early, while commercial customers settle on their own terms weeks later, and vehicle finance goes out regardless. A weekly forecast is what turns that from a recurring surprise into something scheduled, particularly through a growth period when the funding gap widens before the revenue lands.',
    faq: {
      question: 'How far ahead should a logistics or trade business forecast cash?',
      answer:
        'Twelve weeks in detail, with a rougher view beyond that. Fuel, wages and finance payments are near-certain and weekly, so a monthly-only view smooths over exactly the weeks that are tight.',
    },
  },
  'tannochside:budgeting': {
    angle:
      'Fuel and material prices move in a way that quietly destroys a Tannochside operator’s margin, because quoted work is priced on last quarter’s costs. Budgeting the input cost explicitly, then tracking the variance monthly, is what turns a slow margin erosion into something you notice in month two and reprice, rather than something you discover at the year end.',
    faq: {
      question: 'Costs keep rising but our prices are fixed by quote. What can budgeting do?',
      answer:
        'It makes the erosion visible fast. If the budget assumed a fuel or material cost and the actual is above it, that shows up as a specific monthly variance, which tells you to reprice new quotes long before the year-end accounts would.',
    },
  },
  'tannochside:financial': {
    angle:
      'Fleet and equipment decisions at Tannochside Business Park are usually financed, and the real question is whether the additional capacity earns more than the monthly repayment costs across a realistic utilisation rate. We model it at the utilisation you actually achieve rather than the one the purchase assumes, and show what happens if it runs below that.',
    faq: {
      question: 'How do we decide whether another vehicle pays for itself?',
      answer:
        'Model the repayment, running costs and driver cost against the revenue it realistically wins, then test it at lower utilisation. Most of these decisions look fine at full use and only get difficult in the quieter months.',
    },
  },
  'tannochside:bookkeeping': {
    angle:
      'Purchase invoices, fuel cards, subcontractor payments and CIS deductions generate real transaction volume for Tannochside businesses, and it is the kind of volume that becomes unrecoverable if it is left. Keeping it reconciled monthly is what makes the VAT return routine and, more usefully, what makes job-level margin reporting possible at all.',
    faq: {
      question: 'Do you handle CIS deductions for subcontractors?',
      answer:
        'Yes. CIS needs to be deducted, recorded and reported correctly each month, and because it interacts with both your VAT position and the subcontractor’s, it is worth keeping current rather than reconstructing later.',
    },
  },
  'tannochside:virtual': {
    angle:
      'A Tannochside operation running stock, vehicles, a payroll and CIS has more finance function than an owner can sensibly carry alongside running the work. A virtual financial controller owns the month end, the forecast and the reporting, and is the person who spots that a contract has stopped covering its costs before it has done so for two more quarters.',
    faq: {
      question: 'We have payroll, stock and CIS. Is that enough to need a controller?',
      answer:
        'That combination is usually the point where it pays for itself. Each one on its own is manageable; together they generate enough month-end work and enough risk of error that having someone own it becomes cheaper than not.',
    },
  },
  'viewpark:management': {
    angle:
      'Viewpark is largely home-based businesses and sole traders, and full monthly management accounts are genuinely overkill for a lot of them. What tends to earn its keep is a lighter quarterly view: what came in, what it cost, what is left, and whether the drawings you are taking are actually supported by the profit rather than by timing.',
    faq: {
      question: 'We are a small home-based Viewpark business. Do we need management accounts?',
      answer:
        'Often not monthly ones. A quarterly review is usually the right level until there is payroll or a second income stream. We would rather tell you that than sell you a monthly pack you do not need.',
    },
  },
  'viewpark:annual': {
    angle:
      'For most Viewpark businesses the annual filing is a Self Assessment return rather than company accounts, and the recurring issues are the same: expenses that were never recorded, use of home not claimed properly, and a tax bill that arrives without anything set aside for it. Getting the records right through the year is what makes the return uneventful.',
    faq: {
      question: 'Can I claim for working from home in Viewpark?',
      answer:
        'Yes, there are established ways to claim a proportion of household costs, and which method suits you depends on how much of the property is used and how often. It is one of the most commonly under-claimed items for home-based businesses.',
    },
  },
  'viewpark:cash': {
    angle:
      'Income for a home-based Viewpark business is often irregular, and the practical risk is not insolvency but spending money that was really the tax. A simple forecast that separates what is genuinely yours from what is owed to HMRC, and shows the quiet months ahead, is usually all the cash planning a business at this stage needs.',
    faq: {
      question: 'How much should I set aside for tax?',
      answer:
        'It depends on your profit and whether you are VAT registered, but the important part is that it leaves the main account as it is earned. Money sitting in one balance gets spent, regardless of what it was for.',
    },
  },
  'viewpark:budgeting': {
    angle:
      'The budget that actually helps a Viewpark sole trader is a personal one as much as a business one: what the business needs to make for the drawings you take to be sustainable. Working back from household requirements to a monthly income target makes pricing and workload decisions concrete instead of a hope that it all works out.',
    faq: {
      question: 'How do I work out what to pay myself?',
      answer:
        'Start from what the household needs, add tax, and that gives you the profit the business has to make. If the current pricing and workload cannot produce it, that is the thing to address rather than the drawings.',
    },
  },
  'viewpark:financial': {
    angle:
      'Home-based Viewpark businesses rarely need investor-grade modelling, but they do often need projections for something specific: a mortgage application, a small equipment loan, or evidence of sustainable income. That is a narrower job, built from your actual returns and forecast forward on defensible assumptions, and it is worth doing properly because these applications turn on credibility.',
    faq: {
      question: 'I need to show income for a mortgage. Can you help?',
      answer:
        'Yes. Lenders typically want your filed returns plus a view of current-year trading, and self-employed applications often stall on evidence rather than the underlying figures. Preparing it properly beforehand makes a real difference.',
    },
  },
  'viewpark:bookkeeping': {
    angle:
      'The single change that makes the most difference for a Viewpark home-based business is separating business and personal spending, because untangling one account afterwards costs far more than a second account ever would. After that it is habit: capture receipts as they happen, code consistently, and reconcile monthly so nothing has to be reconstructed from memory.',
    faq: {
      question: 'Do I really need a separate business bank account as a sole trader?',
      answer:
        'You are not legally required to as a sole trader, but it is the difference between straightforward bookkeeping and an expensive untangling exercise. It also makes claiming what you are entitled to much easier to evidence.',
    },
  },
  'viewpark:virtual': {
    angle:
      'Most Viewpark businesses are not at the stage where a virtual financial controller makes sense, and we will say so. It becomes relevant when a home-based business takes on staff, opens a second income stream, or moves into premises, because that is the point where the reporting stops being something you can carry in your head.',
    faq: {
      question: 'When would a home-based business need a financial controller?',
      answer:
        'Usually not until there is payroll or premises. Before that, good bookkeeping and a quarterly review generally cover it, and we would rather move you up when the business needs it than before.',
    },
  },
  'bellshill:management': {
    angle:
      'Bellshill’s position at the M8/M74 interchange means a lot of distribution, haulage and industrial operators, where revenue is large, margins are thin, and a percentage point matters more than it would elsewhere. Monthly accounts reported by contract or route show which work is carrying the business and which is being subsidised by it.',
    faq: {
      question: 'Our margins are thin. Does monthly reporting justify itself?',
      answer:
        'It matters more, not less. When the margin is a few percent, a small unnoticed slip wipes out the profit on a contract, and an annual view finds that eleven months too late to renegotiate anything.',
    },
  },
  'bellshill:annual': {
    angle:
      'For Bellshill’s industrial and distribution businesses the year end is dominated by asset treatment: vehicles, plant, finance agreements and the allowances that attach to them. These decisions are effectively made during the year by how transactions are recorded, so the accounts are far more straightforward when the underlying bookkeeping has been kept with the year end in mind.',
    faq: {
      question: 'How are vehicles on finance treated in our accounts?',
      answer:
        'It depends on the agreement type, which changes both the balance sheet treatment and what you can claim. Getting the agreements reviewed rather than assumed is worth doing, because the difference is usually significant.',
    },
  },
  'bellshill:cash': {
    angle:
      'Bellshill operators pay fuel and drivers weekly while commercial customers settle on 60-day terms, and vehicle finance goes out on a fixed date regardless of whether anyone has paid. That structural mismatch is the whole cash problem in this sector, and it needs a weekly forecast rather than a monthly one to be managed rather than absorbed.',
    faq: {
      question: 'Customers pay on 60 days but we pay weekly. How do we manage that?',
      answer:
        'By forecasting weekly and knowing the gap precisely, then managing the levers deliberately: invoicing promptly, chasing systematically, and if the gap is structural, funding it on purpose rather than through the overdraft by accident.',
    },
  },
  'bellshill:budgeting': {
    angle:
      'Fuel and wage inflation are the two variables that decide whether a Bellshill distribution business makes its year, and both move faster than annual pricing does. Budgeting them explicitly and reviewing the variance monthly is what tells you a contract has stopped working while there is still a renewal conversation to be had about it.',
    faq: {
      question: 'How do we budget when fuel costs are unpredictable?',
      answer:
        'Set an assumed rate, state it plainly, and track the variance monthly. You will not forecast the price correctly, but you will know immediately how far out you are and which contracts that has made unprofitable.',
    },
  },
  'bellshill:financial': {
    angle:
      'Warehouse space or a fleet expansion at Bellshill is a substantial commitment against thin margins, so the modelling has to survive a bad year rather than describe a good one. We build the case at realistic utilisation, show the covenant and repayment position, and test what happens if a major contract goes, because that is the scenario lenders ask about.',
    faq: {
      question: 'What will a lender want to see for a warehouse or fleet expansion?',
      answer:
        'Filed accounts, a forecast that ties to them, and a downside case. The downside is the one that gets tested, particularly where a large share of revenue sits with a small number of customers.',
    },
  },
  'bellshill:bookkeeping': {
    angle:
      'Fuel cards, tolls, driver expenses and high-volume purchase invoices give Bellshill operators far more transactions than a comparable-turnover business elsewhere, and reconciling that at the quarter end is a genuinely large job. Keeping it current is partly about the VAT return and mostly about being able to see cost per route or per contract at all.',
    faq: {
      question: 'We have a very high volume of transactions. Is that a problem?',
      answer:
        'No, but it does need doing consistently rather than in batches. Volume is what makes bank feeds and rules worth setting up properly, and what makes a quarterly catch-up so much more expensive than monthly work.',
    },
  },
  'bellshill:virtual': {
    angle:
      'A Bellshill operation with depots, drivers and finance agreements has a genuine finance function whether or not anyone is employed to run it. A virtual financial controller provides that oversight at a few days a month, owning the reporting and forecasting and giving the owner someone to test contract pricing against before it is committed to.',
    faq: {
      question: 'We are not big enough for a finance director. What is the alternative?',
      answer:
        'A virtual financial controller, engaged for a set number of days a month. You get senior oversight of reporting, forecasting and pricing decisions without carrying a six-figure salary to get it.',
    },
  },
  'blantyre:management': {
    angle:
      'Blantyre has a notable concentration of care providers, and for them the decisive ratio is staff cost against funded hours, which moves with rotas, cover and agency use rather than with anything visible in turnover. Monthly accounts that report that ratio directly show a staffing problem developing while it is still a rota question rather than a year-end loss.',
    faq: {
      question: 'We run a care business in Blantyre. What should we be tracking monthly?',
      answer:
        'Staff cost as a proportion of funded hours, agency spend separately from employed staff, and cover-related overtime. Those three explain most of the variance in the sector and none of them are obvious from turnover.',
    },
  },
  'blantyre:annual': {
    angle:
      'Blantyre’s care providers and professional practices file company accounts alongside sector reporting obligations, and the two draw on the same underlying records. Where the bookkeeping is kept properly through the year, the statutory accounts become a summary rather than a reconstruction, which matters when both sets of deadlines fall in the same window.',
    faq: {
      question: 'Do you work with regulated care providers?',
      answer:
        'Yes. The statutory accounts are the same job as for any company, but the record keeping needs to support both the accounts and the sector reporting, so it is worth setting it up once to serve both.',
    },
  },
  'blantyre:cash': {
    angle:
      'Care providers in Blantyre pay staff weekly or fortnightly and are frequently paid by commissioning bodies in arrears, so the business funds its own payroll for weeks at a time. That gap is entirely predictable, which means it can be forecast precisely, and forecasting it precisely is what stops it being managed through an overdraft.',
    faq: {
      question: 'We are paid in arrears but pay staff weekly. How do we plan for that?',
      answer:
        'Model it explicitly, because it is predictable rather than random. Once the lag is in the forecast you know exactly how much working capital the business needs to hold and can fund it deliberately.',
    },
  },
  'blantyre:budgeting': {
    angle:
      'For Blantyre care providers, the budget is largely a staffing model: hours, ratios, wage floors and the agency cover that fills the gaps. Because wage rises are announced ahead of time and rates are often fixed, budgeting the coming year properly is what shows whether the current rates still work before the year is committed to.',
    faq: {
      question: 'Wage costs are rising faster than our funded rates. What can we do?',
      answer:
        'Model it before the year starts so you know the size of the gap and which contracts it falls on. That is what turns a rate conversation with a commissioner into an evidenced case rather than an assertion.',
    },
  },
  'blantyre:financial': {
    angle:
      'Expanding capacity in Blantyre’s care sector means committing to staff and premises ahead of the occupancy or funded hours that pay for them, and the modelling has to carry that ramp honestly. We build the case around how quickly capacity fills, and test what a slower fill does to cash, because that is the assumption everything else rests on.',
    faq: {
      question: 'We want to expand capacity. What should the model show?',
      answer:
        'The ramp: costs that start immediately against income that builds. The decision almost always turns on how many months of that gap the business can fund, not on whether the expansion works at full occupancy.',
    },
  },
  'blantyre:bookkeeping': {
    angle:
      'Rota-driven payroll makes Blantyre care providers one of the more payroll-intensive businesses of their size, with variable hours, overtime and agency invoices to reconcile every month. Keeping that current is what makes the staff-cost ratio reportable, and that ratio is the number the whole operation actually runs on.',
    faq: {
      question: 'Can you handle payroll with variable hours and rotas?',
      answer:
        'Yes, that is routine for care clients. Variable hours mean the payroll has to be built from the rota each period rather than repeated, which is exactly why it benefits from being run properly rather than squeezed in.',
    },
  },
  'blantyre:virtual': {
    angle:
      'Blantyre care providers carry regulatory obligations, a substantial payroll and funding relationships to manage, which is more finance function than most owner-managers should be absorbing personally. A virtual financial controller runs the reporting and forecasting, and provides the evidenced position needed when rates and contracts come up for negotiation.',
    faq: {
      question: 'What would a financial controller add to a care business?',
      answer:
        'Reliable monthly reporting on staff cost ratios, a forecast that handles the payment lag, and properly evidenced numbers for rate negotiations. The last one frequently pays for the engagement on its own.',
    },
  },
  'hamilton:management': {
    angle:
      'Hamilton’s position as the administrative centre for South Lanarkshire means a lot of local businesses hold public sector or large institutional contracts, where the price is fixed for a term and the only variable left is your own cost of delivery. Monthly accounts that report margin per contract are what tell you whether a fixed-price agreement is still worth holding.',
    faq: {
      question: 'We hold fixed-price contracts. What should our monthly accounts show?',
      answer:
        'Cost of delivery against the contract price, tracked per contract rather than in aggregate. When the price cannot move, your delivery cost is the entire story, and it drifts quietly unless someone is watching it monthly.',
    },
  },
  'hamilton:annual': {
    angle:
      'Hamilton town centre carries a mix of professional firms and long-established retailers, many operating as small limited companies with a couple of directors. The year end for these is rarely complicated in itself; what makes it painful is a year of records assembled in a hurry. Where the bookkeeping is current, the accounts and the corporation tax return are largely mechanical.',
    faq: {
      question: 'How early should we start on our year end?',
      answer:
        'The work is mostly done during the year rather than after it. If the records are reconciled monthly, the accounts follow quickly; if they are not, the first job is reconstructing twelve months, which is where cost and delay come from.',
    },
  },
  'hamilton:cash': {
    angle:
      'Businesses supplying councils and large institutions from Hamilton deal with procurement cycles that are reliable but slow, where an invoice is approved, then batched, then paid. That lag is predictable enough to forecast to the week, which matters because the business is funding delivery throughout it, particularly where staff are on the contract.',
    faq: {
      question: 'Public sector payment takes a long time. Can we plan around it?',
      answer:
        'Yes, because it is consistent rather than erratic. Once the approval-to-payment lag is measured and built into the forecast, you can see precisely how much working capital the contract ties up before you bid on the next one.',
    },
  },
  'hamilton:budgeting': {
    angle:
      'For Hamilton businesses bidding for work, the budget is where overhead recovery gets decided. Tendering against a rate that covers direct cost but under-recovers overhead wins work that loses money, and it is a very common way for a growing business to get busier and no better off. Budgeting overhead per unit of delivery is what stops that.',
    faq: {
      question: 'How do we know our tender rates cover overheads?',
      answer:
        'Budget total overhead for the year, divide it across the delivery capacity you realistically expect to sell, and treat that as a floor beneath every rate. Winning work below it means growth makes the position worse.',
    },
  },
  'hamilton:financial': {
    angle:
      'Hamilton firms taking on larger premises or bidding for a contract beyond their current size need to show they can carry the delivery, not just win it. That means modelling the working capital the contract absorbs before it pays, which is usually the constraint that decides whether the business can actually take the work on.',
    faq: {
      question: 'Can we afford to take on a contract bigger than anything we have run?',
      answer:
        'The answer is usually about cash rather than profit. Model the staffing and delivery cost from day one against when payment actually lands, and the gap tells you what funding the contract needs before it starts paying for itself.',
    },
  },
  'hamilton:bookkeeping': {
    angle:
      'Contracts with councils and larger institutions bring purchase order references, approval trails and specific invoicing requirements, and an invoice that does not match the PO simply sits unpaid without anyone telling you. Bookkeeping that tracks those references properly is the difference between a payment lag you planned for and one that quietly doubles.',
    faq: {
      question: 'Our invoices to the council sometimes go unpaid for months. Why?',
      answer:
        'Very often a mismatch with the purchase order or a missing reference, which stops the invoice at approval rather than rejecting it visibly. Tracking PO references at the point of invoicing prevents most of it.',
    },
  },
  'hamilton:virtual': {
    angle:
      'Hamilton professional firms that have grown to twenty or thirty people usually have a bookkeeper and an annual accountant, and nothing in between owning the numbers month to month. That gap is exactly what a virtual financial controller fills: monthly reporting, forecasting, and the pricing and capacity decisions that neither of the other two roles covers.',
    faq: {
      question: 'We have a bookkeeper and an accountant. What is missing?',
      answer:
        'The layer between them. Bookkeeping records what happened and the annual accountant reports it once a year. Nobody in that arrangement is producing monthly management information or owning the forecast.',
    },
  },
  'motherwell:management': {
    angle:
      'Motherwell’s engineering and contracting businesses run work that spans months, which means profit depends on how work in progress is valued as much as on what has been invoiced. Monthly accounts that recognise revenue against actual progress, rather than against billing, are the only version that tells you whether a job is making money while it is still running.',
    faq: {
      question: 'Our jobs run over several months. How should that show in monthly accounts?',
      answer:
        'Revenue and cost need matching to progress rather than to invoicing dates, otherwise a month with a big application looks brilliant and the following month looks like a collapse, when neither is true.',
    },
  },
  'motherwell:annual': {
    angle:
      'For Motherwell contractors, the year end turns on the valuation of open contracts at the balance sheet date: what has been done, what has been billed, and what has been provided for on jobs expected to run over. Those judgements move the reported profit substantially, so they are worth discussing rather than being applied silently.',
    faq: {
      question: 'How are part-finished contracts treated at our year end?',
      answer:
        'They are valued according to progress and expected outcome, including provision for any contract heading for a loss. It is one of the areas where the judgement genuinely changes the reported result, so we walk through it rather than just applying it.',
    },
  },
  'motherwell:cash': {
    angle:
      'Retentions are the defining cash issue for Motherwell contractors: a percentage of every contract held back, often for a year beyond completion, while the costs were paid long ago. Tracked properly across all open contracts, retentions usually add up to a substantial sum the business has earned and cannot spend, and most operators underestimate the total.',
    faq: {
      question: 'How should we handle retentions in cash planning?',
      answer:
        'Track them per contract with expected release dates and forecast them separately from normal debtors. Treated as ordinary receivables they distort the picture, because the release date is much further out and frequently slips.',
    },
  },
  'motherwell:budgeting': {
    angle:
      'Motherwell contractors price work months before delivering it, so the budget has to hold assumptions about labour and material costs at the point of delivery rather than the point of quotation. Tracking that variance monthly is what shows a tender book has been priced on costs that no longer exist, while there is still time to change the ones not yet committed.',
    faq: {
      question: 'We quote months ahead. How do we protect margin?',
      answer:
        'Budget the cost you expect at delivery, not today’s, and review the variance monthly. When it moves against you, that tells you to reprice the outstanding tender book immediately rather than after the jobs have run.',
    },
  },
  'motherwell:financial': {
    angle:
      'Plant investment and bonding requirements both come up for growing Motherwell contractors, and both require showing a lender or surety that the balance sheet can carry the commitment. That is a modelling job grounded in contract pipeline and retention profile, since those two determine what the business can actually support.',
    faq: {
      question: 'What is needed to support a bond or larger plant purchase?',
      answer:
        'A balance sheet that carries the exposure and a forecast that shows the pipeline supporting it. Retentions matter here too, because money held back is not available to service anything.',
    },
  },
  'motherwell:bookkeeping': {
    angle:
      'Applications for payment, certified amounts, retentions and subcontractor CIS give Motherwell contracting businesses a distinctive set of records that ordinary sales invoicing does not cover. Keeping the applied, certified and paid positions separate is what lets you see the real debtor position instead of a figure that includes amounts nobody has agreed to yet.',
    faq: {
      question: 'Can you handle applications for payment rather than straight invoices?',
      answer:
        'Yes. Applied, certified and paid need to be tracked as separate stages, because treating an application as an invoice overstates both revenue and debtors until the certification actually comes back.',
    },
  },
  'motherwell:virtual': {
    angle:
      'A Motherwell contractor with several jobs running, retentions outstanding and subcontractors to manage has a finance function whether or not it is staffed. A virtual financial controller owns contract reporting, retention tracking and the forecast, and provides the challenge on tender pricing that stops a busy year turning into an unprofitable one.',
    faq: {
      question: 'What would a controller change for a contracting business?',
      answer:
        'Mainly visibility of contract-level profitability while jobs are still live, and a grip on retentions. Both are areas where contractors routinely discover the position months after they could have acted on it.',
    },
  },
  'rutherglen:management': {
    angle:
      'Rutherglen’s Main Street and King Street businesses are mostly independent retail, food and service operators where the trading week has a very distinct shape. Monthly accounts that show margin by category rather than in total tend to surface the same finding: a popular line with a weak margin is quietly funded by a less visible one that carries the shop.',
    faq: {
      question: 'We are a Main Street retailer. What would management accounts tell us?',
      answer:
        'Which categories actually make the money. Sales volume and profitability are frequently inversely related in independent retail, and total margin averages the two together and shows you neither.',
    },
  },
  'rutherglen:annual': {
    angle:
      'Rutherglen’s independent businesses are split between sole traders and small limited companies, and the ones who find the year end hardest are usually those who incorporated without changing how they took money out. Drawings that continued as before become a director’s loan, and that becomes a tax question at the year end rather than a bookkeeping one.',
    faq: {
      question: 'We incorporated last year. What changes at the year end?',
      answer:
        'Principally how you take money out. Drawings from a company are salary, dividend or a loan, and if it has not been decided in advance it defaults to a loan, which carries tax consequences the business rarely expects.',
    },
  },
  'rutherglen:cash': {
    angle:
      'A Rutherglen shop or food business restocks weekly, pays staff monthly and rent quarterly, so the cash position looks completely different depending on which day you check it. A forecast on a weekly grid removes that illusion and shows the genuinely tight weeks, which are almost always the ones where a quarterly cost lands on an ordinary trading week.',
    faq: {
      question: 'Why does our bank balance look fine one week and awful the next?',
      answer:
        'Because your outgoings run on three different cycles. Looking at the balance tells you about today, whereas a weekly forecast tells you about the week the rent and the VAT arrive together.',
    },
  },
  'rutherglen:budgeting': {
    angle:
      'Footfall on Rutherglen’s Main Street varies with the season and the local calendar in ways the owner knows well but rarely writes down. A budget phased to that pattern turns that knowledge into a benchmark, so staffing and stock are planned against the trade you actually expect rather than against last month.',
    faq: {
      question: 'Is a budget worth it for a small shop?',
      answer:
        'Yes, mainly because it captures what you already know about your trading year and makes it something you can measure against. Without one, every quiet week is ambiguous: normal seasonality and a genuine decline look identical.',
    },
  },
  'rutherglen:financial': {
    angle:
      'A fit-out or a second Rutherglen site is a large commitment for an independent, and the honest version of the model shows the first months where the new site carries cost without mature trade. Modelling that ramp, and what the existing site can absorb while it happens, is usually what decides whether the expansion is affordable now or in a year.',
    faq: {
      question: 'How do we know if we can afford a second site?',
      answer:
        'The question is whether the first site generates enough surplus to fund the second through its build-up period. That ramp, rather than the eventual trading level, is what makes or breaks most independent expansions.',
    },
  },
  'rutherglen:bookkeeping': {
    angle:
      'Card settlements arrive net of fees and a day or two late, cash banking is irregular, and delivery platforms pay on their own schedule, so a Rutherglen retailer’s takings and bankings rarely agree without work. Reconciling weekly keeps the sales figure trustworthy and keeps the VAT return from becoming a quarterly investigation.',
    faq: {
      question: 'Our till takings never match the bank. Is that a problem?',
      answer:
        'It is normal, because card fees and settlement delays sit between them. It only becomes a problem if nobody reconciles it, at which point neither figure can be relied on for the VAT return or the accounts.',
    },
  },
  'rutherglen:virtual': {
    angle:
      'Once a Rutherglen independent runs more than one site, the owner can no longer see everything personally and the numbers have to do that job instead. A virtual financial controller puts consistent reporting across both sites, so performance can be compared properly rather than through an impression of which one feels busier.',
    faq: {
      question: 'We have two sites now. What changes financially?',
      answer:
        'You lose direct visibility, so reporting has to replace it. Consistent per-site accounts show which location is actually performing, which is frequently not the one that feels busiest on the floor.',
    },
  },
  'cambuslang:management': {
    angle:
      'The light industrial and service businesses around Cambuslang Investment Park typically sell to other businesses on account, which makes revenue look smooth while the actual margin varies considerably by customer. Monthly accounts reported by customer or product line usually reveal that the largest account is also the one negotiated hardest and earning least.',
    faq: {
      question: 'Should we look at profitability by customer?',
      answer:
        'For business-to-business operations it is often the single most useful cut. Large customers negotiate hardest, and it is common to find the biggest account contributing far less margin than its share of turnover suggests.',
    },
  },
  'cambuslang:annual': {
    angle:
      'Businesses on Cambuslang Investment Park usually hold equipment, fit-out and sometimes stock, so the year end involves decisions about asset treatment and stock valuation that have a real effect on the reported result. Both are much simpler where the underlying records have been maintained during the year rather than estimated at the end of it.',
    faq: {
      question: 'How should we value stock at the year end?',
      answer:
        'At the lower of cost and net realisable value, which means slow-moving or obsolete items need identifying rather than counting at full cost. A stock count that has not been reviewed for saleability tends to overstate both assets and profit.',
    },
  },
  'cambuslang:cash': {
    angle:
      'Selling business to business from Cambuslang means giving credit, and every day of credit given is working capital the business funds itself. Forecasting on the payment terms your customers actually keep, rather than the ones on the invoice, is what makes the cash picture accurate, and the two are frequently a fortnight apart.',
    faq: {
      question: 'Our terms are 30 days but nobody pays on time. How do we plan?',
      answer:
        'Forecast on actual behaviour rather than stated terms. If customers average 45 days, that is the working capital the business is genuinely funding, and planning on 30 builds a shortfall into every forecast you produce.',
    },
  },
  'cambuslang:budgeting': {
    angle:
      'Energy is a serious line for light industrial units at Cambuslang, and it moves independently of anything the business controls. Budgeting it explicitly and reviewing it monthly is what turns an unpleasant surprise into a tracked variance, and gives you an evidenced basis for repricing when the increase is large enough to matter.',
    faq: {
      question: 'Energy costs jumped and wiped out our margin. What should we have done?',
      answer:
        'Budget it as its own line and review it monthly. You cannot control the price, but you can see the impact within a month and act on pricing, rather than finding it in the year-end accounts.',
    },
  },
  'cambuslang:financial': {
    angle:
      'Taking a larger unit at Cambuslang Investment Park usually means committing to a lease and equipment ahead of the volume that justifies them. The useful model shows the fixed cost stepping up on a known date against volume that grows gradually, because that gap is where the risk sits rather than in the eventual trading position.',
    faq: {
      question: 'How do we assess a move to a bigger unit?',
      answer:
        'Model the step change in fixed cost against a realistic volume ramp. Rent and equipment start in full immediately, so the question is how many months of that you can fund before the extra volume arrives.',
    },
  },
  'cambuslang:bookkeeping': {
    angle:
      'Business-to-business trade at Cambuslang generates supplier statements, credit notes and part-deliveries that have to reconcile against purchase invoices, and discrepancies there are money the business is owed. Bookkeeping that reconciles supplier statements monthly, rather than paying against invoices alone, recovers amounts that otherwise go unnoticed.',
    faq: {
      question: 'Should we reconcile supplier statements?',
      answer:
        'Yes, monthly. Credit notes for short deliveries and returns are frequently issued and never applied, and a statement reconciliation is the only routine step that catches them.',
    },
  },
  'cambuslang:virtual': {
    angle:
      'A Cambuslang business scaling past its founder’s direct oversight, with staff, stock and a credit book, needs somebody owning the numbers who is not also running operations. A virtual financial controller provides that at a few days a month, covering reporting, forecasting and the customer-level margin analysis that decides pricing.',
    faq: {
      question: 'At what point should we stop doing this ourselves?',
      answer:
        'Usually when the owner is doing month end late at night and decisions are waiting on it. At that point the reporting is both a cost and a bottleneck, and handing it over normally pays for itself quickly.',
    },
  },
  'glasgow:management': {
    angle:
      'Glasgow’s agency and creative businesses, concentrated around the Merchant City and Finnieston, live or die on project profitability, and the failure mode is consistent: a project priced on an estimate that the delivery team quietly overran. Monthly accounts reporting margin per project against the time actually spent are what make that visible before the next proposal repeats it.',
    faq: {
      question: 'We are a Glasgow agency. What should we measure monthly?',
      answer:
        'Margin by project against time actually recorded, plus utilisation across the team. Overservicing is the most common profit leak in agencies, and it never appears in a monthly turnover figure.',
    },
  },
  'glasgow:annual': {
    angle:
      'Glasgow’s city centre agencies and consultancies are typically small limited companies with a founder or two drawing a mix of salary and dividends. The year end is straightforward where that has been planned; where dividends have been taken without reference to distributable profits, it becomes a more difficult conversation about whether they were lawful.',
    faq: {
      question: 'Can we take dividends whenever the bank balance allows?',
      answer:
        'No, dividends can only be paid from distributable profits, and a healthy bank balance is not the same thing, particularly with VAT and corporation tax accruing in it. Checking before drawing avoids a difficult correction later.',
    },
  },
  'glasgow:cash': {
    angle:
      'A Glasgow agency pays its people monthly and waits 45 or 60 days for client payment, so every new client effectively has to be funded for two months before contributing anything. Growth therefore consumes cash rather than generating it, and a forecast is what shows how much new business the current balance can actually support.',
    faq: {
      question: 'We are winning work but cash is tighter than ever. Why?',
      answer:
        'Because you fund salaries on the new work long before the client pays. Growth is a cash cost in a people business, and a forecast tells you how much of it you can afford at once.',
    },
  },
  'glasgow:budgeting': {
    angle:
      'For Glasgow agencies the budget is essentially a headcount plan, since people are most of the cost base and hiring commits you for far longer than a client contract runs. Budgeting hires against pipeline, with the salary starting months before the associated revenue, is what stops a strong quarter turning into an overcommitted year.',
    faq: {
      question: 'How do we decide when to hire?',
      answer:
        'Model the hire against committed pipeline rather than a good recent quarter. The salary is certain and immediate, the revenue is neither, and the gap between them is what the decision actually rests on.',
    },
  },
  'glasgow:financial': {
    angle:
      'Glasgow’s tech and growth businesses raising investment are judged on whether their model is coherent, not on whether the numbers are ambitious. Investors test the assumptions behind the growth, the unit economics and the runway, so the model has to make those explicit and defensible rather than burying them in a spreadsheet nobody can follow.',
    faq: {
      question: 'What do investors actually look for in the model?',
      answer:
        'Assumptions they can interrogate, sensible unit economics, and a clear runway to the next milestone. A model that only works on optimistic inputs is the fastest way to lose credibility in a first meeting.',
    },
  },
  'glasgow:bookkeeping': {
    angle:
      'Glasgow agencies accumulate a long tail of software subscriptions, contractor invoices and client expenses, often across more than one currency, and the subscriptions in particular tend to grow unnoticed. Bookkeeping that codes them consistently makes that visible as a line you can review, rather than an unexamined drift in overheads.',
    faq: {
      question: 'Can you handle invoices and payments in other currencies?',
      answer:
        'Yes. The key is consistent treatment of exchange differences so margins on overseas work stay comparable month to month rather than moving with the rate.',
    },
  },
  'glasgow:virtual': {
    angle:
      'A Glasgow agency approaching twenty or thirty people has real decisions to make about pricing, utilisation and hiring, and usually nobody senior on finance to test them against. A virtual financial controller provides that at a few days a month, which is the difference between reacting to last quarter and planning the next one.',
    faq: {
      question: 'We cannot justify a full-time finance director. What else is there?',
      answer:
        'A virtual financial controller on a set number of days a month. You get the senior input on pricing, hiring and forecasting without the salary, which is the right shape for most agencies at that stage.',
    },
  },
  'wishaw:management': {
    angle:
      'Wishaw’s trading estate businesses tend to have a small number of substantial customers, which makes the business look stable while concentrating a lot of risk in very few relationships. Monthly accounts that show revenue and margin by customer make that concentration explicit, which is the first step to doing something deliberate about it.',
    faq: {
      question: 'Most of our income comes from two customers. Should we worry?',
      answer:
        'It is worth measuring precisely rather than sensing. Once you know exactly what share and what margin each represents, you can judge how exposed you are and price and plan accordingly.',
    },
  },
  'wishaw:annual': {
    angle:
      'Wishaw’s owner-managed businesses often reach the year end with the company’s position and the director’s personal position tangled together, particularly where equipment, vehicles or property have been bought personally and used in the business. Sorting out what belongs where is usually the substantive part of the job rather than preparing the accounts themselves.',
    faq: {
      question: 'I bought a van personally but use it for the business. How is that treated?',
      answer:
        'It can usually be brought into the business or claimed for, but the treatment differs between sole traders and companies and affects your personal tax as well. It is worth raising rather than assuming either way.',
    },
  },
  'wishaw:cash': {
    angle:
      'Trade credit from suppliers is a genuine source of working capital for Wishaw businesses, and it is easy to lean on it without noticing how much. A forecast that shows creditor days alongside the cash balance makes clear whether the position is comfortable or simply being funded by suppliers waiting longer than they agreed to.',
    faq: {
      question: 'Is stretching supplier payments a reasonable way to manage cash?',
      answer:
        'Within terms it is fine and normal. Beyond them it costs you goodwill, priority and eventually credit limits, and it disguises a working capital shortfall rather than solving one.',
    },
  },
  'wishaw:budgeting': {
    angle:
      'For Wishaw businesses buying materials in volume, the budget has to hold an assumed input cost, because that assumption is what the year’s pricing is built on. Reviewing it monthly is what tells you the assumption has broken and the quotes going out this week need to change, rather than discovering it across a full year of completed work.',
    faq: {
      question: 'Material prices keep changing. How often should we revisit pricing?',
      answer:
        'Review the variance monthly and reprice when it moves materially. Annual price reviews are too slow when input costs move quarterly, and the work quoted in between is where the margin disappears.',
    },
  },
  'wishaw:financial': {
    angle:
      'Equipment investment for a Wishaw business usually comes down to whether it replaces labour, adds capacity, or simply replaces something worn out, and those are three different cases. We model whichever applies against realistic usage, including what happens if the volume that justifies it does not fully materialise.',
    faq: {
      question: 'How do we justify a large equipment purchase?',
      answer:
        'By being clear about what it changes: cost per unit, capacity, or reliability. Each has a different payback, and the ones that stall are usually the ones where all three were assumed at once.',
    },
  },
  'wishaw:bookkeeping': {
    angle:
      'Delivery notes, supplier invoices and job paperwork tend to accumulate in vans and offices around Wishaw before ever reaching an accounting system, and by then matching them to jobs is guesswork. Capturing them at the point they happen is what makes both the VAT return and any job-level margin reporting possible at all.',
    faq: {
      question: 'Our paperwork is always weeks behind. Where do we start?',
      answer:
        'With capture at source, photographing documents when they are issued rather than collecting them for later. Most of the cost of catching up is the reconstruction, and capture removes that entirely.',
    },
  },
  'wishaw:virtual': {
    angle:
      'The common position for a Wishaw owner-manager is running operations all day and doing the finance work in the evenings, which means it is always late and always compressed. A virtual financial controller takes that entirely, and the practical gain is usually less about the reporting itself than about decisions no longer waiting on it.',
    faq: {
      question: 'I do the books myself in the evenings. Is that costing us?',
      answer:
        'Usually more than it saves. The direct cost is your time, and the larger one is that decisions on pricing and hiring wait for information that is always a few weeks behind.',
    },
  },
  'larkhall:management': {
    angle:
      'Larkhall’s businesses are often second or third generation, run by families where several members are on the payroll and the line between a wage and a share of the profits has blurred over the years. Monthly accounts that separate the true cost of running the business from what the family takes out are what make the underlying trading position visible again.',
    faq: {
      question: 'Several family members work in the business. How should that show in our accounts?',
      answer:
        'Family wages should sit at a commercial rate for the work done, with anything above that treated as a distribution. Otherwise the trading result is distorted and you cannot tell whether the business or the arrangement is producing the profit.',
    },
  },
  'larkhall:annual': {
    angle:
      'A long-established Larkhall business often carries accounting treatments inherited from decades of previous filings: assets long since written down, balances nobody can now explain, provisions carried forward out of habit. Part of a first year end with us is usually working out which of those still reflect reality and clearing the ones that do not.',
    faq: {
      question: 'There are old balances in our accounts nobody understands. Can they be cleared?',
      answer:
        'Usually, once we work out what they were. Legacy balances carried forward unexamined are common in long-established businesses, and clearing them properly makes every subsequent year end simpler.',
    },
  },
  'larkhall:cash': {
    angle:
      'Established Larkhall businesses are frequently cash-comfortable and use that as a substitute for planning, which works until a large replacement cost or a slow quarter arrives at the same time as the tax. A forecast at this stage is less about surviving and more about knowing how much of the balance is genuinely surplus and available to reinvest.',
    faq: {
      question: 'We have money in the bank. Do we need a forecast?',
      answer:
        'It answers a different question: how much of that balance is genuinely yours once tax, VAT and known commitments are accounted for. That figure is usually a good deal lower than the balance, and it is the one that governs reinvestment.',
    },
  },
  'larkhall:budgeting': {
    angle:
      'The recurring budgeting question in a family-run Larkhall business is how much of the profit is drawn and how much is reinvested, and it is frequently settled by habit rather than decision. Setting it explicitly in the budget, with reinvestment planned rather than left to whatever is spare, is what allows the business to renew itself rather than gradually run its assets down.',
    faq: {
      question: 'How much profit should we reinvest?',
      answer:
        'Enough to cover asset replacement and any planned growth before drawings are set. Businesses that decide drawings first and reinvest the remainder tend to under-invest steadily without ever making that choice consciously.',
    },
  },
  'larkhall:financial': {
    angle:
      'Succession is the modelling question that eventually arrives in a family Larkhall business: what the business is worth, whether the next generation can fund a buyout, and whether it still services the retiring generation’s income. It is a long-horizon exercise and much easier where it is started years ahead rather than at the point of retirement.',
    faq: {
      question: 'We want to pass the business to family. Where do we start?',
      answer:
        'With a realistic valuation and a view of how any transfer would be funded and taxed. It is much more flexible handled over several years than as a single event, so starting early genuinely widens the options.',
    },
  },
  'larkhall:bookkeeping': {
    angle:
      'Plenty of long-standing Larkhall businesses still run on paper ledgers or a spreadsheet built by someone who has since retired, and it works right up until it does not. Moving to cloud bookkeeping is mostly a migration exercise, and the gain is that the year end stops depending on one person’s memory of how the system was meant to work.',
    faq: {
      question: 'We have always used spreadsheets. Is it worth changing?',
      answer:
        'Usually yes, and the strongest reason is resilience rather than features. A spreadsheet only one person fully understands is a genuine risk to a long-established business, and Making Tax Digital is steadily removing the option anyway.',
    },
  },
  'larkhall:virtual': {
    angle:
      'When a Larkhall family business changes hands between generations, the incoming owner often inherits operational knowledge but not financial oversight, because the previous generation carried that personally. A virtual financial controller provides continuity through that transition and puts the reporting on a documented footing rather than an inherited one.',
    faq: {
      question: 'The next generation is taking over. How do we hand over the finance side?',
      answer:
        'By documenting and formalising it before the handover rather than during it. Where the outgoing owner held the numbers in their head, a controller is often what makes the transition workable at all.',
    },
  },
  'east-kilbride:management': {
    angle:
      'East Kilbride’s business parks hold a concentration of manufacturers and product businesses where the number that governs everything is cost per unit, and it moves with volume because overhead is absorbed across whatever is produced. Monthly accounts that show absorption properly explain why a quiet month damages margin far more than the drop in sales alone would suggest.',
    faq: {
      question: 'Why does our margin fall so much in a quiet month?',
      answer:
        'Because fixed overhead is spread across fewer units, so cost per unit rises even though nothing about the product changed. Reporting absorption explicitly separates that from a genuine problem with pricing or efficiency.',
    },
  },
  'east-kilbride:annual': {
    angle:
      'Manufacturing businesses in East Kilbride carry stock in three states at the year end, raw materials, work in progress and finished goods, and each has to be valued on a defensible basis. That valuation moves the reported profit significantly, and it is the area where a year-end count without a proper review of obsolete stock causes the most trouble.',
    faq: {
      question: 'How is work in progress valued at the year end?',
      answer:
        'At the cost incurred to that point, including an appropriate share of production overhead, and written down where the finished item will not recover it. It is a judgement area, so it is worth agreeing the basis rather than applying one silently.',
    },
  },
  'east-kilbride:cash': {
    angle:
      'An East Kilbride manufacturer funds the full working capital cycle: raw materials bought, converted, held as finished stock, then sold on credit. Cash is committed at the start and returns at the end, often months later, so growth intensifies the squeeze. Forecasting each stage separately is what shows where the money is actually tied up.',
    faq: {
      question: 'Why does growth make our cash position worse?',
      answer:
        'Because you buy and convert more materials before any of the additional sales are paid for. Every extra unit of growth needs funding through the whole cycle first, which is why profitable manufacturers can still run short.',
    },
  },
  'east-kilbride:budgeting': {
    angle:
      'For an East Kilbride manufacturer the budget is built on planned production volume, because that volume determines the overhead absorption rate the whole year’s costing depends on. Budgeting at an optimistic volume understates unit cost throughout, and that error then flows into pricing decisions made all year on numbers that were never right.',
    faq: {
      question: 'What volume should we budget at?',
      answer:
        'A realistic one rather than a target. Budgeting at a stretch volume produces an understated cost per unit, which then underprices work for the whole year even when everything else is done correctly.',
    },
  },
  'east-kilbride:financial': {
    angle:
      'Capital equipment decisions on East Kilbride’s business parks are large and long-lived, and the case usually depends on cost per unit at the volume you will genuinely run rather than at capacity. We model the payback at realistic utilisation and test the downside, since equipment justified only at full capacity is where these decisions tend to go wrong.',
    faq: {
      question: 'How do we build the case for new production equipment?',
      answer:
        'Model unit cost before and after at the volume you actually expect, include installation and downtime during changeover, then test it at lower volume. The changeover period is the part most cases leave out.',
    },
  },
  'east-kilbride:bookkeeping': {
    angle:
      'Manufacturing in East Kilbride generates a substantial purchase ledger and requires stock movements to be recorded as they happen, because a bill of materials is only as good as the data behind it. Bookkeeping that keeps stock and purchases current is what makes unit costing possible; without it, cost per unit is an estimate rather than a figure.',
    faq: {
      question: 'Do you handle stock as well as bookkeeping?',
      answer:
        'Yes, and for a manufacturer they are the same job. Stock movements drive cost of sales, so bookkeeping that ignores them produces a margin figure that only becomes accurate once a year at the stock count.',
    },
  },
  'east-kilbride:virtual': {
    angle:
      'An East Kilbride manufacturer with stock, production and a purchase ledger has a finance function that has outgrown an owner and a bookkeeper long before it can justify a finance director. A virtual financial controller covers the reporting, the costing discipline and the forecasting, and is typically the role that gets unit costing put on a proper basis.',
    faq: {
      question: 'What would a controller focus on first in a manufacturing business?',
      answer:
        'Usually costing and stock, because those two drive every pricing decision and are the areas where owner-managed manufacturers most often find their assumptions are years out of date.',
    },
  },
  'coatbridge:management': {
    angle:
      'Coatbridge’s fabrication and manufacturing businesses generally quote per job, and profit depends on whether the hours and materials estimated at quotation match what the job consumed. Monthly accounts comparing quoted against actual cost by job are what expose systematic under-quoting on a particular type of work, which is rarely visible in the overall figures.',
    faq: {
      question: 'How do we know if we are quoting accurately?',
      answer:
        'By comparing quoted cost with actual cost on completed jobs each month. Under-quoting is nearly always concentrated in one type of work rather than spread evenly, and the pattern only shows up job by job.',
    },
  },
  'coatbridge:annual': {
    angle:
      'Coatbridge manufacturers carry significant plant and machinery, so the year end centres on capital allowances, whether repairs are genuinely repairs or improvements that must be capitalised, and how disposals of replaced equipment are treated. Each of those changes the tax position, and the answers depend on records kept during the year.',
    faq: {
      question: 'Is a major machine overhaul a repair or a capital item?',
      answer:
        'It depends on whether it restores the asset or improves it beyond its original capability. The distinction changes when you get relief, and it is far easier settled with the invoice detail to hand than reconstructed later.',
    },
  },
  'coatbridge:cash': {
    angle:
      'A Coatbridge fabricator commits to steel and materials at the start of a job and is typically paid well after completion, so each job represents cash out before cash in. Several large jobs starting together can create a serious squeeze even in a strong order book, which is exactly the situation a job-level cash forecast is for.',
    faq: {
      question: 'We have a full order book but no cash. How does that happen?',
      answer:
        'Because each job absorbs materials and labour before it pays. Several starting at once multiplies that, so a strong order book can be the cause of the squeeze rather than the solution to it.',
    },
  },
  'coatbridge:budgeting': {
    angle:
      'Material prices are the dominant variable for Coatbridge manufacturers and they move faster than a quoted order book can respond to. Budgeting an assumed material cost and tracking the variance monthly is what tells you the jobs currently being quoted need repricing, and gives you the evidence to hold that line with customers.',
    faq: {
      question: 'Material costs rose after we quoted. Can anything be done?',
      answer:
        'Not on committed work, which is why the monthly variance matters: it tells you to change what you are quoting now. Some businesses also move to time-limited quotes or material price adjustment clauses once they can evidence the movement.',
    },
  },
  'coatbridge:financial': {
    angle:
      'Plant replacement in Coatbridge is usually driven by reliability rather than capacity, and the case is built on downtime avoided as much as output gained. Modelling it means putting a value on unplanned stoppages and late deliveries, which is harder than counting units but is where most of the genuine return sits.',
    faq: {
      question: 'How do we justify replacing machinery that still works?',
      answer:
        'By quantifying downtime, maintenance spend and the cost of late delivery. Ageing equipment usually costs more through disruption than through repair bills, and that is the part left out of most replacement cases.',
    },
  },
  'coatbridge:bookkeeping': {
    angle:
      'Materials bought against specific jobs need coding to those jobs at the point of purchase, because reconstructing it later from delivery notes is guesswork. For Coatbridge manufacturers that discipline is what makes job costing possible at all, and job costing is what tells you which work to keep quoting for.',
    faq: {
      question: 'Can bookkeeping track costs by job?',
      answer:
        'Yes, provided purchases are coded to the job as they are made. Retrofitting it at the year end never produces reliable figures, so the value depends entirely on capturing it at the time.',
    },
  },
  'coatbridge:virtual': {
    angle:
      'The typical Coatbridge manufacturer is run by someone who came up through the trade rather than through finance, and quoting is being done on experience and instinct. A virtual financial controller puts costing on an evidenced footing and provides the monthly challenge on which work is genuinely worth taking.',
    faq: {
      question: 'We quote on experience. Is that a problem?',
      answer:
        'Experience is usually a good guide until input costs move, at which point instinct lags reality by months. A controller keeps the underlying cost data current so judgement is applied to accurate numbers.',
    },
  },
  'airdrie:management': {
    angle:
      'Airdrie’s business base leans towards retail, consumer services and distribution served by the A8 and M8, and many now sell through more than one channel: a shop, a trade counter, an online store. Monthly accounts that report each channel separately usually show they carry quite different margins, which is invisible in a single combined figure.',
    faq: {
      question: 'We sell in store and online. Should we report them separately?',
      answer:
        'Yes. Delivery, returns, platform fees and payment processing make online margin structurally different from counter trade, and combining them hides whichever one is subsidising the other.',
    },
  },
  'airdrie:annual': {
    angle:
      'For Airdrie retailers the year end usually turns on stock and on the treatment of shop fit-out and equipment. Stock that has not been reviewed for saleability overstates both the asset and the profit, and fit-out spend is frequently a mix of capital and revenue items recorded as one invoice that has to be separated.',
    faq: {
      question: 'How should shop fit-out costs be treated?',
      answer:
        'Usually split: structural improvements are capitalised while redecoration and repairs are deducted. A single contractor invoice often contains both, so it needs breaking down rather than treating as one item.',
    },
  },
  'airdrie:cash': {
    angle:
      'Airdrie businesses selling to consumers take money at the point of sale, which sounds like a good cash position and often masks a stock problem instead: cash converted into inventory that is not selling. A forecast that tracks stock alongside cash is what shows whether a healthy till is being steadily reinvested into slow-moving goods.',
    faq: {
      question: 'We get paid immediately, so why is cash tight?',
      answer:
        'Typically because it has gone into stock. Retail cash problems are usually inventory problems, where money is tied up in goods bought faster than they sell rather than in unpaid invoices.',
    },
  },
  'airdrie:budgeting': {
    angle:
      'Retail and consumer trade in Airdrie is strongly seasonal, and the buying commitments that support a peak are made months ahead of it. Budgeting purchases against expected sales by month, then reviewing the variance as the season develops, is what prevents a slow peak turning into a full year of overhang stock.',
    faq: {
      question: 'How do we avoid over-buying for a season?',
      answer:
        'Budget purchases against realistic sales by month and review early in the season rather than at the end. Buying decisions can still be adjusted part-way through, but only if someone is comparing actuals to plan while it matters.',
    },
  },
  'airdrie:financial': {
    angle:
      'Whether an Airdrie business takes additional premises on the A8 corridor usually depends on catchment and cost rather than ambition, and the model needs to show the new site’s trading build-up against rent and staffing that start in full immediately. That first-year gap is the part that decides affordability.',
    faq: {
      question: 'What should we model before taking a second premises?',
      answer:
        'Rent, rates and staffing from day one against a realistic build-up of trade, plus the effect on the existing site if the catchments overlap. Cannibalisation is regularly left out and it changes the answer.',
    },
  },
  'airdrie:bookkeeping': {
    angle:
      'An Airdrie business selling across a shop, a trade counter and an online channel has takings arriving through several routes on different timings, all of which must reconcile to the bank. Keeping those channels coded separately is what makes per-channel margin reporting possible instead of a single figure nobody can act on.',
    faq: {
      question: 'Can you keep our online and in-store sales separate?',
      answer:
        'Yes, and it is worth insisting on. Once they are combined in the records, separating them afterwards is difficult, and per-channel margin is usually the most useful thing a multi-channel retailer can see.',
    },
  },
  'airdrie:virtual': {
    angle:
      'An Airdrie business running several channels and holding stock has more moving parts than an owner can track by feel, particularly where buying decisions are made weeks ahead of sales. A virtual financial controller provides the reporting to make those calls on evidence and the forecast to keep the stock investment within what the business can fund.',
    faq: {
      question: 'What would a controller help with in a retail business?',
      answer:
        'Mainly stock and margin: how much to hold, which channels and lines actually earn, and whether the buying commitments are within what cash supports. Those decisions are made continuously and usually without good information.',
    },
  },
  'strathaven:management': {
    angle:
      'Strathaven’s hospitality businesses need their result split into the parts they can act on, because food, drink and accommodation carry very different margins and respond to different decisions. A combined monthly figure tells an operator almost nothing; the same figure split by revenue stream tells them where to change the menu, the pricing or the roster.',
    faq: {
      question: 'How should a hospitality business break down its accounts?',
      answer:
        'By revenue stream with its own cost of sales, so food, drink and any accommodation are visible separately, and with staff cost as a percentage of revenue. Those two views drive nearly every operational decision.',
    },
  },
  'strathaven:annual': {
    angle:
      'Strathaven’s independents are frequently owner-operated with the business and the property closely connected, and how that property is held changes both the accounts and the eventual tax position on sale. It is worth understanding the arrangement clearly rather than discovering the implications when the business is being sold or passed on.',
    faq: {
      question: 'We own the property our business trades from. Does that matter?',
      answer:
        'Yes, considerably. Whether the property sits inside the company or is held personally affects the accounts, the tax on any eventual sale, and the reliefs that might apply, so it is worth reviewing well before a sale is contemplated.',
    },
  },
  'strathaven:cash': {
    angle:
      'Visitor trade gives Strathaven businesses a genuinely seasonal cash pattern, where a strong summer has to carry a thin winter. The important number is not the peak but how much of it survives to fund the off-season, and a forecast across the full year is what turns that from a hope into a figure you can hold back deliberately.',
    faq: {
      question: 'How do we make a good summer last through the winter?',
      answer:
        'Forecast the full year so you know what the quiet months need, then hold that back explicitly rather than treating a strong season as surplus. The reserve is easy to identify in advance and very hard to recover afterwards.',
    },
  },
  'strathaven:budgeting': {
    angle:
      'Seasonality is the whole budgeting problem for a Strathaven independent, because staffing and stock commitments have to be made ahead of a season whose strength is not yet known. Phasing the budget to the real trading year and reviewing it as the season opens allows those commitments to be adjusted while there is still time.',
    faq: {
      question: 'How do we staff for a season we cannot predict?',
      answer:
        'Budget to a realistic expectation, then review against actuals in the first weeks of the season. Early trade is a reasonable indicator, and rota and buying commitments can still be scaled if someone is comparing them to plan.',
    },
  },
  'strathaven:financial': {
    angle:
      'Adding covers, letting rooms or extending a Strathaven hospitality business is a capital commitment repaid out of a seasonal trading pattern, so the model has to run monthly rather than annually. An expansion that works on annual figures can still fail if the repayments fall due through the quiet part of the year.',
    faq: {
      question: 'What should we check before financing an expansion?',
      answer:
        'That the repayments are serviceable in your worst months, not just across the year. Seasonal businesses fail the monthly test far more often than the annual one, and lenders look at the monthly profile too.',
    },
  },
  'strathaven:bookkeeping': {
    angle:
      'Hospitality in Strathaven produces daily takings across several tender types, supplier deliveries several times a week, and staff on variable hours, which is a heavy bookkeeping load for a small business. Doing it weekly keeps gross margin visible while it can still be acted on, rather than confirming a bad quarter after it has closed.',
    faq: {
      question: 'How often should a hospitality business do its books?',
      answer:
        'Weekly. Food and drink margins move quickly with wastage, portioning and supplier prices, and a monthly or quarterly cycle finds the problem long after the trade it affected has gone.',
    },
  },
  'strathaven:virtual': {
    angle:
      'A Strathaven hospitality operator is usually working in the business daily, which leaves no realistic capacity for financial oversight during the season when it matters most. A virtual financial controller carries that through the year, keeping the seasonal forecast current and making sure the peak is being managed towards the quiet months rather than spent.',
    faq: {
      question: 'We are flat out in season. How would this work in practice?',
      answer:
        'The reporting and forecasting happen without needing your time, and the conversations are short and scheduled. The point is that oversight continues through the busy months, which is exactly when owner-run businesses lose sight of it.',
    },
  },
  'newton-mearns:management': {
    angle:
      'Newton Mearns supports a number of private healthcare, dental and similar practices, where the economics turn on chair or room utilisation and on the split between principal and associate work. Monthly accounts built around utilisation and contribution per practitioner answer the questions that actually govern a practice, which turnover on its own never does.',
    faq: {
      question: 'We run a private practice. What should our monthly figures show?',
      answer:
        'Utilisation of your available appointment capacity and contribution per practitioner after their direct costs. Those two explain nearly all the variation in practice profitability and neither is visible in a turnover figure.',
    },
  },
  'newton-mearns:annual': {
    angle:
      'Newton Mearns practices commonly operate as limited companies with associates engaged on a self-employed basis, and the status of those arrangements is worth reviewing rather than assumed. The year end also frequently involves goodwill from an earlier practice acquisition, whose treatment affects both the balance sheet and the tax position.',
    faq: {
      question: 'Are our associates correctly treated as self-employed?',
      answer:
        'It depends on the substance of the arrangement rather than the label in the contract. It is worth reviewing, because getting it wrong creates PAYE exposure that lands on the practice rather than the associate.',
    },
  },
  'newton-mearns:cash': {
    angle:
      'A Newton Mearns private practice is paid through a mix of patient payments at the point of treatment and insurer or plan remittances that arrive weeks later, and the two behave completely differently. Forecasting them separately matters because a strong month of treatment can precede the corresponding cash by a considerable margin.',
    faq: {
      question: 'Why does a busy month not show up in the bank?',
      answer:
        'Because insurer and plan payments lag the treatment, sometimes substantially. Forecasting those separately from direct patient payments shows when the cash from a busy period will actually arrive.',
    },
  },
  'newton-mearns:budgeting': {
    angle:
      'For a Newton Mearns practice the budget is a capacity plan: available appointment hours, the mix of treatments filling them, and the practitioner cost attached. Because capacity is essentially fixed by rooms and hours, the budget quickly shows whether the growth being planned for is achievable at all without adding capacity.',
    faq: {
      question: 'How do we plan growth when our capacity is fixed?',
      answer:
        'Budget from available hours and treatment mix rather than from a revenue target. That shows immediately whether growth has to come from mix and pricing or genuinely requires another room or practitioner.',
    },
  },
  'newton-mearns:financial': {
    angle:
      'Acquiring a practice or buying into one in Newton Mearns turns on what the goodwill is genuinely worth, which depends on how much of the patient base is attached to the departing principal. We model the transition on a realistic retention assumption and test what happens if it runs lower, because that is where these deals most often disappoint.',
    faq: {
      question: 'How should we value a practice we are buying?',
      answer:
        'On maintainable earnings with a realistic view of patient retention after the principal leaves. Retention is the assumption that decides whether the price was right, and it is regularly set too optimistically.',
    },
  },
  'newton-mearns:bookkeeping': {
    angle:
      'Practice management systems in Newton Mearns hold the treatment and billing detail while the accounting system holds the money, and the two only agree if someone reconciles them. Doing that monthly is what keeps revenue accurate, and it is the routine step that catches treatments billed but never collected.',
    faq: {
      question: 'Our practice software and accounts never agree. Is that normal?',
      answer:
        'Common, and worth fixing. The gap is usually uncollected balances, insurer shortfalls or discounts applied at the desk, all of which are real money and all of which stay invisible until the two systems are reconciled.',
    },
  },
  'newton-mearns:virtual': {
    angle:
      'A Newton Mearns practice principal is usually a clinician first, treating patients most of the week, with the business run in whatever time is left. A virtual financial controller takes the reporting, forecasting and analysis of practitioner performance, which is generally the work that gets postponed indefinitely otherwise.',
    faq: {
      question: 'We are clinicians, not finance people. How much of our time would this take?',
      answer:
        'Very little. The reporting is produced for you and the monthly conversation is short, which is the point: the analysis happens whether or not you have had a quiet week.',
    },
  },
  'clarkston:management': {
    angle:
      'Clarkston Toll and the surrounding streets support a lot of small, appointment-based practices, therapists, clinics and independent professionals, often with practitioners working part-time or renting space by the session. Monthly accounts that report contribution per practitioner and per session make clear which arrangements are genuinely paying and which are simply filling a diary.',
    faq: {
      question: 'We rent rooms to practitioners. How should that be reported?',
      answer:
        'Separately from your own service income, with the room costs attached, so you can see whether the rental arrangement contributes properly. Mixed into one figure it usually looks better than it is.',
    },
  },
  'clarkston:annual': {
    angle:
      'Many Clarkston practitioners operate as sole traders or single-director companies, and the year end is dominated by the boundary between business and personal: professional subscriptions, training, equipment and use of home. Those are legitimate and frequently under-claimed, but they need recording through the year to be claimed with any confidence.',
    faq: {
      question: 'Can I claim for professional training and subscriptions?',
      answer:
        'Generally yes where they maintain your existing professional skills, though training that qualifies you in something new is treated differently. Keeping the records as you go is what makes the claim straightforward.',
    },
  },
  'clarkston:cash': {
    angle:
      'Income for an appointment-based Clarkston practice is steady in principle and fragile in practice, since cancellations and quiet weeks translate directly into lost income that cannot be recovered later. A forecast built on realistic attendance rather than a full diary shows what the practice genuinely earns across a normal quarter.',
    faq: {
      question: 'How should we forecast when cancellations are unpredictable?',
      answer:
        'Use your actual attendance rate rather than a full diary. Most practices know their typical cancellation percentage, and forecasting on the full diary produces a figure the business has never once achieved.',
    },
  },
  'clarkston:budgeting': {
    angle:
      'The budget for a small Clarkston practice mostly answers one question: how many sessions a week the practice needs to run to cover fixed costs and produce a reasonable income. Once that number is explicit, decisions about hours, pricing and whether to take on another practitioner become concrete rather than approximate.',
    faq: {
      question: 'How many clients do I actually need?',
      answer:
        'It comes straight out of a simple budget: fixed costs plus the income you need, divided by your contribution per session. Most practitioners have never calculated it, and the figure is often lower than feared.',
    },
  },
  'clarkston:financial': {
    angle:
      'Buying into an established Clarkston practice, or taking on premises rather than renting sessions, is a step from variable cost to fixed cost, and that is the whole risk. The model needs to show the fixed commitment against a realistic client base, including the months where the space is paid for and not yet filled.',
    faq: {
      question: 'Should we move from renting sessions to taking our own premises?',
      answer:
        'Only where the client base reliably fills enough of the week. Renting flexes with demand; premises do not, so model the quiet months rather than the busy ones before committing.',
    },
  },
  'clarkston:bookkeeping': {
    angle:
      'Booking systems, card readers and direct payments give a small Clarkston practice several income routes, and reconciling them is what keeps the revenue figure real. It also catches the ordinary leakage of appointments delivered but never charged, which accumulates quietly and is entirely recoverable once visible.',
    faq: {
      question: 'Do I need proper bookkeeping for a one-person practice?',
      answer:
        'Yes, though it need not be elaborate. Reconciling your booking system against actual receipts monthly catches unbilled sessions and keeps the tax return straightforward, which is most of the benefit at that scale.',
    },
  },
  'clarkston:virtual': {
    angle:
      'Most single-practitioner businesses in Clarkston do not need a virtual financial controller, and we would say so plainly. It becomes worthwhile when a practice takes on employed staff or a second location, because that is the point at which the numbers stop being something one person can hold in their head.',
    faq: {
      question: 'Is a controller overkill for a small practice?',
      answer:
        'For a single practitioner, usually yes. Good bookkeeping and an annual review normally cover it until there is employed staff or a second site, and we would rather tell you that than sell you something you do not need.',
    },
  },
  'paisley:management': {
    angle:
      'A good number of Paisley businesses serve Glasgow Airport and the operations around it, where work runs to shift patterns and contracts are won on rate. Monthly accounts that show cost per shift or per contract, including the overtime and cover that rate cards rarely anticipate, are what tell you whether a contract is still worth holding.',
    faq: {
      question: 'We work on fixed contract rates. What should we track?',
      answer:
        'Actual delivered cost per shift against the contracted rate, with overtime and cover included. Those two absorb the margin on rate-based work and are usually the reason a contract quietly stops paying.',
    },
  },
  'paisley:annual': {
    angle:
      'Paisley’s airport-adjacent businesses often run substantial payrolls with shift premiums, overtime and holiday pay calculated on variable earnings, which is where year-end accruals get complicated. Holiday pay on variable hours in particular is regularly understated, and it is worth calculating properly rather than estimating.',
    faq: {
      question: 'How is holiday pay handled for staff on variable hours?',
      answer:
        'It is based on average earnings across a reference period rather than basic pay, so overtime and shift premiums feed into it. Businesses that accrue on basic pay alone typically understate the liability at the year end.',
    },
  },
  'paisley:cash': {
    angle:
      'A Paisley operator supplying airport contracts pays staff weekly or fortnightly while large customers settle to their own schedule, and the mismatch scales directly with the size of the contract. Winning a bigger contract therefore increases the funding requirement immediately, which is the point at which a forecast stops being optional.',
    faq: {
      question: 'A larger contract should help our cash. Why does it make it worse?',
      answer:
        'Because you pay the staff delivering it from week one and get paid on the customer’s terms. The bigger the contract, the bigger the gap you fund, so it is worth modelling before signing rather than after.',
    },
  },
  'paisley:budgeting': {
    angle:
      'For Paisley businesses running shift operations, the budget has to carry an honest assumption about cover: absence, overtime and agency use are not exceptions, they are a predictable percentage. Budgeting them explicitly is what stops every month showing an unfavourable staffing variance against a plan that was never realistic.',
    faq: {
      question: 'Should we budget for overtime and agency cover?',
      answer:
        'Yes, at your actual historic rate. Budgeting for perfect attendance guarantees an adverse variance every month and tells you nothing, whereas budgeting the real rate shows when cover genuinely exceeds the norm.',
    },
  },
  'paisley:financial': {
    angle:
      'Bidding for a larger airport-related contract from Paisley means demonstrating both that the rate works and that the business can carry delivery until payment arrives. The model needs to show mobilisation costs, the staffing ramp and the funding gap, because that is what a customer’s procurement process and a lender will both examine.',
    faq: {
      question: 'What do we need to show when tendering for a larger contract?',
      answer:
        'That the rate covers delivered cost including cover, and that you can fund mobilisation and the payment lag. Procurement tests capacity to deliver as much as price, and the funding question is part of that.',
    },
  },
  'paisley:bookkeeping': {
    angle:
      'Shift-based payrolls in Paisley involve variable hours, premiums and cover that change every period, so payroll is a genuine monthly calculation rather than a repeat. Keeping it accurate matters twice over: staff notice errors immediately, and the cost per shift that contract pricing depends on comes straight out of those figures.',
    faq: {
      question: 'Can you run payroll with shift premiums and variable hours?',
      answer:
        'Yes. It has to be built from actual hours each period rather than repeated, which is precisely why it benefits from being run properly rather than squeezed into a busy week.',
    },
  },
  'paisley:virtual': {
    angle:
      'A Paisley contractor with shift operations and a small number of large customers carries concentrated risk, where losing one contract changes the business materially. A virtual financial controller keeps contract-level profitability visible and the forecast current, which is what allows repricing or replacement to start before a renewal rather than after it.',
    faq: {
      question: 'Most of our revenue is one contract. What should we be doing?',
      answer:
        'Knowing precisely what it contributes and what the business looks like without it, and having that modelled well before renewal. Concentration is manageable when it is quantified and dangerous when it is only sensed.',
    },
  },
  'bearsden:management': {
    angle:
      'Bearsden has a high density of independent consultants and small professional firms selling expertise by the day, where the only real variables are day rate and days sold. Monthly accounts that track both against capacity show quickly whether a quiet quarter was a rate problem or a pipeline problem, which are addressed in completely different ways.',
    faq: {
      question: 'We sell consultancy days. What should we be measuring?',
      answer:
        'Days sold against days available, and average realised rate against your headline rate. Discounting and unbilled time are where the money goes, and neither shows up in a revenue figure.',
    },
  },
  'bearsden:annual': {
    angle:
      'Bearsden consultants typically operate through personal service companies, so the year end covers both the company accounts and the director’s own position, and the two are inseparable. Where the company works through agencies or end clients, the employment status of those engagements is worth reviewing rather than assumed to be settled.',
    faq: {
      question: 'Do the off-payroll rules affect my consultancy company?',
      answer:
        'They can, depending on the client and how the engagement is structured, and responsibility for the determination varies with the client’s size. It is worth reviewing per engagement rather than treating it as settled once.',
    },
  },
  'bearsden:cash': {
    angle:
      'A Bearsden consultancy has few costs beyond the director, so cash looks straightforward until the corporation tax, VAT and personal tax all fall due within a few months of each other. Forecasting those explicitly, and holding them aside as earned, is most of what cash planning means for a business at this scale.',
    faq: {
      question: 'How much should a consultancy company hold back for tax?',
      answer:
        'Enough to cover corporation tax, VAT if registered, and the personal tax on your drawings. Holding it in a separate account as it is earned is far more reliable than relying on the main balance looking healthy.',
    },
  },
  'bearsden:budgeting': {
    angle:
      'The budget for a Bearsden consultancy is essentially a utilisation plan: how many chargeable days the year realistically contains once holiday, business development and administration are removed. Doing that honestly usually shows the sellable year is a good deal shorter than assumed, which is what makes the day rate question concrete.',
    faq: {
      question: 'How many chargeable days are there in a consulting year?',
      answer:
        'Far fewer than the calendar suggests once holiday, sales work and admin come out. Working it out properly is often what shows the day rate needs to rise rather than the pipeline needing to grow.',
    },
  },
  'bearsden:financial': {
    angle:
      'A Bearsden consultancy growing beyond its founder faces a specific problem: the founder’s billing falls as they manage, before the new people are fully productive. Modelling that dip honestly, and how long the business must fund it, is usually what determines whether growing beyond a sole practice is viable at all.',
    faq: {
      question: 'Should I take on associates or stay independent?',
      answer:
        'It depends on whether you can fund the dip, since your own billing falls while you recruit and manage before associates are fully utilised. Modelling that period is what makes the decision rather than the eventual position.',
    },
  },
  'bearsden:bookkeeping': {
    angle:
      'Bookkeeping for a Bearsden consultancy is low in volume but high in consequence, since one misclassified expense or a mishandled director’s loan creates a disproportionate problem at the year end. The work is mostly about consistency and about keeping the director’s account clean rather than about transaction volume.',
    faq: {
      question: 'My company has very few transactions. Do I need a bookkeeper?',
      answer:
        'The volume is low but the treatment matters, particularly around the director’s loan account and expenses. Most of the value is in getting a small number of things consistently right rather than in processing quantity.',
    },
  },
  'bearsden:virtual': {
    angle:
      'An independent Bearsden consultant generally does not need a virtual financial controller. It becomes relevant when the practice takes on associates or employed staff, because utilisation, pricing and capacity then need managing as a business rather than as a personal diary.',
    faq: {
      question: 'When would a solo consultant need more than an accountant?',
      answer:
        'Usually when other people start delivering the work. Until then an accountant and clean bookkeeping cover it; after that, utilisation and pricing across a team need someone actively managing them.',
    },
  },
  'bishopbriggs:management': {
    angle:
      'Bishopbriggs is substantially a commuter town, so businesses along the Kirkintilloch Road corridor serving residents trade heavily in evenings and at weekends while daytime is quiet. Monthly accounts that show revenue and staff cost by trading period make clear whether the quiet hours are worth opening for, which is usually the biggest cost decision available.',
    faq: {
      question: 'Should we stay open during quiet daytime hours?',
      answer:
        'Report revenue and staff cost by trading period and the answer is usually clear. Many businesses find the quiet hours are covered but contribute almost nothing once staffing is accounted for.',
    },
  },
  'bishopbriggs:annual': {
    angle:
      'Bishopbriggs businesses serving the local community are usually small limited companies or sole traders where the year end is straightforward provided the records are current. The recurring issue is a director paying business costs personally and never recording them, which understates costs and quietly overstates the tax due.',
    faq: {
      question: 'I pay for some business costs from my personal account. Does that matter?',
      answer:
        'Yes, because unrecorded costs mean you pay more tax than you need to. They are legitimate business expenses and should be recorded and reimbursed through the director’s account rather than absorbed personally.',
    },
  },
  'bishopbriggs:cash': {
    angle:
      'Businesses on the Kirkintilloch Road corridor take money as they trade, so the cash risk is not collection but commitment: rent, staffing and stock fixed against weekly takings that vary with local trade. A forecast on a weekly grid shows how much variation the business can absorb before the fixed costs become a problem.',
    faq: {
      question: 'How much of a downturn could we absorb?',
      answer:
        'A forecast answers that directly, by showing how far weekly takings can fall before fixed costs cannot be met. Knowing the number in advance is what makes it possible to act early rather than react.',
    },
  },
  'bishopbriggs:budgeting': {
    angle:
      'For a Bishopbriggs business serving commuters, budgeting is largely about matching staffing to a trading pattern that is well understood but rarely written down. Setting expected revenue by day and period, then rostering against it, is what turns a familiar rhythm into a staffing plan that can be measured rather than adjusted by feel.',
    faq: {
      question: 'How do we get staffing costs under control?',
      answer:
        'Budget revenue by day and trading period, then roster to it and review weekly. Staff cost as a percentage of revenue by period shows exactly where the roster is out of line with the trade.',
    },
  },
  'bishopbriggs:financial': {
    angle:
      'Taking a unit on the Kirkintilloch Road corridor is a long lease commitment justified by local catchment, so the model needs to be about footfall and spend rather than ambition. Testing what happens if trade builds more slowly than hoped is the useful part, because the lease continues regardless of how the first year goes.',
    faq: {
      question: 'What should we consider before signing a lease?',
      answer:
        'The length and exit terms as much as the rent, tested against a slower build-up than you expect. A lease is a fixed multi-year commitment against trade that is neither fixed nor certain.',
    },
  },
  'bishopbriggs:bookkeeping': {
    angle:
      'A Bishopbriggs service business generates steady, moderate transaction volume, which is exactly the level at which bookkeeping slips a few weeks behind and stays there. Keeping it current is less about compliance than about the VAT return being routine and the monthly figures being available while they can still influence something.',
    faq: {
      question: 'We are a few months behind. Is that a problem?',
      answer:
        'It is recoverable, and the sooner it is caught up the cheaper it is. The larger cost is that you have been making decisions without current figures for those months, which is usually where the real money went.',
    },
  },
  'bishopbriggs:virtual': {
    angle:
      'A Bishopbriggs business with staff, a lease and steady local trade usually needs better financial oversight rather than a full finance function. A virtual financial controller at a day or two a month covers the reporting, keeps the forecast current, and provides someone to test pricing and staffing decisions against before they are made.',
    faq: {
      question: 'We only need a small amount of help. Is that possible?',
      answer:
        'Yes, engagements are sized to the business, and for many local businesses a day or two a month is right. The value is in the regular rhythm and the challenge, not in the volume of hours.',
    },
  },
};

/** Look up the local angle for an area/service pair. */
export function getAngle(areaSlug: string, serviceSlug: string): AreaServiceAngle | undefined {
  return areaServiceAngles[`${areaSlug}:${serviceSlug}`];
}
