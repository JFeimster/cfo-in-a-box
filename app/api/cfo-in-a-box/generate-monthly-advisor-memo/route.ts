import { generateMonthlyAdvisorMemo } from '@/lib/generators/advisor-memo';
import { ok, badRequest } from '@/lib/api/responses';
import { readJsonBody } from '@/lib/api/validation';

export async function POST(request: Request) {
  try {
    const body = await readJsonBody(request);
    return ok(generateMonthlyAdvisorMemo(body), ['Advisor memo outputs are decision-support notes, not professional advice.']);
  } catch (error) {
    return badRequest(error instanceof Error ? error.message : 'Unable to process request.');
  }
}
