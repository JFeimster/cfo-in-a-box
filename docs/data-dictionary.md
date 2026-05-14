# CFO-in-a-Box Data Dictionary

This dictionary standardizes common financial inputs and outputs across skills, schemas, reports, GPT Actions, and templates.

## Core business fields

| Field | Definition | Notes |
| --- | --- | --- |
| businessName | Business name or anonymized label | Do not require legal name unless needed. |
| industry | Business sector or niche | Used for context, not guaranteed benchmarking. |
| businessModel | How the business earns money | Examples: agency, ecommerce, SaaS, contractor, consultant. |
| analysisPeriod | Date range reviewed | Always identify the period before analyzing. |
| primaryGoal | User's main objective | survival, growth, funding, profitability, hiring, cost cutting, exit prep. |

## Financial statement fields

| Field | Definition | Formula / Notes |
| --- | --- | --- |
| revenue | Sales or income generated during the period | Use collected cash only when doing direct cash flow. |
| cogs | Cost of goods sold / direct costs | Includes direct labor or fulfillment when applicable. |
| grossProfit | Revenue minus COGS | `revenue - cogs` |
| grossMargin | Gross profit as percentage of revenue | `grossProfit / revenue` |
| operatingExpenses | Non-COGS business expenses | Payroll, rent, software, marketing, insurance, etc. |
| netIncome | Profit after expenses | Accounting profit, not necessarily cash. |
| netMargin | Net income as percentage of revenue | `netIncome / revenue` |
| cashBalance | Cash currently available | Most important short-term survival input. |

## Cash flow fields

| Field | Definition | Formula / Notes |
| --- | --- | --- |
| cashInflows | Cash expected or received | Collections, deposits, financing proceeds. |
| cashOutflows | Cash paid or expected to be paid | Expenses, payroll, debt, taxes, owner draws. |
| grossBurn | Total cash outflows per period | Useful for spend velocity. |
| netBurn | Cash outflows minus cash inflows | `cashOutflows - cashInflows` when outflows exceed inflows. |
| runwayMonths | Estimated months cash can cover net burn | `cashBalance / netMonthlyBurn` |
| breakEvenRevenue | Revenue needed to cover costs | Depends on margin and fixed cost structure. |
| openingCash | Cash at start of forecast period | Forecast starting point. |
| endingCash | Cash at end of forecast period | `openingCash + inflows - outflows` |

## Working capital fields

| Field | Definition | Formula / Notes |
| --- | --- | --- |
| accountsReceivable | Customer invoices not yet collected | AR is not cash. Timing matters. |
| accountsPayable | Bills/vendor obligations not yet paid | AP can create timing pressure. |
| dso | Days sales outstanding | Approximate collection speed. |
| dpo | Days payable outstanding | Approximate vendor payment timing. |
| inventory | Products held before sale | Can trap cash in ecommerce/retail. |
| cashConversionCycle | Time between spending cash and collecting cash | DIO + DSO - DPO when inventory data exists. |

## Debt and funding fields

| Field | Definition | Formula / Notes |
| --- | --- | --- |
| debtPayments | Required periodic debt payments | Include loans, advances, credit lines, leases. |
| existingDebt | Outstanding obligations | Use schedule where available. |
| dscr | Debt service coverage ratio | Common planning formula: available cash flow / debt service. |
| fundingAmountRequested | Capital amount user wants | Not a guarantee or approval input. |
| useOfFunds | Intended purpose of capital | Should be specific and tied to ROI or stability. |
| fundingReadinessScore | 0-100 preparation score | Planning tool only, not approval. |

## Owner and payroll fields

| Field | Definition | Formula / Notes |
| --- | --- | --- |
| payroll | Employee wage/salary expense | Include frequency and burden where possible. |
| contractorSpend | Contractor or freelancer payments | Often a major variable cost. |
| ownerDraws | Cash removed by owner | Can affect runway and reserves. |
| ownerSalary | W-2 or payroll-based owner compensation | Tax/payroll treatment requires professional review. |
| payrollBurden | Taxes, benefits, insurance, and related costs | Use planning range if unknown. |

## Output status labels

| Label | Meaning |
| --- | --- |
| Known | Directly supported by user-provided data. |
| Estimated | Calculated from partial or assumed data. |
| Missing | Required for stronger analysis but unavailable. |
| Directional | Useful for planning, not precise or lender-grade. |
| Review Required | Needs human or licensed professional review. |
