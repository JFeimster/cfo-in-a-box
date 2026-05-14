# OpenAI Platform Plan

This document defines how CFO-in-a-Box should use OpenAI Platform capabilities without overbuilding, leaking secrets, or turning a clean no-auth MVP into a haunted credential swamp.

## Product context

CFO-in-a-Box is an AI CFO / FinanceOps product for small business owners. It provides cash flow forecasting, burn rate analysis, runway calculation, funding readiness scoring, cost leak detection, scenario modeling, weekly financial reviews, monthly financial snapshots, and advisor-style memos.

The current architecture direction is:

- Next.js App Router product site.
- Vercel-hosted API routes under `app/api/`.
- GPT Actions using `openapi.yaml`.
- No-auth actions first.
- Wix as marketing, community, booking, and conversion shell.
- Future Founder OS and Advisor Desk workflows.
- Future integrations with n8n, HubSpot, Google Drive, Notion, Sheets, and other finance/accounting/export systems.

## Current connector reality

The OpenAI Platform connector available in ChatGPT is currently key-setup oriented. It can help create a Platform API key through a secure setup flow, but it is not a full project admin surface for directly creating hosted evals, prompt versions, webhooks, or production resources from this chat.

Do not create API keys, secrets, OpenAI projects, paid resources, production resources, OAuth apps, or credentials unless explicitly approved.

## Recommended architecture by phase

### Phase 1: Custom GPT plus no-auth GPT Actions

Use the Custom GPT as the free acquisition channel and the first user-facing AI interface.

Flow:

```text
User asks a financial question in the CFO-in-a-Box GPT
  -> GPT gathers or extracts structured inputs
  -> GPT calls a no-auth Vercel API route through GPT Actions
  -> API route performs deterministic calculations or scoring
  -> API returns structured JSON
  -> GPT explains the result in plain English
```

Best uses:

- Cash runway calculation.
- Burn rate analysis.
- Simplified cash flow forecasting.
- Funding readiness scoring.
- Expense leak detection.
- Hiring affordability modeling.
- Business scenario modeling.
- Funding document checklist generation.
- Monthly snapshot and advisor memo drafts using user-provided data.

Why this phase matters:

- No backend OpenAI API key required.
- No user accounts required.
- No OAuth complexity.
- Low cost.
- Easy to test in GPT Builder.
- Keeps calculations deterministic and auditable.

### Phase 2: Website-first micro-SaaS experience

Move the primary product experience into the website/app frontend while keeping the Custom GPT as a free acquisition channel.

Flow:

```text
User completes guided workflow on /app/financial-snapshot
  -> Frontend sends structured inputs to /api/financial-snapshot
  -> Backend calculates metrics deterministically
  -> Backend optionally uses OpenAI after calculations are complete
  -> User sees result cards, CTA buttons, and export-ready report output
```

Use OpenAI only after the math is done.

The model should explain calculated results, draft summaries, organize action plans, and generate plain-English report language. It should not be the source of truth for the numbers.

### Phase 3: Founder OS automation layer

Use OpenAI Platform API calls only after the app needs repeatable server-side AI generation outside the Custom GPT.

Good candidates:

- Monthly founder report generation.
- Advisor memo generation.
- Cash flow risk narrative.
- Funding readiness cleanup plan.
- Cost leak cleanup memo.
- Board-style update drafts.
- Owner-friendly explanation of forecast scenarios.

Required before this phase:

- Approved OpenAI API key setup.
- Environment variable plan.
- Vercel secret storage.
- Usage limits.
- Cost controls.
- Logging policy that avoids private financial data exposure.

### Phase 4: Advisor Desk and human-in-the-loop workflows

Use OpenAI outputs as draft material that a human advisor can review.

Good candidates:

- Monthly Advisor Desk memo draft.
- Risk review queue.
- Funding prep checklist with human review notes.
- Follow-up questions for owner review calls.
- Client-safe summary for CRM records.

Do not position these workflows as certified accounting, tax, legal, investment, lending approval, or underwriting advice.

## Platform capability recommendations

### GPT Actions

Use GPT Actions for the Custom GPT interface. Actions should call Vercel API routes through `openapi.yaml`.

Rules:

- Keep operation IDs stable.
- Keep endpoint names predictable.
- Use explicit request schemas.
- Use standard response envelopes.
- Return assumptions and disclaimers from the API, not only from GPT instructions.
- Keep no-auth actions limited to calculators, diagnostics, scoring engines, generators, and scenario models.

### Responses API

Use the Responses API later for server-side AI generation inside the web app or automation workflows.

Use it for:

- Plain-English summaries.
- Action plans.
- Advisor memo drafts.
- Report narrative sections.
- Export-ready user-facing text.

Do not use it for:

- Core calculations.
- Funding approval decisions.
- Underwriting conclusions.
- Tax/legal/accounting/investment advice.

### File inputs and document analysis

Phase 1:

- Let ChatGPT handle uploaded files inside the Custom GPT.
- The GPT extracts summary numbers and calls Actions with structured inputs.

Phase 2 and beyond:

- Add app-side file intake only when there is a clear storage, privacy, and redaction plan.
- Prefer summary extraction over raw file storage.
- Never commit raw client financial records to the repo.
- Use synthetic files for examples, tests, and evals.

### Prompt and version management

Phase 1:

- Manage prompts in the repo under `prompt-chains/`, `templates/`, `skills/`, and `docs/`.
- Treat GitHub as the source of truth.

Phase 2 and beyond:

- Consider OpenAI-hosted prompt versions only for stable production report flows.
- Keep prompt IDs and versions documented outside code comments if used.
- Do not hardcode secrets or private client details in prompt templates.

### Evals

Start with repo-based eval fixtures before using paid or hosted eval workflows.

Use evals to test:

- Calculation accuracy.
- Missing data handling.
- Disclaimer presence.
- Funding readiness scoring behavior.
- Hallucination prevention.
- Owner-friendly explanation quality.

The starter fixture is in `evals/cfo-in-a-box-action-evals.json`.

### Webhooks

Skip webhooks for the no-auth MVP.

Consider webhooks later for:

- Background report completion.
- File processing completion.
- Eval run completion.
- Advisor Desk queue events.
- Monthly Founder OS workflow status.

Webhook endpoints must verify signatures and must not expose private financial data in event payload logs.

## Security and cost rules

- No secrets in GitHub.
- No API keys in docs, test data, prompts, or examples.
- No raw client financial records in the repo.
- Use Vercel environment variables for approved secrets.
- Use synthetic data in all examples and evals.
- Add usage limits before public API-key-protected endpoints.
- Add rate limiting before turning no-auth tools into high-traffic lead magnets.

## Compliance posture

CFO-in-a-Box provides planning and decision-support tools only.

It must not provide:

- Tax advice.
- Legal advice.
- Certified accounting advice.
- Investment advice.
- Securities advice.
- Lending approval advice.
- Underwriting decisions.
- Guaranteed funding outcomes.

Funding readiness outputs must remain readiness analysis, not approval predictions.

## Recommended next sequence

1. Keep the five MVP GPT Actions stable and testable.
2. Verify Vercel deployment and public `/privacy` and `/terms` pages.
3. Import `openapi.yaml` into GPT Builder and test in Preview.
4. Run the testing playbook and log failures.
5. Use `evals/cfo-in-a-box-action-evals.json` as the repo-based regression test source.
6. Build `/app/financial-snapshot` as the first web-app workflow.
7. Add `/api/financial-snapshot` for deterministic calculations.
8. Add optional AI-generated summary only after calculations are complete.
9. Add export-ready report output.
10. Add API-key auth only after no-auth value is proven.

## Decision principle

Cash math must be deterministic. AI may explain, summarize, prioritize, and turn the numbers into a plan. The model should not be the accountant, lender, underwriter, tax advisor, or oracle in a Patagonia vest.