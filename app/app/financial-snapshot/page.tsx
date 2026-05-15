import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { FinancialSnapshotForm } from '@/components/snapshot/FinancialSnapshotForm';

export const metadata = {
  title: 'Financial Snapshot | CFO-in-a-Box',
  description: 'Generate a CFO-style financial snapshot with runway, burn rate, risk level, action plan, and export-ready report output.'
};

export default function FinancialSnapshotPage() {
  return (
    <>
      <Header />
      <main>
        <section className="snapshot-hero">
          <div className="container">
            <div className="badge">Financial Snapshot Workflow</div>
            <h1>Get the financial signal before the bank account starts yelling.</h1>
            <p>
              Enter a few summary numbers and CFO-in-a-Box will calculate runway, burn, break-even gap, risk level,
              recommended actions, CTA paths, and an export-ready markdown report.
            </p>
          </div>
        </section>

        <section className="snapshot-app-section">
          <div className="container">
            <FinancialSnapshotForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
