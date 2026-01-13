import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        projectType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', projectType: '', message: '' });
        }, 1500);
    };

    return (
        <main className="contact-page">
            {/* Hero */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero__content animate-fade-in-up">
                        <span className="glass-tag">Get in Touch</span>
                        <h1>Let's Create <span className="text-accent">Together</span></h1>
                        <p>Have a space that needs transformation? I'd love to hear about your vision.</p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="contact-main section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            {submitted ? (
                                <div className="contact-success glass-panel glass-panel--accent">
                                    <div className="contact-success__icon">✓</div>
                                    <h2>Message Sent!</h2>
                                    <p>Thank you for reaching out. I'll get back to you within 24-48 hours.</p>
                                    <button
                                        className="glass-btn"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-form glass-panel" onSubmit={handleSubmit}>
                                    <h2>Start Your Project</h2>
                                    <p>Fill out the form below and I'll get back to you soon.</p>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="glass-input"
                                                placeholder="Your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="glass-input"
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                className="glass-input"
                                                placeholder="Project inquiry"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="projectType">Project Type</label>
                                            <select
                                                id="projectType"
                                                name="projectType"
                                                className="glass-input"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select type</option>
                                                <option value="residential">Residential</option>
                                                <option value="commercial">Commercial</option>
                                                <option value="public">Public Art</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="glass-textarea"
                                            placeholder="Tell me about your project, space, and vision..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="glass-btn glass-btn--primary contact-submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="contact-info__card glass-card">
                                <div className="contact-info__icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                                    </svg>
                                </div>
                                <h3>Email</h3>
                                <a href="mailto:hello@muralsbykye.com">hello@muralsbykye.com</a>
                            </div>

                            <div className="contact-info__card glass-card">
                                <div className="contact-info__icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                                    </svg>
                                </div>
                                <h3>Location</h3>
                                <p>Available for projects<br />nationwide & beyond</p>
                            </div>

                            <div className="contact-info__card glass-card">
                                <div className="contact-info__icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                                <h3>Follow Along</h3>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">@muralsbykye</a>
                            </div>

                            <div className="contact-info__note glass-panel">
                                <h4>Response Time</h4>
                                <p>
                                    I typically respond within 24-48 hours. For urgent inquiries,
                                    please reach out via Instagram DM.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
