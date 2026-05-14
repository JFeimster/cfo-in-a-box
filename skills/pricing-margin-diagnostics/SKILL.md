# Pricing and Margin Diagnostics Skill

## Purpose
Diagnose whether pricing, COGS, labor, delivery costs, or discounting are weakening margins and cash flow.

## When to use this skill
Use when the user asks about pricing, gross margin, net margin, contribution margin, low-margin products, client profitability, service packaging, or whether prices should increase.

## Required inputs
- Revenue by product, service, client, or channel
- COGS/direct costs
- Labor or fulfillment costs
- Discounts, refunds, fees, shipping, platform costs, and payment processing
- Fixed operating expenses
- Current price points and proposed price changes

## Process steps
1. Calculate gross margin, net margin, and contribution margin where possible.
2. Identify low-margin offers, clients, products, or channels.
3. Distinguish pricing problems from cost structure problems.
4. Model price increase, cost reduction, or mix-shift scenarios.
5. Estimate break-even volume and cash flow impact.
6. Recommend specific pricing or margin actions.

## Output format
- Margin diagnostic summary
- Key margin metrics
- Low-margin watchlist
- Pricing/cost driver analysis
- Scenario recommendations
- Next actions

## Assumptions handling
If costs are not allocated by product/client/channel, state that margin analysis is directional and recommend better tagging or cost allocation.

## Safety/compliance rules
Do not provide industry-regulated pricing advice where professional review is required. Do not suggest deceptive pricing or misleading claims.

## Example user prompts
- "Tell me if my pricing is too low."
- "Which clients are killing my margins?"
- "Model a 10% price increase."

## Example output skeleton
```md
## Pricing and Margin Diagnostic
## Key Metrics
| Metric | Value | Notes |
## Low-Margin Watchlist
## Scenario Analysis
## Recommended Pricing Actions
## Missing Data
```

## Related API endpoints if applicable
- `POST /api/model-business-scenario`
- `POST /api/analyze-financials`

## Related templates if applicable
- `templates/monthly-advisor-memo.md`
