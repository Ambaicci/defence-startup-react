function Problem() {
  return (
    <section className="problem" id="problem">
      <span className="section-tag">The problem</span>
      <h2 className="section-title">A $30,000 drone is bankrupting air defense.</h2>
      <div className="problem-grid">
        <div>
          <p className="section-body">The Shahed-136 exposed a structural weakness: traditional air defense was built for expensive threats. The math is catastrophic for defenders — until now.</p>
          <br />
          <p className="section-body" style={{fontSize:'0.85rem'}}>ANGEL'S EYE was designed from first principles to reverse the economic equation. We are not modifying existing systems. We are building the first purpose-built economic counter.</p>
        </div>
        <div className="cost-compare">
          <div className="cost-row"><span className="cost-label">Patriot PAC-3</span><div className="cost-bar-wrap"><div className="cost-bar" style={{width:'100%',background:'#dc3c3c'}}></div></div><span className="cost-value" style={{color:'#dc3c3c'}}>$3,000,000</span></div>
          <div className="cost-row"><span className="cost-label">Iron Dome</span><div className="cost-bar-wrap"><div className="cost-bar" style={{width:'2.5%',background:'#ffb932'}}></div></div><span className="cost-value" style={{color:'#ffb932'}}>$75,000</span></div>
          <div className="cost-row ours"><span className="cost-label" style={{color:'var(--teal2)',fontWeight:'600'}}>ANGEL'S EYE (target)</span><div className="cost-bar-wrap"><div className="cost-bar" style={{width:'0.12%',background:'var(--teal)'}}></div></div><span className="cost-value" style={{color:'var(--teal2)'}}>$2,000–5,000</span></div>
          <p style={{fontSize:'11px',color:'var(--mgray)',textAlign:'right',paddingTop:'8px'}}>✦ The only system where intercept costs less than the threat</p>
        </div>
      </div>
    </section>
  );
}
export default Problem;
