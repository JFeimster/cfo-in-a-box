# Prompt Chain: Monthly Founder OS Report

## Purpose
Generate a monthly CFO-style Founder OS report from available financial inputs, normalized metrics, prior-period context, and owner goals. This workflow is designed for recurring monthly reporting, not one-off spreadsheet trivia.

CFO-in-a-Box should turn messy numbers into a plain-English operating brief that helps a founder decide what to fix, cut, fund, delay, hire, or watch next.

## When to use
Use this prompt chain when the user asks for:

- A monthly financial report
- A Founder OS report
- A monthly financial snapshot
- A board-style financial update
- A recurring CFO report
- A monthly cash flow, runway, margin, or funding-readiness review
- A summary of what changed this month financially

## Required inputs
Use what is available. Do not invent missing numbers.

Preferred inputs:

- Reporting month and comparison period
- Current cash balance
- Monthly revenue
- Monthly expenses
- Gross profit or COGS
- Net profit or net cash flow
- Payroll and contractor spend
- Debt payments
- Accounts receivable
- Accounts payable
- Owner draws or distributions
- Upcoming large expenses
- Expected revenue or pipeline
- Funding goal, if relevant
- Prior month metrics, if available
- Business model and owner priority

## Chain steps

### Step 1 — Intake and file review
Identify the source data provided. Summarize what the data appears to include and what is missing.

Output:

- Files or inputs reviewed
- Reporting period covered
- Data quality rating: Strong, Usable, Directional, or Weak
- Missing-data list

### Step 2 — Normalize the numbers
Convert provided data into a consistent monthly operating view.

Normalize at minimum:

- Revenue
- COGS or direct costs
- Gross profit
- Operating expenses
- Payroll and contractor costs
- Debt service
- Owner draws
- Net cash flow or net income, clearly labeled
- Ending cash balance
- AR and AP, if available

If a figure is estimated, mark it as estimated.

### Step 3 — Calculate core metrics
Calculate only metrics supported by the data.

Recommended metrics:

- Revenue growth or decline
- Gross margin
- Net margin
- Monthly burn rate
- Cash runway
- Break-even revenue
- Expense-to-revenue ratio
- Payroll burden
- Debt service coverage, if data supports it
- AR days or collection risk, if data supports it
- Funding readiness score, if requested or relevant

### Step 4 — Diagnose the month
Explain what happened this month in plain English.

Cover:

- What improved
- What worsened
- What surprised the business
- Whether cash flow matches profit
- Whether expenses are growing faster than revenue
- Whether working capital is helping or choking the business
- Whether the business is safer, riskier, or roughly unchanged from last month

### Step 5 — Risk review
Flag the biggest financial risks.

Risk categories:

- Cash runway risk
- Margin compression
- Revenue concentration
- Cost creep
- Payroll or contractor load
- Debt pressure
- AR collection delays
- AP/vendor pressure
- Documentation gaps
- Funding-readiness weakness

Use clear labels: Low, Medium, High, or Critical.

### Step 6 — Opportunity review
Identify practical improvements.

Examples:

- Raise prices
- Improve collections
- Reduce subscription creep
- Renegotiate vendors
- Delay nonessential spending
- Review underperforming marketing spend
- Clean up financial documentation
- Build a tax or debt reserve
- Prepare funding documents before urgency hits

### Step 7 — Monthly Founder OS memo
Create the final memo using the output format below.

## Output format

```markdown
# Monthly Founder OS Report: [Month Year]

## 1. Executive Summary
[Plain-English diagnosis of the month. Be direct.]

## 2. Data Reviewed
- Reporting period:
- Inputs reviewed:
- Data quality:
- Missing or limited data:

## 3. Key Metrics
| Metric | Current Month | Prior Period | Status | Notes |
|---|---:|---:|---|---|
| Revenue | | | | |
| Gross Margin | | | | |
| Net Margin | | | | |
| Cash Balance | | | | |
| Burn Rate | | | | |
| Runway | | | | |
| Debt Payments | | | | |
| AR | | | | |
| AP | | | | |

## 4. What Changed This Month
[Explain the meaningful changes and what they mean for owner decisions.]

## 5. Cash Flow Readout
[Explain whether cash is improving, tightening, or at risk.]

## 6. Margin and Profitability Readout
[Explain margin health, pricing power, and cost pressure.]

## 7. Risk Register
| Risk | Level | Why It Matters | Recommended Response |
|---|---|---|---|

## 8. Opportunities
| Opportunity | Impact | Difficulty | Suggested Action |
|---|---|---|---|

## 9. Funding Readiness Notes
[Only include if relevant. State clearly that this is not an approval, preapproval, underwriting decision, or guarantee.]

## 10. Recommended Actions
### Next 7 Days
1.
2.
3.

### Next 30 Days
1.
2.
3.

### Next 90 Days
1.
2.
3.

## 11. Assumptions and Missing Data
- Known from the data:
- Assumptions used:
- Missing data that would improve the report:

## 12. Planning Disclaimer
This report is for business planning and financial decision support only. It is not tax, legal, accounting, investment, securities, lending approval, or underwriting advice. Confirm major decisions with the appropriate licensed professional.
```

## Assumptions handling
- Separate known facts from assumptions.
- Never treat profit as cash.
- If prior-period data is missing, provide a current-month snapshot only.
- If cash balance is missing, do not calculate runway unless the user provided enough data to estimate it clearly.
- If the data is incomplete, label the report directional.

## Safety and compliance rules
- Do not guarantee funding approval, terms, amounts, rates, or timing.
- Do not provide tax, legal, accounting, investment, securities, lending approval, or underwriting advice.
- Do not claim the report is CPA-reviewed, lender-approved, or audit-ready.
- Do not invent numbers to make the report look complete.
- Use mock examples only when documenting workflows.

## Related API endpoints
Potentially related no-auth endpoints:

- `POST /api/cfo-in-a-box/generate-monthly-financial-snapshot`
- `POST /api/cfo-in-a-box/generate-monthly-advisor-memo`
- `POST /api/cfo-in-a-box/calculate-cash-runway`
- `POST /api/cfo-in-a-box/analyze-burn-rate`
- `POST /api/cfo-in-a-box/score-funding-readiness`
- `POST /api/cfo-in-a-box/detect-expense-leaks`

## Related templates
- `templates/monthly-advisor-memo.md`
- `templates/weekly-financial-review.md`
- `templates/funding-readiness-report.md`
- `templates/cost-leak-report.md`

## Example user prompts
- "Create my Monthly Founder OS report from these financials."
- "Summarize this month like a fractional CFO."
- "Build me a monthly cash flow and funding readiness report."
- "Turn this P&L and bank export into a founder-ready memo."
