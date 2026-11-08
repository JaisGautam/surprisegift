// // // const express = require("express");
// // // const router = express.Router();
// // // const {
// // //   getMyOrders,
// // //   trackOrder,
// // //   getAllOrdersAdmin,
// // //   updateOrderStatusAdmin,
// // //   updatePaymentStatusAdmin,
// // // } = require("../controllers/orderController");
// // // const { protect, adminOnly } = require("../middleware/auth");

// // // router.get("/my-orders", protect, getMyOrders);
// // // router.get("/track/:orderId", protect, trackOrder);
// // // router.get("/admin/all", protect, adminOnly, getAllOrdersAdmin);
// // // router.put("/admin/:id/status", protect, adminOnly, updateOrderStatusAdmin);
// // // router.put("/admin/:id/payment-status", protect, adminOnly, updatePaymentStatusAdmin);

// // // module.exports = router;

// // const express = require("express");
// // const router = express.Router();
// // const Order = require("../models/Order"); // Apna model path check karein

// // // 🔥 1. Order Status Check karne ka Route (Yeh missing tha)
// // router.get("/status/:id", async (req, res) => {
// //   try {
// //     // Database mein orderId se order dhundo
// //     const order = await Order.findOne({ orderId: req.params.id });

// //     if (!order) {
// //       return res.status(404).json({ success: false, error: "Order not found" });
// //     }

// //     // Frontend ko poora order wapas bhejein
// //     res.status(200).json({ success: true, order });
// //   } catch (error) {
// //     console.error("Track Order Error:", error);
// //     res.status(500).json({ success: false, error: "Server error" });
// //   }
// // });

// // module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Order = require("../models/Order");
// const authMiddleware = require("../middleware/auth"); // Aapka auth middleware

// // 1. Track Order (Public)
// router.get("/status/:id", async (req, res) => {
//   try {
//     const order = await Order.findOne({ orderId: req.params.id });
//     if (!order)
//       return res.status(404).json({ success: false, error: "Order not found" });
//     res.status(200).json({ success: true, order });
//   } catch (error) {
//     res.status(500).json({ success: false, error: "Server error" });
//   }
// });

// // 2. User ke saare orders (Profile Page ke liye)
// router.get("/my-orders", authMiddleware, async (req, res) => {
//   try {
//     const orders = await Order.find({
//       "customerDetails.email": req.user.email,
//     }).sort({ createdAt: -1 });
//     res.status(200).json({ success: true, orders });
//   } catch (error) {
//     res.status(500).json({ success: false, error: "Server error" });
//   }
// });

// // 3. Admin: Saare Orders dekhna
// router.get("/admin/all", async (req, res) => {
//   try {
//     const orders = await Order.find().sort({ createdAt: -1 });
//     res.status(200).json({ success: true, orders });
//   } catch (error) {
//     res.status(500).json({ success: false, error: "Server error" });
//   }
// });

// // 4. Admin: Order ka status update karna
// router.put("/admin/:orderId/status", async (req, res) => {
//   try {
//     const { status } = req.body;
//     await Order.findOneAndUpdate({ orderId: req.params.orderId }, { status });
//     res.status(200).json({ success: true, message: "Status updated" });
//   } catch (error) {
//     res.status(500).json({ success: false, error: "Update failed" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Order = require("../models/Order"); // Apna model path check karein

// 1. Track Order (Public)
router.get("/status/:id", async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.id });
    if (!order)
      return res.status(404).json({ success: false, error: "Order not found" });
    res.status(200).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// 2. User ke saare orders
router.get("/my-orders", async (req, res) => {
  try {
    // Filhaal bina auth ke saare orders fetch kar rahe hain (testing ke liye)
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// 3. Admin: Saare Orders
router.get("/admin/all", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// 4. Admin: Order Status Update
router.put("/admin/:orderId/status", async (req, res) => {
  try {
    const { status } = req.body;
    await Order.findOneAndUpdate({ orderId: req.params.orderId }, { status });
    res.status(200).json({ success: true, message: "Status updated" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Update failed" });
  }
});

module.exports = router;
