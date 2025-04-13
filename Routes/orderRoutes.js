const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrders,
  updateOrderStatus
} = require('../Controller/orderController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createOrder);
router.get('/', protect, getOrders);
router.put('/:id', protect, updateOrderStatus);

module.exports = router;
