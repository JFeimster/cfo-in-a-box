import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

const fields = ['Business type','Monthly revenue range','Monthly expenses range','Current cash balance','Funding goal','Biggest financial concern'];

export default function SnapshotPage(){return <><Header/><section><div className="container"><div className="lead-section"><div className="badge">Free Financial Snapshot</div><h1>Find the financial smoke before there is fire.</h1><p>This is a mock intake form UI. No backend submission is wired yet.</p><form className="snapshot-form grid">{fields.map((field)=><div className="form-group" key={field}><label>{field}</label><input placeholder={field}/></div>)}<div className="form-group" style={{gridColumn:'span 2'}}><button className="btn btn-primary" type="button">Generate My Snapshot</button></div></form><p className="disclaimer">Do not submit sensitive private data until a secure form workflow is configured.</p></div></div></section><Footer/></>}
