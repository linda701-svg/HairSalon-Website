const express = require('express');
const router = express.Router();
const { addAppointmentItems, getAppointmentById, getMyAppointments, getAppointments, updateAppointmentStatus, deleteAppointment } = require('../controllers/appointmentController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(protect, addAppointmentItems).get(protect, admin, getAppointments);
router.route('/myappointments').get(protect, getMyAppointments);
router.route('/:id').get(protect, getAppointmentById).delete(protect, admin, deleteAppointment);
router.route('/:id/status').put(protect, admin, updateAppointmentStatus);

module.exports = router;
