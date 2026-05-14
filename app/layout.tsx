import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CFO-in-a-Box | AI FinanceOps for Small Business',
  description: 'AI-powered CFO and FinanceOps tools for cash flow forecasting, burn rate analysis, funding readiness scoring, and plain-English financial decision support.',
  metadataBase: new URL('https://YOUR-VERCEL-DOMAIN.vercel.app'),
  openGraph: {
    title: 'CFO-in-a-Box',
    description: 'CFO-level clarity without CFO-level payroll.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
