import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [filter, setFilter] = useState('all');
    const [lightboxImage, setLightboxImage] = useState(null);

    // Placeholder gallery items - will be replaced with real artwork
    const galleryItems = [
        { id: 1, title: 'Urban Dreams', category: 'commercial', description: 'Downtown restaurant mural' },
        { id: 2, title: 'Garden of Eden', category: 'residential', description: 'Living room botanical piece' },
        { id: 3, title: 'Abstract Waves', category: 'commercial', description: 'Office lobby installation' },
        { id: 4, title: 'Starlit Forest', category: 'residential', description: 'Children\'s room fantasy mural' },
        { id: 5, title: 'City Pulse', category: 'public', description: 'Community center exterior' },
        { id: 6, title: 'Ocean Serenity', category: 'residential', description: 'Spa bathroom atmosphere' },
        { id: 7, title: 'Golden Hour', category: 'commercial', description: 'Boutique hotel feature wall' },
        { id: 8, title: 'Wild Origins', category: 'public', description: 'Park wildlife celebration' },
        { id: 9, title: 'Geometric Flow', category: 'commercial', description: 'Tech startup headquarters' },
    ];

    const filters = [
        { value: 'all', label: 'All Works' },
        { value: 'residential', label: 'Residential' },
        { value: 'commercial', label: 'Commercial' },
        { value: 'public', label: 'Public Art' },
    ];

    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

    const openLightbox = (item) => {
        setLightboxImage(item);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        document.body.style.overflow = '';
    };

    return (
        <main className="gallery-page">
            {/* Hero */}
            <section className="gallery-hero">
                <div className="container">
                    <div className="gallery-hero__content animate-fade-in-up">
                        <span className="glass-tag">Portfolio</span>
                        <h1>The <span className="text-accent">Gallery</span></h1>
                        <p>Explore a collection of murals that have transformed spaces across homes, businesses, and public areas.</p>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="gallery-main section">
                <div className="container">
                    {/* Filters */}
                    <div className="gallery-filters">
                        {filters.map((f) => (
                            <button
                                key={f.value}
                                className={`gallery-filter glass-btn ${filter === f.value ? 'gallery-filter--active' : ''}`}
                                onClick={() => setFilter(f.value)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="gallery-grid">
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="gallery-item glass-card"
                                onClick={() => openLightbox(item)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="gallery-item__image shimmer">
                                    <span>{item.title}</span>
                                </div>
                                <div className="gallery-item__overlay">
                                    <h3 className="gallery-item__title">{item.title}</h3>
                                    <p className="gallery-item__desc">{item.description}</p>
                                    <span className="glass-tag">{item.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox__close" aria-label="Close lightbox">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <div className="lightbox__content glass-panel" onClick={(e) => e.stopPropagation()}>
                        <div className="lightbox__image shimmer">
                            <span>{lightboxImage.title}</span>
                        </div>
                        <div className="lightbox__info">
                            <h2>{lightboxImage.title}</h2>
                            <p>{lightboxImage.description}</p>
                            <span className="glass-tag">{lightboxImage.category}</span>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Gallery;
