import './goodlight.css';
import { useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';

const projects = [
  { id: '01', name: 'Sunday Market', type: 'A better kind of everyday', discipline: 'Brand world · Campaign', color: 'market', mark: 'SUNDAY', note: 'GOOD THINGS, GROWN CLOSE' },
  { id: '02', name: 'Morrow House', type: 'Room to become', discipline: 'Identity · Digital', color: 'morrow', mark: 'MORROW', note: 'MAKE SPACE FOR WHAT’S NEXT' },
  { id: '03', name: 'Palmwine Radio', type: 'A frequency of our own', discipline: 'Strategy · Art direction', color: 'radio', mark: 'PWR', note: 'TUNE IN. FIND YOUR PEOPLE.' },
];

function Logo({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#top" aria-label="Goodlight Studio home" data-testid="link-home">
    <span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span>
    <span>goodlight<span className="brand-dot">.</span><small>STUDIO · LAGOS</small></span>
  </a>;
}

function ProjectArtwork({ project }: { project: typeof projects[number] }) {
  return <div className={`artwork ${project.color} grain`} aria-label={`Illustrative identity artwork for fictional concept ${project.name}`} role="img">
    {project.color === 'market' && <>
      <div className="market-sun" /><div className="market-orbit orbit-one" /><div className="market-orbit orbit-two" />
      <div className="market-word">{project.mark}</div><div className="market-stamp">GOOD THINGS<br />GROWN CLOSE</div>
      <div className="market-bag"><span>SMALL<br />BATCH<br />BIG JOY</span></div>
      <div className="art-index">01 / 03</div>
    </>}
    {project.color === 'morrow' && <>
      <div className="morrow-crescent" /><div className="morrow-disc" /><div className="morrow-word">{project.mark}</div>
      <div className="morrow-caption">A PLACE TO<br />BEGIN AGAIN.</div><div className="morrow-lines" />
      <div className="art-index">02 / 03</div>
    </>}
    {project.color === 'radio' && <>
      <div className="radio-sun" /><div className="radio-ring r-one" /><div className="radio-ring r-two" /><div className="radio-ring r-three" />
      <div className="radio-word">{project.mark}</div><div className="radio-tag">106.8 FM<br />LAGOS, ALWAYS</div>
      <div className="radio-star" aria-hidden="true" /><div className="art-index">03 / 03</div>
    </>}
  </div>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [['Work', '#work'], ['What we do', '#services'], ['Our way', '#approach'], ['Studio notes', '#studio']];
  return <div className="site-shell" id="top">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <Logo />
      <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
        {navItems.map(([label, href]) => <a className="nav-link" href={href} key={href} onClick={closeMenu} data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`}>{label}</a>)}
        <a className="nav-contact" href="mailto:hello@goodlight.studio" onClick={closeMenu} data-testid="link-nav-contact">Let’s talk <ArrowUpRight size={15} /></a>
      </nav>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-menu">
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-topline mono reveal"><span>INDEPENDENT CREATIVE STUDIO</span><span>LAGOS, NIGERIA · EVERYWHERE</span></div>
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow reveal">Good ideas travel. The best ones know where they’re from.</p>
            <h1 className="serif reveal delay-1" id="hero-title">A little<br />more <em>light.</em></h1>
            <p className="hero-description reveal delay-2">We turn local perspective into brands, stories and experiences with a point of view — and room to go places.</p>
            <div className="hero-actions reveal delay-3">
              <a className="button-link button-dark" href="#work" data-testid="link-explore-work">Explore our work <ArrowDownRight size={17} /></a>
              <span className="hero-note mono">SMALL STUDIO. OPEN HORIZON.</span>
            </div>
          </div>
          <div className="hero-visual reveal delay-2" aria-label="Abstract sunrise artwork inspired by the Lagos lagoon" role="img">
            <div className="hero-art-label mono">06°27' N<br />03°23' E</div>
            <div className="hero-sun" />
            <div className="hero-horizon" />
            <div className="hero-water water-a" /><div className="hero-water water-b" /><div className="hero-water water-c" />
            <div className="hero-arch"><span>GOOD<br />LIGHT</span></div>
            <div className="hero-visual-caption mono">THE CITY NEVER<br />RUNS OUT OF IDEAS.</div>
            <div className="hero-rotating"><svg viewBox="0 0 100 100" aria-hidden="true"><defs><path id="circle-text" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" /></defs><text><textPath href="#circle-text">GOOD LIGHT · GOOD LIGHT · GOOD LIGHT · </textPath></text></svg><ArrowDown size={18} /></div>
          </div>
        </div>
        <a className="scroll-cue mono" href="#work"><span>SCROLL A LITTLE</span><ArrowDown size={14} /></a>
      </section>

      <section className="work section-pad" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div><p className="eyebrow mono">01 — SELECTED WORLDS</p><h2 className="serif" id="work-title">Ideas with<br />somewhere to go<span className="dot">.</span></h2></div>
          <p className="section-aside">A few imagined partnerships, made real enough to feel. Each one starts with a true thing and takes it somewhere unexpected.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.id} data-testid={`card-project-${project.id}`}>
            <ProjectArtwork project={project} />
            <div className="project-meta"><div><p className="project-discipline mono">{project.discipline}</p><h3>{project.name}</h3><p className="project-type">{project.type}</p></div><span className="project-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span></div>
          </article>)}
        </div>
        <p className="fiction-note mono">CONCEPT PROJECTS · CREATED FOR GOODLIGHT STUDIO</p>
      </section>

      <section className="manifesto grain" id="approach" aria-labelledby="manifesto-title">
        <div className="manifesto-inner">
          <p className="eyebrow mono">02 — OUR POINT OF VIEW</p>
          <h2 className="serif" id="manifesto-title">We don’t need to<br />look elsewhere to<br />see <em>what’s next.</em></h2>
          <div className="manifesto-foot"><span className="manifesto-symbol" aria-hidden="true" /><p>It’s already happening here. In the way we make a plan, change it, make it better. In all the things that only make sense when you’re paying attention.</p><span className="manifesto-label mono">LAGOS IS NOT<br />A FOOTNOTE.</span></div>
        </div>
        <div className="manifesto-side mono">LOCAL IS A<br />POINT OF VIEW<br />NOT A LIMIT.</div>
      </section>

      <section className="services section-pad" id="services" aria-labelledby="services-title">
        <div className="section-heading services-heading">
          <div><p className="eyebrow mono">03 — THE WORK WE DO</p><h2 className="serif" id="services-title">From first thought<br />to full feeling<span className="dot">.</span></h2></div>
          <p className="section-aside">We bring clarity to the complicated, and character to the things people see, hear and keep.</p>
        </div>
        <div className="service-list">
          {[
            ['01', 'Find the story', 'Brand strategy', 'Positioning, naming, voice and the good question that gets everything moving.'],
            ['02', 'Give it a shape', 'Identity & design', 'Visual systems with a little life in them. Built for real use, not just the launch.'],
            ['03', 'Put it out there', 'Campaigns & culture', 'Ideas with a pulse. Stories that meet people where they are — then take them further.'],
            ['04', 'Make it useful', 'Digital & experience', 'Thoughtful digital places and real-world moments people want to spend time in.'],
          ].map(([number, title, tag, body]) => <article className="service-row" key={number} data-testid={`service-${number}`}>
            <span className="service-number mono">{number}</span><h3 className="serif">{title}</h3><span className="service-tag">{tag}</span><p>{body}</p><ArrowUpRight className="service-arrow" size={19} aria-hidden="true" />
          </article>)}
        </div>
      </section>

      <div className="ticker" aria-label="Good ideas are everywhere">
        <div className="marquee-track" aria-hidden="true">{Array.from({ length: 4 }, (_, i) => <span key={i}>GOOD IDEAS ARE EVERYWHERE <b>·</b> WE JUST LOOK CLOSER <b>·</b> GOOD IDEAS ARE EVERYWHERE <b>·</b></span>)}</div>
      </div>

      <section className="studio section-pad" id="studio" aria-labelledby="studio-title">
        <div className="studio-image" role="img" aria-label="A graphic composition of Lagos rooftop colors and shapes">
          <div className="studio-image-sun" /><div className="studio-building building-a" /><div className="studio-building building-b" /><div className="studio-building building-c" />
          <span className="studio-img-text serif">Made of<br />many things.</span><span className="studio-image-caption mono">A CITY THAT KEEPS<br />MAKING ITSELF.</span>
        </div>
        <div className="studio-copy">
          <p className="eyebrow mono">04 — A STUDIO IN LAGOS</p>
          <h2 className="serif" id="studio-title">Close to the<br />ground. Open<br />to the <em>world.</em></h2>
          <p>Goodlight is an independent creative studio in Lagos, Nigeria. We’re a small, curious team that likes a big question, a clear answer and a reason to care.</p>
          <p>We work with founders and teams ready to make something that means something — right here, and out there.</p>
          <a className="text-link" href="mailto:hello@goodlight.studio?subject=Hello%20Goodlight">A good place to start <ArrowRight size={17} /></a>
          <div className="studio-location mono"><span>06°27' N / 03°23' E</span><span>LOCAL TIME, ALWAYS</span></div>
        </div>
      </section>

      <section className="quote-section" aria-label="Studio belief">
        <p className="eyebrow mono">A NOTE TO TAKE WITH YOU</p>
        <blockquote className="serif">“The future has an accent.<br />Let it sound like <em>us.</em>”</blockquote>
        <span className="quote-mark mono">GOODLIGHT STUDIO · LAGOS</span>
      </section>

      <section className="contact grain" id="contact" aria-labelledby="contact-title">
        <div className="contact-topline mono"><span>HAVE A GOOD ONE IN MIND?</span><span>05 — YOUR MOVE</span></div>
        <h2 className="serif" id="contact-title">Let’s make<br />a little <em>light.</em></h2>
        <a className="contact-email" href="mailto:hello@goodlight.studio" data-testid="link-email">hello@goodlight.studio <ArrowUpRight size={24} /></a>
        <div className="contact-bottom"><span className="mono">GOOD THINGS START WITH A HELLO.</span><Logo light /></div>
      </section>
    </main>
    <footer className="site-footer"><span>© {new Date().getFullYear()} GOODLIGHT STUDIO</span><span>INDEPENDENT BY NATURE. LAGOS BY CHOICE.</span><a href="#top">BACK TO THE TOP <ArrowUpRight size={13} /></a></footer>
  </div>;
}

export default Home;
