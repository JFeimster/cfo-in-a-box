export function SignalAlertList() {
  const alerts = ['Contractor expenses increased 22%', 'Receivables review due this week', 'Software stack likely has duplicate tools'];
  return <div className="db-card"><h3>Signal Alerts</h3>{alerts.map((alert) => <p key={alert}>⚡ {alert}</p>)}</div>;
}
