import { calculateCashRunway } from '@/lib/calculators/cash-runway';
import { scoreFundingReadiness } from '@/lib/scoring/funding-readiness';

export function generateMonthlyFinancialSnapshot(input: any = {}) {
  return {
    runway: calculateCashRunway(input),
    fundingReadiness: scoreFundingReadiness(input),
    highlights: ['Review expenses over $250', 'Confirm receivables timing', 'Update funding document folder'],
    nextActions: ['Run weekly cash review', 'Clean category mapping', 'Prepare monthly owner memo'],
  };
}
