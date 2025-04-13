const express = require('express');
const router = express.Router();
const {
  createDispute,
  getDisputes,
  resolveDispute
} = require('../Controller/disputeController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createDispute);
router.get('/', protect, getDisputes);
router.put('/:id/resolve', protect, resolveDispute);

module.exports = router;
