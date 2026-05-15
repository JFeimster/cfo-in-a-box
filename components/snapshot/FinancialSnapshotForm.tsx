'use client';

import { FormEvent, useState } from 'react';
import { FinancialSnapshotResults, type FinancialSnapshotResponse } from './FinancialSnapshotResults';

type FormState = {
  businessName: string;
  businessType: string;
  currentCash: string;
  monthlyRevenue: string;
  monthlyExpenses: string;
  payrollOrContractorSpend: string;
  debtPayments: string;
  ownerDraws: string;
  expectedInflows: string;
  upcomingLargeExpenses: string;
  fundingGoal: string;
  biggestConcern: string;
};

const initialState: FormState = {
  businessName: 'Demo HVAC Co.',
  businessType: 'Service business',
  currentCash: '25000',
  monthlyRevenue: '12000',
  monthlyExpenses: '18000',
  payrollOrContractorSpend: '0',
  debtPayments: '0',
  ownerDraws: '0',
  expectedInflows: '0',
  upcomingLargeExpenses: '0',
  fundingGoal: '',
  biggestConcern: 'I need to understand runway and what to fix first.'
};

function parseNumber(value: string): number | undefined {
  if (!value.trim()) return undefined;
  const cleaned = value.replace(/[$,]/g, '');
  const numeric = Number(cleaned);
  return Number.isFinite(numeric) ? numeric : undefined;
}

export function FinancialSnapshotForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [result, setResult] = useState<FinancialSnapshotResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);

    const payload = {
      businessName: form.businessName,
      businessType: form.businessType,
      currentCash: parseNumber(form.currentCash),
      monthlyRevenue: parseNumber(form.monthlyRevenue),
      monthlyExpenses: parseNumber(form.monthlyExpenses),
      payrollOrContractorSpend: parseNumber(form.payrollOrContractorSpend),
      debtPayments: parseNumber(form.debtPayments),
      ownerDraws: parseNumber(form.ownerDraws),
      expectedInflows: parseNumber(form.expectedInflows),
      upcomingLargeExpenses: parseNumber(form.upcomingLargeExpenses),
      fundingGoal: parseNumber(form.fundingGoal),
      biggestConcern: form.biggestConcern
    };

    try {
      const response = await fetch('/api/financial-snapshot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Unable to generate financial snapshot.');
      }

      setResult(data as FinancialSnapshotResponse);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'Unable to generate financial snapshot.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="snapshot-shell">
      <form className="snapshot-workflow-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="businessName">Business name</label>
          <input id="businessName" value={form.businessName} onChange={(event) => updateField('businessName', event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="businessType">Business type</label>
          <input id="businessType" value={form.businessType} onChange={(event) => updateField('businessType', event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="currentCash">Current cash balance</label>
          <input id="currentCash" inputMode="decimal" value={form.currentCash} onChange={(event) => updateField('currentCash', event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="monthlyRevenue">Monthly revenue</label>
          <input id="monthlyRevenue" inputMode="decimal" value={form.monthlyRevenue} onChange={(event) => updateField('monthlyRevenue', event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="monthlyExpenses">Monthly expenses</label>
          <input id="monthlyExpenses" inputMode="decimal" value={form.monthlyExpenses} onChange={(event) => updateField('monthlyExpenses', event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="payrollOrContractorSpend">Payroll / contractor spend</label>
          <input id="payrollOrContractorSpend" inputMode="decimal" value={form.payrollOrContractorSpend} onChange={(event) => updateField('payrollOrContractorSpend', event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="debtPayments">Monthly debt payments</label>
          <input id="debtPayments" inputMode="decimal" value={form.debtPayments} onChange={(event) => updateField('debtPayments', event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="ownerDraws">Monthly owner draws</label>
          <input id="ownerDraws" inputMode="decimal" value={form.ownerDraws} onChange={(event) => updateField('ownerDraws', event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="expectedInflows">Expected monthly inflows not in revenue</label>
          <input id="expectedInflows" inputMode="decimal" value={form.expectedInflows} onChange={(event) => updateField('expectedInflows', event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="upcomingLargeExpenses">Upcoming large monthly expenses</label>
          <input id="upcomingLargeExpenses" inputMode="decimal" value={form.upcomingLargeExpenses} onChange={(event) => updateField('upcomingLargeExpenses', event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="fundingGoal">Funding goal</label>
          <input id="fundingGoal" inputMode="decimal" value={form.fundingGoal} onChange={(event) => updateField('fundingGoal', event.target.value)} />
        </div>

        <div className="form-group snapshot-full-width">
          <label htmlFor="biggestConcern">Biggest financial concern</label>
          <input id="biggestConcern" value={form.biggestConcern} onChange={(event) => updateField('biggestConcern', event.target.value)} />
        </div>

        <div className="snapshot-form-actions snapshot-full-width">
          <button className="btn btn-primary" type="submit" disabled={isLoading}>
            {isLoading ? 'Generating Snapshot...' : 'Generate My Snapshot'}
          </button>
          <p>No bank login. No client records. Just summary inputs and CFO-style signal.</p>
        </div>
      </form>

      {error && <div className="snapshot-error">{error}</div>}
      {result && <FinancialSnapshotResults result={result} />}
    </div>
  );
}
