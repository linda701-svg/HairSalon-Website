import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col, Card, Alert, Spinner, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaChevronRight, FaCalendarAlt, FaClock, FaUserTie, FaConciergeBell } from 'react-icons/fa';
import axios from 'axios';
import '../style/Booking.css';

const BookingScreen = () => {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        service: '',
        stylist: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phoneno: '',
        location: '',
        city: ''
    });
    const [services, setServices] = useState([]);
    const [stylists, setStylists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setDataLoading(true);
                const [svcRes, styRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/services'),
                    axios.get('http://localhost:5000/api/stylists')
                ]);
                setServices(svcRes.data);
                setStylists(styRes.data);
                setDataLoading(false);
            } catch (err) {
                setError('Failed to load services or stylists. Please try again later.');
                setDataLoading(false);
            }
        };
        fetchData();
    }, []);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const confirmBooking = async () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (!userInfo) {
            navigate('/login?redirect=booking');
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const combinedDate = new Date(`${bookingData.date}T${bookingData.time}`);

            await axios.post(
                'http://localhost:5000/api/appointments',
                {
                    service: bookingData.service,
                    stylist: bookingData.stylist,
                    date: combinedDate,
                    name: bookingData.name,
                    email: bookingData.email,
                    phoneno: bookingData.phoneno,
                    location: bookingData.location,
                    city: bookingData.city,
                },
                config
            );

            setLoading(false);
            setMessage('Your appointment has been booked successfully! Redirecting...');
            setTimeout(() => navigate('/'), 2500);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
            setLoading(false);
        }
    };

    if (dataLoading) {
        return (
            <div className="booking-page-wrapper d-flex align-items-center justify-content-center">
                <Spinner animation="border" style={{ color: '#2F3E2F' }} />
                <p className="ms-3 mb-0">Setting up the salon for you...</p>
            </div>
        )
    }

    const progressWidth = ((step - 1) / 3) * 80 + '%';

    return (
        <div className="booking-page-wrapper">
            <Container>
                <Card className="booking-main-card">
                    {/* Stepper Section */}
                    <div className="booking-stepper">
                        <div className="stepper-line"></div>
                        <div className="stepper-progress" style={{ width: progressWidth }}></div>

                        <div className={`step-item ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                            <div className="step-circle">{step > 1 ? <FaCheck /> : '1'}</div>
                            <div className="step-label">Service</div>
                        </div>

                        <div className={`step-item ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                            <div className="step-circle">{step > 2 ? <FaCheck /> : '2'}</div>
                            <div className="step-label">Stylist</div>
                        </div>

                        <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
                            <div className="step-circle">3</div>
                            <div className="step-label">Schedule</div>
                        </div>
                    </div>

                    <div className="booking-content-area">
                        {message && <Alert variant="success" className="rounded-3 shadow-sm mb-4">{message}</Alert>}
                        {error && <Alert variant="danger" className="rounded-3 shadow-sm mb-4">{error}</Alert>}

                        {/* Step 1: Select Service */}
                        {step === 1 && (
                            <div className="animate-in">
                                <h2 className="step-title">Select Service</h2>
                                <div className="selection-grid">
                                    {services.map(s => (
                                        <div
                                            key={s._id}
                                            className={`selection-card ${bookingData.service === s._id ? 'selected' : ''}`}
                                            onClick={() => setBookingData({ ...bookingData, service: s._id })}
                                        >
                                            <div className="card-info">
                                                <h5>{s.title}</h5>
                                                <p>{s.category || 'Professional Hair Care'}</p>
                                            </div>
                                            <div className="price-tag">${s.price}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="booking-navigation">
                                    <Button
                                        className="btn-nav btn-nav-next"
                                        onClick={nextStep}
                                        disabled={!bookingData.service}
                                    >
                                        Choose Stylist <FaChevronRight className="ms-2" size={12} />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Select Stylist */}
                        {step === 2 && (
                            <div className="animate-in">
                                <h2 className="step-title">Choose Your Stylist</h2>
                                <div className="selection-grid">
                                    {stylists.map(s => (
                                        <div
                                            key={s._id}
                                            className={`selection-card ${bookingData.stylist === s._id ? 'selected' : ''}`}
                                            onClick={() => setBookingData({ ...bookingData, stylist: s._id })}
                                        >
                                            <div className="card-info">
                                                <h5>{s.name}</h5>
                                                <p>{Array.isArray(s.specialties) ? s.specialties[0] : s.specialty || 'Hair Expert'}</p>
                                            </div>
                                            <div className="price-tag"><FaUserTie /></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="booking-navigation">
                                    <Button className="btn-nav btn-nav-prev" onClick={prevStep}>Back</Button>
                                    <Button
                                        className="btn-nav btn-nav-next"
                                        onClick={nextStep}
                                        disabled={!bookingData.stylist}
                                    >
                                        Set Time <FaChevronRight className="ms-2" size={12} />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Select Schedule */}
                        {step === 3 && (
                            <div className="animate-in">
                                <h2 className="step-title">Pick a Date & Time</h2>
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <div className="modern-input-group">
                                                <label className="modern-input-label"><FaCalendarAlt className="me-2" /> Booking Date</label>
                                                <Form.Control
                                                    type="date"
                                                    value={bookingData.date}
                                                    required
                                                    className="modern-form-control"
                                                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                                                />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="modern-input-group">
                                                <label className="modern-input-label"><FaClock className="me-2" /> Preferred Time</label>
                                                <Form.Control
                                                    type="time"
                                                    value={bookingData.time}
                                                    required
                                                    className="modern-form-control"
                                                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                                                />
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="mt-5 p-4 rounded-4 bg-light text-center border">
                                        <h5 className="mb-2" style={{ color: '#2F3E2F' }}>Appointment Summary</h5>
                                        <p className="mb-1 text-dark fw-bold">
                                            {services.find(s => s._id === bookingData.service)?.title}
                                        </p>
                                        <p className="mb-2 text-muted">
                                            with {stylists.find(s => s._id === bookingData.stylist)?.name}
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                            <span className="text-muted small text-uppercase fw-bold">Total Price</span>
                                            <span className="fs-4 fw-bold" style={{ color: '#99bd5b' }}>
                                                ${services.find(s => s._id === bookingData.service)?.price}
                                            </span>
                                        </div>
                                        <p className="small text-muted mt-2">{bookingData.date} at {bookingData.time}</p>
                                    </div>

                                    <div className="booking-navigation mt-4">
                                        <Button className="btn-nav btn-nav-prev" onClick={prevStep}>Back</Button>
                                        <Button
                                            className="btn-nav btn-nav-confirm"
                                            onClick={confirmBooking}
                                            disabled={!bookingData.date || !bookingData.time || loading}
                                        >
                                            {loading ? <Spinner animation="border" size="sm" /> : 'Confirm Booking'}
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        )}


                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default BookingScreen;
