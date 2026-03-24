import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner, Badge, Image } from 'react-bootstrap';
import axios from 'axios';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../style/Team.css';
import '../style/About.css';
import girlPortrait from '../assets/calm-portrait-of-beautiful-hipster-girl-standing-i-J4RDN2X-1.jpg';

const TeamScreen = () => {
    const [stylists, setStylists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStylists = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/stylists');
                setStylists(data);
                setLoading(false);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
                setLoading(false);
            }
        };

        fetchStylists();
    }, []);

    if (loading) return (
        <Container className="text-center" style={{ paddingTop: '200px', minHeight: '80vh' }}>
            <Spinner animation="border" variant="primary" />
            <p className="mt-3">Loading our expert team...</p>
        </Container>
    );

    if (error) return (
        <Container className="text-center" style={{ paddingTop: '200px', minHeight: '80vh' }}>
            <Badge bg="danger">{error}</Badge>
        </Container>
    );

    return (
        <div className="team-page">

            <section className="about-hero-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="about-arch-wrapper">
                                <div className="about-arch-container">
                                    <Image
                                        src={girlPortrait}
                                        className="about-arch-image"
                                    />
                                </div>
                                {/* Decorative Leaf Image at the bottom left edge of the arch */}
                                <Image
                                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-12-1.png"
                                    className="leaf-decoration-about"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="about-text-content">
                                <h1 className="about-title-main">Our Team</h1>
                                <h2 className="about-subtitle-script">About Team</h2>
                                <p className="about-description-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* team */}
            <Container className="team-grid-container mb-5">
                <Row>
                    {stylists.map((stylist) => (
                        <Col key={stylist._id} md={6} lg={4} className="mb-4">
                            <div className="stylist-card-custom">
                                <div className="stylist-card-header-box">
                                    <h4> {Array.isArray(stylist.specialties) ? stylist.specialties[0] : stylist.specialties}</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                </div>

                                <div className="stylist-card-image-wrapper">
                                    <Image
                                        src={stylist.image.startsWith('/') ? `http://localhost:5000${stylist.image}` : stylist.image}
                                        className="stylist-card-image"
                                    />
                                </div>

                                <div className="stylist-card-footer">
                                    <h3>{stylist.name}</h3>
                                    <div className="stylist-social-links">
                                        <a href="#" className="stylist-social-icon"><FaFacebookF size={12} /></a>
                                        <a href="#" className="stylist-social-icon"><FaTwitter size={12} /></a>
                                        <a href="#" className="stylist-social-icon"><FaYoutube size={12} /></a>
                                    </div>
                                    <p className="stylist-card-footer-bio">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dor
                                    </p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
                       
        </div>
    );
};

export default TeamScreen;
