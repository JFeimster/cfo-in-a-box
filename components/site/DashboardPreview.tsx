export function DashboardPreview() {
  const bars = [60, 75, 45, 90, 82, 65];
  return (
    <div className="container" style={{ position: 'relative', zIndex: 5 }}>
      <div className="dashboard-mockup">
        <div className="db-sidebar"><div className="db-nav-item active">Dashboard</div><div className="db-nav-item">Cash Flow Analysis</div><div className="db-nav-item">Scenario Builder</div><div className="db-nav-item">Funding Readiness</div><div className="db-nav-item" style={{ marginTop: 40, opacity: .5 }}>Settings</div></div>
        <div className="db-content"><div className="db-main-grid"><div className="db-card"><div className="db-label">Funding Readiness</div><div className="db-value" style={{ color: 'var(--primary)' }}>72<span style={{ fontSize: '.8rem', color: '#555' }}> / 100</span></div><div className="db-trend up">Good (+4%)</div></div><div className="db-card"><div className="db-label">Monthly Runway</div><div className="db-value">5.8 <span style={{ fontSize: '.8rem', fontWeight: 400, color: 'var(--text-muted)' }}>mo</span></div><div className="db-trend" style={{ color: 'var(--secondary)' }}>Stabilizing</div></div><div className="db-card"><div className="db-label">Net Cash Flow</div><div className="db-value">+$8,450</div><div className="db-trend up">↑ 12% vs LY</div></div></div><div className="db-chart-area flex" style={{ alignItems: 'flex-end', gap: 8 }}>{bars.map((h, i) => <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 3 ? 'var(--primary)' : '#1f242d', borderRadius: 2, boxShadow: i === 3 ? '0 0 15px var(--glow)' : undefined }} />)}<div className="mono" style={{ position: 'absolute', top: 15, right: 15, color: 'var(--text-muted)' }}>Forecast: Q4 Growth</div></div><div className="db-ai-panel" style={{ marginTop: 16 }}><div className="mono" style={{ color: 'var(--primary)', marginBottom: 8 }}>&gt; AI CFO_INSIGHT_042</div><p>Cash flow is positive, but contractor expenses increased 22%. Funding readiness is decent, but documentation needs cleanup.</p></div></div>
      </div>
    </div>
  );
}
