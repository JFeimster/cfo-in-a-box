import { scoreFundingReadiness } from '@/lib/scoring/funding-readiness';
import { ok, badRequest } from '@/lib/api/responses';
import { readJsonBody } from '@/lib/api/validation';

export async function POST(request: Request) {
  try {
    const body = await readJsonBody(request);
    return ok(scoreFundingReadiness(body), ['Results are directional and not an approval, offer, or underwriting decision.']);
  } catch (error) {
    return badRequest(error instanceof Error ? error.message : 'Unable to process request.');
  }
}
