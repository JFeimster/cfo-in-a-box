# Prompt Chain: Advisor Desk Review

## Purpose
Run a human-in-the-loop Advisor Desk review for CFO-in-a-Box. This workflow turns financial inputs, generated reports, and owner goals into an advisor-ready review packet, decision memo, and meeting agenda.

This is the escalation layer for owners who need more than a calculator: they need judgment, prioritization, and a sober read on cash, risk, and next moves.

## When to use
Use this prompt chain when the user asks for:

- Advisor Desk review
- Human-in-the-loop CFO review
- Monthly advisor memo
- Founder review packet
- Financial decision memo
- Review before a funding conversation
- Review before hiring, borrowing, cutting costs, or expanding
- A meeting agenda for a financial review call

## Required inputs
Use what is available and clearly identify gaps.

Preferred inputs:

- Current monthly report or Founder OS report
- Current cash balance
- Recent P&L
- Bank export or cash flow data
- Balance sheet, if available
- Debt schedule
- AR/AP aging, if available
- Payroll and contractor costs
- Owner draws or distributions
- Current funding goal, if any
- Business model and industry
- Owner’s primary decision or concern
- Recent major changes in revenue, expenses, staffing, vendors, debt, or operations
- Prior recommendations and action status, if available

## Chain steps

### Step 1 — Confirm review scope
Identify what the Advisor Desk review should answer.

Examples:

- Is the business stable?
- Is cash flow tightening?
- Can the owner afford to hire?
- Is the business ready to seek funding?
- What expenses should be cut or renegotiated?
- What should be fixed before the next 30-day cycle?

If the scope is not explicit, infer it from the provided context and state the inferred scope.

### Step 2 — Review source material
Summarize all financial inputs and generated reports reviewed.

Classify data quality:

- Strong: full monthly financials with supporting schedules
- Usable: enough data for practical decision support
- Directional: partial data requiring assumptions
- Weak: too incomplete for reliable recommendations

### Step 3 — Extract decision-critical facts
Pull out the numbers that matter most.

Focus on:

- Cash balance
- Revenue trend
- Expense trend
- Gross margin
- Net margin
- Burn rate
- Runway
- Debt service
- AR and AP pressure
- Payroll/contractor burden
- Owner draws
- Funding-readiness score or gaps
- Any unusual transactions or sudden trend changes

### Step 4 — Separate facts, assumptions, and open questions
Use three buckets:

- Known from the data
- Assumptions used
- Open questions for the owner

Never blend these together. Spreadsheet soup belongs in the trash, not in an advisor memo.

### Step 5 — Advisor diagnosis
Write the plain-English financial diagnosis.

Cover:

- What is actually happening financially
- Whether the business is safer or riskier than it looks
- Whether cash flow confirms or contradicts profitability
- Whether growth is affordable
- Whether the business is funding-ready or needs cleanup
- What decision the owner should avoid making blindly

### Step 6 — Decision support
If the owner is considering a specific decision, provide a decision memo.

Recommendation options:

- Proceed
- Proceed with guardrails
- Delay
- Modify
- Reject for now

Include:

- Cash impact
- Margin impact
- Risk impact
- Timing impact
- Required conditions before moving forward

### Step 7 — Advisor Desk packet
Generate the final review packet using the output format below.

## Output format

```markdown
# Advisor Desk Review: [Business / Month / Decision]

## 1. Advisor Summary
[Blunt, practical summary of the business position and the main decision issue.]

## 2. Review Scope
- Primary question:
- Secondary questions:
- Review period:
- Data quality:

## 3. Source Material Reviewed
| Source | Period | Usefulness | Limitations |
|---|---|---|---|

## 4. Decision-Critical Metrics
| Metric | Value | Status | Advisor Note |
|---|---:|---|---|
| Cash Balance | | | |
| Monthly Revenue | | | |
| Monthly Expenses | | | |
| Gross Margin | | | |
| Net Margin | | | |
| Burn Rate | | | |
| Runway | | | |
| Debt Service | | | |
| AR / Collections | | | |
| AP / Vendor Pressure | | | |

## 5. Known Facts
- 

## 6. Assumptions Used
- 

## 7. Open Questions for the Owner
1.
2.
3.

## 8. Advisor Diagnosis
[What the numbers are really saying.]

## 9. Risks and Watch Items
| Risk | Level | Trigger | Recommended Response |
|---|---|---|---|

## 10. Decision Memo
- Recommendation: Proceed / Proceed with Guardrails / Delay / Modify / Reject for Now
- Why:
- Cash impact:
- Margin impact:
- Timing risk:
- Conditions before approval by owner:

## 11. Funding Readiness Notes
[Include only when relevant. This is not an approval, preapproval, underwriting decision, or financing guarantee.]

## 12. Advisor Meeting Agenda
1. Review cash position and runway
2. Review revenue, margin, and expense movement
3. Discuss the main owner decision
4. Review risks and missing data
5. Agree on next 7-day and 30-day actions

## 13. Recommended Actions
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

## 14. Follow-Up Data Requested
- 

## 15. Planning Disclaimer
This review is for business planning and financial decision support only. It is not tax, legal, accounting, investment, securities, lending approval, or underwriting advice. Confirm major decisions with the appropriate licensed professional.
```

## Assumptions handling
- If the user has not provided a clear decision, frame the review around cash flow, runway, funding readiness, and expense control.
- If source reports conflict, flag the conflict and do not choose the nicer-looking number without explanation.
- If a metric cannot be calculated, write `Not available from current data` instead of inventing it.
- If recommendations rely on assumptions, label them as conditional.

## Safety and compliance rules
- Do not guarantee funding approval, terms, amounts, rates, or timing.
- Do not act as an underwriter, lender, CPA, attorney, investment advisor, or securities professional.
- Do not state that a business is approved or will be approved for capital.
- Do not provide tax filing, legal structuring, securities, or investment recommendations.
- Keep all analysis framed as planning support and decision support.
- Use mock data only in examples and documentation.

## Related API endpoints
Potentially related no-auth endpoints:

- `POST /api/cfo-in-a-box/generate-monthly-advisor-memo`
- `POST /api/cfo-in-a-box/generate-monthly-financial-snapshot`
- `POST /api/cfo-in-a-box/model-business-scenario`
- `POST /api/cfo-in-a-box/model-hiring-affordability`
- `POST /api/cfo-in-a-box/score-funding-readiness`
- `POST /api/cfo-in-a-box/detect-expense-leaks`

## Related templates
- `templates/monthly-advisor-memo.md`
- `templates/funding-readiness-report.md`
- `templates/cost-leak-report.md`
- `templates/weekly-financial-review.md`

## Example user prompts
- "Run an Advisor Desk review on this monthly report."
- "Create a CFO review packet before my funding conversation."
- "Review whether I can afford to hire based on this report."
- "Turn this Founder OS report into an advisor memo and meeting agenda."
