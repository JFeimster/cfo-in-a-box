# CFO-in-a-Box

<img width="1344" height="572" alt="CFO-in-a-Box product preview" src="https://github.com/user-attachments/assets/86f8a509-f32b-415f-9c0b-baa1583a7cfd" />

**CFO-in-a-Box** is an AI CFO / FinanceOps platform for small business owners who need financial clarity without hiring a full-time CFO.

It helps founders, operators, agencies, consultants, ecommerce sellers, local service businesses, and funding-ready entrepreneurs turn messy financial inputs into cash flow forecasts, burn rate analysis, funding readiness scores, cost leak reports, scenario models, weekly reviews, monthly snapshots, and advisor-style memos.

> Cash is the oxygen. Profit is the scoreboard. Forecasting is the radar.

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
| Free GPT | Basic financial clarity, manual analysis, runway estimates, weekly prompts, funding readiness self-checks. | DIY owners and curious founders. |
| Starter Lab | Templates, prompt vaults, Google Sheets/Notion resources, community, and monthly cash flow clinics. | Owners who want structure but still run it themselves. |
| Founder OS | FinOps setup, monthly reports, cash flow dashboards, reminders, funding readiness tracking, and export-based workflows. | Operators who want a repeatable financial operating system. |
| Advisor Desk | Founder OS plus human-in-the-loop review, advisor memos, review calls, and decision support. | Owners making bigger decisions around hiring, funding, cutting, borrowing, or growth. |

## Architecture

CFO-in-a-Box is built as a layered product:

| Layer | Tooling | Purpose |
| --- | --- | --- |
| Product site | Next.js App Router | Public pages, pricing, tools, demo, privacy, terms, and financial snapshot flows. |
| API backend | Vercel API routes | No-auth calculators, scoring engines, generators, and structured GPT Action responses. |
| GPT interface | ChatGPT Custom GPT | User-facing AI CFO workflow with plain-English analysis. |
| Action schema | OpenAPI | Maps Custom GPT Actions to API routes. |
| Marketing shell | Wix | Marketing pages, communities, booking, lead capture, and conversion flows. |
| Source control | GitHub | Code, docs, schemas, templates, prompt chains, evals, and operating rules. |

## Repo structure

```text
app/
  api/
    health/
    cfo-in-a-box/
  demo/
  free-financial-snapshot/
  pricing/
  privacy/
  terms/
  tools/
components/
  dashboard/
  site/
  tools/
data/
docs/
evals/
lib/
  api/
  calculators/
  constants/
  generators/
  scoring/
prompt-chains/
schemas/
skills/
templates/
AGENTS.md
CONTEXT.md
openapi.yaml
```

## Key files and folders

| Path | Purpose |
| --- | --- |
| `AGENTS.md` | Operating rules for AI coding agents working inside the repo. |
| `CONTEXT.md` | Product context, positioning, capabilities, product ladder, and compliance posture. |
| `openapi.yaml` | GPT Actions schema used by the Custom GPT. |
| `app/api/cfo-in-a-box/` | API routes for calculators, scoring engines, report builders, and scenario models. |
| `lib/calculators/` | Core financial calculation logic. |
| `lib/scoring/` | Funding readiness and related scoring logic. |
| `docs/` | Compliance rules, data dictionary, integration map, fulfillment playbooks, report templates, and sample inputs. |
| `skills/` | Reusable skill instructions for each CFO-in-a-Box capability. |
| `schemas/` | JSON schemas for financial inputs, funding readiness, monthly reports, and scenario models. |
| `evals/` | Test cases for calculation behavior, missing-data handling, compliance, and funding readiness outputs. |
| `templates/` | Copy-ready report templates for weekly reviews, funding readiness, cost leaks, and monthly advisor memos. |
| `prompt-chains/` | Sequential workflows for financial analysis, cash flow forecasting, Founder OS reporting, and Advisor Desk review. |

## GPT Actions API routes

Health check:

- `GET /api/health`

No-auth GPT Actions:

- `POST /api/cfo-in-a-box/calculate-cash-runway`
- `POST /api/cfo-in-a-box/analyze-burn-rate`
- `POST /api/cfo-in-a-box/generate-cash-flow-forecast`
- `POST /api/cfo-in-a-box/score-funding-readiness`
- `POST /api/cfo-in-a-box/detect-expense-leaks`
- `POST /api/cfo-in-a-box/model-hiring-affordability`
- `POST /api/cfo-in-a-box/generate-monthly-financial-snapshot`
- `POST /api/cfo-in-a-box/model-business-scenario`
- `POST /api/cfo-in-a-box/generate-funding-document-checklist`
- `POST /api/cfo-in-a-box/generate-monthly-advisor-memo`

Authentication is intentionally **none for v1**. The first action layer is designed for calculators, diagnostics, generators, scoring engines, and scenario models using user-provided summary inputs.

## GPT Actions setup

Use `openapi.yaml` inside the Custom GPT Actions configuration.

After deployment, replace the placeholder server URL with the live Vercel or custom API domain:

```text
https://YOUR-VERCEL-DOMAIN.vercel.app/api/cfo-in-a-box
```

Optional custom domain pattern:

```text
https://api.distilledfunding.com/api/cfo-in-a-box
```

Required public policy pages:

```text
/privacy
/terms
```

## Public pages

- `/`
- `/pricing`
- `/use-cases`
- `/free-financial-snapshot`
- `/demo`
- `/tools`
- `/tools/cash-runway`
- `/tools/funding-readiness`
- `/privacy`
- `/terms`

## Local development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build locally:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

Run linting:

```bash
npm run lint
```

## Deployment

Deploy to Vercel as a standard Next.js app.

- Framework: Next.js
- Build command: `npm run build`
- Output: default Next.js output
- Environment variables required for v1: none

See:

- `docs/vercel-deployment.md`
- `docs/integration-map.md`
- `docs/openapi-actions-workflow.md`

## Compliance posture

CFO-in-a-Box provides business planning and financial decision-support tools only.

It does **not** provide:

- Tax advice
- Legal advice
- Accounting advice
- Investment advice
- Securities advice
- Lending approval advice
- Underwriting decisions
- Guaranteed funding outcomes

Funding readiness outputs are planning tools, not approvals, preapprovals, offers, commitments, underwriting decisions, or financing guarantees.

No funding amount, rate, term, repayment structure, approval timing, or provider decision is guaranteed.

Outputs are directional estimates based on submitted inputs and simplified assumptions. Users are responsible for verifying numbers and consulting qualified professionals where appropriate.

## Data handling rules

- Do not commit real client financial records.
- Do not commit credentials, tokens, private keys, backend access details, or production secrets.
- Use synthetic or mock data for examples, tests, and evals.
- Keep no-auth actions low-risk and input-driven.
- Do not store raw client data by default.
- Clearly separate known data, assumptions, and missing information in outputs.

## Default financial report structure

Most CFO-in-a-Box reports should follow this structure:

1. Executive Summary
2. Key Metrics
3. What the Numbers Mean
4. Risks
5. Opportunities
6. Recommended Actions
7. Assumptions and Missing Data

## Funding readiness framework

Funding readiness is scored from 0 to 100 across six categories:

| Category | Points |
| --- | ---: |
| Financial Documentation | 20 |
| Cash Flow Health | 25 |
| Profitability & Margins | 20 |
| Debt & Repayment Capacity | 15 |
| Growth Story & Use of Funds | 10 |
| Owner / Business Risk Profile | 10 |

Score interpretation:

| Score | Interpretation |
| ---: | --- |
| 85–100 | Strong funding candidate. |
| 70–84 | Potentially fundable with cleanup. |
| 55–69 | Needs financial strengthening before serious funding conversations. |
| 40–54 | High-risk; fix cash flow, documentation, and profitability first. |
| 0–39 | Not funding-ready; stabilize before pursuing capital. |

## Working with skills

Each skill folder under `skills/` contains a `SKILL.md` file with:

- Purpose
- When to use the skill
- Required inputs
- Process steps
- Output format
- Assumptions handling
- Safety and compliance rules
- Example user prompts
- Example output skeleton
- Related API endpoints
- Related templates

These skills are designed to make the product reusable across the GPT, API routes, prompt chains, documentation, and future Founder OS / Advisor Desk workflows.

## Testing and evals

The `evals/` folder contains structured test cases for:

- Core CFO-in-a-Box behavior
- Funding readiness scoring
- Missing-data handling
- Compliance language
- Hallucination prevention
- Owner-friendly explanations
- Recommended action quality

Use evals before expanding actions, changing scoring logic, or adjusting report behavior.

## Roadmap

1. Public site and GPT Actions API
2. Interactive calculators and lead magnet capture
3. Expanded no-auth action library
4. Starter Lab templates and community workflows
5. Founder OS automated reporting layer
6. Advisor Desk human-in-the-loop review workflow
7. Future integrations with Google Drive, Sheets, Notion, HubSpot, n8n, Stripe, and export-based workflows

## Build discipline

Before merging major changes:

- Confirm no private credentials or client records were added.
- Confirm no guaranteed funding language was introduced.
- Confirm financial outputs separate facts from assumptions.
- Confirm regulated advice is avoided.
- Confirm API route behavior matches `openapi.yaml`.
- Confirm templates and prompt chains use practical, founder-friendly language.

## Status

Current foundation:

- Next.js structure exists
- API routes exist
- OpenAPI schema exists
- Privacy and terms pages exist
- Skills layer exists
- Supporting docs exist
- Schemas exist
- Evals exist
- Report templates exist
- Prompt chains exist
- No-auth action direction is documented

CFO-in-a-Box is now positioned as a serious AI finance command center for operators who are done checking their bank balance like it is a Magic 8 Ball.
