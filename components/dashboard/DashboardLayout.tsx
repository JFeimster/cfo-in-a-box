export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-mockup">
      <aside className="db-sidebar">
        <div className="db-nav-item active">Overview</div>
        <div className="db-nav-item">Forecast</div>
        <div className="db-nav-item">Runway</div>
        <div className="db-nav-item">Signals</div>
        <div className="db-nav-item">AI CFO</div>
      </aside>
      <main className="db-content">{children}</main>
    </div>
  );
}
