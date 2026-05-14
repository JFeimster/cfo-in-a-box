export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid grid">
          <div className="footer-col">
            <div className="logo">CFO-IN-A-<span>BOX</span></div>
            <p>AI-powered FinanceOps tools for owners who want signal before chaos starts billing interest.</p>
          </div>
          <div className="footer-col"><h5>Product</h5><ul><li><a href="/pricing">Pricing</a></li><li><a href="/tools">Tools</a></li><li><a href="/demo">Demo</a></li></ul></div>
          <div className="footer-col"><h5>Legal</h5><ul><li><a href="/privacy">Privacy</a></li><li><a href="/terms">Terms</a></li></ul></div>
        </div>
        <p className="disclaimer">CFO-in-a-Box provides business planning and financial decision-support tools. It does not provide tax, legal, accounting, investment, securities, lending approval, or underwriting advice.</p>
      </div>
    </footer>
  );
}
