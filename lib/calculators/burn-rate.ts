export function analyzeBurnRate(input: { monthlyExpenses?: number; monthlyRevenue?: number; priorMonthlyExpenses?: number } = {}) {
  const monthlyExpenses = Math.max(0, Number(input.monthlyExpenses ?? 0));
  const monthlyRevenue = Math.max(0, Number(input.monthlyRevenue ?? 0));
  const priorMonthlyExpenses = Math.max(0, Number(input.priorMonthlyExpenses ?? monthlyExpenses));
  const netBurn = Math.max(0, monthlyExpenses - monthlyRevenue);
  const expenseChangePct = priorMonthlyExpenses > 0 ? ((monthlyExpenses - priorMonthlyExpenses) / priorMonthlyExpenses) * 100 : 0;

  return {
    monthlyExpenses,
    monthlyRevenue,
    netBurn,
    expenseChangePct: Number(expenseChangePct.toFixed(2)),
    signal: expenseChangePct > 15 ? 'expenses-rising-fast' : netBurn > 0 ? 'burning-cash' : 'not-burning-cash',
  };
}
