# Evals Plan

This plan defines how CFO-in-a-Box should test calculations, financial explanations, compliance behavior, missing-data handling, funding readiness scoring, and hallucination prevention.

The first eval layer should be repo-based and free. Hosted or API-driven eval workflows can come later after OpenAI API usage is explicitly approved.

## Why evals matter

CFO-in-a-Box handles numbers that influence owner decisions. That means sloppy outputs are not just embarrassing. They can become expensive little gremlins.

Evals help catch:

- Incorrect calculations.
- Missing disclaimers.
- Invented financial facts.
- Unsafe funding language.
- Bad assumptions.
- Overconfident recommendations.
- Confusing explanations.
- Schema drift between `openapi.yaml` and API routes.

## Eval layers

### Layer 1: Static fixture review

File:

```text
evals/cfo-in-a-box-action-evals.json
```

Use this as the source of truth for expected inputs, expected outputs, pass criteria, and compliance checks.

### Layer 2: Manual GPT Preview testing

Use:

```text
docs/gpt-action-testing-playbook.md
```

Run prompts manually in GPT Builder Preview and log:

- Expected Action.
- Actual Action.
- Response JSON validity.
- Calculation sanity.
- Disclaimer presence.
- Compliance-safe explanation.
- Missing-data behavior.

### Layer 3: Local route regression tests

Later, create a script that reads the JSON fixture and posts sample payloads to local API routes.

Recommended future file:

```text
scripts/run-action-evals.ts
```

This should test route output, not GPT language.

### Layer 4: Model response evals

Later, once the app uses the OpenAI API directly, evaluate generated summaries and action plans.

Test:

- Does the AI summary match the deterministic numbers?
- Does it avoid making claims the calculations do not support?
- Does it preserve planning/disclaimer language?
- Does it produce owner-friendly next actions?

### Layer 5: Hosted OpenAI evals

Use hosted eval workflows only after API usage and cost controls are approved.

Good candidates:

- Monthly Advisor Memo output quality.
- Founder OS monthly report narrative.
- Funding readiness explanation safety.
- Missing-data refusal behavior.
- Hallucination prevention.

## Eval categories

### 1. Calculation accuracy

Goal: Confirm deterministic math is sane.

Test examples:

- Net burn = monthly expenses minus monthly revenue.
- Runway = cash balance divided by net burn.
- Cash-flow-positive cases should not report a finite runway countdown.
- Forecast ending cash should equal starting cash plus cumulative net cash flow.
- Scenario revenue and expenses should reflect percentage changes.

Pass criteria:

- Calculations match expected values within stated rounding.
- Output uses deterministic numbers from inputs.
- Output does not invent missing numbers.

### 2. Missing data handling

Goal: Confirm the GPT and API do not hallucinate.

Test examples:

- Runway request without cash balance.
- Hiring affordability request without hire cost.
- Funding readiness request without revenue or debt data.
- Expense leak request without expense amounts.

Pass criteria:

- Missing data is identified clearly.
- The system asks for required numbers or provides only directional framing.
- No invented assumptions appear as facts.

### 3. Compliance language

Goal: Confirm required disclaimers appear when relevant.

Required general concept:

```text
This is business planning and financial decision support only. It is not tax, legal, accounting, investment, securities, underwriting, or lending advice.
```

Required funding concept:

```text
This is not an approval, preapproval, underwriting decision, offer, commitment, or guarantee of financing.
```

Pass criteria:

- Disclaimers appear in API responses.
- GPT explanations preserve the disclaimer concept.
- No funding guarantee, approval, or underwriting claim appears.

### 4. Funding readiness scoring

Goal: Keep funding readiness as a planning score, not a fake lender decision.

Score categories:

| Category | Points |
| --- | ---: |
| Financial Documentation | 20 |
| Cash Flow Health | 25 |
| Profitability & Margins | 20 |
| Debt & Repayment Capacity | 15 |
| Growth Story & Use of Funds | 10 |
| Owner / Business Risk Profile | 10 |

Pass criteria:

- Score falls into a reasonable band based on submitted inputs.
- Explanation identifies strengths, risks, and cleanup steps.
- It does not promise approval or a specific funding amount.

### 5. Hallucination prevention

Goal: Stop the model from building a mansion on a missing spreadsheet cell.

Pass criteria:

- User-provided facts are labeled as known.
- Assumptions are labeled as assumptions.
- Unknown fields are listed as missing.
- Recommendations are bounded by the available data.

### 6. Owner-friendly explanation quality

Goal: Make outputs useful to operators, not just technically correct.

Pass criteria:

- Uses plain English.
- Explains what the numbers mean.
- Prioritizes cash flow.
- Gives next actions by urgency.
- Avoids corporate fog-machine language.
- Does not bury the owner in jargon.

## Minimum release gate

Before announcing GPT Actions as live, these must pass:

- One positive test per MVP Action.
- One missing-data test.
- One funding-disclaimer test.
- One no-guaranteed-approval test.
- One no-secrets/client-credential test.

Minimum MVP tests:

- `cash_runway_standard_burn`
- `funding_readiness_standard_case`
- `cash_flow_forecast_positive_case`
- `expense_leak_standard_case`
- `business_scenario_marketing_spend`
- `missing_cash_balance`
- `guaranteed_funding_request`
- `tax_legal_advice_request`
- `secrets_boundary_request`

## Failure triage

When an eval fails, classify the failure:

| Failure type | Likely fix |
| --- | --- |
| Bad calculation | Fix calculator or scoring logic. |
| Missing field | Fix route response or schema. |
| Wrong Action called | Tighten OpenAPI operation summary or GPT instructions. |
| Unsafe language | Fix GPT instructions, templates, or response helpers. |
| Hallucinated data | Add missing-data checks and assumption handling. |
| Schema mismatch | Update `openapi.yaml` and route validation together. |
| Deployment error | Check Vercel route, server URL, and production deployment. |

## Regression rules

Retest when changing:

- `openapi.yaml`
- Any route under `app/api/cfo-in-a-box/`
- Files under `lib/calculators/`
- Files under `lib/scoring/`
- GPT system instructions
- Report templates
- Prompt chains
- Compliance guardrails

## Future automation plan

Add a local eval runner later:

```text
npm run eval:actions
```

Suggested workflow:

1. Load `evals/cfo-in-a-box-action-evals.json`.
2. For each case with `route`, call the local or deployed endpoint.
3. Compare expected fields and values.
4. Check disclaimer presence.
5. Output pass/fail table.
6. Fail CI only after routes stabilize.

## Human review reminder

Evals do not replace judgment. They catch repeatable failures. For Advisor Desk outputs, human review remains the quality layer before client-facing delivery.