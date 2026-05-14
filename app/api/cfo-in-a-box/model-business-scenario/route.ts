import { modelBusinessScenario } from '@/lib/calculators/scenario-model';
import { ok, badRequest } from '@/lib/api/responses';
import { readJsonBody } from '@/lib/api/validation';

export async function POST(request: Request) {
  try {
    const body = await readJsonBody(request);
    return ok(modelBusinessScenario(body), ['Scenario results are simplified and should be treated as planning estimates.']);
  } catch (error) {
    return badRequest(error instanceof Error ? error.message : 'Unable to process request.');
  }
}
