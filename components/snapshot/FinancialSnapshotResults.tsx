'use client';

import { useState } from 'react';

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

function reportFileName(): string {
  const date = new Date().toISOString().slice(0, 10);
  return `cfo-in-a-box-financial-snapshot-${date}.md`;
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
  const [copyStatus, setCopyStatus] = useState('Copy report');

  async function copyReport() {
    try {
      await navigator.clipboard.writeText(markdownReport);
      setCopyStatus('Copied');
      window.setTimeout(() => setCopyStatus('Copy report'), 1800);
    } catch {
      setCopyStatus('Copy failed');
      window.setTimeout(() => setCopyStatus('Copy report'), 1800);
    }
  }

  function downloadReport() {
    const blob = new Blob([markdownReport], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = reportFileName();
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="snapshot-results" id="financial-snapshot-results">
      <div className="snapshot-result-header">
        <div>
          <div className="snapshot-result-toolbar">
            <div className="badge">{summarySource === 'openai' ? 'AI CFO Summary' : 'Fallback Summary'}</div>
            <span className="snapshot-source-note">
              {summarySource === 'openai' ? 'Generated after deterministic calculations' : 'Deterministic fallback summary'}
            </span>
          </div>
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
        <div className="snapshot-panel-heading">
          <div>
            <h3>Recommended next clicks</h3>
            <p>These are the next moves based on the runway and risk signal.</p>
          </div>
        </div>
        <div className="snapshot-cta-grid">
          {summary.suggestedCtas.map((cta, index) => (
            <a
              className="snapshot-cta-card"
              href={cta.target}
              key={`${cta.label}-${cta.target}`}
              data-snapshot-cta={cta.label}
              data-snapshot-risk={calculation.riskLevel}
            >
              <small>Step {index + 1}</small>
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

      <div className="snapshot-panel snapshot-export-panel">
        <div className="snapshot-export-heading">
          <div>
            <h3>Export-ready markdown report</h3>
            <p>Copy it into Notion, Google Docs, a client file, or your weekly review system.</p>
          </div>
          <div className="snapshot-export-actions">
            <button className="btn btn-outline" type="button" onClick={copyReport}>{copyStatus}</button>
            <button className="btn btn-primary" type="button" onClick={downloadReport}>Download .md</button>
          </div>
        </div>
        <textarea readOnly value={markdownReport} className="snapshot-report-box" aria-label="Export-ready markdown report" />
      </div>

      <div className="snapshot-lead-panel">
        <div>
          <h3>Want the 13-week cash view next?</h3>
          <p>Use this snapshot as the first signal, then turn it into a weekly cash forecast before the numbers start throwing furniture.</p>
        </div>
        <a className="btn btn-primary" href="/tools/cash-runway">Build cash forecast</a>
      </div>

      <div className="snapshot-disclaimer">{summary.complianceDisclaimer}</div>
    </div>
  );
}
