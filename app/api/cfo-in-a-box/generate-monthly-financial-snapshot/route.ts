import { generateMonthlyFinancialSnapshot } from '@/lib/generators/monthly-snapshot';
import { ok, badRequest } from '@/lib/api/responses';
import { readJsonBody } from '@/lib/api/validation';

export async function POST(request: Request) {
  try {
    const body = await readJsonBody(request);
    return ok(generateMonthlyFinancialSnapshot(body), ['Snapshot outputs are directional and should be validated against source financial records.']);
  } catch (error) {
    return badRequest(error instanceof Error ? error.message : 'Unable to process request.');
  }
}
