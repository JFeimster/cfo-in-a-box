import { generateFundingDocumentChecklist } from '@/lib/generators/funding-document-checklist';
import { ok, badRequest } from '@/lib/api/responses';
import { readJsonBody } from '@/lib/api/validation';

export async function POST(request: Request) {
  try {
    const body = await readJsonBody(request);
    return ok(generateFundingDocumentChecklist(body), ['Checklist items vary by provider, product, and underwriting criteria.']);
  } catch (error) {
    return badRequest(error instanceof Error ? error.message : 'Unable to process request.');
  }
}
