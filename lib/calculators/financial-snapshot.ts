export type FinancialSnapshotInput = {
  businessType?: string;
  cashBalance?: number;
  monthlyRevenue?: number;
  monthlyExpenses?: number;
  debtPayments?: number;
  ownerDraws?: number;
  expectedInflows?: number;
  upcomingLargeExpenses?: number;
  fundingGoal?: number;
  biggestConcern?: string;
};

export type FinancialSnapshotRiskLevel = 'critical' | 'elevated' | 'watch' | 'stable';

export type FinancialSnapshotCalculation = {
  businessType: string;
  cashBalance: number | null;
  monthlyRevenue: number | null;
  monthlyExpenses: number | null;
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
  riskLevel: FinancialSnapshotRiskLevel;
  knownInputs: string[];
  missingInputs: string[];
  ctaSignals: string[];
};

function toOptionalNumber(value: unknown): number | null {
  if (value === null || value === undefined || value === '') return null;
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : null;
}

function toNumber(value: unknown): number {
  const numeric = toOptionalNumber(value);
  return numeric ?? 0;
}

function roundMoney(value: number): number {
  return Math.round(value * 100) / 100;
}

function roundMonths(value: number): number {
  return Math.round(value * 100) / 100;
}

function riskFromRunway(runwayMonths: number | null, monthlyNetCashFlow: number | null, missingInputs: string[]): FinancialSnapshotRiskLevel {
  if (monthlyNetCashFlow !== null && monthlyNetCashFlow >= 0) return missingInputs.length > 3 ? 'watch' : 'stable';
  if (runwayMonths === null) return 'watch';
  if (runwayMonths < 2) return 'critical';
  if (runwayMonths < 6) return 'elevated';
  return 'watch';
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
  const businessType = rawInput.businessType?.trim() || 'business';
  const biggestConcern = rawInput.biggestConcern?.trim() || 'Not provided';

  const cashBalance = toOptionalNumber(rawInput.cashBalance);
  const monthlyRevenue = toOptionalNumber(rawInput.monthlyRevenue);
  const monthlyExpenses = toOptionalNumber(rawInput.monthlyExpenses);
  const debtPayments = toNumber(rawInput.debtPayments);
  const ownerDraws = toNumber(rawInput.ownerDraws);
  const expectedInflows = toNumber(rawInput.expectedInflows);
  const upcomingLargeExpenses = toNumber(rawInput.upcomingLargeExpenses);
  const fundingGoal = toOptionalNumber(rawInput.fundingGoal);

  const knownInputs: string[] = [];
  const missingInputs: string[] = [];

  if (cashBalance !== null) knownInputs.push('cash balance'); else missingInputs.push('cash balance');
  if (monthlyRevenue !== null) knownInputs.push('monthly revenue'); else missingInputs.push('monthly revenue');
  if (monthlyExpenses !== null) knownInputs.push('monthly expenses'); else missingInputs.push('monthly expenses');
  if (rawInput.debtPayments !== undefined && rawInput.debtPayments !== null && rawInput.debtPayments !== '') knownInputs.push('debt payments'); else missingInputs.push('debt payments');
  if (rawInput.ownerDraws !== undefined && rawInput.ownerDraws !== null && rawInput.ownerDraws !== '') knownInputs.push('owner draws'); else missingInputs.push('owner draws');
  if (rawInput.expectedInflows !== undefined && rawInput.expectedInflows !== null && rawInput.expectedInflows !== '') knownInputs.push('expected inflows'); else missingInputs.push('expected inflows');
  if (rawInput.upcomingLargeExpenses !== undefined && rawInput.upcomingLargeExpenses !== null && rawInput.upcomingLargeExpenses !== '') knownInputs.push('upcoming large expenses'); else missingInputs.push('upcoming large expenses');
  if (fundingGoal !== null) knownInputs.push('funding goal'); else missingInputs.push('funding goal');

  const grossBurn = monthlyExpenses === null ? null : roundMoney(monthlyExpenses + debtPayments + ownerDraws + upcomingLargeExpenses);
  const monthlyNetCashFlow = monthlyRevenue === null || grossBurn === null ? null : roundMoney(monthlyRevenue + expectedInflows - grossBurn);
  const netBurn = monthlyNetCashFlow === null ? null : Math.max(0, roundMoney(-monthlyNetCashFlow));
  const runwayMonths = cashBalance === null || netBurn === null || netBurn === 0 ? null : roundMonths(cashBalance / netBurn);
  const breakEvenGap = monthlyNetCashFlow === null ? null : Math.max(0, roundMoney(-monthlyNetCashFlow));
  const riskLevel = riskFromRunway(runwayMonths, monthlyNetCashFlow, missingInputs);

  return {
    businessType,
    cashBalance,
    monthlyRevenue,
    monthlyExpenses,
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
    riskLevel,
    knownInputs,
    missingInputs,
    ctaSignals: buildCtaSignals(riskLevel, runwayMonths, monthlyNetCashFlow)
  };
}
