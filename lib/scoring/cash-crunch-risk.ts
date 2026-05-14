export function scoreCashCrunchRisk(input: { runwayMonths?: number; monthlyNetCashFlow?: number; receivablesConcentrationPct?: number } = {}) {
  let riskScore = 0;
  if ((input.runwayMonths ?? 99) < 3) riskScore += 45;
  else if ((input.runwayMonths ?? 99) < 6) riskScore += 25;
  if ((input.monthlyNetCashFlow ?? 0) < 0) riskScore += 30;
  if ((input.receivablesConcentrationPct ?? 0) > 40) riskScore += 20;

  return { riskScore: Math.min(100, riskScore), band: riskScore >= 70 ? 'high' : riskScore >= 35 ? 'moderate' : 'low' };
}
