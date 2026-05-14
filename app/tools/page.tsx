import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

const tools = [
  ['Cash Runway Calculator','/tools/cash-runway'],
  ['Funding Readiness Score','/tools/funding-readiness'],
  ['Burn Rate Analyzer','/demo'],
  ['Cash Flow Forecast','/demo'],
  ['Expense Leak Detector','/demo'],
  ['Scenario Modeler','/demo']
];

export default function ToolsPage(){return <><Header/><section><div className="container"><div className="badge">Public Tools</div><h1>Financial tools that turn owner panic into signal.</h1><div className="feature-grid grid">{tools.map(([name,href])=><a className="feature-card" href={href} key={name}><h3>{name}</h3><p>Use this tool to clarify cash flow, runway, funding readiness, or scenario risk before making the next move.</p></a>)}</div></div></section><Footer/></>}
