import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Container, Alert, Image, Spinner } from 'react-bootstrap';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import axios from 'axios';
import loginimage from '../assets/login.png';
import '../style/Login.css';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axios.post(
                'http://localhost:5000/api/users/login',
                { email, password },
                config
            );

            localStorage.setItem('userInfo', JSON.stringify(data));

            setLoading(false);
            if (data.role === 'Admin' || data.isAdmin) {
                navigate('/admin');
            } else {
                navigate('/book');
            }
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
            <Container className="login-container-custom">
                {/* Left Side: Illustration */}
                <div className="login-illustration-side d-none d-lg-flex">
                
                    <Image
                        src={loginimage}
                        alt="Login Illustration"
                        className="login-illustration-img"
                    />
                </div>

                {/* Right Side: Form */}
                <div className="login-form-side">
                    <div className="login-header-text">
                        <p>Welcome Back</p>
                        <h1>Sign In</h1>
                        <p className="small">Please login to continue to your account</p>
                    </div>

                    {error && <Alert variant="danger" className="rounded-3">{error}</Alert>}

                    <Form onSubmit={submitHandler}>
                        <div className="custom-input-group">
                            <FaEnvelope className="input-icon" />
                            <Form.Control
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                required
                                className="custom-form-control"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="custom-input-group">
                            <FaLock className="input-icon" />
                            <Form.Control
                                type="password"
                                placeholder="Your Password"
                                value={password}
                                required
                                className="custom-form-control"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100 login-btn-custom shadow-sm"
                            disabled={loading}
                        >
                            {loading ? <Spinner animation="border" size="sm" /> : 'Log In'}
                        </Button>
                    </Form>

                    <div className="login-footer-text">
                        Don't have an account? <Link to="/register">Register</Link>
                    </div>
                </div>

          
            </Container>
        </div>
    );
};

export default LoginScreen;
