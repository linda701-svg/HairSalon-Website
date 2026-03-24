import React from 'react';
import { Container, Row, Col, Image, Button, Accordion } from 'react-bootstrap';
import '../style/Price.css';

const PriceScreen = () => {
    const pricingData = [
        {
            title: 'Styling',
            price: '$25',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dipsing tellus.',
            features: ['Lorem ipsum dolor', 'consectetur si adipicing', 'Ut enim ad minim venam', 'Lorem ipsum dolor sit']
        },
        {
            title: 'Cutting',
            price: '$27',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dipsing tellus.',
            features: ['Lorem ipsum dolor sit', 'consectetur si adipicing', 'Ut enim ad minim venam', 'Lorem ipsum dolor sit']
        },
        {
            title: 'Colouring',
            price: '$29',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dipsing tellus.',
            features: ['Lorem ipsum dolor sit', 'consectetur si adipicing', 'Ut enim ad minim venam', 'Lorem ipsum dolor sit']
        }
    ];

    const faqData = [
        {
            q: 'How long will my highlights last?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            q: 'How can I save money on my color?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            q: 'What if I want to donate my hair?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            q: 'How should I prepare for my facial?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ];

    return (
        <div className="price-page" style={{ width: '100vw', margin: '0', padding: '0' }}>
            {/* HERO SECTION */}
            <section className="price-hero-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="price-hero-image-col">
                            <div className="price-hero-image-container">
                                <Image
                                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/hairdresser-doing-haircut-for-women-in-hairdressin-P6ZJU5L-879x1024.jpg"
                                    className="price-hero-image"
                                />
                                <Image
                                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-12-1.png"
                                    className="price-leaf-decoration-1"
                                />
                                <Image
                                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-3.png"
                                    className="price-leaf-decoration-2"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="price-hero-content">
                                <h1 className="price-title-main">Our Price</h1>
                                <h2 className="price-subtitle-script">Best Price</h2>
                                <p className="price-description-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* PRICING GRID SECTION */}
            <section className="pricing-grid-section">
                <Container>
                    <Row>
                        {pricingData.map((item, idx) => (
                            <Col key={idx} md={4} className="mb-4">
                                <div className="price-card">
                                    <h2 className="price-card-title">{item.title}</h2>
                                    <div className="price-value">{item.price}</div>
                                    <p className="price-card-description">{item.desc}</p>
                                    <ul className="price-features-list">
                                        {item.features.map((feature, fIdx) => (
                                            <li key={fIdx}>
                                                <i className="fas fa-leaf"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="link" className="price-learn-more-btn">Learn More</Button>

                                    {/* Background decorative leaves for specific cards if needed like in HTML */}
                                    {idx === 2 && (
                                        <>
                                            <Image
                                                src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-8.png"
                                                className="price-leaf-decoration-card-large d-none d-md-block"
                                                style={{ position: 'absolute', right: '-150px', bottom: '0', width: '250px', zIndex: '-1', opacity: '0.5' }}
                                            />
                                            <Image
                                                src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-6.png"
                                                className="price-leaf-decoration-card-small d-none d-md-block"
                                                style={{ position: 'absolute', left: '-100px', top: '20%', width: '200px', zIndex: '-1', opacity: '0.5' }}
                                            />
                                        </>
                                    )}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* TESTIMONIAL SECTION */}
            <section className="price-testimonial-section">
                <Container>
                    <h2 className="price-testimonial-title">What Our Beauties Says</h2>
                    <h3 className="price-testimonial-subtitle">Testimonial</h3>
                    <p className="price-testimonial-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Image
                        src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/curly-natural-blond-hair-woman-beauty-portrait-CS2SFGV.jpg"
                        className="price-testimonial-author-img"
                    />
                    <div className="testimonial-rating mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <i key={star} className="fas fa-star mx-1" style={{ color: '#D4AF37' }}></i>
                        ))}
                    </div>
                    <h4 className="price-testimonial-author-name">Reyna Lyn</h4>
                </Container>
            </section>

            {/* FAQ SECTION */}
            <section className="price-faq-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="faq-image-container">
                                <Image
                                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/wind-in-hair-dreamy-girl-with-sunflare-on-beach-CLH3HZB-879x1024.jpg"
                                    className="faq-image"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="price-faq-content">
                                <h2 className="price-testimonial-subtitle text-start mb-2">Pricing FAQs</h2>
                                <h1 className="price-title-main text-start mb-4" style={{ fontSize: '3.5rem' }}>Question</h1>

                                <Accordion defaultActiveKey="0" flush>
                                    {faqData.map((faq, idx) => (
                                        <Accordion.Item eventKey={idx.toString()} key={idx}>
                                            <Accordion.Header>{faq.q}</Accordion.Header>
                                            <Accordion.Body>{faq.a}</Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default PriceScreen;
