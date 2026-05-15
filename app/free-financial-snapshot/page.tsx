import Link from 'next/link';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

const snapshotOutputs = [
  'Estimated cash runway',
  'Monthly net burn',
  'Net cash flow signal',
  'Break-even gap',
  'Cash risk level',
  'Top risks and opportunities',
  '7 / 30 / 90 day action plan',
  'Export-ready markdown report'
];

const ownerTypes = [
  'Agency owners',
  'Contractors',
  'Ecommerce sellers',
  'Consultants',
  'Local service businesses',
  'Self-employed operators'
];

const painPoints = [
  'How long your cash may last',
  'What is creating the burn',
  'What gap must close to break even',
  'Which move deserves attention first',
  'Whether your numbers are ready for a deeper funding-readiness review'
];

export const metadata = {
  title: 'Free Financial Snapshot | CFO-in-a-Box',
  description: 'Get a free CFO-style financial snapshot that estimates runway, burn, break-even gap, risk level, and next actions.'
};

export default function FreeFinancialSnapshotPage() {
  return (
    <>
      <Header />
      <main>
        <section className="snapshot-landing-hero">
          <div className="container">
            <div className="badge">Free Financial Snapshot</div>
            <h1>Find the cash leak before it becomes a five-alarm financial circus.</h1>
            <p>
              CFO-in-a-Box gives small business owners a fast CFO-style read on runway, burn rate,
              break-even gap, risk level, and what to fix first.
            </p>
            <div className="snapshot-landing-actions">
              <Link className="btn btn-primary" href="/app/financial-snapshot">Start Free Snapshot</Link>
              <Link className="btn btn-outline" href="/tools">View free tools</Link>
            </div>
          </div>
        </section>

        <section className="snapshot-landing-section">
          <div className="container snapshot-landing-grid">
            <div className="snapshot-landing-copy">
              <div className="badge">Why this exists</div>
              <h2>Most owners are not broke. They are financially blind until the bank balance starts screaming.</h2>
              <p>
                Dashboards are cute. Cash flow is oxygen. This tool turns a few summary numbers into a practical
                read on whether you should cut costs, chase collections, build a forecast, prepare for funding,
                or stop pretending vibes are a finance department.
              </p>
            </div>
            <div className="snapshot-panel">
              <h3>The snapshot helps answer:</h3>
              <ul>
                {painPoints.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="snapshot-landing-section">
          <div className="container">
            <div className="snapshot-section-heading">
              <div className="badge">What you get</div>
              <h2>A fast financial readout, not another spreadsheet cave.</h2>
              <p>Enter the numbers you already know. CFO-in-a-Box handles the first-pass analysis.</p>
            </div>
            <div className="snapshot-feature-grid">
              {snapshotOutputs.map((item) => (
                <div className="snapshot-feature-card" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="snapshot-landing-section">
          <div className="container snapshot-landing-grid reverse">
            <div className="snapshot-panel">
              <h3>Built for operators like:</h3>
              <ul>
                {ownerTypes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="snapshot-landing-copy">
              <div className="badge">No finance degree required</div>
              <h2>You bring the business reality. The tool turns it into signal.</h2>
              <p>
                The working snapshot app calculates the core metrics first, then uses AI to package the result into
                plain-English summary, action plan, recommended next clicks, and an export-ready report.
              </p>
            </div>
          </div>
        </section>

        <section className="snapshot-final-cta">
          <div className="container">
            <div className="snapshot-final-card">
              <div>
                <div className="badge">Run the tool</div>
                <h2>Get your free financial snapshot now.</h2>
                <p>
                  Use the live workflow to calculate runway, burn, risk, and your next best moves in under three minutes.
                </p>
              </div>
              <Link className="btn btn-primary" href="/app/financial-snapshot">Start My Free Snapshot</Link>
            </div>
            <p className="snapshot-funnel-disclaimer">
              CFO-in-a-Box provides business planning and financial decision-support tools only. It does not provide tax,
              legal, accounting, investment, securities, lending approval, or underwriting advice. Funding-related outputs
              are not approvals, commitments, or guarantees.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
