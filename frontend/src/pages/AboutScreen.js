import React from 'react';
import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import girlPortrait from '../assets/calm-portrait-of-beautiful-hipster-girl-standing-i-J4RDN2X-1.jpg';
import '../style/About.css';

const AboutScreen = () => {
    return (
        <div className="about-screen">
            {/* HERO SECTION / ABOUT US */}
            <section className="about-hero-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="about-arch-wrapper">
                                <div className="about-arch-container">
                                    <Image
                                        src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/gorgeous-bride-in-amazing-gown-walking-to-old-cast-DMTDK2N-879x1024.jpg"
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
                                <h1 className="about-title-main">About Us</h1>
                                <h2 className="about-subtitle-script">To Our Salon</h2>
                                <p className="about-description-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* OUR STORY SECTION */}
            <section className="about-story-section">
                <Container>
                    <div className="story-text-container">
                        <h1 className="story-title-main">Our Story</h1>
                        <h2 className="story-subtitle-script">History</h2>
                        <p className="story-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </Container>
            </section>

            {/* WHY CHOOSE US - 3 COLUMNS */}
            <section className="about-different-section">
                <Container>
                    <div className="text-center mb-5">
                        <h1 className="different-title-main">Why We Are Different</h1>
                        <h2 className="different-subtitle-script">Why Choose Us</h2>
                    </div>
                    <Row>
                        {[
                            { title: 'Profesional', img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/charming-client-getting-professional-makeup-in-bea-T3VZJFC-879x1024.jpg' },
                            { title: 'Trusted', img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/hairdresser-doing-haircut-for-women-in-hairdressin-P6ZJU5L-879x1024.jpg' },
                            { title: 'Certified', img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/washing-off-hair-care-products-in-the-beauty-salon-NAYED3R-879x1024.jpg' }
                        ].map((item, idx) => (
                            <Col key={idx} md={4} className="mb-4">
                                <div className="different-card">
                                    <div className="different-card-top-box">
                                        <h3 className="different-card-title">{item.title}</h3>
                                        <p className="different-card-text">Professional Salon</p>
                                    </div>
                                    <div className="different-card-image-wrapper">
                                        <Image src={item.img} className="different-card-image" />
                                    </div>
                                    <p className="different-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* SPECIAL GIFT SECTION */}
            <section className="about-special-gift-section">
                <Container>
                    <div className="text-center mb-5">
                        <h1 className="gift-title-main">Special Offer For You</h1>
                        <h2 className="gift-subtitle-script">Special Gift</h2>
                    </div>
                    <Row>
                        {[
                            { title: 'Hair Styling', img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/brides-hair-detail-with-curls-close-up-3Q3ULB8-879x1024.jpg' },
                            { title: 'Hair Curly', img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/hairdresser-coiffeur-makes-hairstyle-P9CB2GF-879x1024.jpg' },
                            { title: 'Hair Care', img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/washing-off-hair-care-products-in-the-beauty-salon-NAYED3R-879x1024.jpg' }
                        ].map((gift, idx) => (
                            <Col key={idx} md={4} className="mb-4">
                                <div className="gift-card">
                                    <div className="gift-card-image-wrapper">
                                        <Image src={gift.img} className="gift-card-image" />
                                    </div>
                                    <h3 className="gift-card-title">{gift.title}</h3>
                                    <p className="gift-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#learn-more" className="gift-card-link">Learn More</a>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* DIFFERENT SECTION - PROGRESS BARS */}
            <section className="about-progress-section">
                <Row className="g-0 align-items-center">
                    <Col lg={6} className="progress-image-col">
                        <Image
                            src={girlPortrait}
                            className="progress-image"
                        />
                    </Col>
                    <Col lg={6} className="progress-content-col">
                        {/* Decorative Leaf Image at the top right */}
                        <Image
                            src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-3.png"
                            className="progress-header-leaf"
                        />
                        <h1 className="progress-title">Why Choose Us</h1>
                        <h2 className="progress-subtitle">Different</h2>
                        <p className="progress-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        </p>

                        {[
                            { label: 'Styling', value: 95 },
                            { label: 'Hair Cutting', value: 85 },
                            { label: 'Colouring', value: 89 }
                        ].map((skill, idx) => (
                            <div key={idx} className="custom-progress-item">
                                <div className="custom-progress-bar-wrapper">
                                    <div
                                        className="custom-progress-bar-fill"
                                        style={{ width: `${skill.value}%` }}
                                    >
                                        <span className="custom-progress-label">{skill.label}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </section>

            {/* COUNTERS SECTION */}
            <CounterSection />
        </div>
    );
};

const CounterSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const counters = [
        { icon: <img src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/elements-barber-icons-packs-R2ZKB6K-2020-09-22-4.png" alt="icon" style={{ width: '80px' }} />, count: 100 },
        { icon: <img src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/elements-barber-icons-packs-R2ZKB6K-2020-09-22-5.png" alt="icon" style={{ width: '80px' }} />, count: 80 },
        { icon: <img src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/elements-barber-icons-packs-R2ZKB6K-2020-09-22-6.png" alt="icon" style={{ width: '80px' }} />, count: 60 },
        { icon: <img src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/elements-barber-icons-packs-R2ZKB6K-2020-09-22-7.png" alt="icon" style={{ width: '80px' }} />, count: 10 }
    ];

    return (
        <section ref={ref} >
            <Container>
                <Row>
                    {counters.map((item, idx) => (
                        <Col key={idx} xs={6} md={3}>
                            <div className="counter-card">
                                <div className="counter-icon">
                                    {item.icon}
                                </div>
                                <h1 className="counter-number">
                                    {inView ? <CountUp start={0} end={item.count} duration={2.5} /> : '0'}
                                </h1>
                                <p className="counter-label">Cool Number</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            {/* Decorative leaf in the corner */}
            <Image
                src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-3.png"
                className="counter-decoration-leaf"
            />
        </section>
    );
};

export default AboutScreen;
