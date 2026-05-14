# GPT Actions Setup Checklist

This checklist is for adding the CFO-in-a-Box no-auth MVP Actions to the CFO-in-a-Box Custom GPT.

Do not mark the Actions as live until the deployed endpoints have been tested in GPT Preview.

## Current MVP Action Scope

The MVP GPT Actions are limited to these five planning and decision-support actions:

| Action | OpenAPI operationId | API route |
| --- | --- | --- |
| Cash runway | `calculateCashRunway` | `POST /api/cfo-in-a-box/calculate-cash-runway` |
| Funding readiness | `scoreFundingReadiness` | `POST /api/cfo-in-a-box/score-funding-readiness` |
| Cash flow forecast | `generateCashFlowForecast` | `POST /api/cfo-in-a-box/generate-cash-flow-forecast` |
| Expense leak detection | `detectExpenseLeaks` | `POST /api/cfo-in-a-box/detect-expense-leaks` |
| Business decision modeling | `modelBusinessDecision` | `POST /api/cfo-in-a-box/model-business-scenario` |

## Canonical Schema Location

Use this file as the canonical GPT Actions schema:

```text
openapi.yaml
```

Do not maintain duplicate OpenAPI files unless there is a clear deployment reason. Duplicate schemas drift. Drift becomes confusion. Confusion becomes spreadsheet arson.

## Server URL Setup

The schema currently uses this placeholder server URL:

```text
https://YOUR-VERCEL-DOMAIN.vercel.app/api/cfo-in-a-box
```

Before importing the schema into GPT Builder, replace the placeholder with the confirmed Vercel deployment URL.

Example production pattern:

```text
https://cfo-in-a-box.vercel.app/api/cfo-in-a-box
```

Example preview pattern:

```text
https://cfo-in-a-box-git-branch-name-jfeimster.vercel.app/api/cfo-in-a-box
```

Use the real confirmed deployment URL only. Do not invent a production URL.

## Authentication Setting

For MVP, set authentication to:

```text
None
```

Do not create API keys, OAuth apps, secrets, production credentials, or paid resources for the MVP Action setup unless explicitly approved.

## GPT Builder Import Steps

1. Open the CFO-in-a-Box Custom GPT in GPT Builder.
2. Go to **Configure**.
3. Open **Actions**.
4. Add a new Action.
5. Import or paste the contents of `openapi.yaml`.
6. Confirm the server URL points to the deployed Vercel API base path.
7. Set authentication to **None**.
8. Save the Action.
9. Test each operation in GPT Preview.
10. Do not publish or announce the Actions as live until all test prompts pass.

## Privacy and Terms Checklist

Before final GPT setup, confirm these public pages are deployed and reachable:

- `/privacy`
- `/terms`

In GPT Builder, add the public privacy policy URL when prompted.

The MVP Actions should not require users to provide secrets, API keys, bank login credentials, OAuth access, or real client records.

## Expected Response Envelope

Each successful Action should return JSON shaped like this:

```json
{
  "ok": true,
  "data": {},
  "assumptions": [],
  "disclaimer": "CFO-in-a-Box provides business planning and financial decision-support tools. It does not provide tax, legal, accounting, investment, securities, lending approval, or underwriting advice. Outputs are estimates, not guarantees."
}
```

Each error response should return JSON shaped like this:

```json
{
  "ok": false,
  "error": "Human-readable error message.",
  "details": null,
  "disclaimer": "CFO-in-a-Box provides business planning and financial decision-support tools. It does not provide tax, legal, accounting, investment, securities, lending approval, or underwriting advice. Outputs are estimates, not guarantees."
}
```

## Action Test Prompts

### calculateCashRunway

Use this prompt in GPT Preview:

```text
Calculate my cash runway. I have $25,000 cash, $12,000 monthly revenue, and $18,000 monthly expenses. Use the CFO-in-a-Box Action if available and explain the result in plain English.
```

Expected Action:

```text
calculateCashRunway
```

Expected result shape:

- `cashBalance`
- `monthlyBurn`
- `runwayMonths`
- `status`
- assumptions and disclaimer

### scoreFundingReadiness

Use this prompt in GPT Preview:

```text
Score my funding readiness. Monthly revenue is $42,000, monthly net cash flow is $6,500, time in business is 22 months, credit score is 680, documents are not fully ready, and monthly debt payments are $2,500.
```

Expected Action:

```text
scoreFundingReadiness
```

Expected result shape:

- `score`
- `band`
- `notes`
- assumptions and disclaimer

The answer must not describe the result as approval, preapproval, underwriting, or a guaranteed funding outcome.

### generateCashFlowForecast

Use this prompt in GPT Preview:

```text
Generate a six-month cash flow forecast. Starting cash is $30,000, monthly revenue is $22,000, and monthly expenses are $19,500.
```

Expected Action:

```text
generateCashFlowForecast
```

Expected result shape:

- `months`
- `rows`
- `endingCash`
- assumptions and disclaimer

Note: Current MVP behavior is a simplified monthly forecast, not a true 13-week direct cash flow model.

### detectExpenseLeaks

Use this prompt in GPT Preview:

```text
Review these expenses for possible leaks: Software bundle is $399 and was previously $250. Contractor support is $1,800. Email tool is $79 and was previously $79.
```

Expected Action:

```text
detectExpenseLeaks
```

Expected result shape:

- `leakCount`
- `leaks`
- `reason`
- assumptions and disclaimer

The answer should frame findings as items to review, not as audited accounting conclusions.

### modelBusinessDecision

Use this prompt in GPT Preview:

```text
Model this business decision: I have $40,000 cash, $50,000 monthly revenue, and $42,000 monthly expenses. I want to increase marketing spend, which may raise revenue by 10% and expenses by 6%.
```

Expected Action:

```text
modelBusinessDecision
```

Expected endpoint route:

```text
/api/cfo-in-a-box/model-business-scenario
```

Expected result shape:

- `scenarioRevenue`
- `scenarioExpenses`
- `scenarioNetCashFlow`
- `signal`
- assumptions and disclaimer

## Known Failure Modes

| Failure mode | Likely cause | Fix |
| --- | --- | --- |
| GPT Builder rejects schema | YAML syntax issue or unsupported OpenAPI feature | Validate `openapi.yaml`, simplify schema if needed, reimport. |
| Action call fails with network error | Vercel URL is wrong or deployment is not live | Confirm production or preview URL and update `servers.url`. |
| Action returns 404 | Schema path does not match deployed route | Confirm route exists under `app/api/cfo-in-a-box/`. |
| Action returns 400 | Malformed JSON body | Retest with clean structured input. |
| GPT calls wrong Action | Prompt is ambiguous or operation descriptions are too similar | Tighten GPT instructions or operation summaries. |
| Output lacks disclaimer | API response helper changed or route bypasses helper | Restore shared `ok()` / `badRequest()` response pattern. |
| Forecast expectations mismatch | User expects 13-week forecast but endpoint is monthly | Explain MVP currently supports monthly forecast and recommend later weekly model enhancement. |

## Compliance Checks

Every Action response and GPT explanation must follow these rules:

- No guaranteed funding approval.
- No underwriting claims.
- No tax, legal, accounting, investment, securities, or lending approval advice.
- Outputs must be framed as planning and decision support.
- Known inputs must be separated from assumptions.
- Missing data must be stated clearly.
- Do not invent financial numbers.
- Do not request or expose secrets.
- Do not ask for bank credentials or private API keys.
- Do not use real client financial data in tests.

## Setup Status Checklist

| Item | Status |
| --- | --- |
| MVP API routes exist | Ready for deployment testing |
| Canonical OpenAPI schema exists | Ready in `openapi.yaml` |
| Server URL confirmed | Blocked until Vercel deployment URL is known |
| Auth setting | None for MVP |
| Privacy page | Must be publicly verified after deployment |
| Terms page | Must be publicly verified after deployment |
| GPT Builder import | Not completed in repo |
| GPT Preview tests | Not completed yet |
| Production endpoint smoke tests | Not completed yet |

## Retest Triggers

Retest all Actions when any of these change:

- `openapi.yaml`
- Any route under `app/api/cfo-in-a-box/`
- `lib/api/responses.ts`
- `lib/api/disclaimers.ts`
- Vercel deployment URL
- Privacy or terms URLs
- GPT instructions
- Action authentication setting

## Final Setup Rule

Do not claim CFO-in-a-Box GPT Actions are live until:

1. The API is deployed.
2. The schema server URL points to the deployed API.
3. `/privacy` and `/terms` are reachable.
4. Each MVP Action passes GPT Preview testing.
5. Each response includes safe disclaimer language.
