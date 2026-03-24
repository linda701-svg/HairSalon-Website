import React from 'react';
import { Navbar, Nav, Container, Image, Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '../style/Header.css';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" fixed="top" className="header-container py-2">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <Image
                                src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/06/Logo-Cabello.png"
                                alt="Cabello Logo"
                                className="header-logo"
                            />
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto align-items-center">
                            <LinkContainer to="/">
                                <Nav.Link className="header-nav-link mx-2">
                                    Home
                                </Nav.Link>
                            </LinkContainer>
                            <NavDropdown
                                title={<span> About Us</span>}
                                id="contact-nav-dropdown"
                                className="header-nav-link mx-2 custom-navb"
                            >
                                <LinkContainer to="/about">
                                    <NavDropdown.Item>About Us</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/team">
                                    <NavDropdown.Item> Our Team</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>

                            <LinkContainer to="/services">
                                <Nav.Link className="header-nav-link mx-2">
                                    Services
                                </Nav.Link>
                            </LinkContainer>


                            <NavDropdown
                                title={<span> Pricing</span>}
                                id="contact-nav-dropdown"
                                className="header-nav-link mx-2 custom-navb"
                            >
                                <LinkContainer to="/pricing">
                                    <NavDropdown.Item>Pricing</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/gallery">
                                    <NavDropdown.Item>Gallery</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <NavDropdown
                                title={<span>Contact Us</span>}
                                id="contact-nav-dropdown"
                                className="header-nav-link mx-2 custom-navbar-dropdown"
                            >
                                <LinkContainer to="/contact">
                                    <NavDropdown.Item>Contact Us</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/faq">
                                    <NavDropdown.Item>FAQ</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>

                            <LinkContainer to="/login">
                                <Button className="header-book-btn">Book Now</Button>
                            </LinkContainer>
                        </Nav>

                        {/* SOCIAL ICONS & BOOKING BTN (Right side) */}
                        <div className="header-right d-none d-lg-flex align-items-center">
                            <div className="header-socials me-4">
                                <a href="https://www.facebook.com/" className="header-social-icon"><FaFacebookF size={12} /></a>
                                <a href="https://x.com/" className="header-social-icon"><FaTwitter size={12} /></a>
                                <a href="https://www.youtube.com/" className="header-social-icon"><FaYoutube size={12} /></a>
                            </div>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
