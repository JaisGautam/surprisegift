const express = require("express");
const router = express.Router();
const {
  getMyOrders,
  trackOrder,
  getAllOrdersAdmin,
  updateOrderStatusAdmin,
} = require("../controllers/orderController");
const { protect, adminOnly } = require("../middleware/auth");

router.get("/my-orders", protect, getMyOrders);
router.get("/track/:orderId", trackOrder);
router.get("/admin/all", protect, adminOnly, getAllOrdersAdmin);
router.put("/admin/:id/status", protect, adminOnly, updateOrderStatusAdmin);

module.exports = router;
