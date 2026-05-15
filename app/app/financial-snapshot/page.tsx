import Link from 'next/link';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { FinancialSnapshotForm } from '@/components/snapshot/FinancialSnapshotForm';

export const metadata = {
  title: 'Financial Snapshot App | CFO-in-a-Box',
  description: 'Use the live CFO-in-a-Box Financial Snapshot workflow to calculate runway, burn rate, risk level, action plan, and export-ready report output.'
};

export default function FinancialSnapshotPage() {
  return (
    <>
      <Header />
      <main>
        <section className="snapshot-hero snapshot-app-hero">
          <div className="container">
            <div className="badge">Live Financial Snapshot App</div>
            <h1>Get the financial signal before the bank account starts yelling.</h1>
            <p>
              This is the working CFO-in-a-Box snapshot workflow. Enter summary numbers and the app will calculate
              runway, burn, break-even gap, risk level, recommended actions, CTA paths, and an export-ready report.
            </p>
            <div className="snapshot-app-note">
              <span>Want the overview first?</span>
              <Link href="/free-financial-snapshot">Read the free snapshot landing page</Link>
            </div>
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
