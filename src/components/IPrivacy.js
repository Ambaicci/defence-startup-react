function IPrivacy() {
  return (
    <section style={{background:'var(--dark)'}}>
      <span className="section-tag">Defensibility</span>
      <h2 className="section-title">Four-layer IP moat.</h2>
      <p className="section-body">ANGEL'S EYE is protected by patents, trade secrets, trademarks, and export controls — creating a durable competitive advantage.</p>
      
      <div className="ip-grid">
        <div className="ip-card">
          <div className="ip-icon">📜</div>
          <h3>3 Core Patents</h3>
          <p>Swarm intercept method, multi-sensor fusion architecture, and folding interceptor bay design. Provisional filings complete in US and EU.</p>
          <div className="ip-status">Filed: Month 1</div>
        </div>
        <div className="ip-card">
          <div className="ip-icon">🔒</div>
          <h3>Trade Secrets</h3>
          <p>Proprietary CNN training dataset (50k+ signatures), Kalman filter tuning parameters, and optimized AESAI weights for edge processing.</p>
          <div className="ip-status">Continuous</div>
        </div>
        <div className="ip-card">
          <div className="ip-icon">™️</div>
          <h3>Trademarks</h3>
          <p>ANGEL'S EYE and AESAI registered in US, EU, UK, Ukraine, and Israel. Brand protection across key defense sectors.</p>
          <div className="ip-status">Registered</div>
        </div>
        <div className="ip-card">
          <div className="ip-icon">🛂</div>
          <h3>Export-Controlled</h3>
          <p>ITAR registered (DDTC). Dual-use controls in EU/UK provide additional regulatory defensibility and restricted technology access.</p>
          <div className="ip-status">In Process</div>
        </div>
      </div>

      <div className="ip-timeline">
        <span className="section-tag">IP Roadmap</span>
        <div className="timeline-items">
          <div className="timeline-item"><span className="timeline-month">Month 1</span><span>Provisional Patents + Trademarks</span></div>
          <div className="timeline-item"><span className="timeline-month">Month 6</span><span>Full Utility Patent Applications</span></div>
          <div className="timeline-item"><span className="timeline-month">Month 12</span><span>PCT International Filings</span></div>
          <div className="timeline-item"><span className="timeline-month">Ongoing</span><span>ITAR / DDTC Compliance Audits</span></div>
        </div>
      </div>
    </section>
  );
}
export default IPrivacy;
