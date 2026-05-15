# OpenAI Usage Notes

CFO-in-a-Box should use OpenAI carefully and only where it improves plain-English interpretation, report writing, or action planning.

## Rule: calculations first, AI second

Financial calculations must be deterministic and auditable.

Use code for:

- Burn rate
- Runway
- Break-even gap
- Expense ratio
- Risk level
- Funding readiness scoring
- Cash flow arithmetic
- Scenario math

Use AI for:

- Plain-English explanation
- Summary narrative
- Action plan wording
- Report drafting
- Missing-data explanation
- Owner-friendly next steps

Do not use AI as the source of truth for financial math.

## Environment variables

Use only server-side environment variables:

```text
OPENAI_API_KEY
OPENAI_MODEL
```

Never expose these variables in client components, browser JavaScript, public files, screenshots, docs, or logs.

## Current MVP behavior

The Financial Snapshot API works without an OpenAI key by returning deterministic fallback summary language.

If `OPENAI_API_KEY` is configured server-side, the route may generate a structured narrative summary after deterministic calculations are complete. If the model call fails, the route falls back safely.

## AI summary requirements

AI generation must:

- Explain submitted numbers in plain English.
- Use only the deterministic calculations provided by the API.
- Clearly state assumptions.
- Not invent numbers.
- Not provide tax, legal, accounting, investment, securities, underwriting, or lending approval advice.
- Not guarantee funding, approval, terms, timing, or financing.
- End with practical next actions.

## Secret handling

- Do not commit `.env` files.
- Do not commit API keys.
- Do not paste keys into GitHub issues or PRs.
- Store approved production values in Vercel environment variables.
- Use synthetic data in tests and documentation.

## Cost control

Before enabling server-side OpenAI calls publicly:

- Add rate limiting or usage controls.
- Set model choice intentionally.
- Keep prompts concise.
- Avoid sending raw financial documents unless a privacy/storage plan exists.
- Prefer structured summary inputs over full-file payloads.

## Compliance reminder

AI output is not licensed professional advice. It is planning support and decision support. The app should preserve disclaimers in API responses, reports, and UI results.
