# Action Authentication Roadmap

This roadmap defines which CFO-in-a-Box actions should remain no-auth, which should later use API-key protection, and which should require OAuth once the product moves beyond simple public tools.

## Auth modes

CFO-in-a-Box should use three auth levels over time:

1. **None**: public calculators, diagnostics, simple generators, and lead magnets.
2. **API key**: protected app endpoints, paid-tier features, partner tools, higher-volume usage, and abuse control.
3. **OAuth**: user-specific account access such as Google Drive, Sheets, HubSpot, Notion, Gmail, accounting platforms, banking APIs, or CRM records.

## Guiding rule

Use the lightest auth that protects the user and the product.

Do not add OAuth simply because it sounds enterprise. OAuth is useful when CFO-in-a-Box needs access to a user's account. Until then, it is bureaucracy wearing tap shoes.

## Current no-auth MVP actions

| Action | Route | V1 Auth | Later Auth | Notes |
| --- | --- | --- | --- | --- |
| `calculateCashRunway` | `/api/cfo-in-a-box/calculate-cash-runway` | None | Optional API key | Keep public. Excellent lead magnet. |
| `analyzeBurnRate` | `/api/cfo-in-a-box/analyze-burn-rate` | None | Optional API key | Keep public if based on manual inputs. |
| `generateCashFlowForecast` | `/api/cfo-in-a-box/generate-cash-flow-forecast` | None | API key later | No-auth for MVP; protect if volume grows or reports become richer. |
| `scoreFundingReadiness` | `/api/cfo-in-a-box/score-funding-readiness` | None | API key later | Public readiness score is valuable, but add rate limiting before promotion. |
| `detectExpenseLeaks` | `/api/cfo-in-a-box/detect-expense-leaks` | None | API key later | No-auth for structured expenses; protect for paid workflows. |
| `modelHiringAffordability` | `/api/cfo-in-a-box/model-hiring-affordability` | None | API key later | Public scenario tool now; paid workflow later. |
| `generateMonthlyFinancialSnapshot` | `/api/cfo-in-a-box/generate-monthly-financial-snapshot` | None for demo | API key or OAuth later | No-auth only for manual inputs or mock data. OAuth if pulling records. |
| `modelBusinessScenario` | `/api/cfo-in-a-box/model-business-scenario` | None | API key later | Keep public as a strong decision-support tool. |
| `generateFundingDocumentChecklist` | `/api/cfo-in-a-box/generate-funding-document-checklist` | None | Optional API key | Safe public generator if no private data is stored. |
| `generateMonthlyAdvisorMemo` | `/api/cfo-in-a-box/generate-monthly-advisor-memo` | None for demo | API key or OAuth later | Demo-only without account data. Advisor Desk version should be protected. |

## Actions that should remain no-auth longest

These are ideal public tools and acquisition assets:

- `calculateCashRunway`
- `analyzeBurnRate`
- `scoreFundingReadiness`
- `modelBusinessScenario`
- `generateFundingDocumentChecklist`

They use user-provided summary inputs and can safely produce directional planning outputs without account access.

## Actions to protect with API-key auth later

Use API-key auth when CFO-in-a-Box needs abuse control, usage tracking, partner access, paid-tier boundaries, or higher-value output generation.

Candidates:

- `generateCashFlowForecast`
- `detectExpenseLeaks`
- `modelHiringAffordability`
- `generateMonthlyFinancialSnapshot`
- `generateMonthlyAdvisorMemo`

API-key auth is appropriate when:

- The user is inside the website app.
- The endpoint supports paid features.
- The endpoint may become expensive due to OpenAI calls.
- The endpoint may be embedded on partner pages.
- The endpoint needs basic usage tracking.

## Actions and workflows that require OAuth later

Use OAuth only when CFO-in-a-Box pulls or writes user-specific data from an external system.

OAuth-required examples:

- Pulling Google Drive financial documents.
- Reading Google Sheets cash flow models.
- Writing reports to Google Docs.
- Reading/writing HubSpot contacts, deals, or notes.
- Reading Notion databases.
- Sending Gmail report drafts.
- Pulling QuickBooks, Xero, Stripe, Plaid, Mercury, or payroll data if those integrations are added.

Do not use no-auth routes for private account retrieval.

## Security rules

- Never commit API keys, OAuth secrets, refresh tokens, access tokens, client secrets, or private credentials.
- Never ask users to paste bank logins or third-party credentials into GPT chats.
- Store approved secrets only in Vercel environment variables or the relevant platform secret manager.
- Keep repo examples synthetic.
- Keep logs free of raw financial documents and unnecessary PII.
- Treat uploaded financials as sensitive business data.

## Rate limiting recommendation

Before promoting no-auth tools publicly, add lightweight abuse controls:

- Basic request validation.
- Request body size limits.
- IP-based rate limiting if traffic grows.
- Clear error responses.
- No raw document upload through no-auth routes.

## Migration path

### Stage 1: No-auth MVP

- Keep all current MVP actions no-auth.
- Test via GPT Builder.
- Validate schema and route behavior.
- Keep outputs structured, deterministic, and compliance-safe.

### Stage 2: Public web app tools

- Expose free calculators on `/tools` and app workflows.
- Add CTA routing into Starter Lab, Founder OS, and Advisor Desk.
- Keep no-auth for calculators.
- Add rate limits if needed.

### Stage 3: API-key protected paid tools

- Add protected endpoints for paid app workflows.
- Store OpenAI API key only in Vercel after approval.
- Add model usage controls.
- Add export/report generation.

### Stage 4: OAuth integrations

- Add OAuth only for user-owned accounts.
- Add scopes narrowly.
- Add privacy and deletion workflows.
- Add integration-specific documentation.

## Compliance reminder

Authentication does not change the advice boundary. Even authenticated workflows must avoid tax, legal, accounting, investment, securities, lending approval, underwriting, and guaranteed funding claims.

Protected product does not mean licensed professional. It means better workflow discipline and safer data handling.