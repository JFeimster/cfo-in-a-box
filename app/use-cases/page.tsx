import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

const useCases = ['Can I afford to hire?','Should I cut expenses?','Am I ready for funding?','How much runway do I have?','What if revenue drops?','Can I take on debt?','Should I increase ad spend?','What should I review every week?'];

export default function UseCasesPage(){return <><Header/><section><div className="container"><div className="badge">Use Cases</div><h1>Answer expensive questions before they become expensive mistakes.</h1><div className="use-case-grid grid">{useCases.map((u)=><div className="use-case-card" key={u}>{u}</div>)}</div></div></section><Footer/></>}
