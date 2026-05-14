# Prompt Chain: Build Cash Flow Forecast

Use this chain when a user wants a 13-week or monthly cash flow forecast.

## Step 1 — Confirm forecast scope

Default to:

- 13 weeks for short-term liquidity
- 12 months for strategic planning

Identify:

- Opening cash
- Forecast period
- Business model
- Main cash flow concern

## Step 2 — Collect cash inflows

Capture:

- Expected collections
- New sales expected to collect in the period
- Recurring revenue
- Financing proceeds if already committed
- Other cash inflows

Do not treat booked revenue as cash unless collection timing is provided.

## Step 3 — Collect cash outflows

Capture:

- Payroll
- Contractors
- Rent
- Software
- Marketing
- Debt payments
- Tax payments or reserves
- Owner draws
- Vendor payments
- Inventory
- One-time expenses

## Step 4 — Build base case

For each week or month:

`ending cash = opening cash + inflows - outflows`

Carry ending cash forward as next period opening cash.

## Step 5 — Build scenarios

Create:

- Best case: faster collections, stronger inflows, controlled costs
- Base case: most likely assumptions
- Worst case: slower collections, weaker revenue, unexpected costs

## Step 6 — Flag cash warnings

Flag:

- Negative ending cash
- Cash below payroll threshold
- Cash below debt/payment obligations
- Cash below owner-defined comfort level
- Large timing gaps between AR and AP

## Step 7 — Recommend corrective actions

Suggest actions such as:

- Accelerate collections
- Delay non-critical purchases
- Review owner draws
- Renegotiate vendor timing
- Reduce low-ROI spend
- Prepare funding documents before the crunch

## Output skeleton

```md
## Cash Flow Forecast Summary
## Forecast Scope
## Assumptions
## Base-Case Forecast
| Period | Opening Cash | Inflows | Outflows | Ending Cash | Notes |
## Best/Base/Worst Scenario Summary
## Low-Cash Warnings
## Recommended Actions
## Missing Data
## Compliance Note
```

## Compliance note

This forecast is for business planning and decision support only. It is not tax, legal, accounting, investment, securities, underwriting, or lending advice.
