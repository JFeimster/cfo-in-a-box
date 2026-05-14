# Local Development

This guide explains how to run CFO-in-a-Box locally.

## Requirements

- Node.js 20+
- npm
- Git
- PowerShell 7+ on Windows, optional but recommended

## Clone

```bash
git clone https://github.com/JFeimster/cfo-in-a-box.git
cd cfo-in-a-box
```

## Install

```bash
npm install
```

## Start the app

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Validate core routes

Health route:

```text
http://localhost:3000/api/health
```

Example GPT Action route:

```text
http://localhost:3000/api/cfo-in-a-box/calculate-cash-runway
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Run health checks

PowerShell:

```powershell
pwsh ./scripts/dev-healthcheck.ps1
pwsh ./scripts/validate-env.ps1
```

Bash:

```bash
bash ./scripts/dev-healthcheck.sh
bash ./scripts/validate-env.sh
```

## Troubleshooting

### `npm install` fails

- Confirm Node.js is installed.
- Confirm npm is installed.
- Delete `node_modules` and reinstall.

```bash
rm -rf node_modules package-lock.json
npm install
```

On PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
npm install
```

### Dev server port is busy

Use another port:

```bash
npm run dev -- -p 3001
```

### API route returns unexpected output

Check:

1. Route path under `app/api/`.
2. Reusable logic under `lib/`.
3. `openapi.yaml` path and operationId.
4. Input payload shape.
5. Missing-data warnings.

## Local data rules

Do not place real client financial files in the repo. Use local scratch folders outside the repo for sensitive files. Commit synthetic examples only.
