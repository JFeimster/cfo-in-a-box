# Integration Map

CFO-in-a-Box is designed as a layered financial operations product using Next.js, Vercel, OpenAI GPT Actions, and Wix as the marketing/community shell.

## Current architecture direction

| Layer | Tool | Purpose |
| --- | --- | --- |
| Marketing shell | Wix | Public pages, community, conversion flows, booking, lead capture. |
| Product app | Next.js App Router | Product pages, tools, calculators, privacy, terms. |
| API backend | Vercel API routes | No-auth actions, calculators, report builders, structured JSON responses. |
| GPT interface | ChatGPT Custom GPT | User-facing AI CFO workflow and Actions. |
| Action schema | OpenAPI | Maps GPT Actions to Vercel API routes. |
| Source control | GitHub | Code, docs, schemas, templates, evals, operating files. |

## No-auth action candidates

| Action | Route | Auth | Purpose |
| --- | --- | --- | --- |
| calculateCashRunway | `/api/calculate-cash-runway` | None | Estimate net burn and runway. |
| analyzeBurnRate | `/api/analyze-burn-rate` | None | Diagnose burn drivers and risk. |
| generateCashFlowForecast | `/api/generate-cash-flow-forecast` | None | Create 13-week or monthly forecast. |
| scoreFundingReadiness | `/api/score-funding-readiness` | None | Score funding preparation, not approval. |
| detectExpenseLeaks | `/api/detect-expense-leaks` | None | Identify cost leak opportunities. |
| modelHiringAffordability | `/api/model-hiring-affordability` | None | Model hire cost and runway impact. |
| generateMonthlyFinancialSnapshot | `/api/generate-monthly-financial-snapshot` | None | Create monthly owner snapshot. |
| modelBusinessScenario | `/api/model-business-scenario` | None | Model best/base/worst decision scenarios. |
| generateFundingDocumentChecklist | `/api/generate-funding-document-checklist` | None | Build funding prep checklist. |
| generateMonthlyAdvisorMemo | `/api/generate-monthly-advisor-memo` | None | Create advisor-style memo. |

## Wix flow

1. Visitor lands on Wix marketing page.
2. Visitor clicks CTA: Free Financial Snapshot, Funding Readiness Score, Runway Calculator, or Founder OS.
3. CTA routes to embedded tool, Next.js page, or ChatGPT GPT link.
4. User enters non-sensitive summary data or uploads through GPT when appropriate.
5. Output creates urgency and recommends next best workflow.

## Vercel flow

1. Next.js receives API request under `app/api/`.
2. Route validates JSON input.
3. Route calculates metrics or builds structured response.
4. Route returns compliance-safe output.
5. No secrets required for no-auth MVP routes.

## OpenAI Actions flow

1. GPT Action uses OpenAPI operation ID.
2. Action sends user-provided structured input to Vercel route.
3. Vercel route returns JSON.
4. GPT converts JSON into plain-English CFO-style report.
5. GPT includes assumptions and disclaimers when relevant.

## Future integrations

| Tool | Possible use | Auth likely needed |
| --- | --- | --- |
| Google Drive | Document storage, monthly report exports | OAuth |
| Google Sheets | Forecast templates, dashboards | OAuth |
| Notion | Founder OS dashboard and templates | OAuth/API key |
| HubSpot | CRM lead routing and partner follow-up | OAuth/API key |
| n8n | Workflow automation and notifications | API key/webhook |
| Stripe | Paid tier checkout and billing status | API key/webhook |
| Tally | Intake forms and structured lead data | Webhook/API key |

## Data handling posture

Start no-auth and low-risk. Do not store raw client data by default. Use user-provided summary inputs and synthetic samples for tests. Add storage, accounts, OAuth, and client portals only after privacy, terms, security, and retention policies are designed.
