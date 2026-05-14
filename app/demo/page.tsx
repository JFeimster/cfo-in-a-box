import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { DashboardPreview } from '@/components/site/DashboardPreview';

const metrics = [['Funding Readiness Score','72 / 100'],['Monthly Revenue','$48,200'],['Monthly Expenses','$39,750'],['Net Cash Flow','$8,450'],['Runway','5.8 months'],['Risk Alert','Contractor expenses increased 22%'],['Suggested Action','Renegotiate software stack and review receivables']];

export default function DemoPage(){return <><Header/><section><div className="container"><div className="badge">Mock Demo</div><h1>Dashboard demo with operator-friendly signal.</h1><div className="feature-grid grid">{metrics.map(([label,value])=><div className="feature-card" key={label}><h3>{label}</h3><p>{value}</p></div>)}</div></div></section><DashboardPreview/><Footer/></>}
