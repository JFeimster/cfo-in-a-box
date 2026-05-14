import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

const tiers = [
  ['Free GPT','Self-serve AI financial analysis for quick clarity.'],
  ['Starter Lab','Private group, templates, prompts, workflows, and monthly Cash Flow Clinic / AMA.'],
  ['Founder OS','Done-with-you FinOps-as-a-Service Micro-SaaS with automations, dashboards, reports, reminders, and integrations where available.'],
  ['Advisor Desk','Founder OS plus human-in-the-loop review, monthly memo, review call, and financial decision support.']
];

export default function PricingPage(){return <><Header/><section><div className="container"><div className="badge">Pricing</div><h1>Start with the GPT. <span className="text-gradient">Grow into FinanceOps.</span></h1><div className="price-grid grid">{tiers.map(([name,copy],i)=><div className={`price-card ${i===2?'featured':''}`} key={name}>{i===2&&<div className="recommend-tag">FOUNDER FAVORITE</div>}<h3>{name}</h3><p>{copy}</p><a className={i===2?'btn btn-primary':'btn btn-outline'} href="/free-financial-snapshot">Get Started</a></div>)}</div></div></section><Footer/></>}
