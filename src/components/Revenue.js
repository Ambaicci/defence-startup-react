function Revenue() {
  return (
    <section>
      <span className="section-tag">Business Model</span>
      <h2 className="section-title">Three revenue streams. Margins that compound.</h2>
      <p className="section-body">ANGEL'S EYE is designed for scalable, high-margin growth across hardware, software, and services.</p>
      
      <div className="revenue-grid">
        <div className="revenue-card">
          <div className="revenue-icon">🏭</div>
          <h3>Hardware Sales</h3>
          <p className="revenue-desc">Direct sales of EYE units ($150k–250k/unit) and high-volume Interceptor reload packs ($40k/pack for 12 drones).</p>
          <div className="revenue-margin">Gross Margin: <strong>35–50%</strong></div>
        </div>
        <div className="revenue-card">
          <div className="revenue-icon">🧠</div>
          <h3>AESAI Licensing</h3>
          <p className="revenue-desc">Software-only licensing for third-party hardware integration. Royalty-based model per deployed unit for rapid global scaling.</p>
          <div className="revenue-margin">Gross Margin: <strong>80–90%</strong></div>
        </div>
        <div className="revenue-card">
          <div className="revenue-icon">🔧</div>
          <h3>Maintenance &amp; SLA</h3>
          <p className="revenue-desc">Annual service contracts, software updates, and specialized operator training programs ensuring long-term client retention.</p>
          <div className="revenue-margin">Gross Margin: <strong>60–70%</strong></div>
        </div>
      </div>

      <div className="investor-metrics">
        <span className="section-tag">Market Opportunity</span>
        <div className="metrics-grid">
          <div className="metric"><div className="metric-num">$2.1B</div><div className="metric-label">C-UAS Market 2024</div></div>
          <div className="metric"><div className="metric-num teal">$7B+</div><div className="metric-label">Projected 2030</div></div>
          <div className="metric"><div className="metric-num amber">22%</div><div className="metric-label">Annual Growth (CAGR)</div></div>
          <div className="metric"><div className="metric-num">32+</div><div className="metric-label">NATO Nations</div></div>
        </div>
        <p className="metrics-note">✦ ANGEL'S EYE targets the fastest-growing segment of the C-UAS market: affordable, simultaneous swarm interception.</p>
      </div>
    </section>
  );
}
export default Revenue;
