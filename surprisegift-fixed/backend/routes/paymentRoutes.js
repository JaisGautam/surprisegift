const express = require("express");
const router = express.Router();
const {
  createUpiOrder,
  submitUpiReference,
  autoVerifyUpiPayment,
} = require("../controllers/paymentController");
const { protect } = require("../middleware/auth");

router.post("/create-upi-order", protect, createUpiOrder);
router.post("/verify-upi", protect, submitUpiReference);
// Kept temporarily for backwards compatibility; deliberately disabled until a trusted webhook is configured.
router.post("/auto-verify", autoVerifyUpiPayment);

module.exports = router;
