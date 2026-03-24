const express = require('express');
const router = express.Router();
const { getStylists, createStylist, updateStylist, deleteStylist } = require('../controllers/stylistController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getStylists).post(protect, admin, createStylist);
router.route('/:id').put(protect, admin, updateStylist).delete(protect, admin, deleteStylist);

module.exports = router;
