import type { FinancialSnapshotCalculation } from '@/lib/calculators/financial-snapshot';
import type { FinancialSnapshotSummary } from '@/lib/openai/generate-financial-summary';

function money(value: number | null): string {
  if (value === null) return 'Not provided';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

function months(value: number | null): string {
  if (value === null) return 'No net burn / not enough data';
  return `${value.toFixed(2)} months`;
}

function percent(value: number | null): string {
  if (value === null) return 'Not provided';
  return `${Math.round(value * 100)}%`;
}

function list(items: string[]): string {
  if (items.length === 0) return '- None listed';
  return items.map((item) => `- ${item}`).join('\n');
}

export function buildFinancialSnapshotMarkdownReport(
  calculation: FinancialSnapshotCalculation,
  summary: FinancialSnapshotSummary,
  summarySource: 'openai' | 'fallback'
): string {
  return [
    '# CFO-in-a-Box Financial Snapshot',
    '',
    `**Business name:** ${calculation.businessName}`,
    `**Business type:** ${calculation.businessType}`,
    `**Biggest concern:** ${calculation.biggestConcern}`,
    `**Summary source:** ${summarySource === 'openai' ? 'AI-generated after deterministic calculations' : 'Fallback summary from deterministic calculations'}`,
    '',
    '## Executive Summary',
    '',
    summary.executiveSummary,
    '',
    '## Key Metrics',
    '',
    `- Current cash: ${money(calculation.currentCash)}`,
    `- Monthly revenue: ${money(calculation.monthlyRevenue)}`,
    `- Monthly expenses: ${money(calculation.monthlyExpenses)}`,
    `- Payroll / contractor spend: ${money(calculation.payrollOrContractorSpend)}`,
    `- Gross burn: ${money(calculation.grossBurn)}`,
    `- Monthly net cash flow: ${money(calculation.monthlyNetCashFlow)}`,
    `- Net burn: ${money(calculation.netBurn)}`,
    `- Estimated runway: ${months(calculation.runwayMonths)}`,
    `- Estimated cash-out date: ${calculation.cashOutDateEstimate ?? 'Not applicable'}`,
    `- Break-even gap: ${money(calculation.breakEvenGap)}`,
    `- Expense ratio: ${percent(calculation.expenseRatio)}`,
    `- Funding readiness mini-score: ${calculation.fundingReadinessMiniScore === null ? 'Not available' : `${calculation.fundingReadinessMiniScore}/100`}`,
    `- Risk level: ${calculation.riskLevel}`,
    '',
    '## What the Numbers Mean',
    '',
    summary.keyTakeaway,
    '',
    summary.riskNarrative,
    '',
    '## Top Risks',
    '',
    list(summary.topRisks),
    '',
    '## Opportunities',
    '',
    list(summary.opportunities),
    '',
    '## Immediate Actions: Next 7 Days',
    '',
    list(summary.immediateActions),
    '',
    '## Short-Term Actions: Next 30 Days',
    '',
    list(summary.thirtyDayActions),
    '',
    '## Strategic Actions: Next 90 Days',
    '',
    list(summary.ninetyDayActions),
    '',
    '## Recommended Next Clicks',
    '',
    summary.suggestedCtas.map((cta) => `- **${cta.label}:** ${cta.reason} (${cta.target})`).join('\n') || '- No CTA recommendations generated.',
    '',
    '## Known Inputs',
    '',
    list(calculation.knownInputs),
    '',
    '## Assumptions and Missing Data',
    '',
    list(summary.assumptionsAndMissingData),
    '',
    '## Compliance Disclaimer',
    '',
    summary.complianceDisclaimer,
    ''
  ].join('\n');
}
