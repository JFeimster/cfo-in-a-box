# Financial Snapshot Workflow

This document describes the website-first Financial Snapshot workflow for CFO-in-a-Box.

The goal is to move beyond Custom GPT-only usage and create a micro-SaaS style product experience where the user can complete a guided workflow on the CFO-in-a-Box site.

## Routes

| Route | Purpose |
| --- | --- |
| `/app/financial-snapshot` | Guided frontend workflow for owner inputs and result display. |
| `/api/financial-snapshot` | Server-side deterministic calculations plus optional OpenAI summary generation. |

## Design principle

Deterministic math first. AI explanation second.

The application calculates the numbers before any model call is made. The OpenAI step is used only to translate the calculated metrics into a plain-English summary, action plan, CTA recommendations, and export-ready report language.

## Input fields

The workflow collects:

- Business type.
- Current cash balance.
- Monthly revenue.
- Monthly expenses.
- Monthly debt payments.
- Monthly owner draws.
- Expected monthly inflows not already included in revenue.
- Upcoming large expenses.
- Optional funding goal.
- Biggest financial concern.

## Calculated outputs

The API calculates:

- Gross burn.
- Monthly net cash flow.
- Net burn.
- Estimated runway in months.
- Break-even gap.
- Risk level.
- Known inputs.
- Missing inputs.
- CTA signals.

## OpenAI behavior

The route calls OpenAI only when this environment variable exists server-side:

```text
OPENAI_API_KEY
```

Optional model override:

```text
OPENAI_MODEL
```

If no API key is configured, the route returns deterministic calculations and a fallback summary. This keeps the demo usable before Platform setup is complete.

Do not prefix the key with `NEXT_PUBLIC_`.

## Response shape

```json
{
  "ok": true,
  "data": {
    "calculation": {},
    "summary": {},
    "summarySource": "openai",
    "markdownReport": "# CFO-in-a-Box Financial Snapshot..."
  },
  "assumptions": [],
  "disclaimer": "..."
}
```

`summarySource` may be:

- `openai`
- `fallback`

## Summary output fields

The summary includes:

- `executiveSummary`
- `keyTakeaway`
- `riskNarrative`
- `topRisks`
- `opportunities`
- `immediateActions`
- `thirtyDayActions`
- `ninetyDayActions`
- `suggestedCtas`
- `assumptionsAndMissingData`
- `complianceDisclaimer`

## CTA logic

Short runway should push toward:

- 30-day cash survival plan.
- Expense leak detector.
- Funding prep checklist.
- Advisor Desk review.

Medium runway should push toward:

- 13-week forecast.
- Funding readiness score.
- Weekly financial review.
- Starter Lab.

Cash-flow-positive scenarios should push toward:

- Hiring affordability.
- Growth scenario modeling.
- Monthly advisor memo.
- Founder OS.

## Compliance rules

The workflow must not provide:

- Tax advice.
- Legal advice.
- Certified accounting advice.
- Investment advice.
- Securities advice.
- Lending approval advice.
- Underwriting decisions.
- Guaranteed funding outcomes.

The workflow must state that outputs are for planning and decision support only.

## Data handling rules

- Do not store submitted data in the current MVP.
- Do not ask for bank logins or private credentials.
- Do not commit real client financial records.
- Do not log API keys or private tokens.
- Use synthetic inputs in tests and evals.

## Vercel setup

When approved, add this environment variable to Vercel:

```text
OPENAI_API_KEY
```

Recommended scope:

- Production
- Preview if needed for testing

Do not add it to client-side code or GitHub.

## Manual test prompt

Use this body against `/api/financial-snapshot`:

```json
{
  "businessType": "Service business",
  "cashBalance": 25000,
  "monthlyRevenue": 12000,
  "monthlyExpenses": 18000,
  "debtPayments": 0,
  "ownerDraws": 0,
  "expectedInflows": 0,
  "upcomingLargeExpenses": 0,
  "fundingGoal": 50000,
  "biggestConcern": "I need to know how long I have before cash gets tight."
}
```

Expected directional result:

- Monthly net cash flow: -6000.
- Net burn: 6000.
- Runway: about 4.17 months.
- Risk level: elevated.
- Summary source: fallback if no `OPENAI_API_KEY`, otherwise OpenAI if the API call succeeds.

## Next enhancements

- Add copy-to-clipboard for markdown report.
- Add PDF export.
- Add email capture before report reveal.
- Add saved report history after auth is introduced.
- Add Founder OS monthly reporting workflow.
- Add Advisor Desk human review handoff.
