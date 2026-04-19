function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="radar-ring" style={{width:'700px',height:'700px',top:'-200px',right:'-200px',animationDelay:'0s'}}></div>
        <div className="radar-ring" style={{width:'500px',height:'500px',top:'-100px',right:'-100px',animationDelay:'2s'}}></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <div className="badge-dot"></div>
          <span className="badge-text">Seed Stage · Prototyping Q4 2026</span>
          <span className="stage-tag">TRL 3-4</span>
        </div>
        <h1>The defender<br />finally wins<br /><em>on cost.</em></h1>
        <p className="hero-sub">ANGEL'S EYE is building the first economically sustainable counter-swarm defense system. AI-guided interceptors from a mobile mother drone — designed to make mass drone attacks economically irrational.</p>
        <div className="hero-actions">
          <a className="btn-primary" href="#system">View the system →</a>
          <a className="btn-ghost" href="#contact">Investor briefing</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        Seed funded · Patents pending
      </div>
    </section>
  );
}

export default Hero;
