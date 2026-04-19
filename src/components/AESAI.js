import { useState } from 'react';

function AESAI() {
  const [threatSpeed, setThreatSpeed] = useState(185);
  const [intSpeed, setIntSpeed] = useState(300);
  const [detRange, setDetRange] = useState(25);

  const closingSpeed = threatSpeed + intSpeed;
  const interceptTime = Math.round(detRange / (closingSpeed / 3.6));
  const distanceLeft = (detRange * 0.38).toFixed(1);

  return (
    <section className="aesai-sec" id="aesai">
      <span className="section-tag">AESAI — Autonomous Engagement AI</span>
      <h2 className="section-title">The brain that makes it work.</h2>
      <p className="section-body">Four-layer intelligence stack running on edge compute. Detects, classifies, assigns, and guides — faster than any human operator.</p>
      
      <div className="sensor-fusion">
        <div className="sensor"><div className="sensor-icon">📡</div><div className="sensor-name">FMCW Radar</div><div className="sensor-range">30 km · All weather</div></div>
        <div className="fusion-plus">+</div>
        <div className="sensor"><div className="sensor-icon">🎤</div><div className="sensor-name">Acoustic MEMS</div><div className="sensor-range">3-5 km · Engine signature</div></div>
        <div className="fusion-plus">+</div>
        <div className="sensor"><div className="sensor-icon">📷</div><div className="sensor-name">EO/IR Camera</div><div className="sensor-range">8-12 km · Visual IFF</div></div>
        <div className="fusion-plus">=</div>
        <div className="sensor"><div className="sensor-icon">🧠</div><div className="sensor-name">Bayesian Fusion</div><div className="sensor-range">2-of-3 · 90% confidence</div></div>
      </div>

      <div className="demo-wrap">
        <div className="demo-title">Intercept simulator · AESAI engagement model</div>
        <div className="demo-slider-row">
          <label>Threat speed (km/h)</label>
          <input type="range" min="100" max="400" value={threatSpeed} step="5" onChange={(e) => setThreatSpeed(Number(e.target.value))} />
          <span>{threatSpeed}</span>
        </div>
        <div className="demo-slider-row">
          <label>Interceptor speed (km/h)</label>
          <input type="range" min="150" max="450" value={intSpeed} step="10" onChange={(e) => setIntSpeed(Number(e.target.value))} />
          <span>{intSpeed}</span>
        </div>
        <div className="demo-slider-row">
          <label>Detection range (km)</label>
          <input type="range" min="5" max="40" value={detRange} step="1" onChange={(e) => setDetRange(Number(e.target.value))} />
          <span>{detRange}</span>
        </div>
        <div className="demo-result">
          <div className="demo-metric"><div className="demo-metric-val">{closingSpeed}</div><div className="demo-metric-lbl">Closing speed km/h</div></div>
          <div className="demo-metric"><div className="demo-metric-val">{interceptTime}</div><div className="demo-metric-lbl">Intercept time (sec)</div></div>
          <div className="demo-metric"><div className="demo-metric-val">{distanceLeft}</div><div className="demo-metric-lbl">km from target at intercept</div></div>
        </div>
        <p style={{fontSize:'10px',color:'var(--mgray)',textAlign:'center',marginTop:'1rem'}}>Simulated kinematics · Validated in high-fidelity environment</p>
      </div>
    </section>
  );
}
export default AESAI;
