import React from 'react';
import { Container, Row, Col, Accordion, ProgressBar, Image } from 'react-bootstrap';
import '../style/Faq.css';
import '../style/Home.css';
const FaqScreen = () => {
    const faqData1 = [
        {
            question: "How long will my highlights last?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "How can I save money on my color?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "What if I want to donate my hair?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "How should I prepare for my facial?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "How often should I get facials?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ];

    const faqData2 = [
        {
            question: "How long will my highlights last?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "How can I save money on my color?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "What if I want to donate my hair?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "How should I prepare for my facial?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "How often should I get facials?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ];

    return (
        <div className="faq-page">
            {/* HERO SECTION */}
            <section className="faq-hero-section">
                <Container>
                    <h1 className="faq-hero-title">FAQs</h1>
                    <h2 className="faq-hero-subtitle">Question</h2>
                </Container>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section className="faq-why-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h3 className="faq-why-subtitle">Why Choose Us</h3>
                            <h2 className="faq-why-title">Different</h2>
                            <p className="faq-why-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            </p>
                            <p className="faq-why-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <div className="faq-progress-item">
                                <span className="faq-progress-label">Styling</span>
                                <ProgressBar now={95} className="faq-custom-progress" />
                            </div>
                            <div className="faq-progress-item">
                                <span className="faq-progress-label">Hair Cutting</span>
                                <ProgressBar now={85} className="faq-custom-progress" />
                            </div>
                            <div className="faq-progress-item">
                                <span className="faq-progress-label">Colouring</span>
                                <ProgressBar now={89} className="faq-custom-progress" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* FIRST FAQ SECTION */}
            <section className="faq-accordion-section">
                <Container>
                    <div className="faq-accordion-container">
                        <Accordion defaultActiveKey="0" className="faq-custom-accordion">
                            {faqData1.map((item, index) => (
                                <Accordion.Item eventKey={index.toString()} key={index}>
                                    <Accordion.Header>{item.question}</Accordion.Header>
                                    <Accordion.Body>
                                        {item.answer}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </Container>
            </section>

            {/* SECOND FAQ SECTION (SPLIT) */}
            <section className="faq-split-section">
                <Container>
                    <Row className="align-items-center">
                        {/* <Col lg={6}>

                            <Image
                                src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/wind-in-hair-dreamy-girl-with-sunflare-on-beach-CLH3HZB-879x1024.jpg"
                                className="faq-split-image"
                                alt="Faq Illustration"
                            />

                        </Col> */}
                            <Col lg={6} className="progress-image-col">
                                                    <div className="team-arch-wrapper">
                                                        <div className="team-arch-bg"></div>
                                                        <Image
                                src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/wind-in-hair-dreamy-girl-with-sunflare-on-beach-CLH3HZB-879x1024.jpg"
                                className="progress-image"
                                alt="Faq Illustration"
                            />
                        
                                                    </div>
                                                </Col>
                        <Col lg={6}>
                            <div className="faq-split-content">
                                <Accordion className="faq-custom-accordion">
                                    {faqData2.map((item, index) => (
                                        <Accordion.Item eventKey={index.toString()} key={index}>
                                            <Accordion.Header>{item.question}</Accordion.Header>
                                            <Accordion.Body>
                                                {item.answer}
                                            </Accordion.Body>
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

export default FaqScreen;
