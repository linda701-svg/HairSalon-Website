import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaWordpress, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '../style/Footer.css';

const Footer = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setShowBackToTop(window.scrollY > 300);
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer className="footer-container">
            <Container>
                {/* LOGO */}
                <div className="footer-logo">
                    <Image
                        src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/06/Logo-Cabello.png"
                        alt="Cabello Logo"
                        className="footer-logo-img"
                    />
                </div>

                {/* NAVIGATION */}
                <ul className="footer-nav">
                    <li><Link to="/" className="footer-nav-item">Home</Link></li>
                    <li><Link to="/about" className="footer-nav-item">About Us </Link></li>
                    <li><Link to="/services" className="footer-nav-item">Services </Link></li>
                    <li><Link to="/" className="footer-nav-item">Pricing <MdKeyboardArrowDown /></Link></li>
                     <li><Link to="/login" className="footer-nav-item">Login </Link></li>
                    <li><Link to="/contact" className="footer-nav-item">Contact Us <MdKeyboardArrowDown /></Link></li>
                </ul>

                {/* DESCRIPTION */}
                <p className="footer-description">
                    Lorem ipsum dolor dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* SOCIAL MEDIA */}
                <div className="footer-socials">
                    <a href="#" className="social-icon-circle"><FaFacebookF size={14} /></a>
                    <a href="#" className="social-icon-circle"><FaTwitter size={14} /></a>
                    <a href="#" className="social-icon-circle"><FaYoutube size={14} /></a>
                    <a href="#" className="social-icon-circle"><FaEnvelope size={14} /></a>
                </div>

                {/* DIVIDER */}
                <div className="footer-divider"></div>

                {/* COPYRIGHT */}
                <div className="footer-copyright">
                    &copy; All rights reserved
                </div>
            </Container>
            {showBackToTop && (
                <button
                    className="back-to-top"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Back to top"
                >
                    <FaArrowUp />
                </button>
            )}
        </footer>
    );
};

export default Footer;
