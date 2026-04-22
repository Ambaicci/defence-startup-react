function Footer() {
  return (
    <>
      <section className="cta-block" id="contact">
        <h2>Join us in reversing the economics of aerial warfare.</h2>
        <p>ANGEL'S EYE Systems Inc. is accepting investor inquiries and strategic partnership discussions. Full confidential thesis available under NDA.</p>
        <div className="cta-pair">
          <a className="btn-primary" href="mailto:investors@angelseyesystems.com">Investor relations →</a>
          <a className="btn-ghost" href="mailto:partners@angelseyesystems.com">Strategic partnerships</a>
        </div>
        <p className="cta-note">ITAR registration in process · Provisional patents filed (US/EU) · $3M seed round open</p>
      </section>
      <footer>
        <div className="footer-grid">
          <div className="footer-brand"><div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'0.5rem'}}><div style={{width:'28px',height:'28px',border:'1.5px solid var(--teal)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',fontWeight:'700',color:'var(--teal)'}}>AE</div><span style={{fontWeight:'700',letterSpacing:'2px',fontSize:'13px'}}>ANGEL'S EYE</span></div><p>Autonomous swarm defense against low-cost drone threats. Powered by AESAI.</p><p style={{marginTop:'0.5rem',fontSize:'11px',color:'#3a4458'}}>Pre-prototype stage · TRL 3-4 · 2026</p></div>
          <div className="footer-col"><h4>System</h4><a href="#system">The EYE Platform</a><a href="#system">Interceptor</a><a href="#aesai">AESAI</a></div>
          <div className="footer-col"><h4>Company</h4><a href="#team">Team</a><a href="#roadmap">Roadmap</a><a href="#">IP & Patents (pending)</a></div>
          <div className="footer-col"><h4>Contact</h4><a href="mailto:investors@angelseyesystems.com">Investor relations</a><a href="mailto:partners@angelseyesystems.com">Strategic partners</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 ANGEL'S EYE Systems Inc. All rights reserved.</span><span>Provisional patents filed · ITAR registration pending · Confidential</span></div>
      </footer>
    </>
  );
}
export default Footer;
