function Team() {
  return (
    <section id="team">
      <span className="section-tag">Leadership</span>
      <h2 className="section-title">The team building the future of defense.</h2>
      <p className="section-body">Aerospace, AI, and military logistics expertise — united by a single thesis: the defender should win on cost.</p>
      <div className="team-grid">
        <div className="team-card"><div className="team-avatar">✈️</div><div className="team-name">CEO</div><div className="team-title">Aerospace Engineer</div><div className="team-bio">15+ years UAV systems, defense procurement. Led aerospace programs from concept to deployment.</div></div>
        <div className="team-card"><div className="team-avatar">🧠</div><div className="team-name">CTO</div><div className="team-title">PhD, Computer Vision</div><div className="team-bio">Expert in robotics & AI. Lead architect of AESAI sensor fusion and swarm autonomy.</div></div>
        <div className="team-card"><div className="team-avatar">📦</div><div className="team-name">Head of Operations</div><div className="team-title">Military Logistics Officer</div><div className="team-bio">Former officer with frontline deployment and strategic supply chain experience.</div></div>
        <div className="team-card"><div className="team-avatar">🔧</div><div className="team-name">Lead Hardware Eng.</div><div className="team-title">Composite Systems Expert</div><div className="team-bio">Specialist in lightweight airframes and rapid-reload swarm systems.</div></div>
      </div>
      <div className="disclaimer-badge">⚡ Advisory board forming — former flag officers, defense technologists. Inquiries welcome.</div>
    </section>
  );
}
export default Team;
