$ErrorActionPreference = "Stop"

function Write-Pass($Message) {
  Write-Host "[PASS] $Message" -ForegroundColor Green
}

function Write-Warn($Message) {
  Write-Host "[WARN] $Message" -ForegroundColor Yellow
}

function Write-Fail($Message) {
  Write-Host "[FAIL] $Message" -ForegroundColor Red
  $script:HasFailure = $true
}

$HasFailure = $false

Write-Host "CFO-in-a-Box developer healthcheck" -ForegroundColor Cyan
Write-Host "------------------------------------" -ForegroundColor Cyan

if (Get-Command node -ErrorAction SilentlyContinue) {
  $nodeVersion = node --version
  Write-Pass "Node installed: $nodeVersion"
} else {
  Write-Fail "Node is not installed or not on PATH."
}

if (Get-Command npm -ErrorAction SilentlyContinue) {
  $npmVersion = npm --version
  Write-Pass "npm installed: $npmVersion"
} else {
  Write-Fail "npm is not installed or not on PATH."
}

if (Test-Path "package.json") {
  Write-Pass "package.json exists."
} else {
  Write-Fail "package.json missing. Run from repo root."
}

if (Test-Path "app") {
  Write-Pass "app directory exists."
} else {
  Write-Fail "app directory missing."
}

if (Test-Path "app/api") {
  Write-Pass "app/api directory exists."
} else {
  Write-Warn "app/api directory missing. This is expected only before API routes exist."
}

if (Test-Path "openapi.yaml") {
  Write-Pass "openapi.yaml exists."
} else {
  Write-Warn "openapi.yaml missing. GPT Actions may not be configured yet."
}

if (Test-Path ".env.local") {
  Write-Warn ".env.local exists locally. Confirm it is ignored and never committed."
} else {
  Write-Warn ".env.local not found. This is okay for the no-auth MVP."
}

$trackedFiles = @()
if (Get-Command git -ErrorAction SilentlyContinue) {
  try {
    $trackedFiles = git ls-files
    Write-Pass "Git is available and tracked files were scanned."
  } catch {
    Write-Warn "Unable to scan tracked files with git ls-files."
  }
} else {
  Write-Warn "Git command not available; skipping tracked-file scan."
}

$forbiddenPatterns = @(
  "(^|/)\.env$",
  "(^|/)\.env\.local$",
  "(^|/)\.env\.production$",
  "secret",
  "secrets",
  "credential",
  "credentials",
  "private-key",
  "id_rsa",
  "bank-statement",
  "tax-return",
  "payroll-export"
)

foreach ($pattern in $forbiddenPatterns) {
  $matches = $trackedFiles | Where-Object { $_ -match $pattern }
  foreach ($match in $matches) {
    Write-Warn "Review tracked file with sensitive-looking name: $match"
  }
}

if (Test-Path "node_modules") {
  Write-Pass "node_modules exists."
} else {
  Write-Warn "node_modules missing. Run npm install before local development."
}

Write-Host "------------------------------------" -ForegroundColor Cyan
if ($HasFailure) {
  Write-Fail "Healthcheck completed with failures."
  exit 1
}

Write-Pass "Healthcheck completed. Review warnings above before committing."
exit 0
