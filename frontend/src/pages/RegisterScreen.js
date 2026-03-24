import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Container, Alert, Image, Spinner } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaLock } from 'react-icons/fa';
import axios from 'axios';
import registerimage from '../assets/register.png';
import '../style/Login.css';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('Customer');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage(null);

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            setLoading(true);
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axios.post(
                'http://localhost:5000/api/users',
                { name, email, password, phone, role },
                config
            );

            localStorage.setItem('userInfo', JSON.stringify(data));

            setLoading(false);
            setMessage('Registration successful! Redirecting...');

            // Short delay to show success message before redirect
            setTimeout(() => {
                if (data.role === 'Admin' || data.isAdmin) {
                    navigate('/admin');
                } else {
                    navigate('/login');
                }
            }, 1500);
        } catch (err) {
            setError(
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message
            );
            setLoading(false);
        }
    };

    return (
        <div className="login-page-wrapper">
            <Container className="login-container-custom" style={{ padding: '40px 60px' }}>
                {/* Left Side: Illustration */}
                <div className="login-illustration-side d-none d-lg-flex">
                    <Image
                        src={registerimage}
                        alt="Register Illustration"
                        className="login-illustration-img"
                    />
                </div>

                {/* Right Side: Form */}
                <div className="login-form-side">
                    <div className="login-header-text" style={{ marginBottom: '25px' }}>
                        <p>Get Started</p>
                        <h1>Create Account</h1>
                        <p className="small">Please fill in the details to sign up</p>
                    </div>

                    {message && <Alert variant={message.includes('successful') ? 'success' : 'danger'} className="rounded-3">{message}</Alert>}
                    {error && <Alert variant="danger" className="rounded-3">{error}</Alert>}

                    <Form onSubmit={submitHandler}>
                        <Row>
                            <Col md={6}>
                                <div className="custom-input-group">
                                    <FaUser className="input-icon" />
                                    <Form.Control
                                        type="text"
                                        placeholder="Full Name"
                                        value={name}
                                        required
                                        className="custom-form-control"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="custom-input-group">
                                    <FaEnvelope className="input-icon" />
                                    <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        required
                                        className="custom-form-control"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <div className="custom-input-group">
                                    <FaPhone className="input-icon" />
                                    <Form.Control
                                        type="text"
                                        placeholder="Phone Number"
                                        value={phone}
                                        required
                                        className="custom-form-control"
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="custom-input-group">
                                    <FaBriefcase className="input-icon" />
                                    <Form.Select
                                        value={role}
                                        className="custom-form-select"
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <option value="Customer">Customer</option>
                                        <option value="Admin">Admin</option>
                                    </Form.Select>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <div className="custom-input-group">
                                    <FaLock className="input-icon" />
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        required
                                        className="custom-form-control"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="custom-input-group">
                                    <FaLock className="input-icon" />
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        required
                                        className="custom-form-control"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100 login-btn-custom shadow-sm"
                            disabled={loading}
                        >
                            {loading ? <Spinner animation="border" size="sm" /> : 'Register Now'}
                        </Button>
                    </Form>

                    <div className="login-footer-text">
                        Already have an account? <Link to="/login">Sign In</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RegisterScreen;
