import React, { useState } from 'react';
import { Container, Row, Col, Image, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import '../style/Contact.css';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const ContactScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const submitHandler = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            await axios.post('http://localhost:5000/api/contacts', { name, email, message });
            setStatus({ loading: false, success: true, error: null });
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            setStatus({
                loading: false,
                success: false,
                error: err.response?.data?.message || err.message,
            });
        }
    };

    return (
        <div className="contact-page">
            {/* HERO SECTION */}
            <section className="contact-hero-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="contact-hero-image-container">
                                <Image
                                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/carefree-long-hair-girl-in-white-clothes-on-field-JNDR92V-879x1024.jpg"
                                    className="contact-hero-image"
                                />
                                <Image
                                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-12-1.png"
                                    className="contact-leaf-decoration-1"
                                />
                                <Image
                                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-3.png"
                                    className="contact-leaf-decoration-2"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="contact-hero-content">
                                <h1 className="contact-title-main">Contact Us</h1>
                                <h2 className="contact-subtitle-script">To Our Salon</h2>
                                <p className="contact-description-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* MAIN CONTENT SECTION */}
            <section className="contact-main-section">
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className="contact-info-wrapper">
                                <h2 className="contact-subtitle-script text-start mb-4">Get In Touch</h2>

                                <div className="contact-info-block">
                                    <span className="contact-info-label">Email</span>
                                    <span className="contact-info-value">contact@cabello.com</span>
                                </div>

                                <div className="contact-info-block">
                                    <span className="contact-info-label">Phone</span>
                                    <span className="contact-info-value">318-703-405</span>
                                </div>

                                <div className="contact-info-block">
                                    <span className="contact-info-label">Address</span>
                                    <span className="contact-info-value">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </span>
                                </div>

                                <div className="contact-info-block">
                                    <span className="contact-info-label">Social Media</span>
                                    <div className="contact-social-icons">
                                        <a href="https://www.facebook.com/" className="contact-social-icon"><FaFacebookF size={18} /></a>
                                        <a href="https://x.com/" className="contact-social-icon"><FaTwitter size={18} /></a>
                                        <a href="https://www.youtube.com/" className="contact-social-icon"><FaYoutube size={18} /></a>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7}>
                            <div className="contact-form-container">
                                {status.success && <Alert variant="success">Your message sent successfully!</Alert>}
                                {status.error && <Alert variant="danger">{status.error}</Alert>}
                                <Form onSubmit={submitHandler}>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="form-label-custom">Your Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            className="form-control-custom"
                                            placeholder=""
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label className="form-label-custom">Your Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            className="form-control-custom"
                                            placeholder=""
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label className="form-label-custom">Your Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            className="form-control-custom"
                                            placeholder=""
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Button type="submit" className="send-message-btn" disabled={status.loading}>
                                        {status.loading ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* MAP SECTION */}
            <section className="contact-map-section">
                <iframe
                    className="contact-map-iframe"
                    src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
                    title="Location Map"
                ></iframe>
            </section>
        </div>
    );
};

export default ContactScreen;
