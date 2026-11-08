// const express = require("express");
// const router = express.Router();
// const {
//   getMyOrders,
//   trackOrder,
//   getAllOrdersAdmin,
//   updateOrderStatusAdmin,
//   updatePaymentStatusAdmin,
// } = require("../controllers/orderController");
// const { protect, adminOnly } = require("../middleware/auth");

// router.get("/my-orders", protect, getMyOrders);
// router.get("/track/:orderId", protect, trackOrder);
// router.get("/admin/all", protect, adminOnly, getAllOrdersAdmin);
// router.put("/admin/:id/status", protect, adminOnly, updateOrderStatusAdmin);
// router.put("/admin/:id/payment-status", protect, adminOnly, updatePaymentStatusAdmin);

// module.exports = router;

const express = require("express");
const router = express.Router();
const Order = require("../models/Order"); // Apna model path check karein

// 🔥 1. Order Status Check karne ka Route (Yeh missing tha)
router.get("/status/:id", async (req, res) => {
  try {
    // Database mein orderId se order dhundo
    const order = await Order.findOne({ orderId: req.params.id });

    if (!order) {
      return res.status(404).json({ success: false, error: "Order not found" });
    }

    // Frontend ko poora order wapas bhejein
    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error("Track Order Error:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
