import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Card, Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import '../style/Services.css';

const ServicesScreen = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('http://localhost:5000/api/services');
                setServices(data);
                setLoading(false);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    return (
        <div className="services-page" >
            {/* HERO SECTION */}
            <section className="services-hero-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="services-arch-wrapper">
                                <div className="services-arch-container">
                                    <Image
                                        src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/hairdresser-coiffeur-makes-hairstyle-P9CB2GF-879x1024.jpg"
                                        className="services-arch-image"
                                    />
                                </div>
                                <Image
                                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-12-1.png"
                                    className="leaf-decoration-services"
                                />
                                <Image
                                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-12-1.png"
                                    className="leaf-decoration-services"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="services-text-content">
                                <h1 className="services-title-main">Our Services</h1>
                                <h2 className="services-subtitle-script">Best Service</h2>
                                <p className="services-description-text">
                                    Luxe Salon offers a wide range of premium hair and beauty services. Our team of expert stylists is dedicated to providing you with the ultimate salon experience.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* SERVICES GRID SECTION */}
            <section className="services-grid-section">
                <Container>
                    <div className="text-center mb-5">
                        <h1 className="grid-title-main">Our Best Service</h1>
                        <h2 className="grid-subtitle-script">Services</h2>
                        <p className="grid-description">
                            Discover our curated selection of professional salon services designed to make you look and feel your best.
                        </p>
                    </div>

                    {loading ? (
                        <div className="text-center py-5">
                            <Spinner animation="border" variant="primary" />
                        </div>
                    ) : error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <Row>
                            {services.map((service) => (
                                <Col key={service._id} md={4} className="mb-4">
                                    <div className="service-grid-card">
                                        <div className="service-card-top">
                                            <h4 className="service-card-header">{service.category}</h4>
                                            <p className="service-card-small-text">
                                                {service.description.substring(0, 80)}...
                                            </p>
                                        </div>
                                        <div className="service-card-image-container">
                                            <Image src={service.image.startsWith('/') ? `http://localhost:5000${service.image}` : service.image} className="service-card-image" />
                                            <div className="service-price-tag">${service.price}</div>
                                        </div>
                                        <div className="service-card-bottom">
                                            <h3 className="service-card-large-title">{service.title}</h3>
                                            <p className="service-card-description">{service.duration} mins of luxury</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                            {services.length === 0 && (
                                <Col className="text-center py-5">
                                    <p className="text-muted">No services available at the moment. Please check back later.</p>
                                </Col>
                            )}
                        </Row>
                    )}
                </Container>
            </section>

            {/* TESTIMONIAL SECTION */}
            <section className="services-testimonial-section">
                {/* Decorative background leaves */}
                <Image
                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-1.png"
                    className="testimonial-decoration-leaf-left"
                />
                <Image
                    src="/images/monstera-leaf-vector-illustrations-RADWZJU-3.png"
                    className="testimonial-decoration-leaf-right"
                />

                <Container>
                    <div className="testimonial-content-wrapper shadow-sm">
                        <h1 className="testimonial-title">What Our Beauties Says</h1>
                        <h2 className="testimonial-subtitle-script">Testimonial</h2>
                        <p className="testimonial-quote">
                            "The best salon experience I've ever had. The attention to detail and the luxurious atmosphere make every visit special."
                        </p>
                        <div className="testimonial-author-info">
                            <Image
                                src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/curly-natural-blond-hair-woman-beauty-portrait-CS2SFGV.jpg"
                                className="testimonial-author-image"
                            />
                            <div className="testimonial-rating">
                                <i className="fas fa-star mx-1"></i>
                                <i className="fas fa-star mx-1"></i>
                                <i className="fas fa-star mx-1"></i>
                                <i className="fas fa-star mx-1"></i>
                                <i className="fas fa-star mx-1"></i>
                            </div>
                            <h4 className="testimonial-author-name">Reyna Lyn</h4>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SPECIAL GIFT SECTION */}
            <section className="special-gift-redesign" style={{ marginTop: '60px' }}>
                <Container>
                    <div className="text-center mb-5">
                        <h1 className="gift-title-main">Special Offer For You</h1>
                        <h2 className="gift-subtitle-script">Special Gift</h2>
                    </div>
                    <Row>
                        {[
                            { title: 'Hair Styling', desc: 'Gift your loved ones a complete makeover with our professional styling.', img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/hairdresser-doing-haircut-for-women-in-hairdressin-P6ZJU5L-879x1024.jpg' },
                            { title: 'Hair Curly', desc: 'Expert curling techniques for that perfect gala look.', img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/brides-hair-detail-with-curls-close-up-3Q3ULB8-879x1024.jpg' },
                            { title: 'Hair Care', desc: 'Exclusive hair care products used by our best experts.', img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/washing-off-hair-care-products-in-the-beauty-salon-NAYED3R-879x1024.jpg' }
                        ].map((gift, idx) => (
                            <Col key={idx} md={4} className="mb-4">
                                <div className="service-grid-card">
                                    <Image src={gift.img} className="service-card-image" />
                                    <div className="service-card-bottom">
                                        <h3 className="service-card-large-title">{gift.title}</h3>
                                        <p className="service-card-description">{gift.desc}</p>
                                        <Button variant="link" className="gift-learn-more-btn">Learn More</Button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default ServicesScreen;
