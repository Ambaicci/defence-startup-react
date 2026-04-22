function Competitive() {
  return (
    <section>
      <span className="section-tag">Market position</span>
      <h2 className="section-title">No one else owns this intersection.</h2>
      <p className="section-body">Low cost × Swarm capable × Air-mobile. ANGEL'S EYE is the only system in development combining all three.</p>
      <table className="competitive-table">
        <thead><tr><th>System</th><th>Intercept cost</th><th>Mobility</th><th>Swarm capacity</th><th>Cost advantage?</th></tr></thead>
        <tbody>
          <tr><td>Patriot PAC-3</td><td>$3,000,000+</td><td>Fixed</td><td>Limited</td><td>NO (100:1 loss)</td></tr>
          <tr><td>Iron Dome</td><td>$50k-100k</td><td>Fixed</td><td>Moderate</td><td>NO (2-5:1 loss)</td></tr>
          <tr><td>ANGEL'S EYE (in dev)</td><td>$2,000-5,000</td><td>Full Air</td><td>12+ Parallel</td><td className="winner">YES (10:1 win)</td></tr>
        </tbody>
      </table>
    </section>
  );
}
export default Competitive;
