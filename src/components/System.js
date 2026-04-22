import BattlefieldSimulator from './BattlefieldSimulator';

function System() {
  return (
    <section className="system" id="system">
      <span className="section-tag">The system</span>
      <h2 className="section-title">Two vehicles. One AI. Unlimited potential.</h2>
      <p className="section-body">The EYE mother drone carries, deploys, and guides up to 12 interceptors — each designed for a single, precise engagement.</p>
      
      <BattlefieldSimulator />
      
      <div className="system-cards">
        <div className="sys-card"><div className="sys-card-icon" style={{background:'rgba(26,74,140,0.2)'}}>🛩</div><h3>The EYE — Mother Drone</h3><p>Fixed-wing hybrid VTOL. 6-8 hour loiter. Carries 12 interceptors in internal bay. AESAI compute onboard.</p></div>
        <div className="sys-card"><div className="sys-card-icon" style={{background:'rgba(0,168,150,0.15)'}}>🎯</div><h3>The Interceptor — Baby Drone</h3><p>Expendable kamikaze interceptor. Folding wings deploy in 0.3s. Optical terminal seeker — jam-proof final 50m.</p></div>
      </div>
    </section>
  );
}
export default System;
