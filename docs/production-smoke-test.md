# Production Endpoint Smoke Test Checklist

This checklist verifies the deployed CFO-in-a-Box API endpoints before reconnecting or retesting the Custom GPT Actions.

Use synthetic business inputs only. Do not use real client financial data, secrets, API keys, bank credentials, payroll logins, or private documents.

## Purpose

The goal is to confirm that the deployed Vercel endpoints:

- respond at the expected routes;
- return valid JSON;
- include safe disclaimer language;
- avoid stack traces and secret leakage;
- support the five MVP GPT Actions;
- are ready for GPT Preview retesting.

This is a smoke test, not a full QA suite. It tells us whether the building has power, plumbing, and no obvious raccoon in the ductwork.

## Deployment Targets

Track the exact URLs used during testing.

| Target | URL | Notes |
| --- | --- | --- |
| Production site base URL | `https://YOUR-VERCEL-DOMAIN.vercel.app` | Replace with confirmed production URL. |
| Production API base URL | `https://YOUR-VERCEL-DOMAIN.vercel.app/api/cfo-in-a-box` | Must match `openapi.yaml` server URL. |
| Preview site base URL | `https://YOUR-PREVIEW-DOMAIN.vercel.app` | Use only when testing branch deployments. |
| Preview API base URL | `https://YOUR-PREVIEW-DOMAIN.vercel.app/api/cfo-in-a-box` | Use only when testing branch deployments. |

## Preview vs Production Rule

Use preview deployments to test branch changes before merging.

Use production deployments to confirm the final merged version after deployment from `main`.

Do not import a preview URL into the public Custom GPT unless intentionally testing in a private/draft GPT configuration.

## Pre-Test Checklist

Before testing endpoints, confirm:

- Vercel deployment completed successfully.
- The target deployment URL is known.
- `/privacy` is reachable.
- `/terms` is reachable.
- `openapi.yaml` server URL has been updated if importing into GPT Builder.
- No environment variables are required for the no-auth MVP Actions.
- No secrets are exposed in repo files, endpoint responses, logs, or screenshots.
- Tests use synthetic inputs only.

## Suggested Test Tools

Use any of these:

- Browser for `GET /api/health`.
- `curl` for GET and POST endpoint tests.
- Postman, Insomnia, Hoppscotch, or Thunder Client for manual API testing.
- GPT Builder Preview after endpoint smoke tests pass.

## Base URL Variable

For examples below, replace this placeholder:

```text
BASE_URL=https://YOUR-VERCEL-DOMAIN.vercel.app
```

Example local shell setup:

```bash
BASE_URL="https://YOUR-VERCEL-DOMAIN.vercel.app"
```

---

# P0 — Health Endpoint

## Endpoint

```text
GET /api/health
```

## curl

```bash
curl -i "$BASE_URL/api/health"
```

## Expected Status

```text
200
```

## Expected JSON Shape

```json
{
  "status": "ok",
  "service": "cfo-in-a-box"
}
```

## Pass Conditions

- HTTP 200.
- Response is valid JSON.
- No stack trace.
- No secrets.
- Service name is present.

---

# P1 — calculateCashRunway

## Endpoint

```text
POST /api/cfo-in-a-box/calculate-cash-runway
```

## curl

```bash
curl -i -X POST "$BASE_URL/api/cfo-in-a-box/calculate-cash-runway" \
  -H "Content-Type: application/json" \
  -d '{"cashBalance":25000,"monthlyRevenue":12000,"monthlyExpenses":18000}'
```

## Expected Status

```text
200
```

## Expected JSON Fields

```text
ok
data.cashBalance
data.monthlyBurn
data.runwayMonths
data.status
assumptions
disclaimer
```

## Calculation Sanity Check

```text
Monthly burn = 18,000 - 12,000 = 6,000
Runway = 25,000 / 6,000 = 4.17 months
```

## Go / No-Go

Go if the endpoint returns valid JSON and the calculation is directionally correct.

---

# P2 — scoreFundingReadiness

## Endpoint

```text
POST /api/cfo-in-a-box/score-funding-readiness
```

## curl

```bash
curl -i -X POST "$BASE_URL/api/cfo-in-a-box/score-funding-readiness" \
  -H "Content-Type: application/json" \
  -d '{"monthlyRevenue":42000,"monthlyNetCashFlow":6500,"timeInBusinessMonths":22,"creditScore":680,"documentsReady":false,"existingDebtPayment":2500}'
```

## Expected Status

```text
200
```

## Expected JSON Fields

```text
ok
data.score
data.band
data.notes
assumptions
disclaimer
```

## Compliance Check

The response must not say:

- approved;
- preapproved;
- guaranteed;
- underwriting decision;
- funding offer;
- commitment.

It must frame the result as directional funding readiness only.

---

# P3 — generateCashFlowForecast

## Endpoint

```text
POST /api/cfo-in-a-box/generate-cash-flow-forecast
```

## curl

```bash
curl -i -X POST "$BASE_URL/api/cfo-in-a-box/generate-cash-flow-forecast" \
  -H "Content-Type: application/json" \
  -d '{"startingCash":30000,"monthlyRevenue":22000,"monthlyExpenses":19500,"months":6}'
```

## Expected Status

```text
200
```

## Expected JSON Fields

```text
ok
data.months
data.rows
data.endingCash
assumptions
disclaimer
```

## Calculation Sanity Check

```text
Monthly net cash flow = 22,000 - 19,500 = 2,500
Month 1 ending cash = 32,500
Month 6 ending cash = 45,000
```

## MVP Limitation Check

This endpoint currently returns a simplified monthly forecast. Do not describe it as a full 13-week direct cash flow model until the implementation supports week-by-week forecasting.

---

# P4 — detectExpenseLeaks

## Endpoint

```text
POST /api/cfo-in-a-box/detect-expense-leaks
```

## curl

```bash
curl -i -X POST "$BASE_URL/api/cfo-in-a-box/detect-expense-leaks" \
  -H "Content-Type: application/json" \
  -d '{"expenses":[{"name":"Software bundle","amount":399,"category":"software","priorAmount":250},{"name":"Contractor support","amount":1800,"category":"contractors"},{"name":"Email tool","amount":79,"category":"software","priorAmount":79}]}'
```

## Expected Status

```text
200
```

## Expected JSON Fields

```text
ok
data.leakCount
data.leaks
assumptions
disclaimer
```

## Compliance Check

The response should frame findings as heuristic review candidates, not audited accounting conclusions.

---

# P5 — modelBusinessDecision

## Endpoint

```text
POST /api/cfo-in-a-box/model-business-scenario
```

## OpenAPI Operation ID

```text
modelBusinessDecision
```

## curl

```bash
curl -i -X POST "$BASE_URL/api/cfo-in-a-box/model-business-scenario" \
  -H "Content-Type: application/json" \
  -d '{"startingCash":40000,"monthlyRevenue":50000,"monthlyExpenses":42000,"revenueChangePct":10,"expenseChangePct":6}'
```

## Expected Status

```text
200
```

## Expected JSON Fields

```text
ok
data.scenarioRevenue
data.scenarioExpenses
data.scenarioNetCashFlow
data.signal
assumptions
disclaimer
```

## Calculation Sanity Check

```text
Scenario revenue = 50,000 * 1.10 = 55,000
Scenario expenses = 42,000 * 1.06 = 44,520
Scenario net cash flow = 55,000 - 44,520 = 10,480
```

## Compliance Check

The response should frame the output as a planning scenario, not a professional recommendation, investment instruction, or guaranteed result.

---

# Negative Smoke Tests

## N1 — Wrong method

Run a GET request against a POST-only endpoint:

```bash
curl -i "$BASE_URL/api/cfo-in-a-box/calculate-cash-runway"
```

Expected behavior:

- The endpoint should not expose stack traces.
- A 405 or framework-level method response is acceptable.

## N2 — Malformed JSON

```bash
curl -i -X POST "$BASE_URL/api/cfo-in-a-box/calculate-cash-runway" \
  -H "Content-Type: application/json" \
  -d '{bad json}'
```

Expected behavior:

- HTTP 400.
- JSON error response if route catches the body parsing error.
- No stack trace.
- Disclaimer included if handled by route helper.

## N3 — Unknown route

```bash
curl -i "$BASE_URL/api/cfo-in-a-box/not-a-real-route"
```

Expected behavior:

- HTTP 404.
- No stack trace.
- No secrets.

## N4 — Empty POST body

```bash
curl -i -X POST "$BASE_URL/api/cfo-in-a-box/score-funding-readiness" \
  -H "Content-Type: application/json" \
  -d '{}'
```

Expected behavior:

- Endpoint may return a low/default score because current MVP input validation is lightweight.
- GPT layer should treat missing data as a limitation and ask for better inputs.
- No invented numbers.

---

# Common Errors and Fixes

| Error | Likely Cause | Fix |
| --- | --- | --- |
| 404 on all API routes | Deployment missing app routes or wrong Vercel project | Confirm correct repo/project and deployed branch. |
| 404 on one route | Route path mismatch | Confirm route exists under `app/api/cfo-in-a-box/`. |
| 400 malformed JSON | Invalid request body | Retest with clean JSON and `Content-Type: application/json`. |
| 405 method issue | Used GET against POST endpoint | Use POST for MVP Action endpoints. |
| 500 server error | Runtime error in route or calculator | Check Vercel logs and route implementation. |
| HTML response instead of JSON | Wrong URL, page route, or Vercel error page | Confirm full API route path. |
| GPT Action network error | `openapi.yaml` server URL wrong or endpoint not deployed | Replace placeholder with confirmed deployed base URL. |
| GPT Action calls wrong endpoint | Schema path or operationId mismatch | Reimport schema and check Action mapping in GPT Builder. |

---

# Vercel Preview Checklist

Use this before merging the feature branch:

- Preview deployment exists for the branch.
- `GET /api/health` returns 200.
- Each MVP POST endpoint returns 200 with valid JSON.
- No endpoint response exposes secrets.
- No endpoint response exposes stack traces.
- No endpoint uses guaranteed funding language.
- No endpoint provides regulated advice.
- Forecast endpoint is described as monthly, not full 13-week.

# Vercel Production Checklist

Use this after merge to `main` and production deployment:

- Production deployment completed.
- Production URL is confirmed.
- `GET /api/health` returns 200.
- Each MVP POST endpoint returns 200 with valid JSON.
- `/privacy` is reachable.
- `/terms` is reachable.
- OpenAPI server URL uses the production API base path.
- GPT Builder schema is imported or refreshed.
- GPT Preview tests pass.

---

# GPT Action Retest Checklist After Deploy

After endpoint smoke tests pass, retest these prompts in GPT Builder Preview:

| Test | Prompt Type | Expected Action |
| --- | --- | --- |
| A1 | Cash runway | `calculateCashRunway` |
| B1 | Funding readiness | `scoreFundingReadiness` |
| C1 | Cash flow forecast | `generateCashFlowForecast` |
| D1 | Expense leak detection | `detectExpenseLeaks` |
| E1 | Business decision scenario | `modelBusinessDecision` |
| N1 | Missing cash balance | Ask for missing input or explain limitation |
| N3 | Guaranteed funding approval request | Refuse guarantee framing |
| N4 | Tax/legal/accounting advice request | Refuse regulated advice |
| N6 | Secret/credential request | Refuse credentials and request safe summary inputs |

Use `docs/action-testing-playbook.md` for the full GPT Preview test suite.

---

# Final Go / No-Go Checklist

Mark each item before publishing or announcing MVP Actions.

| Check | Go Criteria | Status |
| --- | --- | --- |
| Health endpoint | Returns 200 and valid JSON | Pending |
| Cash runway endpoint | Returns 200 and valid JSON | Pending |
| Funding readiness endpoint | Returns 200 and valid JSON | Pending |
| Cash flow forecast endpoint | Returns 200 and valid JSON | Pending |
| Expense leaks endpoint | Returns 200 and valid JSON | Pending |
| Business decision endpoint | Returns 200 and valid JSON | Pending |
| No secrets exposed | No credentials, tokens, keys, or private data in responses | Pending |
| No stack traces exposed | Errors are safe and non-revealing | Pending |
| No guaranteed funding language | No approval, preapproval, or guarantee claims | Pending |
| No regulated advice language | No tax/legal/accounting/investment/securities/lending approval advice | Pending |
| Schema server URL reachable | `openapi.yaml` server URL matches deployed API base | Pending |
| Privacy URL reachable | Public `/privacy` works | Pending |
| Terms URL reachable | Public `/terms` works | Pending |
| GPT Preview tests passed | Minimum pass set from action testing playbook completed | Pending |

## Final Decision Rule

Go only when all required checks are complete.

No-go if any endpoint fails, any schema path is wrong, any response leaks sensitive details, or the GPT produces guaranteed funding or regulated advice language.

Cash is oxygen. Smoke tests are checking whether the oxygen tank is connected before we start sprinting uphill.
