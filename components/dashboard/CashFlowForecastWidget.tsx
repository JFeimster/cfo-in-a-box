export function CashFlowForecastWidget() {
  return <div className="db-card"><h3>Cash Flow Forecast</h3><div className="db-chart-area flex" style={{ alignItems: 'flex-end', gap: 8 }}>{[44, 62, 58, 76, 82, 68].map((height, index) => <div key={index} style={{ flex: 1, height: `${height}%`, background: index === 4 ? 'var(--primary)' : '#1f242d', borderRadius: 2 }} />)}</div></div>;
}
