import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

export default function CashRunwayPage(){return <><Header/><section><div className="container"><div className="badge">Calculator</div><h1>Cash Runway Calculator</h1><p>Estimate how many months your business can operate based on cash balance and burn rate.</p><div className="feature-card"><h3>Example Inputs / Output</h3><p>Cash balance: $58,000. Monthly revenue: $48,200. Monthly expenses: $58,200.</p><h2>5.8 months runway</h2><p>This is a directional planning estimate, not accounting advice or underwriting.</p></div></div></section><Footer/></>}
