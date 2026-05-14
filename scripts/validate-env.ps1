$ErrorActionPreference = "Stop"

function Write-Pass($Message) {
  Write-Host "[PASS] $Message" -ForegroundColor Green
}

function Write-Warn($Message) {
  Write-Host "[WARN] $Message" -ForegroundColor Yellow
}

Write-Host "CFO-in-a-Box environment validation" -ForegroundColor Cyan
Write-Host "-----------------------------------" -ForegroundColor Cyan

# No-auth MVP currently requires no production secrets.
$required = @()

# Future placeholders. Keep names documented here without requiring them yet.
$futureOptional = @(
  "NEXT_PUBLIC_SITE_URL",
  "OPENAI_API_KEY",
  "HUBSPOT_ACCESS_TOKEN",
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
  "NOTION_API_KEY",
  "N8N_WEBHOOK_URL"
)

if ($required.Count -eq 0) {
  Write-Pass "No required environment variables for the no-auth MVP."
}

foreach ($name in $required) {
  if ([Environment]::GetEnvironmentVariable($name)) {
    Write-Pass "$name is set."
  } else {
    Write-Warn "$name is missing."
  }
}

Write-Host "Future optional variables are not required and values will not be printed:" -ForegroundColor Cyan
foreach ($name in $futureOptional) {
  if ([Environment]::GetEnvironmentVariable($name)) {
    Write-Warn "$name is set in this shell. Value intentionally hidden. Confirm it is not committed."
  } else {
    Write-Pass "$name not set."
  }
}

Write-Host "-----------------------------------" -ForegroundColor Cyan
Write-Pass "Environment validation complete."
