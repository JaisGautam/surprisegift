// // const express = require("express");
// // const router = express.Router();
// // const {
// //   createUpiOrder,
// //   submitUpiReference,
// //   autoVerifyUpiPayment,
// // } = require("../controllers/paymentController");
// // const { protect } = require("../middleware/auth");

// // router.post("/create-upi-order", protect, createUpiOrder);
// // router.post("/verify-upi", protect, submitUpiReference);
// // // Kept temporarily for backwards compatibility; deliberately disabled until a trusted webhook is configured.
// // router.post("/auto-verify", autoVerifyUpiPayment);

// // module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Razorpay = require("razorpay");
// const crypto = require("crypto");
// const Order = require("../models/Order"); // Apne Order model ka sahi path daalein

// // Razorpay Instance
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// // 1. Create Order API
// router.post("/create-order", async (req, res) => {
//   try {
//     const { amount, cartItems, customerDetails } = req.body;

//     if (!amount || amount < 1) {
//       return res.status(400).json({ error: "Amount must be at least 1 INR" });
//     }

//     const options = {
//       amount: Math.round(amount * 100), // INR to Paise
//       currency: "INR",
//       receipt: "receipt_" + Date.now(),
//     };

//     const order = await razorpay.orders.create(options);

//     // Optional: Database mein order save karein (Agar aapke paas Order model hai)
//     /*
//     const newOrder = new Order({
//       orderId: order.id,
//       amount: amount,
//       cartItems,
//       customerDetails,
//       status: 'PENDING'
//     });
//     await newOrder.save();
//     */

//     res.status(200).json({
//       success: true,
//       order_id: order.id,
//       amount: order.amount,
//       currency: order.currency,
//     });
//   } catch (error) {
//     console.error("Create Order Error:", error);
//     res.status(500).json({ error: "Order create nahi ho paya" });
//   }
// });

// // 2. Verify Payment API
// router.post("/verify-payment", async (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//     req.body;

//   if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
//     return res.status(400).json({ error: "Missing payment details" });
//   }

//   try {
//     const body = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(body.toString())
//       .digest("hex");

//     if (expectedSignature === razorpay_signature) {
//       // Payment Verified! Ab database mein order ko SUCCESS karein
//       /*
//       await Order.findOneAndUpdate(
//         { orderId: razorpay_order_id },
//         { status: 'SUCCESS', paymentId: razorpay_payment_id }
//       );
//       */

//       return res
//         .status(200)
//         .json({ success: true, message: "Payment verified successfully" });
//     } else {
//       return res
//         .status(400)
//         .json({ success: false, error: "Invalid signature" });
//     }
//   } catch (error) {
//     console.error("Verification Error:", error);
//     return res.status(500).json({ error: "Verification failed" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");

// Aapke paas Order model pehle se hoga, use import kar lein
// const Order = require("../models/Order");

// Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 1. Create Order API
router.post("/create-order", async (req, res) => {
  try {
    // Frontend se amount (jaise 499, 999), cartItems aur customerDetails aayenge
    const { amount, cartItems, customerDetails } = req.body;

    // Amount Check (Kam se kam 1 Rs hona chahiye, aapke paas 499+ hi honge)
    if (!amount || amount < 1) {
      return res.status(400).json({ error: "Amount must be at least 1 INR" });
    }

    const options = {
      amount: Math.round(amount * 100), // Razorpay paise mein leta hai (499 * 100 = 49900)
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    // Razorpay par order create karein
    const order = await razorpay.orders.create(options);

    // 🔥 YAHAN DATABASE MEIN ORDER SAVE KAREIN 🔥
    // Jab aap 499, 999 ya 2999 ka order karenge, toh ye details DB mein jayengi
    /*
    await Order.create({ 
      orderId: order.id, 
      amount: amount, // 499, 999, etc.
      cartItems: cartItems, // Kis category ka kya item hai
      customerDetails: customerDetails, 
      status: 'PENDING' 
    });
    */

    res.status(200).json({
      success: true,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Create Order Error:", error);
    res.status(500).json({ error: "Order create nahi ho paya" });
  }
});

// 2. Verify Payment API
router.post("/verify-payment", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ error: "Missing payment details" });
  }

  try {
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // Payment Verified!

      // 🔥 YAHAN DATABASE MEIN ORDER STATUS UPDATE KAREIN 🔥
      /*
      await Order.findOneAndUpdate(
        { orderId: razorpay_order_id }, 
        { status: 'SUCCESS', paymentId: razorpay_payment_id }
      );
      */

      return res
        .status(200)
        .json({ success: true, message: "Payment verified successfully" });
    } else {
      return res
        .status(400)
        .json({ success: false, error: "Invalid signature" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Verification failed" });
  }
});

module.exports = router;
