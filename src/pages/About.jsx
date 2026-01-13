import './About.css';

const About = () => {
    return (
        <main className="about-page">
            {/* Hero */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero__content animate-fade-in-up">
                        <span className="glass-tag">About the Artist</span>
                        <h1>The Vision Behind<br /><span className="text-accent">Every Brushstroke</span></h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="about-main section">
                <div className="container">
                    <div className="about-main__grid">
                        <div className="about-main__image-container">
                            <div className="about-main__image glass-panel shimmer">
                                <span>Artist Portrait</span>
                            </div>
                            <div className="about-main__accent-shape"></div>
                        </div>

                        <div className="about-main__content">
                            <h2>Hello, I'm Kye</h2>
                            <p className="about-main__intro">
                                A passionate mural artist dedicated to transforming ordinary spaces
                                into extraordinary visual experiences.
                            </p>
                            <p>
                                My journey with art began in childhood, where I found endless
                                fascination in color, form, and the power of visual storytelling.
                                Over the years, that passion evolved into a career spanning
                                residential murals, commercial installations, and public art
                                projects.
                            </p>
                            <p>
                                Every wall tells a story. My mission is to help you discover
                                and express that story through custom artwork that reflects
                                your personality, brand, or community's spirit.
                            </p>

                            <div className="about-main__stats">
                                <div className="about-main__stat glass-card">
                                    <span className="about-main__stat-number">10+</span>
                                    <span className="about-main__stat-label">Years Experience</span>
                                </div>
                                <div className="about-main__stat glass-card">
                                    <span className="about-main__stat-number">150+</span>
                                    <span className="about-main__stat-label">Murals Created</span>
                                </div>
                                <div className="about-main__stat glass-card">
                                    <span className="about-main__stat-number">50+</span>
                                    <span className="about-main__stat-label">Happy Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="philosophy section">
                <div className="container">
                    <div className="philosophy__content glass-panel glass-panel--accent">
                        <blockquote className="philosophy__quote">
                            "Art has the power to transform not just walls, but the way we
                            feel in a space. Every mural I create is designed to inspire,
                            to evoke emotion, and to become a lasting piece of someone's story."
                        </blockquote>
                        <cite className="philosophy__cite">— Kye</cite>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="process section">
                <div className="container">
                    <h2 className="section-title text-center" style={{ display: 'block', textAlign: 'center' }}>
                        The Creative Process
                    </h2>
                    <p className="process__intro text-center">
                        From concept to completion, here's how we'll bring your vision to life.
                    </p>

                    <div className="process__steps">
                        <div className="process__step glass-card">
                            <span className="process__step-number">01</span>
                            <h3>Consultation</h3>
                            <p>
                                We begin with a conversation about your space, vision, and
                                the story you want to tell. I'll visit the location to understand
                                the environment and possibilities.
                            </p>
                        </div>
                        <div className="process__step glass-card">
                            <span className="process__step-number">02</span>
                            <h3>Concept & Design</h3>
                            <p>
                                I'll create detailed sketches and digital mockups, allowing you
                                to visualize the final piece. We'll refine together until it's
                                exactly what you've imagined.
                            </p>
                        </div>
                        <div className="process__step glass-card">
                            <span className="process__step-number">03</span>
                            <h3>Creation</h3>
                            <p>
                                With brushes in hand, I bring the design to life on your wall.
                                Using premium, long-lasting materials ensures your mural will
                                remain vibrant for years.
                            </p>
                        </div>
                        <div className="process__step glass-card">
                            <span className="process__step-number">04</span>
                            <h3>Reveal</h3>
                            <p>
                                The moment of transformation—watching clients see their completed
                                mural for the first time is the most rewarding part of my work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
