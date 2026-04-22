function Hero() {
  return (
    <section className="hero-v4">
      {/* Full-bleed background with image */}
      <div className="hero-v4-bg">
        <div className="hero-v4-image"></div>
        <div className="hero-v4-overlay"></div>
        <div className="hero-v4-radar-bg"></div>
      </div>
      
      <div className="hero-v4-container">
        <div className="hero-v4-badge">
          <span className="hero-v4-badge-dot"></span>
          ANGEL'S EYE SYSTEMS — COUNTER-SWARM DIVISION
        </div>
        
        <h1 className="hero-v4-title">
          Reversing the<br />
          <span className="hero-v4-title-accent">economics of aerial warfare.</span>
        </h1>
        
        <div className="hero-v4-stats-row">
          <div className="hero-v4-stat-block">
            <div className="hero-v4-stat-number">100:1</div>
            <div className="hero-v4-stat-line"></div>
            <div className="hero-v4-stat-label">Traditional defender deficit</div>
          </div>
          <div className="hero-v4-stat-arrow">→</div>
          <div className="hero-v4-stat-block">
            <div className="hero-v4-stat-number highlight">10:1</div>
            <div className="hero-v4-stat-line highlight"></div>
            <div className="hero-v4-stat-label">ANGEL'S EYE advantage</div>
          </div>
        </div>
        
        <p className="hero-v4-description">
          The Shahed-136 costs $30,000. A Patriot interceptor costs $3,000,000. 
          This 100:1 ratio is strategically unsustainable. ANGEL'S EYE reverses it.
        </p>
        
        <div className="hero-v4-actions">
          <a className="hero-v4-btn-primary" href="#system">
            View capability
            <span className="hero-v4-btn-arrow">→</span>
          </a>
          <a className="hero-v4-btn-secondary" href="#contact">
            Investor relations
          </a>
        </div>
        
        <div className="hero-v4-meta">
          <div className="hero-v4-meta-item">
            <span>STATUS</span>
            <strong>Active development · TRL 3-4</strong>
          </div>
          <div className="hero-v4-meta-item">
            <span>PROTECTION</span>
            <strong>Patents pending (US/EU) · ITAR</strong>
          </div>
          <div className="hero-v4-meta-item">
            <span>FUNDING</span>
            <strong>$3M seed · Open round</strong>
          </div>
        </div>
      </div>
      
      <div className="hero-v4-scroll">
        <span>SCROLL</span>
        <div className="hero-v4-scroll-line"></div>
      </div>
    </section>
  );
}
export default Hero;
