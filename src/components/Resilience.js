function Resilience() {
  return (
    <section style={{background:'var(--dark)'}}>
      <span className="section-tag">Engineering for Combat</span>
      <h2 className="section-title">Failure modes &amp; resilience.</h2>
      <p className="section-body">ANGEL'S EYE is not designed for ideal conditions — it's engineered for the chaos of real warfare.</p>
      
      <div className="resilience-grid">
        <div className="resilience-card">
          <div className="resilience-icon">📡</div>
          <h3>Sensor Failure</h3>
          <p>Bayesian fusion gracefully degrades. If radar is jammed, AESAI relies on acoustic + EO/IR. If two sensors fail, system alerts operator but continues tracking.</p>
          <div className="resilience-outcome">→ Mission continues with reduced confidence</div>
        </div>
        <div className="resilience-card">
          <div className="resilience-icon">📶</div>
          <h3>Communication Breakdown</h3>
          <p>Interceptors continue on last commanded trajectory via INS. Terminal optical flow guidance requires no datalink. Mesh network reroutes around lost nodes.</p>
          <div className="resilience-outcome">→ Intercept completes autonomously</div>
        </div>
        <div className="resilience-card">
          <div className="resilience-icon">🎯</div>
          <h3>Interceptor Miss</h3>
          <p>AESAI immediately re-evaluates. Reserve interceptors are assigned to unneutralized targets. Multi-EYE network provides cross-coverage.</p>
          <div className="resilience-outcome">→ Redundant engagement capability</div>
        </div>
        <div className="resilience-card">
          <div className="resilience-icon">⚠️</div>
          <h3>System Overload</h3>
          <p>Prioritize engine focuses on highest-value threats when interceptors are scarce. Provides real-time targeting data to auxiliary defense systems.</p>
          <div className="resilience-outcome">→ Force multiplier under saturation</div>
        </div>
      </div>

      <div className="ethics-note">
        <span className="section-tag">Ethical Framework</span>
        <p><strong>Human-in-the-Loop (HITL) / Human-on-the-Loop (HOTL):</strong> For routine engagements, AESAI operates autonomously with human monitoring. For critical or ambiguous situations, human operators retain final authorization. Proportionality is central to all engagement decisions.</p>
      </div>
    </section>
  );
}
export default Resilience;
