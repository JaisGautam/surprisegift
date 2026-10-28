const Order = require("../models/Order");

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.trackOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findOne({ _id: orderId, user: req.user._id });
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found." });
    }
    res.json({ success: true, order });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid order ID format." });
  }
};

exports.getAllOrdersAdmin = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email phone")
      .sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateOrderStatusAdmin = async (req, res) => {
  try {
    const { orderStatus } = req.body;
    const allowedStatuses = [
      "PENDING_PAYMENT", "VERIFYING_PAYMENT", "CONFIRMED",
      "OUT_FOR_DELIVERY", "DELIVERED", "CANCELLED",
    ];
    if (!allowedStatuses.includes(orderStatus)) {
      return res.status(400).json({ success: false, message: "Invalid order status." });
    }
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus },
      { new: true, runValidators: true },
    );
    if (!order) return res.status(404).json({ success: false, message: "Order not found." });
    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.updatePaymentStatusAdmin = async (req, res) => {
  try {
    const { paymentStatus } = req.body;
    if (!["PAID", "FAILED"].includes(paymentStatus)) {
      return res.status(400).json({ success: false, message: "Payment status must be PAID or FAILED." });
    }
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ success: false, message: "Order not found." });
    order.paymentStatus = paymentStatus;
    if (paymentStatus === "PAID" && ["PENDING_PAYMENT", "VERIFYING_PAYMENT"].includes(order.orderStatus)) {
      order.orderStatus = "CONFIRMED";
    }
    if (paymentStatus === "FAILED") order.orderStatus = "CANCELLED";
    await order.save();
    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: "Unable to update payment status." });
  }
};
