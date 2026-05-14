export function modelBusinessScenario(input: { startingCash?: number; revenueChangePct?: number; expenseChangePct?: number; monthlyRevenue?: number; monthlyExpenses?: number } = {}) {
  const scenarioRevenue = Number(input.monthlyRevenue ?? 0) * (1 + Number(input.revenueChangePct ?? 0) / 100);
  const scenarioExpenses = Number(input.monthlyExpenses ?? 0) * (1 + Number(input.expenseChangePct ?? 0) / 100);
  const scenarioNetCashFlow = scenarioRevenue - scenarioExpenses;

  return {
    scenarioRevenue: Number(scenarioRevenue.toFixed(2)),
    scenarioExpenses: Number(scenarioExpenses.toFixed(2)),
    scenarioNetCashFlow: Number(scenarioNetCashFlow.toFixed(2)),
    signal: scenarioNetCashFlow < 0 ? 'stress-case-negative-cash-flow' : 'scenario-positive-cash-flow',
  };
}

export function detectExpenseLeaks(input: { expenses?: { name: string; amount: number; category?: string; priorAmount?: number }[] } = {}) {
  const expenses = input.expenses ?? [];
  const leaks = expenses
    .filter((expense) => expense.amount > 250 || (expense.priorAmount && expense.priorAmount > 0 && (expense.amount - expense.priorAmount) / expense.priorAmount > 0.2))
    .map((expense) => ({
      ...expense,
      reason: expense.priorAmount && expense.priorAmount > 0 && (expense.amount - expense.priorAmount) / expense.priorAmount > 0.2 ? 'increased-more-than-20-percent' : 'review-material-expense',
    }));

  return { leakCount: leaks.length, leaks };
}
