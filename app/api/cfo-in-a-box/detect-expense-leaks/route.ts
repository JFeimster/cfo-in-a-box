import { detectExpenseLeaks } from '@/lib/calculators/scenario-model';
import { ok, badRequest } from '@/lib/api/responses';
import { readJsonBody } from '@/lib/api/validation';

export async function POST(request: Request) {
  try {
    const body = await readJsonBody(request);
    return ok(detectExpenseLeaks(body), ['Expense leak detection is heuristic and should be verified against source records.']);
  } catch (error) {
    return badRequest(error instanceof Error ? error.message : 'Unable to process request.');
  }
}
