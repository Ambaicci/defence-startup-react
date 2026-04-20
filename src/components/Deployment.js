function Deployment() {
  return (
    <section style={{background:'var(--dark)'}}>
      <span className="section-tag">Strategic Deployment</span>
      <h2 className="section-title">Three-tier national defense grid.</h2>
      <p className="section-body">A single EYE at 1,000m altitude can monitor and defend approximately 2,800 km². To protect a nation, ANGEL'S EYE uses a layered defense-in-depth architecture.</p>
      
      <div className="deployment-grid">
        <div className="deployment-card tier1">
          <div className="deployment-badge">TIER 1</div>
          <h3>Forward Zone</h3>
          <p>100–200 km from border. Primary detection and first-strike intercept. 30+ minute engagement window. Full payload of 12 interceptors.</p>
          <div className="deployment-stat">Role: <strong>Thin the swarm</strong></div>
        </div>
        <div className="deployment-card tier2">
          <div className="deployment-badge">TIER 2</div>
          <h3>Buffer Zone</h3>
          <p>50–100 km from border. Secondary engagement layer + Mesh Neural Network relay. Engages threats that bypass Tier 1.</p>
          <div className="deployment-stat">Role: <strong>Network backbone</strong></div>
        </div>
        <div className="deployment-card tier3">
          <div className="deployment-badge">TIER 3</div>
          <h3>City Perimeter</h3>
          <p>Urban centers &amp; critical infrastructure. Final defense line. Coordinates with existing SHORAD systems.</p>
          <div className="deployment-stat">Role: <strong>Fail-safe defense</strong></div>
        </div>
      </div>

      <div className="ukraine-case">
        <span className="section-tag">Case Study</span>
        <h3 style={{marginBottom:'1rem'}}>Ukraine — Required Defense Architecture</h3>
        <div className="ukraine-stats">
          <div className="ukraine-stat"><div className="ukraine-num">70</div><div className="ukraine-label">EYE Units Required</div></div>
          <div className="ukraine-stat"><div className="ukraine-num">$17.5M</div><div className="ukraine-label">Total Capital Cost</div></div>
          <div className="ukraine-stat"><div className="ukraine-num red">$1B+</div><div className="ukraine-label">Single Patriot Battery</div></div>
          <div className="ukraine-stat"><div className="ukraine-num teal">50x</div><div className="ukraine-label">More Coverage</div></div>
        </div>
        <p style={{fontSize:'11px',color:'var(--mgray)',marginTop:'1rem',textAlign:'center'}}>✦ ANGEL'S EYE provides 50x more coverage per dollar than traditional systems</p>
      </div>
    </section>
  );
}
export default Deployment;
