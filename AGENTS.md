# CFO-in-a-Box Agent Operating Manual

This file is the primary operating manual for AI coding agents working in `JFeimster/cfo-in-a-box`.

CFO-in-a-Box is an AI CFO / FinanceOps platform for small business owners. It turns messy financial inputs into planning-grade business intelligence: cash flow forecasts, burn rate analysis, runway estimates, funding readiness scores, expense leak reports, scenario models, weekly reviews, monthly snapshots, and advisor-style memos.

## Prime directive

Build useful financial decision-support software without creating regulatory, security, or repo-chaos risk.

Agents must optimize for:

1. Cash-flow-first product behavior.
2. Clear assumptions and missing-data handling.
3. Compliance-safe language.
4. Small, scoped changes.
5. No secrets, no client data, no cowboy refactors.

## Architecture

- Product site: Next.js App Router.
- API routes: `app/api/`.
- GPT Actions: `openapi.yaml` maps Custom GPT actions to API routes.
- Deployment: Vercel.
- Marketing/community shell: Wix.
- Current action strategy: no-auth calculators, diagnostics, scoring engines, generators, and scenario models first.
- Future workflow layer: Founder OS and Advisor Desk with n8n, HubSpot, Google Drive, Notion, Sheets, and export-based integrations.

## Current command set

Use the scripts already defined in `package.json`:

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

Run health checks when scripts exist:

```bash
pwsh ./scripts/dev-healthcheck.ps1
bash ./scripts/dev-healthcheck.sh
```

## Core product capabilities

Agents may work on:

- Financial statement analysis.
- Cash flow forecasting.
- Burn rate and runway analysis.
- Funding readiness scoring.
- Expense leak detection.
- Scenario modeling.
- Hiring affordability.
- Weekly financial review workflows.
- Monthly financial snapshots.
- Advisor memo generation.
- Document intake and normalization.
- Founder OS / Advisor Desk fulfillment support.

## Hard safety rules

Do not create, expose, hardcode, or commit:

- API keys.
- Access tokens.
- OAuth credentials.
- Webhook signing secrets.
- Database URLs.
- Private keys.
- Real client financial records.
- Bank statements.
- Tax returns.
- Payroll files.
- Personally identifiable client data.
- Production `.env` files.

Do not imply:

- Guaranteed funding approval.
- Guaranteed rates, terms, amounts, or timing.
- Underwriting decisions.
- Certified tax, legal, accounting, investment, securities, or lending approval advice.

Use synthetic data in docs, tests, fixtures, screenshots, and examples.

## Compliance language

Preferred phrases:

- "planning and decision support"
- "directional analysis"
- "based on available inputs"
- "funding readiness"
- "provider criteria apply"
- "not an approval, offer, commitment, underwriting decision, or guarantee"

Avoid phrases:

- "you are approved"
- "guaranteed funding"
- "sure approval"
- "lender will approve"
- "tax strategy" unless framed as discussion points for a qualified professional
- "certified accounting advice"

## File map

| Path | Purpose |
| --- | --- |
| `app/` | Next.js App Router pages and API routes. |
| `app/api/` | API routes only. Keep GPT Action endpoints here. |
| `app/api/cfo-in-a-box/` | CFO-in-a-Box calculator, scoring, generator, and scenario endpoints. |
| `components/` | Reusable UI components. |
| `data/` | Static product/content data. Use synthetic examples only. |
| `docs/` | Product, developer, workflow, compliance, deployment, and integration docs. |
| `evals/` | Evaluation cases for calculations, compliance, missing data, and output quality. |
| `lib/` | Calculation, scoring, generator, API, and utility logic. |
| `openapi.yaml` | Custom GPT Actions schema. Keep it synchronized with `app/api/`. |
| `prompt-chains/` | Sequential CFO workflow prompts. |
| `schemas/` | JSON schemas for structured inputs and outputs. |
| `skills/` | Skill-level operating instructions. |
| `templates/` | Report and review templates. |
| `.vscode/` | Shared editor tasks and recommendations. No personal paths. |
| `.github/` | PR and issue templates. |
| `scripts/` | Local validation and healthcheck scripts. |

## Do-not-touch areas without explicit approval

- Repo name.
- Main branch history.
- Production deployment settings.
- Secrets or environment variables.
- Auth model.
- API route base path conventions.
- OpenAPI server URL, unless deployment URL is known and approved.
- Pricing/product positioning that changes tier economics.
- Any real client financial data.
- Jules workflows, unless the user explicitly approves Jules for the task.

## Coding standards

- Prefer TypeScript for app code.
- Keep calculations deterministic and testable.
- Keep API responses structured and boring in the best way.
- Reuse `lib/` logic from API routes instead of duplicating math.
- Keep UI copy direct, practical, founder-friendly, and compliance-safe.
- Validate inputs defensively.
- Return assumptions and warnings when data is incomplete.
- Do not silently invent missing numbers.

## API and OpenAPI rules

When adding or changing an action:

1. Implement or update the route under `app/api/cfo-in-a-box/`.
2. Keep reusable logic in `lib/`.
3. Update `openapi.yaml` with matching path, method, operationId, inputs, and response shape.
4. Confirm no-auth is still appropriate.
5. Add or update evals if behavior changes.
6. Confirm privacy/terms assumptions still match the action.

## Git workflow

- Use scoped branches: `feature/`, `fix/`, `docs/`, `chore/`.
- Keep commits focused.
- Do not mix docs, UI redesigns, API behavior, and workflow changes unless the task explicitly requires it.
- Inspect existing files before modifying them.
- Summarize what changed, tests run, and risks.

## Output standards for financial features

Financial outputs should separate:

1. Known data.
2. Assumptions.
3. Calculations.
4. Risks.
5. Recommended next actions.
6. Missing data.
7. Compliance note when relevant.

Default report structure:

1. Executive Summary
2. Key Metrics
3. What the Numbers Mean
4. Risks
5. Opportunities
6. Recommended Actions
7. Assumptions and Missing Data

## Escalation triggers

Recommend qualified professional review when the user asks for:

- Tax filing treatment.
- Legal entity structuring.
- Securities or investment advice.
- Loan approval determinations.
- Bankruptcy, insolvency, or debt settlement guidance.
- CPA-assured financial statements.
- Payroll compliance conclusions.
- Employment law conclusions.

## Agent completion checklist

Before finishing any repo task, confirm:

- No secrets were added.
- No real client data was added.
- No guaranteed funding language was introduced.
- No regulated advice claims were introduced.
- `app/api/` route rules were respected.
- `openapi.yaml` stayed aligned when API routes changed.
- Build/test/lint commands were run when feasible, or limitations were disclosed.
- The diff is scoped to the requested task.
