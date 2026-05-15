export function Header() {
  return (
    <nav className="site-nav">
      <div className="container nav-shell">
        <a className="logo" href="/" aria-label="CFO-in-a-Box home">
          <span className="logo-mark">◆</span>
          <span className="logo-text">CFO<span>-in-a-Box</span></span>
        </a>
        <div className="nav-links flex" aria-label="Primary navigation">
          <a href="/tools">Tools</a>
          <a href="/use-cases">Use Cases</a>
          <a href="/pricing">Pricing</a>
          <a href="/demo">Demo</a>
        </div>
        <div className="nav-btns flex">
          <a className="btn btn-outline" href="https://chatgpt.com/g/g-6a00e691f1188191a3803cb5fea36165-cfo-in-a-box">Free GPT</a>
          <a className="btn btn-primary" href="/app/financial-snapshot">Launch Snapshot</a>
        </div>
      </div>
    </nav>
  );
}
