import React from 'react';
import { Container, Row, Col, Image, Button, Accordion } from 'react-bootstrap';
import '../style/Price.css';
import girl from '../assets/gallery.jpg';
import galleryImg1 from '../assets/image.jpg';
import galleryImg2 from '../assets/image1.jpg';
import galleryImg3 from '../assets/image2.jpg';
import galleryImg4 from '../assets/image3.jpg';
import galleryImg5 from '../assets/image4.jpg';
import galleryImg6 from '../assets/image5.jpg';

const Gallery = () => {
    return (
        <div className="price-page">
            {/* HERO SECTION */}
            <section className="price-hero-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="price-hero-image-col">
                            <div className="price-hero-image-container">
                                <Image
                                    src={girl}
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
                                <h1 className="price-title-main">
                                    Our Gallery</h1>
                                <h2 className="price-subtitle-script">Photograph</h2>
                                <p className="price-description-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="gallery-section-premium ">

                <Container>
                    <Row className="justify-content-center">
                        <Col lg={11}>
                            <div className="gallery-grid-wrapper">
                                {[
                                    galleryImg1,
                                    galleryImg2,
                                    galleryImg3,
                                    galleryImg4,
                                    galleryImg5,
                                    galleryImg6
                                ].map((img, idx) => (
                                    <div key={idx} className="gallery-item-frame">
                                        <Image src={img} className="gallery-img" />
                                    </div>
                                ))}
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Gallery;