export function scoreFundingReadiness(input: { monthlyRevenue?: number; monthlyNetCashFlow?: number; timeInBusinessMonths?: number; creditScore?: number; documentsReady?: boolean; existingDebtPayment?: number } = {}) {
  let score = 0;
  const notes: string[] = [];
  const monthlyRevenue = Number(input.monthlyRevenue ?? 0);
  const monthlyNetCashFlow = Number(input.monthlyNetCashFlow ?? 0);
  const timeInBusinessMonths = Number(input.timeInBusinessMonths ?? 0);
  const creditScore = Number(input.creditScore ?? 0);
  const existingDebtPayment = Number(input.existingDebtPayment ?? 0);

  score += monthlyRevenue >= 50000 ? 25 : monthlyRevenue >= 15000 ? 18 : monthlyRevenue >= 5000 ? 10 : 3;
  score += monthlyNetCashFlow > 0 ? 20 : monthlyNetCashFlow > -5000 ? 10 : 3;
  score += timeInBusinessMonths >= 24 ? 20 : timeInBusinessMonths >= 12 ? 14 : timeInBusinessMonths >= 6 ? 8 : 2;
  score += creditScore >= 700 ? 15 : creditScore >= 650 ? 10 : creditScore >= 600 ? 6 : 2;
  score += input.documentsReady ? 12 : 3;
  score += existingDebtPayment <= monthlyRevenue * 0.1 ? 8 : existingDebtPayment <= monthlyRevenue * 0.25 ? 4 : 1;

  if (!input.documentsReady) notes.push('Prepare bank statements, P&L, tax returns where applicable, and debt schedules.');
  if (monthlyNetCashFlow <= 0) notes.push('Improve net cash flow before pursuing larger funding conversations.');

  return { score: Math.min(100, score), band: score >= 75 ? 'strong' : score >= 55 ? 'developing' : 'needs-work', notes };
}
