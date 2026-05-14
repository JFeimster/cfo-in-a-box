export function generateFundingDocumentChecklist(input: { businessType?: string; fundingGoal?: string } = {}) {
  return {
    businessType: input.businessType ?? 'Unknown',
    fundingGoal: input.fundingGoal ?? 'Unknown',
    documents: [
      'Last 3-6 months bank statements',
      'Year-to-date P&L',
      'Prior year tax return if available',
      'Debt schedule',
      'Entity documents',
      'Owner ID',
      'Processor or platform statements where applicable'
    ]
  };
}
