export function generateMonthlyAdvisorMemo(input: { businessName?: string; keyIssue?: string; monthlyNetCashFlow?: number } = {}) {
  return {
    title: `${input.businessName ?? 'Business'} Monthly Advisor Memo`,
    executiveSummary: `Primary issue: ${input.keyIssue ?? 'cash flow visibility'}.`,
    observations: [`Monthly net cash flow estimate: ${input.monthlyNetCashFlow ?? 'Unknown'}`],
    recommendations: ['Validate numbers against source documents', 'Review expenses and debt payments', 'Update next 30-day cash plan'],
  };
}
