export type CashRunwayInput = {
  cashBalance?: number;
  monthlyRevenue?: number;
  monthlyExpenses?: number;
  monthlyBurn?: number;
};

export function calculateCashRunway(input: CashRunwayInput = {}) {
  const cashBalance = Math.max(0, Number(input.cashBalance ?? 0));
  const inferredBurn = Number(input.monthlyExpenses ?? 0) - Number(input.monthlyRevenue ?? 0);
  const monthlyBurn = Math.max(0, Number(input.monthlyBurn ?? inferredBurn));
  const runwayMonths = monthlyBurn > 0 ? cashBalance / monthlyBurn : null;

  return {
    cashBalance,
    monthlyBurn,
    runwayMonths: runwayMonths === null ? null : Number(runwayMonths.toFixed(2)),
    status: monthlyBurn <= 0 ? 'cash-flow-positive-or-break-even' : runwayMonths! < 3 ? 'high-risk' : runwayMonths! < 6 ? 'watch' : 'stable',
  };
}
