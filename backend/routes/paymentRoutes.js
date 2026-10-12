// // // const express = require("express");
// // // const router = express.Router();
// // // const {
// // //   createRazorpayOrder,
// // //   verifyPayment,
// // // } = require("../controllers/paymentController");
// // // const { protect } = require("../middleware/auth");

// // // router.post("/create-order", protect, createRazorpayOrder);
// // // router.post("/verify", protect, verifyPayment);

// // // module.exports = router;

// // const express = require("express");
// // const router = express.Router();
// // const {
// //   createUpiOrder,
// //   verifyUpiPayment,
// // } = require("../controllers/paymentController");
// // const { protect } = require("../middleware/auth");

// // router.post("/create-upi-order", protect, createUpiOrder);
// // router.post("/verify-upi", protect, verifyUpiPayment);

// // module.exports = router;

// const express = require("express");
// const router = express.Router();
// const {
//   createUpiOrder,
//   verifyUpiPayment,
//   autoVerifyUpiPayment,
// } = require("../controllers/paymentController");
// const { protect } = require("../middleware/authMiddleware");

// // Customer checkout and manual UTR submission routes (Protected)
// router.post("/create-upi-order", protect, createUpiOrder);
// router.post("/verify-upi", protect, verifyUpiPayment);

// // Automated SMS/Notification Webhook route (Open for phone notification listener app)
// router.post("/auto-verify", autoVerifyUpiPayment);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createUpiOrder,
  autoVerifyUpiPayment,
} = require("../controllers/paymentController");

// Aapke project ke mutabiq middleware ka sahi path (agar folder ka naam alag ho toh bata dena)
const { protect } = require("../middleware/auth"); // ya '../middlewares/authMiddleware'

// Customer checkout route (Protected)
router.post("/create-upi-order", protect, createUpiOrder);

// Automated SMS/Notification Webhook route (Open for phone notification app to hit)
router.post("/auto-verify", autoVerifyUpiPayment);

module.exports = router;
