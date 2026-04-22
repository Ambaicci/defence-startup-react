function StrategicCrisis() {
  return (
    <section className="problem" id="thesis">
      <span className="section-tag">The Strategic Crisis</span>
      <h2 className="section-title">The rise of asymmetric attrition.</h2>
      <div className="problem-grid">
        <div>
          <p className="section-body">The Shahed-136 exposed a structural weakness: traditional air defense was built for expensive threats. A $30,000 drone forces a $3,000,000 intercept. This 100:1 cost ratio creates an unsustainable economic burden on the defender.</p>
          <br />
          <p className="section-body" style={{fontSize:'0.85rem'}}>An adversary can bankrupt a nation's defense budget without ever hitting a high-value target — simply by forcing the expenditure of limited, expensive interceptors. This is not a tactical problem. It is a strategic vulnerability.</p>
          <br />
          <p className="section-body" style={{fontSize:'0.85rem', color:'var(--teal2)'}}><strong>ANGEL'S EYE Thesis:</strong> The solution to a cheap, autonomous, swarming threat is a cheaper, smarter, autonomous, swarming counter.</p>
        </div>
        <div className="cost-compare">
          <div className="cost-row"><span className="cost-label">Shahed-136 (Attacker)</span><div className="cost-bar-wrap"><div className="cost-bar" style={{width:'1%',background:'var(--red)'}}></div></div><span className="cost-value" style={{color:'var(--red)'}}>$20k–50k</span></div>
          <div className="cost-row"><span className="cost-label">Patriot PAC-3 (Defender)</span><div className="cost-bar-wrap"><div className="cost-bar" style={{width:'100%',background:'var(--red)'}}></div></div><span className="cost-value" style={{color:'var(--red)'}}>$3,000,000</span></div>
          <div className="cost-row ours"><span className="cost-label" style={{color:'var(--teal2)',fontWeight:'600'}}>ANGEL'S EYE Intercept</span><div className="cost-bar-wrap"><div className="cost-bar" style={{width:'0.12%',background:'var(--teal)'}}></div></div><span className="cost-value" style={{color:'var(--teal2)'}}>$2,000–5,000</span></div>
          <p style={{fontSize:'11px',color:'var(--mgray)',textAlign:'right',paddingTop:'8px'}}>✦ Economic ratio: 100:1 deficit → 1:10 advantage</p>
        </div>
      </div>
    </section>
  );
}
export default StrategicCrisis;
