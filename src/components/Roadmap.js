function Roadmap() {
  return (
    <section id="roadmap" style={{background:'var(--dark)'}}>
      <span className="section-tag">Execution plan</span>
      <h2 className="section-title">18 months to first live intercept.</h2>
      <p className="section-body">Funded by $3M seed. Clear milestones, accountable deliverables.</p>
      <div className="roadmap-grid">
        <div className="roadmap-item"><div className="roadmap-phase">Months 0-3</div><div className="roadmap-desc">ITAR registration · Provisional patents · Core team assembly</div></div>
        <div className="roadmap-item"><div className="roadmap-phase">Months 3-12</div><div className="roadmap-desc">AESAI software dev · 50k+ signature database training · Simulation validation</div></div>
        <div className="roadmap-item"><div className="roadmap-phase">Months 12-18</div><div className="roadmap-desc">EYE v1 build · Hardware-in-the-loop · First live intercept demo (Q4 2026)</div></div>
        <div className="roadmap-item"><div className="roadmap-phase">Months 18-24</div><div className="roadmap-desc">EYE v2 sensor suite · Field trials · First contract discussions</div></div>
      </div>
    </section>
  );
}
export default Roadmap;
