import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <main className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__background">
                    <div className="hero__gradient"></div>
                    <div className="hero__image-placeholder">
                        <span className="hero__placeholder-text">Artist Photo Coming Soon</span>
                    </div>
                </div>

                <div className="hero__content container">
                    <div className="hero__text animate-fade-in-up">
                        <span className="glass-tag stagger-1">Mural Artist</span>
                        <h1 className="hero__title stagger-2">
                            Transforming <span className="text-accent">Spaces</span><br />
                            Into Living Art
                        </h1>
                        <p className="hero__subtitle stagger-3">
                            Custom murals that tell your story, breathe life into your walls,
                            and create unforgettable experiences.
                        </p>
                        <div className="hero__cta stagger-4">
                            <Link to="/gallery" className="glass-btn glass-btn--primary">
                                View Gallery
                            </Link>
                            <Link to="/contact" className="glass-btn">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="hero__scroll-indicator animate-fade-in stagger-5">
                    <span>Scroll</span>
                    <div className="hero__scroll-line"></div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="featured section">
                <div className="container">
                    <div className="featured__header">
                        <h2 className="section-title">Featured Works</h2>
                        <Link to="/gallery" className="featured__link link-underline">
                            View All <span>→</span>
                        </Link>
                    </div>

                    <div className="featured__grid">
                        <div className="featured__item glass-card hover-lift">
                            <div className="featured__image shimmer">
                                <span>Artwork 1</span>
                            </div>
                            <h3 className="featured__title">Urban Dreams</h3>
                            <p className="featured__desc">A vibrant cityscape mural</p>
                        </div>
                        <div className="featured__item glass-card hover-lift">
                            <div className="featured__image shimmer">
                                <span>Artwork 2</span>
                            </div>
                            <h3 className="featured__title">Nature's Embrace</h3>
                            <p className="featured__desc">Botanical paradise on canvas</p>
                        </div>
                        <div className="featured__item glass-card hover-lift">
                            <div className="featured__image shimmer">
                                <span>Artwork 3</span>
                            </div>
                            <h3 className="featured__title">Abstract Flow</h3>
                            <p className="featured__desc">Dynamic movement in color</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="about-preview section">
                <div className="container">
                    <div className="about-preview__content glass-panel">
                        <div className="about-preview__text">
                            <span className="glass-tag">The Artist</span>
                            <h2>Creating Beauty, One Wall at a Time</h2>
                            <p>
                                With over a decade of experience transforming spaces, Kye brings
                                a unique vision that blends contemporary artistry with timeless
                                elegance. Every mural is a collaboration—a story waiting to unfold
                                on your walls.
                            </p>
                            <Link to="/about" className="glass-btn">
                                Learn More
                            </Link>
                        </div>
                        <div className="about-preview__image shimmer">
                            <span>Artist Portrait</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta section">
                <div className="container">
                    <div className="cta__content glass-panel glass-panel--accent">
                        <h2>Ready to Transform Your Space?</h2>
                        <p>
                            Let's create something extraordinary together. Whether it's your home,
                            business, or public space—every wall has potential.
                        </p>
                        <Link to="/contact" className="glass-btn glass-btn--primary">
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
