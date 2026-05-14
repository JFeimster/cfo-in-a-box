# Sample Inputs

Use synthetic data only. Do not commit real client financial data.

## Cash runway calculator input

```json
{
  "businessType": "Service business",
  "currentCash": 42000,
  "monthlyRevenue": 28000,
  "monthlyExpenses": 36000,
  "upcomingLargeExpenses": 5000,
  "expectedInflows": 8000
}
```

## Funding readiness input

```json
{
  "businessType": "Agency",
  "timeInBusinessMonths": 30,
  "monthlyRevenue": 52000,
  "cashFlowTrend": "positive but uneven",
  "documentsAvailable": ["P&L", "bank statements", "debt schedule"],
  "documentsMissing": ["balance sheet", "cash flow statement", "AR aging"],
  "existingDebtPaymentsMonthly": 4200,
  "fundingAmountRequested": 75000,
  "useOfFunds": "hire sales support and stabilize working capital"
}
```

## 13-week cash flow forecast input

```json
{
  "openingCash": 35000,
  "weeks": [
    {
      "weekNumber": 1,
      "expectedInflows": 9000,
      "expectedOutflows": 7200,
      "payroll": 4000,
      "debtPayments": 900,
      "taxPayments": 0,
      "ownerDraws": 1500,
      "oneTimeExpenses": 0
    },
    {
      "weekNumber": 2,
      "expectedInflows": 6500,
      "expectedOutflows": 7600,
      "payroll": 4000,
      "debtPayments": 900,
      "taxPayments": 0,
      "ownerDraws": 1500,
      "oneTimeExpenses": 1200
    }
  ]
}
```

## Expense leak detector input

```json
{
  "businessType": "Ecommerce seller",
  "monthlyExpenses": [
    { "category": "software", "vendor": "Inventory Tool A", "amount": 299, "recurring": true },
    { "category": "software", "vendor": "Inventory Tool B", "amount": 249, "recurring": true },
    { "category": "marketing", "vendor": "Paid ads", "amount": 4500, "recurring": true },
    { "category": "contractors", "vendor": "Fulfillment support", "amount": 3200, "recurring": true }
  ]
}
```

## Scenario model input

```json
{
  "decisionType": "hire",
  "description": "Add a part-time operations contractor",
  "expectedMonthlyCost": 2500,
  "cashBalance": 28000,
  "monthlyRevenue": 34000,
  "grossMargin": 0.62,
  "expectedRevenueImpactMonthly": 5000,
  "timingMonths": 3,
  "riskTolerance": "medium"
}
```

## Monthly report input

```json
{
  "reportMonth": "2026-05",
  "businessType": "Consulting business",
  "revenue": 48000,
  "cogs": 9000,
  "operatingExpenses": 28000,
  "cashBalance": 56000,
  "accountsReceivable": 18000,
  "accountsPayable": 7000,
  "debtPayments": 2100,
  "ownerDraws": 8000,
  "notes": ["Revenue increased after two client renewals", "Contractor expenses rose due to delivery backlog"]
}
```
