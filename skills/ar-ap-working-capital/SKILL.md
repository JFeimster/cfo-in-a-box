# AR/AP Working Capital Skill

## Purpose
Analyze receivables, payables, and working capital timing so owners understand why profit and cash may be telling different stories.

## When to use this skill
Use when the user asks about collections, vendor payment timing, cash conversion cycle, invoices, delayed receivables, payables pressure, or working capital problems.

## Required inputs
- AR aging report
- AP aging report
- Monthly revenue and collections
- Vendor payment schedule
- Inventory timing if applicable
- Payroll, debt, tax, and owner draw timing
- Customer concentration or major invoice notes

## Process steps
1. Review AR and AP aging by bucket.
2. Identify overdue receivables and urgent payables.
3. Calculate DSO, DPO, and working capital pressure where data allows.
4. Identify cash timing gaps.
5. Recommend collection, vendor timing, invoicing, and reserve actions.
6. Flag risky dependency on a few customers or vendors.

## Output format
- Working capital summary
- AR watchlist
- AP watchlist
- Timing gap analysis
- Recommended collection actions
- Vendor/payment timing actions
- Risks and missing data

## Assumptions handling
If invoice dates, due dates, or payment terms are missing, provide qualitative analysis and request the missing fields for precise aging.

## Safety/compliance rules
Do not recommend deceptive payment practices, nonpayment schemes, or misrepresentation to vendors, lenders, or customers.

## Example user prompts
- "Why am I profitable but cash is tight?"
- "Analyze my AR/AP aging."
- "Create a collections plan for overdue invoices."

## Example output skeleton
```md
## Working Capital Summary
## AR Watchlist
## AP Watchlist
## Timing Gap Analysis
## Recommended Actions
## Risks and Missing Data
```

## Related API endpoints if applicable
- `POST /api/analyze-working-capital`
- `POST /api/generate-cash-flow-forecast`

## Related templates if applicable
- `templates/weekly-financial-review.md`
