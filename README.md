# CFO-in-a-Box

<img width="1344" height="572" alt="Image" src="https://github.com/user-attachments/assets/86f8a509-f32b-415f-9c0b-baa1583a7cfd" />

AI-powered CFO-in-a-Box platform for small business financial clarity, cash flow forecasting, burn rate analysis, funding readiness scoring, and GPT Actions-powered FinanceOps tools.

## Product summary

CFO-in-a-Box gives small business owners CFO-level clarity without CFO-level payroll. It supports cash flow forecasting, burn rate and runway analysis, funding readiness scoring, expense leak detection, scenario modeling, funding document checklists, financial snapshots, and monthly advisor memo generation.

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
lib/
  api/
  calculators/
  constants/
  generators/
  scoring/
openapi.yaml
```

## Local development

```bash
npm install
npm run dev
```

Build locally:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

## Deployment

Deploy to Vercel as a standard Next.js app.

- Framework: Next.js
- Build command: `npm run build`
- Output: default Next.js output
- Environment variables: none required for v1

See `docs/vercel-deployment.md`.

## GPT Actions setup

Use `openapi.yaml` in the Custom GPT Actions configuration.

Replace this placeholder server URL after deployment:

```text
https://YOUR-VERCEL-DOMAIN.vercel.app/api/cfo-in-a-box
```

Optional custom subdomain example:

```text
https://api.distilledfunding.com/api/cfo-in-a-box
```

Authentication: none for v1.

Public privacy policy path after deployment:

```text
/privacy
```

## API routes

Health:

- GET `/api/health`

GPT Actions:

- POST `/api/cfo-in-a-box/calculate-cash-runway`
- POST `/api/cfo-in-a-box/analyze-burn-rate`
- POST `/api/cfo-in-a-box/generate-cash-flow-forecast`
- POST `/api/cfo-in-a-box/score-funding-readiness`
- POST `/api/cfo-in-a-box/detect-expense-leaks`
- POST `/api/cfo-in-a-box/model-hiring-affordability`
- POST `/api/cfo-in-a-box/generate-monthly-financial-snapshot`
- POST `/api/cfo-in-a-box/model-business-scenario`
- POST `/api/cfo-in-a-box/generate-funding-document-checklist`
- POST `/api/cfo-in-a-box/generate-monthly-advisor-memo`

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

## Compliance and disclaimer notes

CFO-in-a-Box provides business planning and financial decision-support tools. It does not provide tax, legal, accounting, investment, securities, lending approval, or underwriting advice.

No funding approval, funding amount, rate, term, repayment structure, underwriting decision, or timing is guaranteed.

Outputs are directional estimates based on submitted inputs and simplified assumptions. Users are responsible for verifying numbers and consulting qualified professionals where appropriate.

## Roadmap

1. Public site + GPT Actions API
2. Interactive calculators and lead magnet capture
3. Starter Lab templates/community integration
4. Founder OS automation/reporting layer
5. Advisor Desk human-in-the-loop support

See `docs/product-roadmap.md`.

## QA checklist

- [x] Next.js structure exists
- [x] API routes exist
- [x] OpenAPI schema exists
- [x] Privacy page exists
- [x] Terms page exists
- [x] No secrets committed
- [x] No backend credentials
- [x] No funding approval guarantees
- [x] No regulated advice claims
- [x] Vercel deployment path documented
