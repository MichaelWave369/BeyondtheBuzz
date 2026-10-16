import { useState } from 'react';
import { comparison, marketing, myths, organs, principles, reviewedOn, sources, spotlight } from './data.mjs';

const nav = [
  { id: 'explore', label: 'The signal' },
  { id: 'compare', label: 'Compare lab' },
  { id: 'body', label: 'The body' },
  { id: 'myths', label: 'Myth breaker' },
  { id: 'marketing', label: 'Decode the pitch' },
  { id: 'support', label: 'Support' },
  { id: 'sources', label: 'Sources' }
];

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <><path d="M4 12h16m-6-6 6 6-6 6" /></>,
    external: <><path d="M14 4h6v6m0-6-9 9" /><path d="M20 13v7H4V4h7" /></>,
    chevron: <><path d="m6 9 6 6 6-6" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Zm0 0A2.5 2.5 0 0 0 6.5 22H20" /></>,
    spark: <><path d="m12 2 1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8Z" /><path d="m19 18 .6 1.4L21 20l-1.4.6L19 22l-.6-1.4L17 20l1.4-.6Z" /></>,
    heart: <><path d="M20.8 4.6a5.6 5.6 0 0 0-7.9 0l-.9.9-.9-.9a5.6 5.6 0 0 0-7.9 7.9 7.9 0 0 0 0 8L12 21l8.8-8.4a5.6 5.6 0 0 0 0-8Z" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    x: <><path d="M5 5l14 14M19 5 5 19" /></>,
    eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3" /></>,
    check: <><path d="m4 12 5 5L20 6" /></>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function RefLinks({ refs = [], compact = false }) {
  return <span className={`references ${compact ? 'compact' : ''}`} aria-label="Evidence references">
    {refs.map((ref, i) => <a key={ref} href={sources[ref].url} target="_blank" rel="noopener noreferrer" title={sources[ref].title}>
      {sources[ref].org.includes('World') || sources[ref].org.startsWith('WHO') ? 'WHO' : sources[ref].org.includes('Centers') ? 'CDC' : sources[ref].org.startsWith('National') ? 'NIAAA' : 'SAMHSA'} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>{!compact && i < refs.length - 1 ? '' : ''}
    </a>)}
  </span>;
}

function SectionHeading({ kicker, heading, sub }) {
  return <div className="section-heading"><div className="eyebrow">{kicker}</div><h2>{heading}</h2>{sub && <p>{sub}</p>}</div>;
}

function PortalGraphic() {
  return <div className="portal" aria-hidden="true">
    <div className="portal-orbit orbit-one" /><div className="portal-orbit orbit-two" /><div className="portal-orbit orbit-three" />
    <div className="portal-core"><span className="portal-word">FACT</span><span className="portal-wave">≋ ≋ ≋</span><span className="portal-word portal-word-alt">FICTION</span></div>
    <span className="portal-chip chip-top">RETHINK THE DEFAULT</span>
    <span className="portal-chip chip-bottom">SIGNAL / 001</span>
    <span className="portal-dot dot-a" /><span className="portal-dot dot-b" /><span className="portal-dot dot-c" />
  </div>;
}

function Hero({ navigate }) {
  return <div className="hero-block">
    <div className="hero-copy">
      <div className="status-line"><span className="live-dot" /> AN OPEN KNOWLEDGE EXPERIMENT <span className="divider-mini">/</span> VOL. 001</div>
      <h1>BEYOND<br /><span>THE BUZZ<span className="period">.</span></span></h1>
      <p className="hero-lead">Curiosity hits different when it comes with receipts.</p>
      <p className="hero-description">Alcohol. Cannabis. Culture. Risk. Let's separate the research from the noise without judging the people living their lives.</p>
      <div className="hero-actions">
        <button className="button button-primary" onClick={() => navigate('compare')}>Enter the comparison lab <Icon name="arrow" size={18} /></button>
        <button className="button button-ghost" onClick={() => navigate('sources')}>Inspect the evidence <Icon name="external" size={17} /></button>
      </div>
      <div className="trustline"><Icon name="shield" size={17} /> Independent education <span>•</span> No ads <span>•</span> No judgment</div>
    </div>
    <PortalGraphic />
  </div>;
}

function Explore({ navigate }) {
  return <>
    <Hero navigate={navigate} />
    <section className="section stats-section" aria-labelledby="numbers-heading">
      <div className="eyebrow">01 / START WITH THE RECEIPTS</div>
      <h2 id="numbers-heading" className="section-title">Some facts deserve more airtime.</h2>
      <div className="stats-grid">
        {spotlight.map((fact, i) => <article className="stat-card" key={fact.number}>
          <div className="stat-index">0{i + 1} / DATA POINT</div><div className="stat-number">{fact.number}</div>
          <h3>{fact.label}</h3><p>{fact.context}</p><RefLinks refs={fact.refs} compact />
        </article>)}
      </div>
      <p className="under-note">Every figure needs a place, a year, and a source. This is not a live death counter or a comparison of alcohol and cannabis deaths.</p>
    </section>
    <section className="feature-split section">
      <div className="feature-art"><div className="feature-grid" /><div className="feature-symbol">?</div><div className="feature-art-caption">THE DEFAULT IS NOT THE WHOLE STORY</div></div>
      <div className="feature-text"><div className="eyebrow">02 / SHIFT THE QUESTION</div><h2>Popular doesn't automatically mean harmless.</h2>
        <p>Alcohol is deeply embedded in celebrations, advertising and social rituals. That can make its health risks easier to overlook. Cannabis has its own risks, and they deserve equally clear explanations.</p>
        <p>We're not here to crown a winner. We're here to let you look underneath the label.</p>
        <button className="text-link" onClick={() => navigate('marketing')}>See how messages shape expectations <Icon name="arrow" size={17} /></button>
      </div>
    </section>
    <div className="belief-strip"><span>LESS FEAR.</span><span>MORE FACTS.</span><span>ZERO SHAME.</span></div>
    <section className="section editorial-note"><div className="eyebrow">OUR NORTH STAR</div><h2>Evidence above agenda.<br /><span>People above labels.</span></h2><p>We take health risks seriously. We take human dignity just as seriously. Nobody needs a lecture to deserve reliable information or support.</p><button className="button button-outline" onClick={() => navigate('myths')}>Try the myth breaker <Icon name="arrow" size={17} /></button></section>
  </>;
}

function Compare() {
  const [topic, setTopic] = useState(comparison[0].id);
  const current = comparison.find(item => item.id === topic) || comparison[0];
  return <section className="section workspace-section">
    <SectionHeading kicker="02 / UNDER THE MICROSCOPE" heading="The comparison lab." sub="Two substances. Different risks. No fake safety scores. Select a topic to explore what the available evidence does, and does not, establish." />
    <div className="compare-layout">
      <div className="topic-rail" role="group" aria-label="Health risk topics">{comparison.map((item, index) => <button key={item.id} className={`topic-button ${topic === item.id ? 'active' : ''}`} onClick={() => setTopic(item.id)} aria-pressed={topic === item.id}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.label}</strong><Icon name="arrow" size={16} /></button>)}</div>
      <div className="compare-content">
        <div className="compare-content-header"><div className="eyebrow">SELECTED FIELD <span>/ {current.id.toUpperCase()}</span></div><h3>{current.label}</h3></div>
        <div className="compare-cards">
          {['alcohol', 'cannabis'].map((key) => <article className={`substance-card ${key}`} key={key}>
            <div className="substance-top"><span className="substance-dot"/><span>{key.toUpperCase()}</span></div>
            <h4>{current[key].title}</h4><p>{current[key].text}</p>
            <div className="evidence-level"><span>Evidence</span><strong>{current[key].evidence}</strong></div>
            <RefLinks refs={current[key].refs} />
          </article>)}
        </div>
        <div className="context-callout"><Icon name="eye" size={19}/><div><strong>Important context</strong><p>{current.context}</p></div></div>
      </div>
    </div>
    <p className="under-note">Research confidence is not a safety rating. Route of use, dose, age, individual health and frequency matter. Neither substance is safe for impaired driving.</p>
  </section>;
}

function BodyDiagram({ selected, setSelected }) {
  const names = { brain: 'Brain', heart: 'Heart', liver: 'Liver', lungs: 'Lungs' };
  return <div className="body-viz">
    <div className="body-grid" />
    <div className="body-viz-title">INTERACTIVE ANATOMY / NOT TO SCALE</div>
    <svg className="anatomy" viewBox="0 0 370 470" role="img" aria-label="Simplified original human body illustration with highlighted brain, lungs, heart and liver">
      <defs><linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#49e0d8" stopOpacity=".34"/><stop offset="1" stopColor="#62c6ff" stopOpacity=".05"/></linearGradient></defs>
      <path d="M150 70c-9 23-16 30-38 42l-42 15c-20 10-28 30-30 58l-9 130h32l20-110 12 33-4 98 24 108h52l16-121 16 121h52l24-108-4-98 12-33 20 110h32l-9-130c-2-28-10-48-30-58l-42-15c-22-12-29-19-38-42" fill="url(#bodyGrad)" stroke="#69d5db" strokeWidth="2" />
      <path d="M147 43c0-25 16-36 38-36s38 11 38 36c0 18-6 35-17 44v25h-42V87c-11-9-17-26-17-44Z" fill="#132538" stroke="#69d5db" strokeWidth="2"/>
      <path d="M149 168c-26 2-42 27-40 57 0 18 12 27 28 23 18-5 27-29 30-53l-4-26Zm72 0c26 2 42 27 40 57 0 18-12 27-28 23-18-5-27-29-30-53l4-26Z" fill={selected === 'lungs' ? '#f58bbe' : '#398fa0'} opacity=".9" stroke="#9cecf0" />
      <path d="M188 189c-3-13-19-13-21 0-1 15 14 30 20 38 8-9 21-25 20-39-1-14-16-13-19 1Z" fill={selected === 'heart' ? '#f58bbe' : '#ec777e'} stroke="#f8c7bf" strokeWidth="2" />
      <path d="M159 266c17-10 46-12 71-3-9 22-35 30-65 27-6-6-8-14-6-24Z" fill={selected === 'liver' ? '#f58bbe' : '#c47aa3'} stroke="#f8b7cf" strokeWidth="2"/>
      <path d="M160 41c-2-9 4-18 13-18 4-9 17-8 21-1 12-7 24 4 20 16 7 14-4 25-15 24-10 10-20 8-25 0-13 6-23-8-14-21Z" fill={selected === 'brain' ? '#f58bbe' : '#a385d9'} stroke="#dfccfb" strokeWidth="2"/>
      <g stroke="#96afc8" strokeDasharray="3 5" opacity=".75"><path d="M202 42h111"/><path d="M250 201h70"/><path d="M221 274h104"/><path d="M119 218H47"/></g>
      <g fill="#a5c4d0" fontSize="11" fontFamily="monospace"><text x="260" y="33">BRAIN</text><text x="269" y="190">HEART</text><text x="269" y="266">LIVER</text><text x="4" y="211">LUNGS</text></g>
    </svg>
    <div className="body-viz-footer"><span className="tiny-pulse"/> SELECT AN ORGAN TO EXAMINE</div>
    <div className="body-pickers" role="group" aria-label="Select an organ">{Object.entries(names).map(([id, name]) => <button key={id} className={id === selected ? 'selected' : ''} onClick={() => setSelected(id)} aria-pressed={id === selected}>{name}</button>)}</div>
  </div>;
}

function Body() {
  const [selected, setSelected] = useState('brain');
  const organ = organs.find(o => o.id === selected);
  return <section className="section workspace-section">
    <SectionHeading kicker="03 / INSIDE THE SYSTEM" heading="Your body. The actual science." sub="Pick an organ and compare documented effects. This is an educational illustration, not a diagnosis or a prediction about your health." />
    <div className="body-layout"><BodyDiagram selected={selected} setSelected={setSelected}/><div className="body-details"><div className="detail-header"><span className="eyebrow">ANATOMY FILE / {selected.toUpperCase()}</span><h3>{organ.name}</h3><p>{organ.kicker}</p></div>
      <div className="body-reading"><div className="reading-label alcohol-label">ALCOHOL</div><p>{organ.alcohol}</p></div>
      <div className="body-reading"><div className="reading-label cannabis-label">CANNABIS</div><p>{organ.cannabis}</p></div>
      <div className="body-sources"><span>Sources for this view</span><RefLinks refs={organ.refs}/></div>
      <div className="gentle-callout">Bodies are complicated. Risk depends on exposure and individual circumstances, and uncertainty is part of honest science.</div></div></div>
  </section>;
}

function Myths() {
  const [revealed, setRevealed] = useState([]);
  const toggle = id => setRevealed(prev => prev.includes(id) ? prev.filter(k => k !== id) : [...prev, id]);
  return <section className="section workspace-section">
    <SectionHeading kicker="04 / THINK FOR YOURSELF" heading="The myth breaker." sub="Six common claims. No gotchas, no shame. Try to decide what the evidence says before revealing each answer." />
    <div className="myth-progress"><span>RESEARCH CARDS OPENED</span><strong>{revealed.length} / {myths.length}</strong><div className="progress-track"><div style={{ width: `${revealed.length / myths.length * 100}%` }}/></div></div>
    <div className="myth-grid">{myths.map((myth, i) => {const open = revealed.includes(myth.id); return <article className={`myth-card ${open ? 'is-open' : ''}`} key={myth.id}>
      <div className="myth-card-top"><span>CLAIM / {String(i+1).padStart(2,'0')}</span><span className="myth-mark">{open ? '✓' : '?'}</span></div><h3>{myth.claim}</h3>
      {open && <div className="myth-answer"><div className="verdict">THE VERDICT <strong>{myth.verdict}</strong></div><p>{myth.answer}</p><RefLinks refs={myth.refs} compact /></div>}
      <button className="reveal-button" onClick={() => toggle(myth.id)} aria-expanded={open}>{open ? 'Hide the explanation' : 'Reveal the evidence'} <Icon name={open ? 'chevron' : 'arrow'} size={18}/></button>
    </article>;})}</div>
    <p className="under-note">A myth can be false without making people who believed it foolish. Good science updates what we think.</p>
  </section>;
}

function Marketing() {
  const [active, setActive] = useState(marketing[0].id);
  const [decoded, setDecoded] = useState(false);
  const item = marketing.find(m => m.id === active);
  function choose(id) {setActive(id); setDecoded(false);}
  return <section className="section workspace-section">
    <SectionHeading kicker="05 / MEDIA LITERACY" heading="Decode the pitch." sub="Alcohol doesn't just appear on a shelf. It appears in stories about who we are. Explore the persuasive techniques, then uncover what's doing the work." />
    <div className="marketing-tabs" role="group" aria-label="Advertising scenarios">{marketing.map(m => <button key={m.id} className={m.id === active ? 'active' : ''} onClick={() => choose(m.id)} aria-pressed={m.id === active}>{m.tag}</button>)}</div>
    <div className="ad-lab">
      <div className={`imagined-ad imagined-${item.id}`}><div className="fake-ad-label">FICTIONAL EXAMPLE · NOT AN ACTUAL AD</div><div className="abstract-art"><div className="abstract-ring"/><div className="abstract-object"/><div className="abstract-stars">✦ ✧ ✦</div></div><span className="ad-pitch-kicker">THE MESSAGE</span><h3>{item.headline}</h3><p>{item.pitch}</p></div>
      <div className="decoder-panel"><div className="eyebrow">THE DECODER / {item.tag}</div><h3>What is this story selling besides a product?</h3><p>Look for the emotion, social cue, or assumption in the scene. Then reveal one way to read it critically.</p>
        <button className="button button-primary" onClick={() => setDecoded(!decoded)} aria-expanded={decoded}>{decoded ? 'Reset the decoder' : 'Decode the message'} <Icon name={decoded ? 'chevron' : 'arrow'} size={17}/></button>
        {decoded && <div className="decode-result"><span>TECHNIQUE IDENTIFIED</span><h4>{item.cue}</h4><p>{item.explanation}</p><RefLinks refs={item.refs}/></div>}
      </div>
    </div>
    <p className="under-note">Examples are original, fictional illustrations. They are not accusations about a named brand or evidence that any specific advertisement caused someone to drink.</p>
  </section>;
}

function Support() {
  return <section className="section workspace-section">
    <SectionHeading kicker="06 / PEOPLE FIRST" heading="Help without a lecture." sub="Choosing to drink, choosing not to drink, cutting back, seeking support: people deserve dignity at every stage." />
    <div className="support-banner"><div className="support-icon"><Icon name="heart" size={30}/></div><div><h3>Important: heavy alcohol withdrawal can be dangerous.</h3><p>If someone has been drinking heavily for a long time, suddenly stopping may cause serious withdrawal, including seizures. Talk with a qualified clinician about a safe plan. Severe confusion, seizures or other emergency symptoms need immediate emergency care.</p><RefLinks refs={['niaaaWithdrawal']}/></div></div>
    <div className="support-grid"><article><span className="support-index">01 / FIND CARE</span><h3>Find treatment that fits.</h3><p>FindTreatment.gov offers a confidential U.S. treatment locator for mental health and substance use care.</p><a className="support-link" href="https://findtreatment.gov/" target="_blank" rel="noopener noreferrer">Explore FindTreatment.gov <Icon name="external" size={17}/></a></article>
    <article><span className="support-index">02 / TALK TO SOMEONE</span><h3>You don't have to figure it out alone.</h3><p>SAMHSA's National Helpline provides free, confidential treatment referral and information in the United States, 24/7.</p><a className="support-link" href="tel:18006624357">1-800-662-HELP (4357) <Icon name="arrow" size={17}/></a><RefLinks refs={['samhsa']} compact/></article>
    <article><span className="support-index">03 / YOUR OWN PACE</span><h3>Want to learn first? That's valid.</h3><p>Reliable information is useful whether you're worried about yourself, supporting someone else, or simply curious. Nobody here gets a label.</p><a className="support-link" href="https://www.niaaa.nih.gov/" target="_blank" rel="noopener noreferrer">Explore NIAAA research <Icon name="external" size={17}/></a></article></div>
    <p className="under-note">U.S.-specific resources; elsewhere, contact local medical services. This site is educational, not a medical provider or crisis service.</p>
  </section>;
}

function Sources() {
  return <section className="section workspace-section">
    <SectionHeading kicker="07 / OPEN RECEIPTS" heading="The evidence ledger." sub="Nothing up our sleeves. Every comparison and learning card links to its supporting sources. Here is the reference shelf behind the experience." />
    <div className="ledger-header"><div><span className="eyebrow">SOURCE REVIEW</span><strong>{reviewedOn}</strong></div><div><span className="eyebrow">REFERENCE COUNT</span><strong>{Object.keys(sources).length} sources</strong></div><div><span className="eyebrow">STATUS</span><strong className="status-valid"><span className="live-dot"/> Linked and cited</strong></div></div>
    <div className="source-list">{Object.entries(sources).map(([id, source], i) => <article className="source-item" key={id}><div className="source-n">{String(i + 1).padStart(2,'0')}</div><div className="source-info"><div className="source-org">{source.org}</div><h3>{source.title}</h3><p>{source.note}</p><span className="source-date">Published or last dated: {source.published}</span></div><a href={source.url} target="_blank" rel="noopener noreferrer" className="source-open" aria-label={`Read ${source.title} in a new tab`}><Icon name="external" size={19}/></a></article>)}</div>
    <div className="method-card"><div className="eyebrow">HOW WE WORK</div><h3>The rules of the lab</h3><ul>{principles.map(p => <li key={p}><Icon name="check" size={18}/>{p}</li>)}</ul><p>Last checked means our editorial review date, not an independently verified medical certification. Source pages may update. If you find an issue, open a GitHub issue so the public record can be corrected.</p><a href="https://github.com/MichaelWave369/BeyondtheBuzz/issues/new" target="_blank" rel="noopener noreferrer" className="support-link">Suggest a correction <Icon name="external" size={17}/></a></div>
  </section>;
}

export default function App() {
  const [page, setPage] = useState('explore');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (id) => {setPage(id); setMenuOpen(false); window.scrollTo({top: 0, behavior: 'instant'});};
  return <div className="site-shell">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <div className="top-ticker"><span>◈</span> PUBLIC KNOWLEDGE TRANSMISSION <span>•</span> NO SALES PITCH <span>•</span> NO SHAME <span>•</span> JUST THE RECEIPTS <span>◈</span></div>
    <header className="header"><div className="header-inner"><button className="brand" onClick={() => navigate('explore')} aria-label="Beyond the Buzz home"><span className="brand-icon">B<span>✳</span>B</span><span className="brand-name">BEYOND<span>THE BUZZ</span></span></button>
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">{nav.map(item => <button key={item.id} onClick={() => navigate(item.id)} className={page === item.id ? 'selected' : ''} aria-current={page === item.id ? 'page' : undefined}>{item.label}</button>)}</nav>
      <div className="header-right"><span className="edition">EDITION <strong>001</strong></span><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}><Icon name={menuOpen ? 'x' : 'menu'}/></button></div>
    </div></header>
    <main id="main-content" tabIndex="-1" className="main"><div className="content-wrap">
      {page === 'explore' && <Explore navigate={navigate} />}
      {page === 'compare' && <Compare/>}
      {page === 'body' && <Body/>}
      {page === 'myths' && <Myths/>}
      {page === 'marketing' && <Marketing/>}
      {page === 'support' && <Support/>}
      {page === 'sources' && <Sources/>}
    </div></main>
    <footer className="footer"><div className="footer-inner"><div className="footer-brand"><div className="eyebrow">BEYOND THE BUZZ / VOL. 001</div><strong>Question the noise.<br/>Keep the humanity.</strong></div><div className="footer-meta"><p>Evidence Above Agenda. Education Without Shame.</p><p>Independent, open source and informational. Not medical advice.</p><p>Last source review: {reviewedOn}</p></div><a href="https://github.com/MichaelWave369/BeyondtheBuzz" target="_blank" rel="noopener noreferrer">Open-source on GitHub <Icon name="external" size={17}/></a></div></footer>
  </div>;
}