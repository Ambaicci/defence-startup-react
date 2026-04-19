import Scrollspy from 'react-scrollspy';

function Navbar() {
  return (
    <nav>
      <a className="logo" href="#">
        <div className="logo-mark">AE</div>
        <div>
          <span className="logo-text">ANGEL'S EYE</span>
          <span className="logo-sub">SYSTEMS INC.</span>
        </div>
      </a>
      <Scrollspy items={ ['', 'system', 'aesai', 'team', 'roadmap'] } currentClassName="active" className="nav-links" offset={-70}>
        <a href="#">Home</a>
        <a href="#system">System</a>
        <a href="#aesai">AESAI</a>
        <a href="#team">Team</a>
        <a href="#roadmap">Roadmap</a>
      </Scrollspy>
      <a className="nav-cta" href="#contact">Investor →</a>
    </nav>
  );
}

export default Navbar;
