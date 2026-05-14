import { STANDARD_DISCLAIMER } from './disclaimers';

export function ok<T>(data: T, assumptions: string[] = []) {
  return Response.json({ ok: true, data, assumptions, disclaimer: STANDARD_DISCLAIMER });
}

export function badRequest(message: string, details?: unknown) {
  return Response.json({ ok: false, error: message, details, disclaimer: STANDARD_DISCLAIMER }, { status: 400 });
}
