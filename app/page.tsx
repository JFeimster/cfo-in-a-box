import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { DashboardPreview } from '@/components/site/DashboardPreview';

const features = ['Financial Snapshot Workflow','Cash Flow Forecast','Burn Rate + Runway','Funding Readiness Score','Cost Leak Detection','Scenario Modeling'];
const tiers = ['Free GPT','Starter Lab','Founder OS','Advisor Desk'];
const useCases = ['Can I afford to hire?','Should I cut expenses?','Am I ready for funding?','How much runway do I have?','What if revenue drops?','Can I take on debt?','Should I increase ad spend?','What should I review every week?'];

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <div className="badge">AI-Powered Financial Command Center</div>
          <h1>CFO-level clarity <span className="text-gradient">without CFO-level payroll.</span></h1>
          <p>CFO-in-a-Box is a micro-SaaS web app for small business owners who need runway, burn rate, break-even gap, funding readiness pressure, financial risk, and next-step action plans without living inside a spreadsheet dungeon.</p>
          <div className="hero-ctas flex">
            <a className="btn btn-primary" href="/app/financial-snapshot">Get My Free Financial Snapshot</a>
            <a className="btn btn-outline" href="https://chatgpt.com/g/g-6a00e691f1188191a3803cb5fea36165-cfo-in-a-box">Try the Free CFO GPT</a>
          </div>
          <div className="trust-line">The Custom GPT is the free starter. The app is the product.</div>
        </div>
      </section>
      <DashboardPreview />
      <section><div className="container"><div className="section-header"><h2>Most owners do not need more spreadsheets. <span className="text-gradient">They need financial signal.</span></h2></div><div className="pain-grid grid"><div className="pain-card"><h4>You know revenue, but not runway.</h4><p>The bank balance looks fine today. That does not mean you survive a slow quarter.</p></div><div className="pain-card"><h4>Your P&L says profit, but your bank account says panic.</h4><p>Paper profit is cute. Real-world cash flow is where the war is won.</p></div><div className="pain-card"><h4>Your funding story has gaps.</h4><p>Funding readiness starts before the application, not while you are stress-refreshing your inbox.</p></div><div className="pain-card"><h4>Decisions based on vibes.</h4><p>Hiring, debt, and ad spend should not be a coin toss in a hoodie.</p></div></div></div></section>
      <section style={{background:'var(--bg-card)'}}><div className="container"><div className="section-header" style={{textAlign:'center'}}><h2>Answer. Calculate. Act.</h2></div><div className="step-grid grid"><div className="step-card"><div className="step-num">01</div><h3>Enter the core numbers</h3><p>Start with cash, revenue, expenses, payroll, debt, large expenses, expected inflows, and your biggest concern.</p></div><div className="step-card"><div className="step-num">02</div><h3>Get deterministic calculations</h3><p>Runway, gross burn, net burn, break-even gap, expense ratio, financial risk, and funding readiness pressure are calculated before AI explains the result.</p></div><div className="step-card"><div className="step-num">03</div><h3>Export the action report</h3><p>Copy or download the Markdown report, then move into expense leaks, funding readiness, cash planning, or Advisor Desk support.</p></div></div></div></section>
      <section><div className="container"><div className="section-header"><h2>Your financial command center.</h2></div><div className="feature-grid grid">{features.map((feature)=><div className="feature-card" key={feature}><h3>{feature}</h3><p>{feature} tooling for clearer owner decisions and fewer spreadsheet exorcisms.</p></div>)}</div></div></section>
      <section style={{background:'#000'}}><div className="container"><div className="section-header" style={{textAlign:'center'}}><h2>Start with the GPT. <br />Grow into the web app and financial operating system.</h2></div><div className="price-grid grid">{tiers.map((tier, idx)=><div className={`price-card ${idx===2?'featured':''}`} key={tier}>{idx===2 && <div className="recommend-tag">FOUNDER FAVORITE</div>}<h3>{tier}</h3><p>{tier==='Free GPT'?'Free acquisition channel, demo assistant, and future GPT Actions interface.':tier==='Starter Lab'?'Private group, templates, prompts, workflows, and monthly Cash Flow Clinic / AMA.':tier==='Founder OS'?'Done-with-you FinOps-as-a-Service Micro-SaaS with dashboards, reports, reminders, and integrations where available.':'Founder OS plus human-in-the-loop review, monthly memo, review call, and financial decision support.'}</p><a href="/pricing" className={idx===2?'btn btn-primary':'btn btn-outline'}>Learn More</a></div>)}</div></div></section>
      <section><div className="container"><div className="section-header"><h2>Built for decisions that keep owners up at night.</h2></div><div className="use-case-grid grid">{useCases.map((u)=><div className="use-case-card" key={u}>{u}</div>)}</div></div></section>
      <section><div className="container"><div className="lead-section" style={{textAlign:'center'}}><h2>Get your free financial snapshot.</h2><p>Answer a few structured questions and see where your business stands across cash, burn, runway, risk, and next actions.</p><a className="btn btn-primary" href="/app/financial-snapshot">Get My Free Financial Snapshot</a></div></div></section>
      <Footer />
    </>
  );
}
