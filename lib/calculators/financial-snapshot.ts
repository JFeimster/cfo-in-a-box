export type FinancialSnapshotInput = {
  businessName?: string;
  businessType?: string;
  currentCash?: number;
  cashBalance?: number;
  monthlyRevenue?: number;
  monthlyExpenses?: number;
  payrollOrContractorSpend?: number;
  debtPayments?: number;
  ownerDraws?: number;
  expectedInflows?: number;
  upcomingLargeExpenses?: number;
  fundingGoal?: number;
  biggestConcern?: string;
};

export type FinancialSnapshotRiskLevel = 'critical' | 'elevated' | 'watch' | 'stable';

export type FinancialSnapshotCalculation = {
  businessName: string;
  businessType: string;
  cashBalance: number | null;
  currentCash: number | null;
  monthlyRevenue: number | null;
  monthlyExpenses: number | null;
  payrollOrContractorSpend: number;
  debtPayments: number;
  ownerDraws: number;
  expectedInflows: number;
  upcomingLargeExpenses: number;
  fundingGoal: number | null;
  biggestConcern: string;
  grossBurn: number | null;
  monthlyNetCashFlow: number | null;
  netBurn: number | null;
  runwayMonths: number | null;
  breakEvenGap: number | null;
  cashOutDateEstimate: string | null;
  expenseRatio: number | null;
  fundingReadinessMiniScore: number | null;
  riskLevel: FinancialSnapshotRiskLevel;
  knownInputs: string[];
  missingInputs: string[];
  ctaSignals: string[];
};

function toOptionalNumber(value: unknown, fieldName: string): number | null {
  if (value === null || value === undefined || value === '') return null;
  const numeric = typeof value === 'string' ? Number(value.replace(/[$,\s]/g, '')) : Number(value);
  if (!Number.isFinite(numeric)) return null;
  if (numeric < 0) throw new Error(`${fieldName} cannot be negative for this planning workflow.`);
  return numeric;
}

function toNumber(value: unknown, fieldName: string): number {
  const numeric = toOptionalNumber(value, fieldName);
  return numeric ?? 0;
}

function hasInput(value: unknown): boolean {
  return value !== undefined && value !== null && value !== '';
}

function roundMoney(value: number): number {
  return Math.round(value * 100) / 100;
}

function roundMonths(value: number): number {
  return Math.round(value * 100) / 100;
}

function estimateCashOutDate(runwayMonths: number | null): string | null {
  if (runwayMonths === null || runwayMonths <= 0 || !Number.isFinite(runwayMonths)) return null;
  const date = new Date();
  date.setDate(date.getDate() + Math.floor(runwayMonths * 30.44));
  return date.toISOString().slice(0, 10);
}

function riskFromRunway(runwayMonths: number | null, monthlyNetCashFlow: number | null, missingInputs: string[]): FinancialSnapshotRiskLevel {
  if (monthlyNetCashFlow !== null && monthlyNetCashFlow >= 0) return missingInputs.length > 3 ? 'watch' : 'stable';
  if (runwayMonths === null) return 'watch';
  if (runwayMonths < 2) return 'critical';
  if (runwayMonths < 6) return 'elevated';
  return 'watch';
}

function calculateFundingReadinessMiniScore(runwayMonths: number | null, expenseRatio: number | null, monthlyRevenue: number | null, debtPayments: number, fundingGoal: number | null, biggestConcern: string): number | null {
  if (monthlyRevenue === null || monthlyRevenue <= 0) return null;

  let score = 0;

  if (runwayMonths === null) score += 30;
  else if (runwayMonths >= 8) score += 30;
  else if (runwayMonths >= 4) score += 22;
  else if (runwayMonths >= 2) score += 12;
  else score += 4;

  if (monthlyRevenue >= 50000) score += 20;
  else if (monthlyRevenue >= 25000) score += 16;
  else if (monthlyRevenue >= 10000) score += 11;
  else score += 6;

  if (expenseRatio === null) score += 6;
  else if (expenseRatio <= 0.75) score += 20;
  else if (expenseRatio <= 0.95) score += 14;
  else if (expenseRatio <= 1.2) score += 8;
  else score += 3;

  if (debtPayments <= 0) score += 15;
  else if (debtPayments / monthlyRevenue <= 0.08) score += 12;
  else if (debtPayments / monthlyRevenue <= 0.15) score += 8;
  else score += 3;

  if (fundingGoal !== null && biggestConcern !== 'Not provided') score += 15;
  else if (fundingGoal !== null || biggestConcern !== 'Not provided') score += 8;

  return Math.max(0, Math.min(100, Math.round(score)));
}

function buildCtaSignals(riskLevel: FinancialSnapshotRiskLevel, runwayMonths: number | null, monthlyNetCashFlow: number | null): string[] {
  if (riskLevel === 'critical') {
    return ['build-30-day-cash-survival-plan', 'run-expense-leak-detector', 'generate-funding-prep-checklist', 'book-advisor-desk-review'];
  }

  if (riskLevel === 'elevated') {
    return ['build-13-week-cash-flow-forecast', 'run-funding-readiness-score', 'create-weekly-financial-review', 'join-starter-lab'];
  }

  if (monthlyNetCashFlow !== null && monthlyNetCashFlow >= 0) {
    return ['model-hiring-affordability', 'model-growth-scenario', 'generate-monthly-advisor-memo', 'install-founder-os'];
  }

  if (runwayMonths !== null && runwayMonths >= 6) {
    return ['build-cash-flow-forecast', 'review-expense-timing', 'run-funding-readiness-score', 'create-weekly-financial-review'];
  }

  return ['complete-missing-financial-inputs', 'build-cash-flow-forecast', 'run-expense-leak-detector'];
}

export function calculateFinancialSnapshot(rawInput: FinancialSnapshotInput): FinancialSnapshotCalculation {
  const businessName = rawInput.businessName?.trim() || 'Not provided';
  const businessType = rawInput.businessType?.trim() || 'business';
  const biggestConcern = rawInput.biggestConcern?.trim() || 'Not provided';

  const cashBalance = toOptionalNumber(rawInput.currentCash ?? rawInput.cashBalance, 'currentCash');
  const monthlyRevenue = toOptionalNumber(rawInput.monthlyRevenue, 'monthlyRevenue');
  const monthlyExpenses = toOptionalNumber(rawInput.monthlyExpenses, 'monthlyExpenses');
  const payrollOrContractorSpend = toNumber(rawInput.payrollOrContractorSpend, 'payrollOrContractorSpend');
  const debtPayments = toNumber(rawInput.debtPayments, 'debtPayments');
  const ownerDraws = toNumber(rawInput.ownerDraws, 'ownerDraws');
  const expectedInflows = toNumber(rawInput.expectedInflows, 'expectedInflows');
  const upcomingLargeExpenses = toNumber(rawInput.upcomingLargeExpenses, 'upcomingLargeExpenses');
  const fundingGoal = toOptionalNumber(rawInput.fundingGoal, 'fundingGoal');

  const knownInputs: string[] = [];
  const missingInputs: string[] = [];

  if (cashBalance !== null) knownInputs.push('current cash'); else missingInputs.push('current cash');
  if (monthlyRevenue !== null) knownInputs.push('monthly revenue'); else missingInputs.push('monthly revenue');
  if (monthlyExpenses !== null) knownInputs.push('monthly expenses'); else missingInputs.push('monthly expenses');
  if (hasInput(rawInput.payrollOrContractorSpend)) knownInputs.push('payroll or contractor spend'); else missingInputs.push('payroll or contractor spend');
  if (hasInput(rawInput.debtPayments)) knownInputs.push('debt payments'); else missingInputs.push('debt payments');
  if (hasInput(rawInput.ownerDraws)) knownInputs.push('owner draws'); else missingInputs.push('owner draws');
  if (hasInput(rawInput.expectedInflows)) knownInputs.push('expected inflows'); else missingInputs.push('expected inflows');
  if (hasInput(rawInput.upcomingLargeExpenses)) knownInputs.push('upcoming large expenses'); else missingInputs.push('upcoming large expenses');
  if (fundingGoal !== null) knownInputs.push('funding goal'); else missingInputs.push('funding goal');

  // Gross burn is the monthly cash outflow base before revenue offset.
  const grossBurn = monthlyExpenses === null ? null : roundMoney(monthlyExpenses + debtPayments + ownerDraws + upcomingLargeExpenses);

  // Net cash flow uses submitted monthly revenue plus expected inflows, less monthly cash outflows.
  const monthlyNetCashFlow = monthlyRevenue === null || grossBurn === null ? null : roundMoney(monthlyRevenue + expectedInflows - grossBurn);
  const netBurn = monthlyNetCashFlow === null ? null : Math.max(0, roundMoney(-monthlyNetCashFlow));

  // Runway is only finite when the business has current cash and positive net burn.
  const runwayMonths = cashBalance === null || netBurn === null || netBurn === 0 ? null : roundMonths(cashBalance / netBurn);
  const breakEvenGap = monthlyNetCashFlow === null ? null : Math.max(0, roundMoney(-monthlyNetCashFlow));
  const expenseRatio = monthlyRevenue !== null && monthlyRevenue > 0 && grossBurn !== null ? roundMonths(grossBurn / monthlyRevenue) : null;
  const fundingReadinessMiniScore = calculateFundingReadinessMiniScore(runwayMonths, expenseRatio, monthlyRevenue, debtPayments, fundingGoal, biggestConcern);
  const riskLevel = riskFromRunway(runwayMonths, monthlyNetCashFlow, missingInputs);

  return {
    businessName,
    businessType,
    cashBalance,
    currentCash: cashBalance,
    monthlyRevenue,
    monthlyExpenses,
    payrollOrContractorSpend,
    debtPayments,
    ownerDraws,
    expectedInflows,
    upcomingLargeExpenses,
    fundingGoal,
    biggestConcern,
    grossBurn,
    monthlyNetCashFlow,
    netBurn,
    runwayMonths,
    breakEvenGap,
    cashOutDateEstimate: estimateCashOutDate(runwayMonths),
    expenseRatio,
    fundingReadinessMiniScore,
    riskLevel,
    knownInputs,
    missingInputs,
    ctaSignals: buildCtaSignals(riskLevel, runwayMonths, monthlyNetCashFlow)
  };
}
