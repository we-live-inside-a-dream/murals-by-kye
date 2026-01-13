import { useState } from 'react';
import './styles/global.css';
import './styles/liquid-glass.css';
import './styles/animations.css';
import './ComingSoon.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:muralsbykye@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  return (
    <div className="coming-soon">
      {/* Animated Background */}
      <div className="coming-soon__bg">
        <div className="coming-soon__orb coming-soon__orb--1"></div>
        <div className="coming-soon__orb coming-soon__orb--2"></div>
        <div className="coming-soon__orb coming-soon__orb--3"></div>
      </div>

      {/* Content */}
      <main className="coming-soon__content">
        <div className="coming-soon__logo animate-fade-in-down">
          <span className="coming-soon__logo-text">Murals</span>
          <span className="coming-soon__logo-accent">by Kye</span>
        </div>

        <h1 className="coming-soon__title animate-fade-in-up stagger-1">
          Something <span className="text-accent">Beautiful</span><br />
          Is Coming
        </h1>

        <p className="coming-soon__subtitle animate-fade-in-up stagger-2">
          A new artistic journey awaits. Custom murals that transform
          spaces into unforgettable experiences.
        </p>

        <div className="coming-soon__divider animate-fade-in stagger-3"></div>

        {/* Phone Number */}
        <div className="coming-soon__phone animate-fade-in-up stagger-4">
          <span className="coming-soon__phone-label">Call or text</span>
          <a href="tel:+14038075986" className="coming-soon__phone-number">
            (403) 807-5986
          </a>
        </div>

        {/* Contact Form */}
        <div className="coming-soon__contact animate-fade-in-up stagger-5">
          {submitted ? (
            <div className="coming-soon__success">
              <div className="coming-soon__success-icon">✓</div>
              <p>Thank you! Your email client should open with your message.</p>
              <button
                className="glass-btn"
                onClick={() => setSubmitted(false)}
              >
                Send Another
              </button>
            </div>
          ) : (
            <>
              <p className="coming-soon__contact-label">Or send a message</p>
              <form className="coming-soon__form" onSubmit={handleSubmit}>
                <div className="coming-soon__form-row">
                  <input
                    type="text"
                    name="name"
                    className="glass-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Your name"
                  />
                  <input
                    type="email"
                    name="email"
                    className="glass-input"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label="Your email"
                  />
                </div>
                <textarea
                  name="message"
                  className="glass-input coming-soon__textarea"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-label="Your message"
                ></textarea>
                <button
                  type="submit"
                  className="glass-btn glass-btn--primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Opening...' : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </div>

        <div className="coming-soon__social animate-fade-in stagger-6">
          <span>Follow the journey</span>
          <div className="coming-soon__social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="coming-soon__social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="mailto:muralsbykye@gmail.com"
              className="coming-soon__social-link"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="coming-soon__footer animate-fade-in stagger-6">
        <p>© 2026 Murals by Kye. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
