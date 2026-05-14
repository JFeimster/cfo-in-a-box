import { analyzeBurnRate } from '@/lib/calculators/burn-rate';
import { ok, badRequest } from '@/lib/api/responses';
import { readJsonBody } from '@/lib/api/validation';

export async function POST(request: Request) {
  try {
    const body = await readJsonBody(request);
    return ok(analyzeBurnRate(body), ['Results are based only on submitted inputs and simplified assumptions.']);
  } catch (error) {
    return badRequest(error instanceof Error ? error.message : 'Unable to process request.');
  }
}
