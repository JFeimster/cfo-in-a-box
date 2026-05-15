# Micro-SaaS Roadmap

CFO-in-a-Box is being repositioned as a micro-SaaS web application first, with the Custom GPT acting as a free acquisition channel, demo assistant, and future GPT Actions interface.

## Product direction

The primary product experience should live in the website/app frontend. Users should be able to complete guided workflows, receive deterministic financial calculations, read plain-English explanations, and export useful reports without needing to use ChatGPT directly.

## MVP workflow

The first MVP workflow is:

```text
/app/financial-snapshot
```

This workflow collects structured business financial inputs and returns:

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
- Action plan
- Assumptions
- Export-ready Markdown report

## Calculation-first / AI-second rule

Financial math must be deterministic.

AI may explain, summarize, prioritize, and draft report language only after calculations are complete. AI should not invent financial figures, replace formulas, or act as a lender, underwriter, accountant, tax advisor, attorney, investment advisor, or securities advisor.

## Environment variables

Optional future AI summary generation should use server-side environment variables only:

```text
OPENAI_API_KEY
OPENAI_MODEL
```

Rules:

- Never expose OpenAI keys in frontend code.
- Never commit keys to GitHub.
- Store approved keys in Vercel environment variables.
- Keep deterministic fallback behavior when no key exists or the model call fails.

## Compliance guardrails

CFO-in-a-Box provides business planning and financial decision-support tools only.

Do not provide or imply:

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

Use safe framing:

- Planning support
- Decision support
- Directional analysis
- Estimated runway
- Funding readiness
- Preparation gaps
- Provider criteria may apply
- Final decisions depend on lenders, underwriters, investors, or capital providers

## Next planned tools

Build in this order:

1. Financial Snapshot workflow
2. Cash Runway Calculator as a standalone free tool using the shared calculation/result-card/report pattern
3. Funding Readiness Score workflow
4. Expense Leak Detector with expense categories, subscriptions, savings estimates, and a 30-day cleanup report
5. GPT Actions/OpenAPI schema for completed no-auth calculator routes
6. Cash Flow Forecast Builder
7. Hiring Affordability Model
8. Monthly Advisor Memo Generator

## Product ladder

- Free GPT: acquisition, demo, manual analysis, future GPT Actions interface
- Free web tools: lead magnets and utility workflows
- Starter Lab: templates, prompts, community, clinics
- Founder OS: repeatable reporting and financial operating system
- Advisor Desk: human-in-the-loop review and decision support
