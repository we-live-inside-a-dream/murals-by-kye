import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container container">
                <Link to="/" className="header__logo" onClick={closeMobileMenu}>
                    <span className="header__logo-text">Murals</span>
                    <span className="header__logo-accent">by Kye</span>
                </Link>

                <button
                    className={`header__menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `header__nav-link ${isActive ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `header__nav-link ${isActive ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) => `header__nav-link ${isActive ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                    >
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `header__nav-link ${isActive ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                    >
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
