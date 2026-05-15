import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

const tools = [
  { name: 'Financial Snapshot', href: '/app/financial-snapshot', status: 'Active', description: 'Guided workflow for runway, burn, break-even gap, financial risk, funding readiness pressure, and export-ready action report.' },
  { name: 'Cash Runway Calculator', href: '/tools/cash-runway', status: 'Active', description: 'Quickly estimate cash runway from cash balance, revenue, and expenses.' },
  { name: 'Funding Readiness Score', href: '/tools/funding-readiness', status: 'Active', description: 'Directional readiness score for funding preparation gaps. Not an approval or underwriting decision.' },
  { name: 'Expense Leak Detector', href: '/demo', status: 'Coming soon', description: 'Find recurring spend, duplicate tools, low-ROI costs, and 30-day cleanup opportunities.' },
  { name: 'Cash Flow Forecast Builder', href: '/demo', status: 'Coming soon', description: 'Build short-term cash visibility from expected inflows, outflows, payroll, debt, and large expenses.' },
  { name: 'Hiring Affordability Model', href: '/demo', status: 'Coming soon', description: 'Model whether a hire adds enough capacity or revenue to justify the cash impact.' },
  { name: 'Monthly Advisor Memo Generator', href: '/demo', status: 'Coming soon', description: 'Turn financial inputs into a founder-friendly monthly memo for review and decision support.' },
];

export default function ToolsPage() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="badge">Public Tools</div>
          <h1>Financial tools that turn owner panic into signal.</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '760px', marginBottom: '2rem' }}>
            Start with the Financial Snapshot. The other tools stack into a practical financial command center: runway, funding readiness, cost pressure, cash planning, hiring decisions, and advisor-ready reporting.
          </p>
          <div className="feature-grid grid">
            {tools.map((tool) => (
              <a className="feature-card" href={tool.href} key={tool.name}>
                <div className="badge" style={{ marginBottom: '1rem' }}>{tool.status}</div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
