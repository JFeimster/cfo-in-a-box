export function modelHiringAffordability(input: { currentCash?: number; monthlyNetCashFlow?: number; monthlyHireCost?: number; minimumRunwayMonths?: number } = {}) {
  const currentCash = Number(input.currentCash ?? 0);
  const monthlyNetCashFlow = Number(input.monthlyNetCashFlow ?? 0);
  const monthlyHireCost = Math.max(0, Number(input.monthlyHireCost ?? 0));
  const minimumRunwayMonths = Number(input.minimumRunwayMonths ?? 6);
  const projectedMonthlyNetCashFlow = monthlyNetCashFlow - monthlyHireCost;
  const projectedRunwayMonths = projectedMonthlyNetCashFlow < 0 ? currentCash / Math.abs(projectedMonthlyNetCashFlow) : null;

  return {
    projectedMonthlyNetCashFlow,
    projectedRunwayMonths: projectedRunwayMonths === null ? null : Number(projectedRunwayMonths.toFixed(2)),
    recommendation: projectedMonthlyNetCashFlow >= 0 || (projectedRunwayMonths !== null && projectedRunwayMonths >= minimumRunwayMonths) ? 'potentially-affordable' : 'delay-or-reduce-cost',
  };
}
