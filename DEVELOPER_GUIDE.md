# Developer Guide

This guide gets a developer or coding agent productive inside CFO-in-a-Box without stepping on the financial-compliance landmines.

## Prerequisites

- Node.js 20+
- npm
- Git
- VS Code recommended
- PowerShell 7+ recommended on Windows

## Install

```bash
git clone https://github.com/JFeimster/cfo-in-a-box.git
cd cfo-in-a-box
npm install
```

## Run locally

```bash
npm run dev
```

Default local URL:

```text
http://localhost:3000
```

Health route:

```text
http://localhost:3000/api/health
```

## Build and lint

```bash
npm run lint
npm run build
```

## Health checks

Windows / PowerShell:

```powershell
pwsh ./scripts/dev-healthcheck.ps1
pwsh ./scripts/validate-env.ps1
```

macOS / Linux:

```bash
bash ./scripts/dev-healthcheck.sh
bash ./scripts/validate-env.sh
```

## API action testing

Start the dev server first:

```bash
npm run dev
```

Then test a no-auth action with `curl`:

```bash
curl -X POST http://localhost:3000/api/cfo-in-a-box/calculate-cash-runway \
  -H "Content-Type: application/json" \
  -d '{"currentCash":25000,"monthlyRevenue":18000,"monthlyExpenses":24000}'
```

PowerShell equivalent:

```powershell
$body = @{ currentCash = 25000; monthlyRevenue = 18000; monthlyExpenses = 24000 } | ConvertTo-Json
Invoke-RestMethod -Method Post -Uri "http://localhost:3000/api/cfo-in-a-box/calculate-cash-runway" -ContentType "application/json" -Body $body
```

## OpenAPI workflow

GPT Actions are defined in `openapi.yaml`.

When adding or changing an action:

1. Add or update the API route under `app/api/cfo-in-a-box/`.
2. Put reusable logic in `lib/`.
3. Update `openapi.yaml`.
4. Add or update docs/evals if the behavior changes.
5. Test the local route.
6. Test the deployed route after Vercel deployment.

## Environment variables

The no-auth MVP should not require secrets.

If future integrations require environment variables:

- Document variable names only.
- Do not print values.
- Do not commit `.env.local`.
- Use Vercel project environment settings for production secrets.

## Compliance rules for developers

Do not add product copy or responses that suggest:

- Funding approval is guaranteed.
- The tool makes underwriting decisions.
- The tool provides tax, legal, accounting, investment, securities, or lending approval advice.

Do use:

- "planning support"
- "directional estimate"
- "funding readiness"
- "based on submitted inputs"
- "not an approval or guarantee"

## Recommended development order

1. Confirm route and schema alignment.
2. Build deterministic calculators.
3. Add eval cases.
4. Add UI wrappers.
5. Add templates and prompt chains.
6. Add integration docs.
7. Add auth/integrations only after explicit approval.

## Before opening a PR

- `npm run lint`
- `npm run build`
- `pwsh ./scripts/dev-healthcheck.ps1` or `bash ./scripts/dev-healthcheck.sh`
- Confirm no secrets.
- Confirm no real client data.
- Confirm no guaranteed funding claims.
- Confirm no regulated advice claims.
