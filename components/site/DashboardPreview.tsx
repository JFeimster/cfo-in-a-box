export function DashboardPreview() {
  const cashBars = [52, 68, 44, 82, 74, 58, 91, 66];
  const riskRows = [
    ['Runway clock', '5.8 months', 'watch'],
    ['Contractor spend', '+22%', 'danger'],
    ['Funding docs', 'Needs cleanup', 'warn'],
    ['Cash pressure', 'Moderate', 'good']
  ];

  return (
    <div className="container dashboard-stage" aria-label="CFO-in-a-Box dashboard preview">
      <div className="dashboard-orbit orbit-one" />
      <div className="dashboard-orbit orbit-two" />
      <div className="dashboard-mockup command-center-card">
        <aside className="db-sidebar">
          <div className="db-sidebar-kicker">CFO OS</div>
          <div className="db-nav-item active">Financial Snapshot</div>
          <div className="db-nav-item">Cash Flow Radar</div>
          <div className="db-nav-item">Funding Readiness</div>
          <div className="db-nav-item">Expense Leaks</div>
          <div className="db-nav-item">Scenario War Room</div>
          <div className="db-sidebar-footer">
            <span>Signal strength</span>
            <strong>94%</strong>
          </div>
        </aside>

        <section className="db-content">
          <div className="db-topbar">
            <div>
              <div className="db-label">Live Command Center</div>
              <h3>Owner decision dashboard</h3>
            </div>
            <div className="db-status-pill">AI summary armed</div>
          </div>

          <div className="db-main-grid">
            <div className="db-card db-card-hero">
              <div className="db-label">Funding Readiness</div>
              <div className="db-value glow-value">72<span> / 100</span></div>
              <div className="db-trend up">Fundable with cleanup</div>
            </div>
            <div className="db-card">
              <div className="db-label">Runway</div>
              <div className="db-value">5.8 <span>mo</span></div>
              <div className="db-trend warn">Watch cash timing</div>
            </div>
            <div className="db-card">
              <div className="db-label">Net Cash Flow</div>
              <div className="db-value">+$8,450</div>
              <div className="db-trend up">+12% vs last period</div>
            </div>
          </div>

          <div className="db-analytics-grid">
            <div className="db-chart-area flex">
              <div className="chart-header">
                <span>13-week cash radar</span>
                <strong>Base case</strong>
              </div>
              <div className="chart-bars">
                {cashBars.map((height, index) => (
                  <div
                    className={index === 6 ? 'chart-bar hot' : 'chart-bar'}
                    key={index}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="db-risk-panel">
              <div className="db-label">Risk Scan</div>
              {riskRows.map(([label, value, tone]) => (
                <div className={`risk-row ${tone}`} key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="db-ai-panel">
            <div className="mono">&gt; AI CFO_INSIGHT_042</div>
            <p>
              Cash flow is positive, but margin pressure is creeping. Clean up documentation, review receivables,
              and cut low-ROI spend before applying for additional capital.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
