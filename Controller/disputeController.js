const Dispute = require('../Model/Dispute');

exports.createDispute = async (req, res) => {
  try {
    const { orderId, reason } = req.body;
    const dispute = await Dispute.create({ orderId, reason });
    res.status(201).json(dispute);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDisputes = async (req, res) => {
  try {
    const disputes = await Dispute.find().populate('orderId');
    res.json(disputes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.resolveDispute = async (req, res) => {
  try {
    const dispute = await Dispute.findByIdAndUpdate(req.params.id, { status: 'resolved' }, { new: true });
    res.json(dispute);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
