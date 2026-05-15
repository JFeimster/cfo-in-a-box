import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { DashboardPreview } from '@/components/site/DashboardPreview';

const features = [
  ['Financial Snapshot Workflow', 'Run cash, burn, runway, break-even pressure, and next actions from structured summary inputs.'],
  ['Cash Flow Forecast', 'See what is coming in, going out, and when cash gets uncomfortable.'],
  ['Burn Rate + Runway', 'Know the countdown clock before reality sends an invoice.'],
  ['Funding Readiness Score', 'Pressure-test documentation, cash flow, margins, debt capacity, and use-of-funds clarity.'],
  ['Cost Leak Detection', 'Spot bloated tools, weak-ROI spend, recurring leaks, and timing-sensitive cash drains.'],
  ['Scenario Modeling', 'Model hiring, cuts, debt, pricing, revenue drops, and growth bets before touching the bank account.']
];

const tiers = [
  ['Free GPT', 'Free', 'Fast CFO-style guidance, prompts, and early diagnostic support.'],
  ['Starter Lab', '$49/mo', 'Templates, prompts, workflows, group support, and cash-flow operating rhythm.'],
  ['Founder OS', '$499/mo + setup', 'Done-with-you FinOps dashboard, reporting, reminders, and workflow installation.'],
  ['Advisor Desk', '$1,500/mo + setup', 'Founder OS plus human-in-the-loop review, advisor memo, and decision support.']
];

const useCases = ['Can I afford to hire?','Should I cut expenses?','Am I ready for funding?','How much runway do I have?','What if revenue drops?','Can I take on debt?','Should I increase ad spend?','What should I review every week?'];

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <div className="badge">AI FinanceOps Command Center</div>
          <h1>CFO-level clarity <span className="text-gradient">without CFO-level payroll.</span></h1>
          <p>
            Upload numbers, run guided financial workflows, and get cash runway, burn rate, funding readiness,
            cost-pressure warnings, and plain-English action plans before the money gets weird.
          </p>
          <div className="hero-ctas flex">
            <a className="btn btn-primary" href="/app/financial-snapshot">Launch Free Snapshot</a>
            <a className="btn btn-outline" href="/tools">Explore the Tool Stack</a>
          </div>
          <div className="trust-line">Cash is oxygen · Profit is the scoreboard · Forecasting is radar</div>
        </div>
      </section>

      <DashboardPreview />

      <section>
        <div className="container">
          <div className="section-header">
            <div className="badge">The Owner Problem</div>
            <h2>Most owners do not need more spreadsheets. <span className="text-gradient">They need financial signal.</span></h2>
          </div>
          <div className="pain-grid grid">
            <div className="pain-card"><h4>You know revenue, but not runway.</h4><p>The bank balance looks fine today. That does not mean you survive a slow quarter.</p></div>
            <div className="pain-card"><h4>Your P&L says profit, but cash says panic.</h4><p>Paper profit is cute. Cash flow is where businesses either breathe or start making raccoon noises.</p></div>
            <div className="pain-card"><h4>Your funding story has gaps.</h4><p>Funding readiness starts before the application, not while you are stress-refreshing your inbox.</p></div>
            <div className="pain-card"><h4>Decisions based on vibes.</h4><p>Hiring, debt, and ad spend should not be a coin toss wearing a founder hoodie.</p></div>
          </div>
        </div>
      </section>

      <section style={{background:'rgba(255,255,255,0.025)'}}>
        <div className="container">
          <div className="section-header" style={{textAlign:'center', marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="badge">Workflow</div>
            <h2>Answer. Calculate. Act.</h2>
          </div>
          <div className="step-grid grid">
            <div className="step-card"><div className="step-num">01</div><h3>Enter the core numbers</h3><p>Cash, revenue, expenses, payroll, debt, large obligations, expected inflows, and the thing keeping you awake.</p></div>
            <div className="step-card"><div className="step-num">02</div><h3>Get deterministic calculations</h3><p>Runway, gross burn, net burn, break-even gap, expense ratio, risk level, and funding pressure before AI explains anything.</p></div>
            <div className="step-card"><div className="step-num">03</div><h3>Move with a report</h3><p>Export the markdown memo, then roll into cost leaks, funding readiness, cash forecasting, or Advisor Desk support.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header">
            <div className="badge">Core Arsenal</div>
            <h2>Your financial command center in a box.</h2>
          </div>
          <div className="feature-grid grid">
            {features.map(([feature, description])=><div className="feature-card" key={feature}><h3>{feature}</h3><p>{description}</p></div>)}
          </div>
        </div>
      </section>

      <section style={{background:'#000'}}>
        <div className="container">
          <div className="section-header" style={{textAlign:'center', marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="badge">Product Ladder</div>
            <h2>Start with the GPT. <br />Grow into the financial operating system.</h2>
          </div>
          <div className="price-grid grid">
            {tiers.map(([tier, price, description], idx)=>(
              <div className={`price-card ${idx===2?'featured':''}`} key={tier}>
                {idx===2 && <div className="recommend-tag">FOUNDER FAVORITE</div>}
                <h3>{tier}</h3>
                <div className="cost">{price}</div>
                <p>{description}</p>
                <a href="/pricing" className={idx===2?'btn btn-primary':'btn btn-outline'}>See Tier</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header">
            <div className="badge">Use Cases</div>
            <h2>Built for decisions that keep owners up at night.</h2>
          </div>
          <div className="use-case-grid grid">{useCases.map((u)=><div className="use-case-card" key={u}>{u}</div>)}</div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lead-section" style={{textAlign:'center'}}>
            <div className="badge">Free Snapshot</div>
            <h2>Stop checking your bank balance like it is a Magic 8 Ball.</h2>
            <p>Answer a few structured questions and see where your business stands across cash, burn, runway, risk, and next actions.</p>
            <a className="btn btn-primary" href="/app/financial-snapshot">Get My Free Financial Snapshot</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
