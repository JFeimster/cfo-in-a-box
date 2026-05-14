import { modelHiringAffordability } from '@/lib/calculators/hiring-affordability';
import { ok, badRequest } from '@/lib/api/responses';
import { readJsonBody } from '@/lib/api/validation';

export async function POST(request: Request) {
  try {
    const body = await readJsonBody(request);
    return ok(modelHiringAffordability(body), ['Hiring affordability is a planning estimate and should be reviewed against payroll, taxes, benefits, and real cash timing.']);
  } catch (error) {
    return badRequest(error instanceof Error ? error.message : 'Unable to process request.');
  }
}
