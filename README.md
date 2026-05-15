# CFO-in-a-Box

<img width="1344" height="572" alt="CFO-in-a-Box product preview" src="https://github.com/user-attachments/assets/86f8a509-f32b-415f-9c0b-baa1583a7cfd" />

**CFO-in-a-Box** is a micro-SaaS financial command center for small business owners who need CFO-level clarity without CFO-level payroll.

It helps founders, operators, agencies, consultants, ecommerce sellers, local service businesses, and funding-ready entrepreneurs turn messy financial inputs into runway, burn rate, break-even gap, funding readiness pressure, financial risk, next-step action plans, and export-ready reports.

> Cash is the oxygen. Profit is the scoreboard. Forecasting is the radar.

## Current MVP workflow

The first web-app workflow is:

```text
/app/financial-snapshot
```

It collects structured business inputs and returns a dashboard-style financial snapshot with:

- Current cash
- Monthly revenue
- Monthly expenses
- Gross burn
- Net burn
- Estimated runway
- Break-even gap
- Cash-out date estimate when feasible
- Expense ratio
- Financial risk level
- Funding readiness mini-score
- Plain-English summary
- Recommended action plan
- Assumptions and missing data
- Export-ready Markdown report

API route:

```text
POST /api/financial-snapshot
```

## Product positioning

CFO-in-a-Box is now positioned as a **website/app-first micro-SaaS product**, not primarily as a Custom GPT.

The Custom GPT remains useful as:

- A free acquisition channel
- A demo assistant
- A manual analysis helper
- A future GPT Actions interface

The primary product experience should happen through the web app frontend, guided workflows, deterministic calculations, result cards, CTA paths, and export-ready reports.

## Calculation-first / AI-second rule

Financial math must be deterministic.

Use code for:

- Burn rate
- Runway
- Break-even gap
- Expense ratio
- Risk level
- Funding readiness scoring
- Scenario math

Use AI only after calculations are complete for:

- Plain-English explanations
- Summary narrative
- Action plan wording
- Report drafting

The model should never be the source of truth for the numbers. No spreadsheet séance. No CFO Halloween costume.

## What this repo is

This repository contains the product site, GPT Actions API layer, financial calculator logic, documentation, schemas, prompt chains, report templates, evals, and operating files for CFO-in-a-Box.

The product is designed as a practical AI financial command center, not a generic chatbot wearing a finance costume.

## Product promise

**CFO-level clarity without CFO-level payroll.**

CFO-in-a-Box helps business owners answer questions like:

- How much runway do I actually have?
- Is my business cash-flow healthy or just P&L pretty?
- Am I ready to pursue funding, or do my documents look like a crime scene?
- What expenses should I cut, renegotiate, consolidate, or keep?
- Can I afford to hire, borrow, expand, launch, or increase ad spend?
- What should I review every week so the business stops surprising me?
- What should go into my monthly founder/advisor memo?

## Core capabilities

| Capability | What it does |
| --- | --- |
| Financial snapshot | Collects summary inputs and returns runway, burn, risk, mini-score, CTA paths, and export-ready Markdown output. |
| Financial statement analysis | Reviews P&L, balance sheet, cash flow, bank exports, debt schedules, AR/AP, and other financial inputs. |
| Cash flow forecasting | Builds short-term and monthly forecasts with inflows, outflows, payroll, debt, taxes, owner draws, and risk warnings. |
| Burn rate + runway | Calculates gross burn, net burn, runway, survival risk, and runway-extension actions. |
| Funding readiness scoring | Scores funding preparation from 0 to 100 across documentation, cash flow, margins, debt capacity, use of funds, and risk profile. |
| Expense leak detection | Finds recurring spend, duplicate tools, low-ROI costs, finance charges, timing issues, and cleanup opportunities. |
| Scenario modeling | Models best/base/worst cases for hiring, borrowing, pricing, revenue drops, cost cuts, equipment, marketing, and expansion. |
| Hiring affordability | Estimates fully loaded hire cost, breakeven revenue, runway impact, and go/no-go criteria. |
| Weekly financial review | Creates a simple weekly operating rhythm for cash, revenue, expenses, AR/AP, debt, payroll, and owner decisions. |
| Monthly financial snapshot | Produces founder-friendly monthly financial summaries and risk/action reports. |
| Advisor memo generation | Converts financial analysis into advisor-style memos and human-in-the-loop review packets. |

## Product ladder

| Tier | Purpose | Typical user |
| --- | --- | --- |
| Free GPT | Free acquisition channel, manual analysis, runway estimates, weekly prompts, and funding readiness self-checks. | DIY owners and curious founders. |
| Free web tools | Guided financial snapshot and calculators that create useful reports and next-step CTAs. | Owners who want fast utility without a login wall. |
| Starter Lab | Templates, prompt vaults, Google Sheets/Notion resources, community, and monthly cash flow clinics. | Owners who want structure but still run it themselves. |
| Founder OS | FinOps setup, monthly reports, cash flow dashboards, reminders, funding readiness tracking, and export-based workflows. | Operators who want a repeatable financial operating system. |
| Advisor Desk | Founder OS plus human-in-the-loop review, advisor memos, review calls, and decision support. | Owners making bigger decisions around hiring, funding, cutting, borrowing, or growth. |

## Architecture

CFO-in-a-Box is built as a layered product:

| Layer | Tooling | Purpose |
| --- | --- | --- |
| Product site | Next.js App Router | Public pages, pricing, tools, demo, privacy, terms, and app workflows. |
| App workflow | `/app/financial-snapshot` | First micro-SaaS workflow with form input, results, CTA rail, and report export. |
| API backend | Vercel API routes | No-auth calculators, scoring engines, generators, and structured GPT Action responses. |
| GPT interface | ChatGPT Custom GPT | Free starter, demo assistant, and future Actions interface. |
| Action schema | OpenAPI | Maps Custom GPT Actions to API routes. |
| Marketing shell | Wix | Marketing pages, communities, booking, lead capture, and conversion flows. |
| Source control | GitHub | Code, docs, schemas, templates, prompt chains, evals, and operating rules. |

## Repo structure highlights

```text
app/
  api/
    financial-snapshot/
    cfo-in-a-box/
  app/
    financial-snapshot/
  tools/
components/
  snapshot/
docs/
lib/
  calculators/
  openai/
  reports/
openapi.yaml
README.md
```

## Key files and folders

| Path | Purpose |
| --- | --- |
| `app/app/financial-snapshot/page.tsx` | Guided Financial Snapshot workflow page. |
| `components/snapshot/FinancialSnapshotForm.tsx` | Structured input form for business basics and financial inputs. |
| `components/snapshot/FinancialSnapshotResults.tsx` | Result cards, CTA rail, copy/download behavior, and report preview. |
| `app/api/financial-snapshot/route.ts` | POST API route for calculation, optional AI summary, and report output. |
| `lib/calculators/financial-snapshot.ts` | Deterministic runway, burn, break-even, risk, expense ratio, and mini-score logic. |
| `lib/openai/generate-financial-summary.ts` | Server-side AI summary generation with fallback behavior. |
| `lib/reports/financial-snapshot-report.ts` | Markdown report formatter. |
| `docs/micro-saas-roadmap.md` | Product direction and build sequence. |
| `docs/financial-snapshot-workflow.md` | Workflow scope, inputs, outputs, and limitations. |
| `docs/openai-usage-notes.md` | Server-side OpenAI guidance and calculation-first rule. |
| `docs/manual-qa-checklist.md` | Manual QA cases for the workflow and API route. |

## Public tools

`/tools` lists the current and planned free tools:

- Financial Snapshot — active
- Cash Runway Calculator — active / existing route pattern
- Funding Readiness Score — active / existing route pattern
- Expense Leak Detector — coming soon
- Cash Flow Forecast Builder — coming soon
- Hiring Affordability Model — coming soon
- Monthly Advisor Memo Generator — coming soon

## Existing GPT Actions API routes

Health check:

```text
GET /api/health
```

Existing no-auth GPT Actions routes include:

```text
POST /api/cfo-in-a-box/calculate-cash-runway
POST /api/cfo-in-a-box/analyze-burn-rate
POST /api/cfo-in-a-box/generate-cash-flow-forecast
POST /api/cfo-in-a-box/score-funding-readiness
POST /api/cfo-in-a-box/detect-expense-leaks
POST /api/cfo-in-a-box/model-hiring-affordability
POST /api/cfo-in-a-box/generate-monthly-financial-snapshot
POST /api/cfo-in-a-box/model-business-scenario
POST /api/cfo-in-a-box/generate-funding-document-checklist
POST /api/cfo-in-a-box/generate-monthly-advisor-memo
```

New micro-SaaS app route:

```text
POST /api/financial-snapshot
```

## Local development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000/app/financial-snapshot
```

Build locally:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Manual API test

```bash
curl -X POST http://localhost:3000/api/financial-snapshot \
  -H "Content-Type: application/json" \
  -d '{"businessName":"Demo HVAC","businessType":"Local service","currentCash":25000,"monthlyRevenue":12000,"monthlyExpenses":18000,"debtPayments":1500,"upcomingLargeExpenses":5000,"expectedInflows":3000,"fundingGoal":50000,"biggestConcern":"Runway and funding readiness"}'
```

Expected response includes:

- `ok: true`
- `data.calculation`
- `data.summary`
- `data.markdownReport`
- `disclaimer`

## OpenAI usage

The Financial Snapshot route works without an OpenAI key.

Optional AI summary generation uses only server-side environment variables:

```text
OPENAI_API_KEY
OPENAI_MODEL
```

Rules:

- Never expose OpenAI usage in frontend code.
- Never commit secrets.
- Store approved keys in Vercel environment variables.
- Keep deterministic fallback summaries available.
- Do not use AI for math.

## Compliance posture

CFO-in-a-Box provides business planning and financial decision-support tools only.

It does **not** provide:

- Tax advice
- Legal advice
- Accounting advice
- Investment advice
- Securities advice
- Underwriting advice
- Lending approval advice
- Guaranteed funding
- Guaranteed approval
- Guaranteed terms
- Guaranteed timing

Funding readiness scores and financial risk levels are planning tools only. They do not guarantee approval, terms, timing, or financing.

Final financing decisions depend on lenders, underwriters, investors, or capital providers and their criteria.

## Data handling rules

- Do not commit real client financial records.
- Do not commit credentials, tokens, private keys, backend access details, or production secrets.
- Use synthetic or mock data for examples, tests, and evals.
- Keep no-auth actions low-risk and input-driven.
- Do not store raw client data by default.
- Clearly separate known data, assumptions, and missing information in outputs.

## Roadmap

Recommended build order:

1. Financial Snapshot workflow
2. Cash Runway Calculator as a standalone free tool using the shared calculation/result-card/report pattern
3. Funding Readiness Score workflow using deterministic category scoring
4. Expense Leak Detector with expense categories, subscriptions, savings estimates, and a 30-day cleanup report
5. GPT Actions/OpenAPI schema for completed no-auth calculator routes
6. Cash Flow Forecast Builder
7. Hiring Affordability Model
8. Monthly Advisor Memo Generator
9. Founder OS reporting layer
10. Advisor Desk human-in-the-loop workflow

## Build discipline

Before merging major changes:

- Confirm no private credentials or client records were added.
- Confirm no guaranteed funding language was introduced.
- Confirm financial outputs separate facts from assumptions.
- Confirm regulated advice is avoided.
- Confirm API route behavior matches the intended schema.
- Confirm frontend routes do not expose server-side secrets.
- Confirm manual QA cases pass.
