function StatBar() {
  return (
    <div className="stat-bar">
      <div className="stat-item">
        <div className="stat-num">$3k</div>
        <div className="stat-label">Target intercept cost</div>
      </div>
      <div className="stat-item">
        <div className="stat-num red">$3M+</div>
        <div className="stat-label">Patriot per intercept</div>
      </div>
      <div className="stat-item">
        <div className="stat-num amber">10:1</div>
        <div className="stat-label">Defender cost advantage</div>
      </div>
      <div className="stat-item">
        <div className="stat-num">12+</div>
        <div className="stat-label">Simultaneous intercepts</div>
      </div>
    </div>
  );
}

export default StatBar;
