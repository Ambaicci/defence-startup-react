import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firm: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // In production, replace with actual API endpoint
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', firm: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section className="contact-form-section" id="contact">
      <div className="contact-form-container">
        <div className="contact-form-info">
          <span className="section-tag">Investor Relations</span>
          <h2>Request the confidential thesis.</h2>
          <p>Full technical and financial documentation available under NDA. Fill out the form and we'll respond within 24 hours.</p>
          <div className="contact-direct">
            <p>Or reach us directly:</p>
            <a href="mailto:investors@angelseyesystems.com">investors@angelseyesystems.com</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="text" name="firm" placeholder="Firm / Organization" value={formData.firm} onChange={handleChange} required />
          <textarea name="message" placeholder="Message (optional)" rows="4" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className="btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Sent' : 'Request Access'}
          </button>
          {status === 'sent' && <p className="form-success">Thank you. We'll respond within 24 hours.</p>}
        </form>
      </div>
    </section>
  );
}
export default ContactForm;
