export function MetricGrid() {
  const metrics = [['Revenue', '$48,200'], ['Expenses', '$39,750'], ['Net Cash Flow', '+$8,450'], ['Runway', '5.8 mo']];
  return <div className="db-main-grid">{metrics.map(([label, value]) => <div className="db-card" key={label}><div className="db-label">{label}</div><div className="db-value">{value}</div></div>)}</div>;
}
