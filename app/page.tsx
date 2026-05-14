import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { DashboardPreview } from '@/components/site/DashboardPreview';

const features = ['Cash Flow Forecast','Burn Rate + Runway','Funding Readiness Score','Cost Leak Detection','Scenario Modeling','Weekly Financial Review'];
const tiers = ['Free GPT','Starter Lab','Founder OS','Advisor Desk'];
const useCases = ['Can I afford to hire?','Should I cut expenses?','Am I ready for funding?','How much runway do I have?','What if revenue drops?','Can I take on debt?','Should I increase ad spend?','What should I review every week?'];

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <div className="badge">AI-Powered Finance Command Center</div>
          <h1>CFO-level clarity <span className="text-gradient">without CFO-level payroll.</span></h1>
          <p>Upload your financials and get cash flow forecasts, burn rate analysis, funding readiness scores, cost-cutting recommendations, and plain-English financial guidance for your business.</p>
          <div className="hero-ctas flex">
            <a className="btn btn-primary" href="/free-financial-snapshot">Get My Financial Snapshot</a>
            <a className="btn btn-outline" href="/tools/funding-readiness">Try the Free GPT</a>
          </div>
          <div className="trust-line">Built for founders who are done flying blind</div>
        </div>
      </section>
      <DashboardPreview />
      <section><div className="container"><div className="section-header"><h2>Most owners do not need more spreadsheets. <span className="text-gradient">They need financial signal.</span></h2></div><div className="pain-grid grid"><div className="pain-card"><h4>You know revenue, but not runway.</h4><p>The bank balance looks fine today. That does not mean you survive a slow quarter.</p></div><div className="pain-card"><h4>Your P&L says profit, but your bank account says panic.</h4><p>Paper profit is cute. Real-world cash flow is where the war is won.</p></div><div className="pain-card"><h4>Your documents look like a crime scene.</h4><p>Funding gets harder when every report has three versions and none of them agree.</p></div><div className="pain-card"><h4>Decisions based on vibes.</h4><p>Hiring, debt, and ad spend should not be a coin toss in a hoodie.</p></div></div></div></section>
      <section style={{background:'var(--bg-card)'}}><div className="container"><div className="section-header" style={{textAlign:'center'}}><h2>Upload. Analyze. Act.</h2></div><div className="step-grid grid"><div className="step-card"><div className="step-num">01</div><h3>Upload Financials</h3><p>Use exports, statements, or spreadsheets. First version focuses on structured tool input and future upload workflows.</p></div><div className="step-card"><div className="step-num">02</div><h3>Get CFO Analysis</h3><p>Map burn, runway, cash crunch risk, funding readiness, and cost leaks without hiring a full-time finance department.</p></div><div className="step-card"><div className="step-num">03</div><h3>Make Better Decisions</h3><p>Know what to cut, what to review, when to wait, and when you might be ready to pursue capital.</p></div></div></div></section>
      <section><div className="container"><div className="section-header"><h2>Your financial command center.</h2></div><div className="feature-grid grid">{features.map((feature)=><div className="feature-card" key={feature}><h3>{feature}</h3><p>{feature} tooling for clearer owner decisions and fewer spreadsheet exorcisms.</p></div>)}</div></div></section>
      <section style={{background:'#000'}}><div className="container"><div className="section-header" style={{textAlign:'center'}}><h2>Start with the GPT. <br />Grow into a financial operating system.</h2></div><div className="price-grid grid">{tiers.map((tier, idx)=><div className={`price-card ${idx===2?'featured':''}`} key={tier}>{idx===2 && <div className="recommend-tag">FOUNDER FAVORITE</div>}<h3>{tier}</h3><p>{tier==='Free GPT'?'Self-serve AI financial analysis.':tier==='Starter Lab'?'Private group, templates, prompts, workflows, and monthly Cash Flow Clinic / AMA.':tier==='Founder OS'?'Done-with-you FinOps-as-a-Service Micro-SaaS with dashboards, reports, reminders, and integrations where available.':'Founder OS plus human-in-the-loop review, monthly memo, review call, and financial decision support.'}</p><a href="/pricing" className={idx===2?'btn btn-primary':'btn btn-outline'}>Learn More</a></div>)}</div></div></section>
      <section><div className="container"><div className="section-header"><h2>Built for decisions that keep owners up at night.</h2></div><div className="use-case-grid grid">{useCases.map((u)=><div className="use-case-card" key={u}>{u}</div>)}</div></div></section>
      <section><div className="container"><div className="lead-section" style={{textAlign:'center'}}><h2>Get your free financial snapshot.</h2><p>Answer six questions and see where your business stands.</p><a className="btn btn-primary" href="/free-financial-snapshot">Get My Financial Snapshot</a></div></div></section>
      <Footer />
    </>
  );
}
