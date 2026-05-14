# Repo Operating Rules

This is the canonical repo governance document for humans and AI agents.

## Non-negotiables

1. Do not commit secrets.
2. Do not commit real client financial data.
3. Do not imply guaranteed funding approval.
4. Do not provide regulated tax, legal, accounting, investment, securities, lending approval, or underwriting advice.
5. Do not rename the repo.
6. Do not create a separate API repo.
7. Keep API routes inside `app/api/`.
8. Prefer static and no-auth workflows for the MVP.
9. Use scoped branches.
10. Keep changes focused.
11. Inspect existing files before modifying them.
12. Do not use Jules unless explicitly approved.

## Product positioning

CFO-in-a-Box is an AI CFO / FinanceOps platform for small business owners. It provides planning-grade financial analysis and operational decision support.

The product helps users understand cash flow, burn rate, runway, funding readiness, expenses, scenarios, weekly reviews, monthly snapshots, and advisor-style memos.

It does not replace licensed professionals.

## Architecture rules

- Next.js App Router owns the product site.
- `app/api/` owns API routes.
- `openapi.yaml` owns GPT Action schema definitions.
- `lib/` owns reusable calculation, scoring, and generator logic.
- `docs/`, `skills/`, `templates/`, `schemas/`, `evals/`, and `prompt-chains/` support repeatable product behavior.

## API action rules

No-auth actions are allowed for:

- Calculators.
- Diagnostics.
- Scoring engines.
- Template generators.
- Scenario models.
- Report builders using user-provided inputs.

Actions requiring private accounts, stored data, CRM access, Drive access, email access, or bank connections require explicit auth planning and approval.

## Data rules

Use only synthetic examples in the repo.

Never commit:

- Client statements.
- Tax returns.
- Payroll files.
- Bank exports.
- Credit reports.
- Credentials.
- Private keys.
- Production config.

## Copy rules

Allowed framing:

- "planning support"
- "decision support"
- "directional analysis"
- "funding readiness"
- "may help prepare"

Forbidden framing:

- "approved"
- "guaranteed funding"
- "underwriting decision"
- "certified advice"
- "lender will approve"

## Merge readiness

Before merge:

- Branch is scoped.
- Diff is focused.
- Tests are run or limitations disclosed.
- Compliance checklist is clean.
- Secrets checklist is clean.
- API changes match OpenAPI.
- User-facing copy is founder-friendly and safe.
