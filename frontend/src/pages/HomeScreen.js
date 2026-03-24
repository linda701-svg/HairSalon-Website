import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Image, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import girlPortrait from '../assets/calm-portrait-of-beautiful-hipster-girl-standing-i-J4RDN2X-1.jpg';
import girl from '../assets/image1.jpg';
import girl2 from '../assets/image.jpg';
import girl3 from '../assets/girl.jpg';
import galleryImg1 from '../assets/image.jpg';
import galleryImg2 from '../assets/image1.jpg';
import galleryImg3 from '../assets/image2.jpg';
import galleryImg4 from '../assets/image3.jpg';
import galleryImg5 from '../assets/image4.jpg';
import galleryImg6 from '../assets/image5.jpg';
import '../style/Home.css';
import '../style/About.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const HomeScreen = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <div className="home-screen" style={{ marginTop: '60px' }}>
            {/* HERO SECTION REDESIGN */}
            <section className="home-hero-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="home-hero-content">
                                <h1 className="home-hero-title">Professional Service for Your Hair Beauty</h1>
                                <h2 className="home-hero-subtitle">Beautiful Hair</h2>
                                <p className="home-hero-text">
                                    Experience the ultimate in hair artistry with our professional beauty services, where we blend modern trends with timeless techniques to celebrate your unique style.Our expert stylists are dedicated to providing personalized care, ensuring every cut, color, and treatment is tailored to enhance your natural features and boost your confidence.
                                </p>
                                <Button as={Link} to="/services" className="home-hero-btn">
                                    Learn More
                                </Button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="home-hero-images-container" >
                                <Image
                                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/beautiful-curly-hairstyle-PGN6QXL-879x1024.jpg"
                                    className="arch-image-left"
                                    data-aos="fade-down"
                                />
                                <Image
                                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/girl-with-long-flowing-hair-view-from-the-back-on-UHZCGBC-683x1024.jpg"
                                    className="arch-image-right"
                                    data-aos="fade-left"
                                />

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* WELCOME SECTION REDESIGN */}
            <section className="welcome-section">
                <Container>
                    <h1 className="welcome-title">Welcome</h1>
                    <h2 className="welcome-subtitle">To Our Salon</h2>
                    <p className="welcome-text">
                        Welcome to To Our Salon, where your hair journey becomes our ultimate passion. We combine expert artistry with a relaxing atmosphere to ensure you leave feeling confident and refreshed.Step into our world of beauty and experience the premium care your hair deserves.
                    </p>
                </Container>
            </section>

            {/* OUR STORY SECTION (SPLIT LAYOUT) */}
            <section className="story-section">
                <div className="story-container-full">

                    <div className="story-content-box">
                        <h2 className="story-title">Our Story</h2>
                        <h3 className="story-subtitle">To Our Salon</h3>
                        <p className="story-text">
                            To Our Salon, we believe that hair is the ultimate form of self-expression, and our journey has always been defined by a commitment to excellence and authentic connection. Over the years, we have cultivated a space where tradition meets innovation, ensuring that every guest who walks through our doors receives more than just a service. They receive a personalized experience. Our story is written by the smiles of our clients and the dedication of our stylists, driven by the belief that everyone deserves to look and feel their absolute best.
                        </p>
                    </div>


                </div>
            </section>

            {/* BEAUTY ARCH SECTION */}
            <section className="beauty-arch-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="beauty-arch-images-wrapper">
                                <Image
                                    src={girl}
                                    className="beauty-arch-img-1"
                                    data-aos="fade-down"
                                />
                                <Image
                                    src={girl2}
                                    className="beauty-arch-img-2"
                                    data-aos="fade-left"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="beauty-arch-content">
                                <h3 className="beauty-arch-title">Beauty is About Being Comfortable in Your Own Hair</h3>
                                <h2 className="beauty-arch-subtitle">To Our Salon</h2>
                                <p className="beauty-arch-text">
                                    Our mission is to enhance your natural texture and style, ensuring you leave our chairs feeling comfortable, radiant, and authentically you.Embrace a style that feels as good as it looks, because at To Our Salon, beauty is simply being your most comfortable self.
                                </p>
                                <Button as={Link} to="/about" className="beauty-arch-btn">Learn More</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



            {/* SERVICES SECTION REDESIGN */}
            <section className="services-section-premium">
                <Image
                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-11.png"
                    className="services-leaf-top d-none d-lg-block"
                />
                <Image
                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-11.png"
                    className="services-leaf-bottom d-none d-lg-block"
                />
                <Container>
                    <div className="services-header">
                        <h1 className="services-title-main">Our Best Service</h1>
                        <h2 className="services-subtitle-script">Services</h2>
                    </div>
                    <Row>
                        {[
                            {
                                title: 'Styling',
                                img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/brides-hair-detail-with-curls-close-up-3Q3ULB8-879x1024.jpg',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper'
                            },
                            {
                                title: 'Hair Cutting',
                                img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/hairdresser-coiffeur-makes-hairstyle-P9CB2GF-879x1024.jpg',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper'
                            },
                            {
                                title: 'Colouring',
                                img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/washing-off-hair-care-products-in-the-beauty-salon-NAYED3R-879x1024.jpg',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper'
                            }
                        ].map((service, idx) => (
                            <Col key={idx} lg={4} md={6} className="mb-4">
                                <div className="service-card-premium" data-aos="fade-up">
                                    <Image src={service.img} className="service-img-arch" />
                                    <h3 className="service-card-title">{service.title}</h3>
                                    <p className="service-card-text">{service.text}</p>
                                    <Button as={Link} to="/services" className="service-learn-more-btn">Learn More</Button>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>


            {/* BEAUTIFUL KIND SECTION */}
            <section className="beautiful-kind-section">
                <Row className="g-0 align-items-stretch">
                    <Col lg={6}>
                        <Image
                            src={girl3}
                            className="beautiful-kind-image"
                        />
                    </Col>
                    <Col lg={6}>
                        <div className="beautiful-kind-content-col">
                            <div className="beautiful-kind-text-wrapper">
                                <h3 className="beautiful-kind-be-your">Be your</h3>
                                <h2 className="beautiful-kind-own-kind">Own Kind</h2>
                                <h3 className="beautiful-kind-of">of</h3>
                                <h2 className="beautiful-kind-beautiful">Beautiful</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

            {/* final SECTION */}
            <section className="banner-section">
                <Container>
                    <Row className="g-0 align-items-center">
                        <Col lg={6} className="progress-image-col">
                            <div className="team-arch-wrapper">
                                <div className="team-arch-bg"></div>
                                <Image
                                    src={girlPortrait}
                                    className="progress-image"
                                    data-aos="fade-up"
                                />

                            </div>
                        </Col>
                        <Col lg={6} className="progress-content-col">
                            {/* Decorative Leaf Image at the top right */}

                            <h1 className="progress-title">Meet The Team</h1>
                            <h2 className="progress-subtitle">About Team</h2>
                            <p className="progress-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
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

                            <div className="text-center text-lg-start">
                                <Button as={Link} to="/about" className="progress-section-btn">
                                    See All Team
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* OUR BLOG SECTION */}
            <section className="blog-section-main">
                <Container>
                    <div className="blog-header">
                        <h1 className="blog-title-main">Our Blog</h1>
                        <h2 className="blog-subtitle-script">Story</h2>
                        <p className="blog-description-top">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
                        </p>
                    </div>
                    <Row>
                        {[
                            {
                                title: 'Hair Curly',
                                img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/brides-hair-detail-with-curls-close-up-3Q3ULB8-879x1024.jpg',
                                desc: 'Lorem ipsum dolor sit amet'
                            },
                            {
                                title: 'Style Wedding',
                                img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/hairdresser-coiffeur-makes-hairstyle-P9CB2GF-879x1024.jpg',
                                desc: 'Lorem ipsum dolor sit amet'
                            },
                            {
                                title: 'Sale Hair Care',
                                img: 'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/washing-off-hair-care-products-in-the-beauty-salon-NAYED3R-879x1024.jpg',
                                desc: 'Lorem ipsum dolor sit amet'
                            }
                        ].map((blog, idx) => (
                            <Col key={idx} lg={4} md={6}>
                                <div className="blog-card-custom" data-aos="fade-up">
                                    <div className="blog-card-img-wrapper">
                                        <Image src={blog.img} className="blog-card-img" />
                                    </div>
                                    <h3 className="blog-card-title">{blog.title}</h3>
                                    <p className="blog-card-text">{blog.desc}</p>
                                    <Link to="/blog" className="blog-read-more">Read More</Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            {/* OUR GALLERY SECTION */}
            <section className="gallery-section-premium">
                <Image
                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-11.png"
                    className="gallery-monstera-leaf d-none d-lg-block"
                />
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
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
                        <Col lg={5} className="gallery-content-col">
                            <h1 className="gallery-title">Our Gallery</h1>
                            <h2 className="gallery-subtitle">Photograph</h2>
                            <p className="gallery-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <Button as={Link} to="/gallery" className="gallery-btn">
                                Learn More
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    );
};

export default HomeScreen;

