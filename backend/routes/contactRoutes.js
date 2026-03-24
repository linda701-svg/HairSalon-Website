const express = require('express');
const router = express.Router();
const { submitInquiry, getInquiries, deleteInquiry } = require('../controllers/contactController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(submitInquiry).get(protect, admin, getInquiries);
router.route('/:id').delete(protect, admin, deleteInquiry);

module.exports = router;
