export function Header() {
  return (
    <nav>
      <div className="container">
        <a className="logo" href="/">CFO-IN-A-<span>BOX</span></a>
        <div className="nav-links flex">
          <a href="/pricing">Pricing</a>
          <a href="/use-cases">Use Cases</a>
          <a href="/tools">Tools</a>
          <a href="/demo">Demo</a>
        </div>
        <div className="nav-btns flex">
          <a className="btn btn-outline" href="/tools/funding-readiness">Try Free GPT</a>
          <a className="btn btn-primary" href="/free-financial-snapshot">Get Financial Clarity</a>
        </div>
      </div>
    </nav>
  );
}
