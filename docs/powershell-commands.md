# PowerShell Commands

Copy/paste-ready commands for Windows PowerShell or PowerShell 7+.

## Clone and enter repo

```powershell
git clone https://github.com/JFeimster/cfo-in-a-box.git
Set-Location cfo-in-a-box
```

## Install dependencies

```powershell
npm install
```

## Start development server

```powershell
npm run dev
```

## Build

```powershell
npm run build
```

## Lint

```powershell
npm run lint
```

## Run production server locally

```powershell
npm run start
```

## Run repo healthcheck

```powershell
pwsh ./scripts/dev-healthcheck.ps1
```

## Validate environment variable names

```powershell
pwsh ./scripts/validate-env.ps1
```

## Test health endpoint

Run the app first, then:

```powershell
Invoke-RestMethod -Method Get -Uri "http://localhost:3000/api/health"
```

## Test cash runway action

```powershell
$body = @{
  currentCash = 25000
  monthlyRevenue = 18000
  monthlyExpenses = 24000
} | ConvertTo-Json

Invoke-RestMethod `
  -Method Post `
  -Uri "http://localhost:3000/api/cfo-in-a-box/calculate-cash-runway" `
  -ContentType "application/json" `
  -Body $body
```

## Clean install

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
npm install
```

## Check current branch

```powershell
git branch --show-current
```

## Create scoped branch

```powershell
git checkout -b chore/my-scoped-task
```

## Review changes

```powershell
git status
git diff
```

## Security grep for risky files

```powershell
git ls-files | Select-String -Pattern "\.env|secret|token|credential|private|bank|tax|payroll"
```

Review matches manually. Some docs may mention these words as warnings; that is okay. Actual credentials or real client files are not okay.

## Notes

- Do not print environment variable values in terminal output.
- Do not commit `.env.local`.
- Do not commit client financial files.
