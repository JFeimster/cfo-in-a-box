# Manual QA Checklist

Use this checklist before merging the Financial Snapshot workflow.

## Local setup

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000/app/financial-snapshot
```

## QA cases

### 1. Positive revenue, higher expenses, limited runway

Input:

- Current cash: 25000
- Monthly revenue: 12000
- Monthly expenses: 18000

Expected:

- Net burn is calculated
- Runway is calculated
- Risk level is shown
- Report includes action plan and disclaimer

### 2. Positive revenue, expenses below revenue, no burn

Input:

- Current cash: 10000
- Monthly revenue: 20000
- Monthly expenses: 18000

Expected:

- Net burn: 0
- Runway shown as no net burn / not enough data
- Risk level: stable or watch depending missing inputs
- Report does not invent a cash-out date

### 3. Zero cash

Input:

- Current cash: 0
- Monthly revenue: 12000
- Monthly expenses: 18000

Expected:

- Net burn is calculated
- Short runway / cash risk language appears
- Clear warning language appears

### 4. Missing required fields

Input:

- Leave current cash, monthly revenue, or monthly expenses blank

Expected:

- Output clearly marks missing data
- Snapshot remains directional
- No fake values are invented

### 5. Large upcoming expense

Input:

- Current cash: 25000
- Monthly revenue: 12000
- Monthly expenses: 18000
- Upcoming large expenses: 10000

Expected:

- Gross burn and net cash flow reflect the upcoming expense
- Action plan includes cash-control next steps

### 6. No OpenAI API key fallback

Setup:

- Do not set `OPENAI_API_KEY`

Expected:

- API still returns successful summary
- Summary source is `fallback`
- Report is generated

### 7. Compliance language appears in output

Expected locations:

- API JSON response
- Result page footer/disclaimer area
- Markdown report disclaimer section

Required concepts:

- Business planning
- Financial decision support
- No tax/legal/accounting/investment/securities/underwriting/lending advice
- No approval, preapproval, underwriting decision, offer, commitment, or guarantee of financing

## Manual API test

```bash
curl -X POST http://localhost:3000/api/financial-snapshot \
  -H "Content-Type: application/json" \
  -d '{"businessName":"Demo HVAC","businessType":"Local service","currentCash":25000,"monthlyRevenue":12000,"monthlyExpenses":18000,"debtPayments":1500,"upcomingLargeExpenses":5000,"expectedInflows":3000,"fundingGoal":50000,"biggestConcern":"Runway and funding readiness"}'
```

Expected:

- `ok: true`
- `data.calculation` exists
- `data.summary` exists
- `data.markdownReport` exists
- `disclaimer` exists

## Build check

```bash
npm run build
```

The build should complete without TypeScript or Next.js errors.
