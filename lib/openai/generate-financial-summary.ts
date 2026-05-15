import type { FinancialSnapshotCalculation } from '@/lib/calculators/financial-snapshot';

export type FinancialSnapshotSummary = {
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

const COMPLIANCE_DISCLAIMER = 'This financial snapshot is for business planning and financial decision support only. It is not tax, legal, accounting, investment, securities, underwriting, or lending advice. Funding readiness comments are not approvals, preapprovals, underwriting decisions, offers, commitments, or guarantees of financing.';

function formatCurrency(value: number | null): string {
  if (value === null) return 'not provided';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

function fallbackCtas(calculation: FinancialSnapshotCalculation): FinancialSnapshotSummary['suggestedCtas'] {
  const ctaMap: Record<string, FinancialSnapshotSummary['suggestedCtas'][number]> = {
    'build-30-day-cash-survival-plan': {
      label: 'Build a 30-Day Cash Survival Plan',
      reason: 'Runway is short enough that immediate cash control matters more than dashboard decoration.',
      target: '/tools/cash-runway'
    },
    'run-expense-leak-detector': {
      label: 'Run Expense Leak Detector',
      reason: 'Review recurring spend, contractor costs, and low-ROI expenses before cash gets tighter.',
      target: '/tools'
    },
    'generate-funding-prep-checklist': {
      label: 'Generate Funding Prep Checklist',
      reason: 'Funding conversations go better when the documents are not scattered across the digital junk drawer.',
      target: '/tools/funding-readiness'
    },
    'book-advisor-desk-review': {
      label: 'Book Advisor Desk Review',
      reason: 'A short runway deserves human review before big cuts, debt, or growth moves.',
      target: '/pricing'
    },
    'build-13-week-cash-flow-forecast': {
      label: 'Build a 13-Week Cash Flow Forecast',
      reason: 'A medium runway needs weekly visibility, not bank-balance astrology.',
      target: '/tools/cash-runway'
    },
    'run-funding-readiness-score': {
      label: 'Run Funding Readiness Score',
      reason: 'Check documentation, cash flow, margins, and use-of-funds gaps before applying.',
      target: '/tools/funding-readiness'
    },
    'create-weekly-financial-review': {
      label: 'Create Weekly Financial Review',
      reason: 'A weekly money rhythm prevents surprise financial raccoons in the pantry.',
      target: '/tools'
    },
    'join-starter-lab': {
      label: 'Join Starter Lab',
      reason: 'Templates and review rhythms help you stop reinventing finance ops every Monday.',
      target: '/pricing'
    },
    'model-hiring-affordability': {
      label: 'Model Hiring Affordability',
      reason: 'Positive cash flow gives you options, but hiring still needs a runway check.',
      target: '/tools'
    },
    'model-growth-scenario': {
      label: 'Model Growth Scenario',
      reason: 'Before scaling, test whether growth improves cash or just makes the hamster wheel shinier.',
      target: '/tools'
    },
    'generate-monthly-advisor-memo': {
      label: 'Generate Monthly Advisor Memo',
      reason: 'Turn the numbers into a board-style owner memo with risks and actions.',
      target: '/demo'
    },
    'install-founder-os': {
      label: 'Install Founder OS',
      reason: 'If the business is stable, automate monthly financial visibility before growth gets messy.',
      target: '/pricing'
    },
    'complete-missing-financial-inputs': {
      label: 'Complete Missing Financial Inputs',
      reason: 'The snapshot is only as good as the numbers fed into it. Garbage in, spreadsheet goblin out.',
      target: '/app/financial-snapshot'
    },
    'build-cash-flow-forecast': {
      label: 'Build Cash Flow Forecast',
      reason: 'Forecast timing before making bigger spending or funding decisions.',
      target: '/tools/cash-runway'
    },
    'review-expense-timing': {
      label: 'Review Expense Timing',
      reason: 'Cash crunches often come from timing, not just total expense levels.',
      target: '/tools'
    }
  };

  return calculation.ctaSignals.map((signal) => ctaMap[signal]).filter(Boolean).slice(0, 4);
}

export function buildFallbackFinancialSummary(calculation: FinancialSnapshotCalculation): FinancialSnapshotSummary {
  const runwayText = calculation.runwayMonths === null ? 'not enough data to calculate a finite runway' : `${calculation.runwayMonths} months of estimated runway`;
  const netCashFlowText = calculation.monthlyNetCashFlow === null ? 'not enough data to calculate monthly net cash flow' : formatCurrency(calculation.monthlyNetCashFlow);

  const topRisks = [
    calculation.riskLevel === 'critical' ? 'Estimated runway is critically short based on submitted inputs.' : '',
    calculation.monthlyNetCashFlow !== null && calculation.monthlyNetCashFlow < 0 ? 'The business is spending more cash than it brings in each month.' : '',
    calculation.missingInputs.length > 0 ? `Missing inputs limit the reliability of the snapshot: ${calculation.missingInputs.join(', ')}.` : ''
  ].filter(Boolean);

  return {
    executiveSummary: `Based on the submitted inputs, this ${calculation.businessType} shows ${netCashFlowText} in monthly net cash flow and ${runwayText}. The current risk level is ${calculation.riskLevel}.`,
    keyTakeaway: calculation.monthlyNetCashFlow !== null && calculation.monthlyNetCashFlow < 0
      ? 'Cash is moving the wrong direction. The owner should focus on extending runway, tightening expenses, and improving inflow timing.'
      : 'The business appears cash-flow positive or close to stable based on the submitted inputs, but missing data should be cleaned up before major decisions.',
    riskNarrative: calculation.riskLevel === 'critical'
      ? 'This is not a casual optimization problem. The snapshot suggests a short cash runway, which means the next move should protect cash before adding complexity.'
      : 'The snapshot is useful directionally, but the business should strengthen weekly visibility before making hiring, debt, funding, or growth decisions.',
    topRisks: topRisks.length > 0 ? topRisks : ['No major red flag was calculated from the limited submitted inputs, but the snapshot is still directional.'],
    opportunities: [
      'Build a weekly cash review rhythm.',
      'Review recurring software, contractor, debt, and owner draw timing.',
      'Create a cleaner funding-readiness file before pursuing capital.'
    ],
    immediateActions: [
      'Confirm current cash balance, monthly revenue, monthly expenses, debt payments, owner draws, and expected inflows.',
      'Identify the next 30 days of unavoidable cash outflows.',
      'Freeze or review nonessential spending until the cash trend is clear.'
    ],
    thirtyDayActions: [
      'Create a 13-week cash flow forecast.',
      'Run an expense leak review.',
      'Clean up financial documents needed for funding or advisor review.'
    ],
    ninetyDayActions: [
      'Install a monthly financial snapshot workflow.',
      'Track funding readiness and cash flow trend monthly.',
      'Model hiring, debt, and growth moves before committing cash.'
    ],
    suggestedCtas: fallbackCtas(calculation),
    assumptionsAndMissingData: calculation.missingInputs.length > 0
      ? calculation.missingInputs.map((item) => `${item} was not provided or should be verified.`)
      : ['Snapshot is based on submitted summary inputs only; source documents were not reviewed in this workflow.'],
    complianceDisclaimer: COMPLIANCE_DISCLAIMER
  };
}

const summarySchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'executiveSummary',
    'keyTakeaway',
    'riskNarrative',
    'topRisks',
    'opportunities',
    'immediateActions',
    'thirtyDayActions',
    'ninetyDayActions',
    'suggestedCtas',
    'assumptionsAndMissingData',
    'complianceDisclaimer'
  ],
  properties: {
    executiveSummary: { type: 'string' },
    keyTakeaway: { type: 'string' },
    riskNarrative: { type: 'string' },
    topRisks: { type: 'array', items: { type: 'string' } },
    opportunities: { type: 'array', items: { type: 'string' } },
    immediateActions: { type: 'array', items: { type: 'string' } },
    thirtyDayActions: { type: 'array', items: { type: 'string' } },
    ninetyDayActions: { type: 'array', items: { type: 'string' } },
    suggestedCtas: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['label', 'reason', 'target'],
        properties: {
          label: { type: 'string' },
          reason: { type: 'string' },
          target: { type: 'string' }
        }
      }
    },
    assumptionsAndMissingData: { type: 'array', items: { type: 'string' } },
    complianceDisclaimer: { type: 'string' }
  }
};

function getRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : null;
}

function extractOutputText(responseBody: unknown): string | null {
  const responseRecord = getRecord(responseBody);
  if (!responseRecord) return null;

  if (typeof responseRecord.output_text === 'string') return responseRecord.output_text;

  const output = Array.isArray(responseRecord.output) ? responseRecord.output : [];
  for (const item of output) {
    const itemRecord = getRecord(item);
    const content = Array.isArray(itemRecord?.content) ? itemRecord.content : [];

    for (const contentItem of content) {
      const contentRecord = getRecord(contentItem);
      if (typeof contentRecord?.text === 'string') return contentRecord.text;
    }
  }

  return null;
}

export async function generateFinancialSummary(calculation: FinancialSnapshotCalculation): Promise<{
  summary: FinancialSnapshotSummary;
  source: 'openai' | 'fallback';
}> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return { summary: buildFallbackFinancialSummary(calculation), source: 'fallback' };
  }

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
        input: [
          {
            role: 'developer',
            content: [
              {
                type: 'input_text',
                text: [
                  'You are CFO-in-a-Box, a practical AI financial strategy assistant for small business owners.',
                  'You will receive deterministic financial calculations that have already been completed by the application.',
                  'Do not invent missing data. Do not present assumptions as facts.',
                  'Treat all outputs as business planning and financial decision support only.',
                  'Do not provide tax, legal, accounting, investment, securities, underwriting, or lending approval advice.',
                  'Do not imply funding approval, preapproval, guaranteed financing, specific terms, rates, or provider decisions.',
                  'Be direct about cash flow risk. Prioritize runway, burn rate, break-even gap, risk level, and next actions.',
                  'Return structured JSON only.'
                ].join('\n')
              }
            ]
          },
          {
            role: 'user',
            content: [
              {
                type: 'input_text',
                text: `Create a financial snapshot summary from this calculation object:\n${JSON.stringify(calculation, null, 2)}`
              }
            ]
          }
        ],
        text: {
          format: {
            type: 'json_schema',
            name: 'financial_snapshot_summary',
            strict: true,
            schema: summarySchema
          }
        }
      })
    });

    if (!response.ok) {
      return { summary: buildFallbackFinancialSummary(calculation), source: 'fallback' };
    }

    const body: unknown = await response.json();
    const outputText = extractOutputText(body);

    if (!outputText) {
      return { summary: buildFallbackFinancialSummary(calculation), source: 'fallback' };
    }

    return { summary: JSON.parse(outputText) as FinancialSnapshotSummary, source: 'openai' };
  } catch {
    return { summary: buildFallbackFinancialSummary(calculation), source: 'fallback' };
  }
}
