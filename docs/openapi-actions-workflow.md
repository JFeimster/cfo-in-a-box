# OpenAPI Actions Workflow

CFO-in-a-Box uses `openapi.yaml` to connect ChatGPT Custom GPT Actions to Next.js API routes.

## Current strategy

The MVP uses no-auth actions first.

Best no-auth action types:

- Calculators.
- Diagnostics.
- Funding readiness scoring.
- Expense leak detection.
- Scenario models.
- Template generators.
- Report builders using user-provided summary inputs.

No-auth actions should not require access to private accounts, bank data, Gmail, Drive, HubSpot, Notion, or paid credentials.

## Current action bundle

Primary MVP actions:

- `calculateCashRunway`
- `scoreFundingReadiness`
- `generateCashFlowForecast`
- `detectExpenseLeaks`
- `modelBusinessDecision`

Existing expanded actions may also include:

- `analyzeBurnRate`
- `modelHiringAffordability`
- `generateMonthlyFinancialSnapshot`
- `modelBusinessScenario`
- `generateFundingDocumentChecklist`
- `generateMonthlyAdvisorMemo`

## Route convention

Routes live under:

```text
app/api/cfo-in-a-box/
```

Example:

```text
app/api/cfo-in-a-box/calculate-cash-runway/route.ts
```

OpenAPI path:

```yaml
/calculate-cash-runway:
  post:
    operationId: calculateCashRunway
```

## Development steps

1. Define the user-facing action purpose.
2. Define required and optional inputs.
3. Define output fields.
4. Build deterministic logic in `lib/`.
5. Create or update the API route in `app/api/cfo-in-a-box/`.
6. Update `openapi.yaml`.
7. Add or update evals.
8. Test locally.
9. Deploy to Vercel.
10. Test in Custom GPT Actions builder.

## Response shape guidance

Action responses should usually include:

```json
{
  "summary": "Plain-English result.",
  "inputsUsed": {},
  "assumptions": [],
  "results": {},
  "warnings": [],
  "recommendedActions": [],
  "disclaimer": "Planning and decision-support note."
}
```

## Missing data handling

If required data is missing:

- Do not invent it.
- Return a clear warning.
- Use only supported assumptions.
- Mark estimates as estimates.
- Ask for specific missing fields when needed.

## Compliance language

Funding-related actions must include:

```text
This is not an approval, preapproval, underwriting decision, offer, commitment, or guarantee of financing. It is a planning tool based on the inputs provided.
```

General financial actions should include:

```text
This analysis is for business planning and financial decision support only. It is not tax, legal, accounting, investment, securities, or lending advice.
```

## Auth roadmap

Keep these no-auth for MVP:

- Public calculators.
- Funding readiness self-checks.
- Template generators.
- Scenario models based on user-entered data.

Use API-key auth later for:

- Paid tier endpoints.
- Rate-limited private product features.
- White-label partner tools.

Use OAuth later for:

- Google Drive.
- Google Sheets.
- Gmail.
- HubSpot.
- Notion.
- Bank/accounting integrations.

## GPT builder checklist

- Import current `openapi.yaml`.
- Set auth to none for MVP.
- Confirm privacy policy URL.
- Test each operationId.
- Confirm responses are clear and compliance-safe.
- Confirm no action requests secrets.

## Do not do

- Do not add auth casually.
- Do not expose write actions without approval.
- Do not create production credentials from the repo.
- Do not store raw financial data by default.
- Do not change action names without considering GPT compatibility.
