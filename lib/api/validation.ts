export async function readJsonBody(request: Request) {
  try {
    return await request.json();
  } catch {
    throw new Error('Malformed JSON body.');
  }
}

export function num(value: unknown, fallback = 0): number {
  const n = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(n) ? n : fallback;
}
