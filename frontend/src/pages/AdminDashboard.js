import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Nav, Card, Table, Button, Modal, Form, Badge, Alert, Spinner, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaChartBar, FaCalendarCheck, FaEnvelopeOpenText, FaCut, FaUserFriends, FaUsersCog, FaPlus, FaEdit, FaTrash, FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import '../style/Admin.css';

const AdminDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [users, setUsers] = useState([]);
    const [services, setServices] = useState([]);
    const [stylists, setStylists] = useState([]);
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Modal States
    const [showServiceModal, setShowServiceModal] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [showStylistModal, setShowStylistModal] = useState(false);
    const [editingStylist, setEditingStylist] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [serviceForm, setServiceForm] = useState({
        title: '',
        description: '',
        price: '',
        duration: '',
        image: '',
        category: 'Styling'
    });
    const [stylistForm, setStylistForm] = useState({
        name: '',
        bio: '',
        specialties: '',
        image: '',
    });

    const navigate = useNavigate();

    // User check for security
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (!userInfo || !userInfo.isAdmin) {
            navigate('/login');
        } else {
            fetchData();
        }
    }, [navigate]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const [appts, usrs, svcs, styls, inqs] = await Promise.all([
                axios.get('http://localhost:5000/api/appointments', config),
                axios.get('http://localhost:5000/api/users', config),
                axios.get('http://localhost:5000/api/services'),
                axios.get('http://localhost:5000/api/stylists'),
                axios.get('http://localhost:5000/api/contacts', config),
            ]);

            setAppointments(appts.data);
            setUsers(usrs.data);
            setServices(svcs.data);
            setStylists(styls.data);
            setInquiries(inqs.data);
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
            setLoading(false);
        }
    };

    const handleShowServiceModal = (service = null) => {
        setEditingService(service);
        if (service) {
            setServiceForm({
                title: service.title,
                description: service.description,
                price: service.price,
                duration: service.duration,
                image: service.image,
                category: service.category
            });
        } else {
            setServiceForm({ title: '', description: '', price: '', duration: '', image: '', category: 'Styling' });
        }
        setShowServiceModal(true);
    };

    const handleCloseServiceModal = () => {
        setShowServiceModal(false);
        setEditingService(null);
    };

    const handleServiceChange = (e) => {
        setServiceForm({ ...serviceForm, [e.target.name]: e.target.value });
    };

    const handleStylistChange = (e) => {
        setStylistForm({ ...stylistForm, [e.target.name]: e.target.value });
    };

    const handleShowStylistModal = (stylist = null) => {
        setEditingStylist(stylist);
        if (stylist) {
            setStylistForm({
                name: stylist.name,
                bio: stylist.bio,
                specialties: Array.isArray(stylist.specialties) ? stylist.specialties.join(', ') : stylist.specialties,
                image: stylist.image,
            });
        } else {
            setStylistForm({ name: '', bio: '', specialties: '', image: '' });
        }
        setShowStylistModal(true);
    };

    const handleCloseStylistModal = () => {
        setShowStylistModal(false);
        setEditingStylist(null);
    };

    const uploadFileHandler = async (e, type = 'service') => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            const { data } = await axios.post('http://localhost:5000/api/upload', formData, config);
            if (type === 'service') {
                setServiceForm({ ...serviceForm, image: data });
            } else {
                setStylistForm({ ...stylistForm, image: data });
            }
            setUploading(false);
        } catch (error) {
            console.error(error);
            alert('Image upload failed');
            setUploading(false);
        }
    };

    const handleServiceSubmit = async (e) => {
        e.preventDefault();
        try {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            if (editingService) {
                await axios.put(`http://localhost:5000/api/services/${editingService._id}`, serviceForm, config);
            } else {
                await axios.post('http://localhost:5000/api/services', serviceForm, config);
            }

            handleCloseServiceModal();
            fetchData();
        } catch (err) {
            alert(err.response?.data?.message || 'Operation failed');
        }
    };

    const deleteService = async (id) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            try {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                };
                await axios.delete(`http://localhost:5000/api/services/${id}`, config);
                fetchData();
            } catch (err) {
                alert('Failed to delete service');
            }
        }
    };

    const handleStylistSubmit = async (e) => {
        e.preventDefault();
        try {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const submitData = {
                ...stylistForm,
                specialties: stylistForm.specialties.split(',').map(s => s.trim())
            };

            if (editingStylist) {
                await axios.put(`http://localhost:5000/api/stylists/${editingStylist._id}`, submitData, config);
            } else {
                await axios.post('http://localhost:5000/api/stylists', submitData, config);
            }

            handleCloseStylistModal();
            fetchData();
        } catch (err) {
            alert(err.response?.data?.message || 'Operation failed');
        }
    };

    const deleteStylist = async (id) => {
        if (window.confirm('Are you sure you want to delete this stylist?')) {
            try {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                };
                await axios.delete(`http://localhost:5000/api/stylists/${id}`, config);
                fetchData();
            } catch (err) {
                alert('Failed to delete stylist');
            }
        }
    };

    const deleteInquiry = async (id) => {
        if (window.confirm('Are you sure you want to delete this inquiry?')) {
            try {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                };
                await axios.delete(`http://localhost:5000/api/contacts/${id}`, config);
                fetchData();
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to delete inquiry');
            }
        }
    };

    const deleteUser = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                };
                await axios.delete(`http://localhost:5000/api/users/${id}`, config);
                fetchData();
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to delete user');
            }
        }
    };

    const updateStatus = async (id, status) => {
        try {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };
            await axios.put(`http://localhost:5000/api/appointments/${id}/status`, { status }, config);
            fetchData();
        } catch (err) {
            alert('Failed to update status');
        }
    };

    const deleteAppointment = async (id) => {
        if (window.confirm('Are you sure you want to delete this appointment?')) {
            try {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                };
                await axios.delete(`http://localhost:5000/api/appointments/${id}`, config);
                fetchData();
            } catch (err) {
                alert('Failed to delete appointment');
            }
        }
    };

    if (loading) {
        return (
            <div className="admin-dashboard-wrapper d-flex flex-column align-items-center justify-content-center">
                <FaSpinner className="fa-spin display-4 mb-3" style={{ color: '#2F3E2F' }} />
                <p className="fw-bold" style={{ color: '#2F3E2F', letterSpacing: '1px' }}>SYNCHRONIZING SALON DATA...</p>
            </div>
        );
    }

    return (
        <div className="admin-dashboard-wrapper">
            <Container fluid className="px-lg-5">
                <Row className="mb-5">
                    <Col>
                        <h1 className="text-center display-6" style={{ fontFamily: 'Cormorant', fontWeight: '700', color: '#2F3E2F' }}>
                            MANAGEMENT <span style={{ color: '#99bd5b' }}>HUB</span>
                        </h1>
                    </Col>
                </Row>

                {error && <Alert variant="danger" className="rounded-4 shadow-sm">{error}</Alert>}

                <Tab.Container id="admin-tabs" defaultActiveKey="overview">
                    <Row>
                        <Col lg={3} xl={2} className="mb-4">
                            <Nav className="flex-column admin-sidebar sticky-top">
                                <Nav.Item>
                                    <Nav.Link eventKey="overview"><FaChartBar className="me-3" /> Overview</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="appointments"><FaCalendarCheck className="me-3" /> Bookings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="messages"><FaEnvelopeOpenText className="me-3" /> Messages</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="services"><FaCut className="me-3" /> Services</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="stylists"><FaUserFriends className="me-3" /> Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="users"><FaUsersCog className="me-3" /> Users</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col lg={9} xl={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="overview">
                                    <div className="admin-content-pane">
                                        <div className="pane-header">
                                            <h3>Dashboard Overview</h3>
                                        </div>
                                        <Row className="g-4">
                                            <Col sm={6} md={3}>
                                                <Card className="stat-card bg-primary-light shadow-sm">
                                                    <Card.Body>
                                                        <div className="stat-value">{appointments.length}</div>
                                                        <div className="stat-label">Bookings</div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col sm={6} md={3}>
                                                <Card className="stat-card bg-success-light shadow-sm">
                                                    <Card.Body>
                                                        <div className="stat-value">{users.length}</div>
                                                        <div className="stat-label">Clients</div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col sm={6} md={3}>
                                                <Card className="stat-card bg-warning-light shadow-sm">
                                                    <Card.Body>
                                                        <div className="stat-value">{inquiries.length}</div>
                                                        <div className="stat-label">Messages</div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col sm={6} md={3}>
                                                <Card className="stat-card bg-info-light shadow-sm">
                                                    <Card.Body>
                                                        <div className="stat-value">{stylists.length}</div>
                                                        <div className="stat-label">Team</div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="appointments">
                                    <div className="admin-content-pane">
                                        <div className="pane-header d-flex justify-content-between align-items-center">
                                            <h3>Active Bookings</h3>
                                            <Badge className="badge-custom" style={{ backgroundColor: '#2F3E2F' }}>{appointments.length} Total</Badge>
                                        </div>
                                        <Table hover responsive className="admin-table">
                                            <thead>
                                                <tr>
                                                    <th>Client Details</th>
                                                    <th>Service</th>
                                                    <th>Total Price</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {appointments.map((appt) => (
                                                    <tr key={appt._id}>
                                                        <td>
                                                            <div className="fw-bold">{appt.name || appt.user?.name || 'Guest'}</div>
                                                            <div className="small text-muted">{appt.email || appt.user?.email || 'N/A'}</div>
                                                        </td>
                                                        <td>{appt.service?.title}</td>
                                                        <td className="fw-bold" style={{ color: '#99bd5b' }}>
                                                            ${appt.service?.price || '0'}
                                                        </td>
                                                        <td>{new Date(appt.date).toLocaleDateString()}</td>
                                                        <td>
                                                            <Badge className="badge-custom" bg={
                                                                appt.status === 'Completed' ? 'success' :
                                                                    appt.status === 'Pending' ? 'warning' : 'info'
                                                            }>{appt.status}</Badge>
                                                        </td>
                                                        <td >
                                                            <div className="d-flex align-items-center">
                                                                <Form.Select
                                                                    size="sm"
                                                                    className="modern-form-control me-2"
                                                                    style={{ width: '130px' }}
                                                                    value={appt.status}
                                                                    onChange={(e) => updateStatus(appt._id, e.target.value)}
                                                                >
                                                                    <option value="Pending">Pending</option>
                                                                    <option value="Confirmed">Confirmed</option>
                                                                    <option value="Completed">Completed</option>
                                                                    <option value="Cancelled">Cancelled</option>
                                                                </Form.Select>
                                                                <Button variant="link" className="text-danger p-0" onClick={() => deleteAppointment(appt._id)}>
                                                                    <FaTrash />
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="messages">
                                    <div className="admin-content-pane">
                                        <div className="pane-header d-flex justify-content-between align-items-center">
                                            <h3>Client Messages</h3>
                                            <Badge className="badge-custom" bg="warning" style={{ color: '#000' }}>{inquiries.length} New</Badge>
                                        </div>
                                        <Row>
                                            {inquiries.map((inq) => (
                                                <Col md={6} key={inq._id} className="mb-4">
                                                    <Card className="h-100 border-0 shadow-sm bg-light" style={{ borderRadius: '15px' }}>
                                                        <Card.Body>
                                                            <div className="d-flex justify-content-between mb-3">
                                                                <div>
                                                                    <div className="fw-bold" style={{ color: '#2F3E2F' }}>{inq.name}</div>
                                                                    <div className="small text-muted">{inq.email}</div>
                                                                </div>
                                                                <small className="text-muted">{new Date(inq.createdAt).toLocaleDateString()}</small>
                                                            </div>
                                                            <Card.Text className="text-dark" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                                                                {inq.message}
                                                            </Card.Text>
                                                            <div className="text-end mt-3">
                                                                <Button variant="link" className="text-danger p-0" onClick={() => deleteInquiry(inq._id)}><FaTrash className="me-1" /> Delete</Button>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            {inquiries.length === 0 && <Col><p className="text-center text-muted py-5 mt-4 border-top">No messages found.</p></Col>}
                                        </Row>
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="services">
                                    <div className="admin-content-pane">
                                        <div className="pane-header d-flex justify-content-between align-items-center">
                                            <h3>Salon Services</h3>
                                            <Button className="btn-admin btn-admin-primary" onClick={() => handleShowServiceModal()}>
                                                <FaPlus className="me-2" /> Add Service
                                            </Button>
                                        </div>
                                        <Table hover responsive className="admin-table">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Title</th>
                                                    <th>Category</th>
                                                    <th>Price</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {services.map((svc) => (
                                                    <tr key={svc._id}>
                                                        <td><Image src={svc.image.startsWith('/') ? `http://localhost:5000${svc.image}` : svc.image} style={{ width: '45px', height: '45px', objectFit: 'cover' }} rounded /></td>
                                                        <td className="fw-bold">{svc.title}</td>
                                                        <td><Badge bg="secondary" className="badge-custom text-uppercase" style={{ fontSize: '0.65rem' }}>{svc.category}</Badge></td>
                                                        <td className="fw-bold" style={{ color: '#99bd5b' }}>${svc.price}</td>
                                                        <td>
                                                            <Button variant="link" size="sm" className="text-dark me-2" onClick={() => handleShowServiceModal(svc)}><FaEdit /></Button>
                                                            <Button variant="link" size="sm" className="text-danger" onClick={() => deleteService(svc._id)}><FaTrash /></Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="stylists">
                                    <div className="admin-content-pane">
                                        <div className="pane-header d-flex justify-content-between align-items-center">
                                            <h3>Team Members</h3>
                                            <Button className="btn-admin btn-admin-primary" onClick={() => handleShowStylistModal()}>
                                                <FaPlus className="me-2" /> Add Stylist
                                            </Button>
                                        </div>
                                        <Table hover responsive className="admin-table">
                                            <thead>
                                                <tr>
                                                    <th>Profile</th>
                                                    <th>Name</th>
                                                    <th>Specialties</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {stylists.map((sty) => (
                                                    <tr key={sty._id}>
                                                        <td><Image src={sty.image.startsWith('/') ? `http://localhost:5000${sty.image}` : sty.image} style={{ width: '45px', height: '45px', objectFit: 'cover' }} roundedCircle /></td>
                                                        <td className="fw-bold">{sty.name}</td>
                                                        <td>
                                                            {sty.specialties && (Array.isArray(sty.specialties) ? sty.specialties : [sty.specialties]).map((s, idx) => (
                                                                <Badge key={idx} className="badge-custom me-1" style={{ backgroundColor: '#e8f5e9', color: '#2F3E2F', border: '1px solid #d1e7dd' }}>{s}</Badge>
                                                            ))}
                                                        </td>
                                                        <td>
                                                            <Button variant="link" size="sm" className="text-dark me-2" onClick={() => handleShowStylistModal(sty)}><FaEdit /></Button>
                                                            <Button variant="link" size="sm" className="text-danger" onClick={() => deleteStylist(sty._id)}><FaTrash /></Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="users">
                                    <div className="admin-content-pane">
                                        <div className="pane-header d-flex justify-content-between align-items-center">
                                            <h3>Clients & Staff</h3>
                                            <Badge bg="dark" className="badge-custom">{users.length} Active Users</Badge>
                                        </div>
                                        <Table hover responsive className="admin-table">
                                            <thead>
                                                <tr>
                                                    <th>User Details</th>
                                                    <th>Role</th>
                                                    <th>Joined</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.map((u) => (
                                                    <tr key={u._id}>
                                                        <td>
                                                            <div className="fw-bold">{u.name}</div>
                                                            <div className="small text-muted">{u.email}</div>
                                                        </td>
                                                        <td>
                                                            <Badge className="badge-custom text-uppercase" bg={u.role === 'Admin' ? 'danger' : 'success'}>
                                                                {u.role}
                                                            </Badge>
                                                        </td>
                                                        <td>{u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'N/A'}</td>
                                                        <td>
                                                            <Button variant="link" size="sm" className="text-danger" disabled={u.role === 'Admin'} onClick={() => deleteUser(u._id)}>Delete</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

                {/* Service Modal */}
                <Modal show={showServiceModal} onHide={handleCloseServiceModal} centered className="admin-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>{editingService ? 'Modernize Service' : 'Curate New Service'}</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleServiceSubmit}>
                        <Modal.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Service Title</Form.Label>
                                <Form.Control type="text" name="title" value={serviceForm.title} onChange={handleServiceChange} required placeholder="e.g. Signature Haircut" />
                            </Form.Group>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Price ($)</Form.Label>
                                        <Form.Control type="number" name="price" value={serviceForm.price} onChange={handleServiceChange} required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Duration (min)</Form.Label>
                                        <Form.Control type="number" name="duration" value={serviceForm.duration} onChange={handleServiceChange} required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Service Category</Form.Label>
                                <Form.Select name="category" value={serviceForm.category} onChange={handleServiceChange}>
                                    <option value="Styling">Styling</option>
                                    <option value="Cutting">Cutting</option>
                                    <option value="Coloring">Coloring</option>
                                    <option value="Spa">Spa</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Visual Asset</Form.Label>
                                <Form.Control type="text" name="image" value={serviceForm.image} onChange={handleServiceChange} placeholder="Enter image URL" className="mb-3" />
                                <div className="p-3 border rounded-3 bg-light text-center">
                                    <Form.Control type="file" onChange={(e) => uploadFileHandler(e, 'service')} />
                                    {uploading && <Spinner animation="border" size="sm" className="mt-2" style={{ color: '#2F3E2F' }} />}
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} name="description" value={serviceForm.description} onChange={handleServiceChange} required placeholder="Detail the luxury experience..." />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer className="border-0">
                            <Button variant="light" className="rounded-pill px-4" onClick={handleCloseServiceModal}>Dismiss</Button>
                            <Button className="btn-admin btn-admin-primary rounded-pill px-4" type="submit">
                                {editingService ? 'Save Changes' : 'Publish Service'}
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                {/* Stylist Modal */}
                <Modal show={showStylistModal} onHide={handleCloseStylistModal} centered className="admin-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>{editingStylist ? 'Update Artisan' : 'Welcome New Artist'}</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleStylistSubmit}>
                        <Modal.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Artisan Name</Form.Label>
                                <Form.Control type="text" name="name" value={stylistForm.name} onChange={handleStylistChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Artisan Specialties</Form.Label>
                                <Form.Control type="text" name="specialties" value={stylistForm.specialties} onChange={handleStylistChange} placeholder="e.g. Master Stylist, Color Alchemist" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Visual Profile</Form.Label>
                                <Form.Control type="text" name="image" value={stylistForm.image} onChange={handleStylistChange} placeholder="Enter portfolio URL" className="mb-3" />
                                <div className="p-3 border rounded-3 bg-light text-center">
                                    <Form.Control type="file" onChange={(e) => uploadFileHandler(e, 'stylist')} />
                                    {uploading && <Spinner animation="border" size="sm" className="mt-2" style={{ color: '#2F3E2F' }} />}
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Artisan Bio</Form.Label>
                                <Form.Control as="textarea" rows={3} name="bio" value={stylistForm.bio} onChange={handleStylistChange} required placeholder="A brief about their artistic journey..." />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer className="border-0">
                            <Button variant="light" className="rounded-pill px-4" onClick={handleCloseStylistModal}>Dismiss</Button>
                            <Button className="btn-admin btn-admin-primary rounded-pill px-4" type="submit">
                                {editingStylist ? 'Save Updates' : 'Induct Stylist'}
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </Container>
        </div>
    );
};

export default AdminDashboard;
