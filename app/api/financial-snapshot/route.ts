import { calculateFinancialSnapshot } from '@/lib/calculators/financial-snapshot';
import { generateFinancialSummary } from '@/lib/openai/generate-financial-summary';
import { buildFinancialSnapshotMarkdownReport } from '@/lib/reports/financial-snapshot-report';
import { badRequest } from '@/lib/api/responses';
import { readJsonBody } from '@/lib/api/validation';

export async function POST(request: Request) {
  try {
    const body = await readJsonBody(request);
    const calculation = calculateFinancialSnapshot(body);
    const { summary, source } = await generateFinancialSummary(calculation);
    const markdownReport = buildFinancialSnapshotMarkdownReport(calculation, summary, source);

    return Response.json({
      ok: true,
      data: {
        calculation,
        summary,
        summarySource: source,
        markdownReport
      },
      assumptions: [
        'Results are based on submitted summary inputs, not a review of source financial documents.',
        'OpenAI is used only for narrative summary generation when OPENAI_API_KEY is configured server-side.'
      ],
      disclaimer: summary.complianceDisclaimer
    });
  } catch (error) {
    return badRequest(error instanceof Error ? error.message : 'Unable to generate financial snapshot.');
  }
}
