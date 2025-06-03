const express = require('express');
const { getReviewsByProduct, addReview } = require('../controllers/reviewController');

const router = express.Router();

router.get('/:productId', getReviewsByProduct);
router.post('/', addReview);

module.exports = router;
