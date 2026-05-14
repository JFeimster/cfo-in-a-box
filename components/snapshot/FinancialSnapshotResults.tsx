type FinancialSnapshotSummary = {
  executiveSummary: string;
  keyTakeaway: string;
  riskNarrative: string;
  topRisks: string[];
  opportunities: string[];
  immediateActions: string[];
  thirtyDayActions: string[];
  ninetyDayActions: string[];
  suggestedCtas: Array<{
    label: string;
    reason: string;
    target: string;
  }>;
  assumptionsAndMissingData: string[];
  complianceDisclaimer: string;
};

type FinancialSnapshotCalculation = {
  cashBalance: number | null;
  monthlyRevenue: number | null;
  monthlyExpenses: number | null;
  grossBurn: number | null;
  monthlyNetCashFlow: number | null;
  netBurn: number | null;
  runwayMonths: number | null;
  breakEvenGap: number | null;
  riskLevel: string;
  knownInputs: string[];
  missingInputs: string[];
};

export type FinancialSnapshotResponse = {
  ok: true;
  data: {
    calculation: FinancialSnapshotCalculation;
    summary: FinancialSnapshotSummary;
    summarySource: 'openai' | 'fallback';
    markdownReport: string;
  };
  assumptions: string[];
  disclaimer: string;
};

function formatMoney(value: number | null): string {
  if (value === null) return 'Not provided';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

function formatMonths(value: number | null): string {
  if (value === null) return 'Not enough data';
  return `${value.toFixed(2)} months`;
}

function riskLabel(risk: string): string {
  if (risk === 'critical') return 'Critical cash risk';
  if (risk === 'elevated') return 'Elevated cash risk';
  if (risk === 'stable') return 'Stable based on inputs';
  return 'Watch closely';
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="snapshot-panel">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function FinancialSnapshotResults({ result }: { result: FinancialSnapshotResponse }) {
  const { calculation, summary, summarySource, markdownReport } = result.data;

  return (
    <div className="snapshot-results">
      <div className="snapshot-result-header">
        <div>
          <div className="badge">{summarySource === 'openai' ? 'AI CFO Summary' : 'Fallback Summary'}</div>
          <h2>Your Financial Snapshot</h2>
          <p>{summary.executiveSummary}</p>
        </div>
        <div className={`risk-pill risk-${calculation.riskLevel}`}>{riskLabel(calculation.riskLevel)}</div>
      </div>

      <div className="snapshot-metric-grid">
        <div className="db-card"><div className="db-label">Runway</div><div className="db-value">{formatMonths(calculation.runwayMonths)}</div></div>
        <div className="db-card"><div className="db-label">Net Burn</div><div className="db-value">{formatMoney(calculation.netBurn)}</div></div>
        <div className="db-card"><div className="db-label">Net Cash Flow</div><div className="db-value">{formatMoney(calculation.monthlyNetCashFlow)}</div></div>
        <div className="db-card"><div className="db-label">Break-even Gap</div><div className="db-value">{formatMoney(calculation.breakEvenGap)}</div></div>
      </div>

      <div className="snapshot-panel snapshot-takeaway">
        <h3>What the numbers mean</h3>
        <p>{summary.keyTakeaway}</p>
        <p>{summary.riskNarrative}</p>
      </div>

      <div className="snapshot-two-col">
        <ListBlock title="Top Risks" items={summary.topRisks} />
        <ListBlock title="Opportunities" items={summary.opportunities} />
      </div>

      <div className="snapshot-three-col">
        <ListBlock title="Next 7 Days" items={summary.immediateActions} />
        <ListBlock title="Next 30 Days" items={summary.thirtyDayActions} />
        <ListBlock title="Next 90 Days" items={summary.ninetyDayActions} />
      </div>

      <div className="snapshot-panel">
        <h3>Recommended next clicks</h3>
        <div className="snapshot-cta-grid">
          {summary.suggestedCtas.map((cta) => (
            <a className="snapshot-cta-card" href={cta.target} key={`${cta.label}-${cta.target}`}>
              <strong>{cta.label}</strong>
              <span>{cta.reason}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="snapshot-two-col">
        <ListBlock title="Known Inputs" items={calculation.knownInputs} />
        <ListBlock title="Assumptions + Missing Data" items={summary.assumptionsAndMissingData} />
      </div>

      <div className="snapshot-panel">
        <h3>Export-ready markdown report</h3>
        <textarea readOnly value={markdownReport} className="snapshot-report-box" aria-label="Export-ready markdown report" />
      </div>

      <div className="snapshot-disclaimer">{summary.complianceDisclaimer}</div>
    </div>
  );
}
