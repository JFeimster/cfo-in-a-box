export function generateCashFlowForecast(input: { startingCash?: number; monthlyRevenue?: number; monthlyExpenses?: number; months?: number } = {}) {
  const months = Math.min(24, Math.max(1, Number(input.months ?? 13)));
  let cash = Number(input.startingCash ?? 0);
  const monthlyRevenue = Number(input.monthlyRevenue ?? 0);
  const monthlyExpenses = Number(input.monthlyExpenses ?? 0);
  const rows = Array.from({ length: months }, (_, index) => {
    cash += monthlyRevenue - monthlyExpenses;
    return {
      month: index + 1,
      revenue: monthlyRevenue,
      expenses: monthlyExpenses,
      netCashFlow: monthlyRevenue - monthlyExpenses,
      endingCash: Number(cash.toFixed(2)),
    };
  });

  return { months, rows, endingCash: rows[rows.length - 1]?.endingCash ?? cash };
}
