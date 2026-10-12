// // // // // const Razorpay = require("razorpay");
// // // // // const crypto = require("crypto");
// // // // // const Order = require("../models/Order");

// // // // // const razorpay = new Razorpay({
// // // // //   key_id: process.env.RAZORPAY_KEY_ID,
// // // // //   key_secret: process.env.RAZORPAY_KEY_SECRET,
// // // // // });

// // // // // exports.createRazorpayOrder = async (req, res) => {
// // // // //   try {
// // // // //     const { items, totalAmount, shippingAddress } = req.body;

// // // // //     if (!items || items.length === 0 || !totalAmount) {
// // // // //       return res.status(400).json({
// // // // //         success: false,
// // // // //         message: "Cart items and total amount are required.",
// // // // //       });
// // // // //     }

// // // // //     const options = {
// // // // //       amount: Math.round(totalAmount * 100),
// // // // //       currency: "INR",
// // // // //       receipt: `receipt_${Date.now()}`,
// // // // //     };

// // // // //     const razorpayOrder = await razorpay.orders.create(options);

// // // // //     const newOrder = new Order({
// // // // //       user: req.user._id,
// // // // //       items,
// // // // //       totalAmount,
// // // // //       shippingAddress,
// // // // //       razorpayOrderId: razorpayOrder.id,
// // // // //       paymentStatus: "PENDING",
// // // // //       orderStatus: "PENDING_PAYMENT",
// // // // //     });

// // // // //     await newOrder.save();

// // // // //     res.status(201).json({
// // // // //       success: true,
// // // // //       razorpayOrder,
// // // // //       dbOrderId: newOrder._id,
// // // // //     });
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ success: false, message: error.message });
// // // // //   }
// // // // // };

// // // // // exports.verifyPayment = async (req, res) => {
// // // // //   try {
// // // // //     const {
// // // // //       razorpay_order_id,
// // // // //       razorpay_payment_id,
// // // // //       razorpay_signature,
// // // // //       dbOrderId,
// // // // //     } = req.body;

// // // // //     const body = razorpay_order_id + "|" + razorpay_payment_id;
// // // // //     const expectedSignature = crypto
// // // // //       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
// // // // //       .update(body.toString())
// // // // //       .digest("hex");

// // // // //     if (expectedSignature === razorpay_signature) {
// // // // //       const order = await Order.findById(dbOrderId);
// // // // //       if (!order) {
// // // // //         return res
// // // // //           .status(404)
// // // // //           .json({ success: false, message: "Order record not found." });
// // // // //       }

// // // // //       order.paymentStatus = "PAID";
// // // // //       order.orderStatus = "CONFIRMED";
// // // // //       order.razorpayPaymentId = razorpay_payment_id;
// // // // //       order.razorpaySignature = razorpay_signature;
// // // // //       await order.save();

// // // // //       return res.status(200).json({
// // // // //         success: true,
// // // // //         message: "Payment verified successfully. Order Confirmed!",
// // // // //         orderId: order._id,
// // // // //       });
// // // // //     } else {
// // // // //       return res
// // // // //         .status(400)
// // // // //         .json({ success: false, message: "Signature Verification Failed." });
// // // // //     }
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ success: false, message: error.message });
// // // // //   }
// // // // // };

// // // // const Order = require("../models/Order");

// // // // const BUSINESS_UPI_ID = process.env.BUSINESS_UPI_ID || "yourname@paytm";
// // // // const BUSINESS_NAME = "SurpriseGift";

// // // // exports.createUpiOrder = async (req, res) => {
// // // //   try {
// // // //     const { items, totalAmount, shippingAddress } = req.body;

// // // //     if (!items || items.length === 0 || !totalAmount) {
// // // //       return res.status(400).json({
// // // //         success: false,
// // // //         message: "Cart items and total amount are required.",
// // // //       });
// // // //     }

// // // //     const newOrder = new Order({
// // // //       user: req.user._id,
// // // //       items,
// // // //       totalAmount,
// // // //       shippingAddress,
// // // //       paymentMethod: "UPI_QR",
// // // //       paymentStatus: "PENDING_VERIFICATION",
// // // //       orderStatus: "PENDING_PAYMENT",
// // // //     });

// // // //     await newOrder.save();

// // // //     const upiDeepLink = `upi://pay?pa=${BUSINESS_UPI_ID}&pn=${encodeURIComponent(BUSINESS_NAME)}&am=${totalAmount}&cu=INR&tn=Order_${newOrder._id}`;

// // // //     res.status(201).json({
// // // //       success: true,
// // // //       dbOrderId: newOrder._id,
// // // //       upiId: BUSINESS_UPI_ID,
// // // //       amount: totalAmount,
// // // //       upiDeepLink,
// // // //     });
// // // //   } catch (error) {
// // // //     res.status(500).json({ success: false, message: error.message });
// // // //   }
// // // // };

// // // // exports.verifyUpiPayment = async (req, res) => {
// // // //   try {
// // // //     const { dbOrderId, upiRefNumber } = req.body;

// // // //     const order = await Order.findById(dbOrderId);
// // // //     if (!order) {
// // // //       return res
// // // //         .status(404)
// // // //         .json({ success: false, message: "Order not found." });
// // // //     }

// // // //     order.upiRefNumber = upiRefNumber;
// // // //     order.paymentStatus = "PENDING_VERIFICATION";
// // // //     order.orderStatus = "VERIFYING_PAYMENT";
// // // //     await order.save();

// // // //     res.status(200).json({
// // // //       success: true,
// // // //       message: "Payment reference submitted successfully.",
// // // //       orderId: order._id,
// // // //     });
// // // //   } catch (error) {
// // // //     res.status(500).json({ success: false, message: error.message });
// // // //   }
// // // // };

// // // const Order = require("../models/Order");

// // // const BUSINESS_UPI_ID = process.env.BUSINESS_UPI_ID || "yourname@paytm";
// // // const BUSINESS_NAME = "SurpriseGift";

// // // exports.createUpiOrder = async (req, res) => {
// // //   try {
// // //     const { items, totalAmount, shippingAddress } = req.body;

// // //     if (!items || items.length === 0 || !totalAmount) {
// // //       return res
// // //         .status(400)
// // //         .json({
// // //           success: false,
// // //           message: "Cart items and total amount are required.",
// // //         });
// // //     }

// // //     // Custom IDs ya string IDs ko safely handle karne ke liye sanitization
// // //     const sanitizedItems = items.map((item) => ({
// // //       product:
// // //         item.product && item.product.length === 24 ? item.product : undefined,
// // //       title: item.title,
// // //       price: item.price,
// // //       quantity: item.quantity,
// // //       customizationDetails: item.customizationDetails || {},
// // //     }));

// // //     const newOrder = new Order({
// // //       user: req.user._id,
// // //       items: sanitizedItems,
// // //       totalAmount,
// // //       shippingAddress,
// // //       paymentMethod: "UPI_QR",
// // //       paymentStatus: "PENDING_VERIFICATION",
// // //       orderStatus: "PENDING_PAYMENT",
// // //     });

// // //     await newOrder.save();

// // //     const upiDeepLink = `upi://pay?pa=${BUSINESS_UPI_ID}&pn=${encodeURIComponent(BUSINESS_NAME)}&am=${totalAmount}&cu=INR&tn=Order_${newOrder._id}`;

// // //     res.status(201).json({
// // //       success: true,
// // //       dbOrderId: newOrder._id,
// // //       upiId: BUSINESS_UPI_ID,
// // //       amount: totalAmount,
// // //       upiDeepLink,
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({ success: false, message: error.message });
// // //   }
// // // };

// // // exports.verifyUpiPayment = async (req, res) => {
// // //   try {
// // //     const { dbOrderId, upiRefNumber } = req.body;

// // //     const order = await Order.findById(dbOrderId);
// // //     if (!order) {
// // //       return res
// // //         .status(404)
// // //         .json({ success: false, message: "Order not found." });
// // //     }

// // //     order.upiRefNumber = upiRefNumber;
// // //     order.paymentStatus = "PENDING_VERIFICATION";
// // //     order.orderStatus = "VERIFYING_PAYMENT";
// // //     await order.save();

// // //     res.status(200).json({
// // //       success: true,
// // //       message: "Payment reference submitted successfully.",
// // //       orderId: order._id,
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({ success: false, message: error.message });
// // //   }
// // // };

// // const Order = require("../models/Order");

// // const BUSINESS_UPI_ID = process.env.BUSINESS_UPI_ID || "yourname@paytm";
// // const BUSINESS_NAME = "SurpriseGift";

// // exports.createUpiOrder = async (req, res) => {
// //   try {
// //     const { items, totalAmount, shippingAddress } = req.body;

// //     if (!items || items.length === 0 || !totalAmount) {
// //       return res
// //         .status(400)
// //         .json({
// //           success: false,
// //           message: "Cart items and total amount are required.",
// //         });
// //     }

// //     // Yahan _id ko bhi properly map kiya gaya hai taaki custom string IDs accept ho sakein
// //     const sanitizedItems = items.map((item) => ({
// //       _id: item._id || undefined,
// //       product:
// //         item.product && item.product.length === 24 ? item.product : undefined,
// //       title: item.title,
// //       price: item.price,
// //       quantity: item.quantity,
// //       customizationDetails: item.customizationDetails || {},
// //     }));

// //     const newOrder = new Order({
// //       user: req.user._id,
// //       items: sanitizedItems,
// //       totalAmount,
// //       shippingAddress,
// //       paymentMethod: "UPI_QR",
// //       paymentStatus: "PENDING_VERIFICATION",
// //       orderStatus: "PENDING_PAYMENT",
// //     });

// //     await newOrder.save();

// //     const upiDeepLink = `upi://pay?pa=${BUSINESS_UPI_ID}&pn=${encodeURIComponent(BUSINESS_NAME)}&am=${totalAmount}&cu=INR&tn=Order_${newOrder._id}`;

// //     res.status(201).json({
// //       success: true,
// //       dbOrderId: newOrder._id,
// //       upiId: BUSINESS_UPI_ID,
// //       amount: totalAmount,
// //       upiDeepLink,
// //     });
// //   } catch (error) {
// //     console.error("Create UPI Order Error:", error);
// //     res.status(500).json({ success: false, message: error.message });
// //   }
// // };

// // exports.verifyUpiPayment = async (req, res) => {
// //   try {
// //     const { dbOrderId, upiRefNumber } = req.body;

// //     const order = await Order.findById(dbOrderId);
// //     if (!order) {
// //       return res
// //         .status(404)
// //         .json({ success: false, message: "Order not found." });
// //     }

// //     order.upiRefNumber = upiRefNumber;
// //     order.paymentStatus = "PENDING_VERIFICATION";
// //     order.orderStatus = "VERIFYING_PAYMENT";
// //     await order.save();

// //     res.status(200).json({
// //       success: true,
// //       message: "Payment reference submitted successfully.",
// //       orderId: order._id,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ success: false, message: error.message });
// //   }
// // };

// const Order = require("../models/Order");

// const BUSINESS_UPI_ID = process.env.BUSINESS_UPI_ID || "yourname@paytm";
// const BUSINESS_NAME = "SurpriseGift";

// // 1. Create UPI Order and generate QR Data
// // exports.createUpiOrder = async (req, res) => {
// //   try {
// //     const { items, totalAmount, shippingAddress } = req.body;

// //     if (!items || items.length === 0 || !totalAmount) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Cart items and total amount are required.",
// //       });
// //     }

// //     // Custom string IDs aur product IDs ko safely handle karne ke liye sanitization
// //     const sanitizedItems = items.map((item) => ({
// //       _id: item._id || undefined,
// //       product:
// //         item.product && item.product.length === 24 ? item.product : undefined,
// //       title: item.title,
// //       price: item.price,
// //       quantity: item.quantity,
// //       customizationDetails: item.customizationDetails || {},
// //     }));

// //     const newOrder = new Order({
// //       user: req.user._id,
// //       items: sanitizedItems,
// //       totalAmount,
// //       shippingAddress,
// //       paymentMethod: "UPI_QR",
// //       paymentStatus: "PENDING_VERIFICATION",
// //       orderStatus: "PENDING_PAYMENT",
// //     });

// //     await newOrder.save();

// //     const upiDeepLink = `upi://pay?pa=${BUSINESS_UPI_ID}&pn=${encodeURIComponent(BUSINESS_NAME)}&am=${totalAmount}&cu=INR&tn=Order_${newOrder._id}`;

// //     res.status(201).json({
// //       success: true,
// //       dbOrderId: newOrder._id,
// //       upiId: BUSINESS_UPI_ID,
// //       amount: totalAmount,
// //       upiDeepLink,
// //     });
// //   } catch (error) {
// //     console.error("Create UPI Order Error:", error);
// //     res.status(500).json({ success: false, message: error.message });
// //   }
// // };
// exports.createUpiOrder = async (req, res) => {
//   try {
//     const { items, totalAmount, shippingAddress } = req.body;

//     if (!items || items.length === 0 || !totalAmount) {
//       return res.status(400).json({
//         success: false,
//         message: "Cart items and total amount are required.",
//       });
//     }

//     // 💡 Smart Trick: Original amount se ek random chhota sa paisa minus kar do (e.g., 0.10 se 0.90 tak)
//     // Jaise agar 500 hai, toh ye 499.25 ban jayega (hamesha original se kam!)
//     const randomPaise = Math.floor(Math.random() * 90 + 10) / 100; // e.g., 0.37
//     const finalUniqueAmount = Number(
//       (Number(totalAmount) - randomPaise).toFixed(2),
//     );

//     const sanitizedItems = items.map((item) => ({
//       _id: item._id || undefined,
//       product:
//         item.product && item.product.length === 24 ? item.product : undefined,
//       title: item.title,
//       price: item.price,
//       quantity: item.quantity,
//       customizationDetails: item.customizationDetails || {},
//     }));

//     const newOrder = new Order({
//       user: req.user._id,
//       items: sanitizedItems,
//       totalAmount: finalUniqueAmount, // Yeh unique kam kiya hua amount save hoga
//       shippingAddress,
//       paymentMethod: "UPI_QR",
//       paymentStatus: "PENDING_VERIFICATION",
//       orderStatus: "PENDING_PAYMENT",
//     });

//     await newOrder.save();

//     const upiDeepLink = `upi://pay?pa=${BUSINESS_UPI_ID}&pn=${encodeURIComponent(BUSINESS_NAME)}&am=${finalUniqueAmount}&cu=INR&tn=Order_${newOrder._id}`;

//     res.status(201).json({
//       success: true,
//       dbOrderId: newOrder._id,
//       upiId: BUSINESS_UPI_ID,
//       amount: finalUniqueAmount,
//       upiDeepLink,
//     });
//   } catch (error) {
//     console.error("Create UPI Order Error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };
// // 2. Manual UTR Verification Submission
// exports.verifyUpiPayment = async (req, res) => {
//   try {
//     const { dbOrderId, upiRefNumber } = req.body;

//     const order = await Order.findById(dbOrderId);
//     if (!order) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Order not found." });
//     }

//     order.upiRefNumber = upiRefNumber;
//     order.paymentStatus = "PENDING_VERIFICATION";
//     order.orderStatus = "VERIFYING_PAYMENT";
//     await order.save();

//     res.status(200).json({
//       success: true,
//       message: "Payment reference submitted successfully.",
//       orderId: order._id,
//     });
//   } catch (error) {
//     console.error("Verify UPI Payment Error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // 3. Auto-Verify Payment via Phone SMS / Notification Listener (Option 2)
// exports.autoVerifyUpiPayment = async (req, res) => {
//   try {
//     const { amount, upiRefNumber } = req.body;

//     if (!amount) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Amount is required." });
//     }

//     // Amount match karke sabse recent pending order dhoondo
//     const order = await Order.findOne({
//       totalAmount: Number(amount),
//       paymentStatus: "PENDING_VERIFICATION",
//     }).sort({ createdAt: -1 });

//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: "Matching pending order not found for this amount.",
//       });
//     }

//     // Payment ko automatically Paid aur Confirmed kar do
//     order.upiRefNumber = upiRefNumber || "AUTO_SMS_VERIFIED";
//     order.paymentStatus = "PAID";
//     order.orderStatus = "CONFIRMED";
//     await order.save();

//     console.log(
//       `🎉 Order ${order._id} automatically verified and confirmed for amount ₹${amount}`,
//     );

//     res.status(200).json({
//       success: true,
//       message: "Payment verified and order confirmed automatically!",
//       orderId: order._id,
//     });
//   } catch (error) {
//     console.error("Auto Verify Error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// backend/controllers/paymentController.js

const Order = require("../models/Order");

const BUSINESS_UPI_ID = process.env.BUSINESS_UPI_ID || "yourname@paytm";
const BUSINESS_NAME = "SurpriseGift";

// 1. Create UPI Order with Unique Micro-Amount (Discount trick)
exports.createUpiOrder = async (req, res) => {
  try {
    const { items, totalAmount, shippingAddress } = req.body;

    if (!items || items.length === 0 || !totalAmount) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Cart items and total amount are required.",
        });
    }

    // Original amount se ek chhota sa random paisa minus kar do (e.g., ₹500 ban jayega ₹499.35)
    const randomPaise = Math.floor(Math.random() * 90 + 10) / 100;
    const finalUniqueAmount = Number(
      (Number(totalAmount) - randomPaise).toFixed(2),
    );

    const sanitizedItems = items.map((item) => ({
      _id: item._id || undefined,
      product:
        item.product && item.product.length === 24 ? item.product : undefined,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      customizationDetails: item.customizationDetails || {},
    }));

    const newOrder = new Order({
      user: req.user._id,
      items: sanitizedItems,
      totalAmount: finalUniqueAmount, // Unique decimal wala amount save hoga
      shippingAddress,
      paymentMethod: "UPI_QR",
      paymentStatus: "PENDING_VERIFICATION",
      orderStatus: "PENDING_PAYMENT",
    });

    await newOrder.save();

    const upiDeepLink = `upi://pay?pa=${BUSINESS_UPI_ID}&pn=${encodeURIComponent(BUSINESS_NAME)}&am=${finalUniqueAmount}&cu=INR&tn=Order_${newOrder._id}`;

    res.status(201).json({
      success: true,
      dbOrderId: newOrder._id,
      upiId: BUSINESS_UPI_ID,
      amount: finalUniqueAmount,
      upiDeepLink,
    });
  } catch (error) {
    console.error("Create UPI Order Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 2. Auto-Verify Payment via Notification/SMS App (Micro-Amount Matching)
exports.autoVerifyUpiPayment = async (req, res) => {
  try {
    const { amount } = req.body; // Jo amount SMS ya notification app bhejega (jaise 499.35)

    if (!amount) {
      return res
        .status(400)
        .json({ success: false, message: "Amount is required." });
    }

    // Database mein exact unique amount match karo
    const order = await Order.findOne({
      totalAmount: Number(amount),
      paymentStatus: "PENDING_VERIFICATION",
    });

    if (!order) {
      return res
        .status(404)
        .json({
          success: false,
          message: "No pending order found matching this unique amount.",
        });
    }

    // Match ho gaya -> Order Confirmed!
    order.paymentStatus = "PAID";
    order.orderStatus = "CONFIRMED";
    await order.save();

    console.log(
      `🎉 Order ${order._id} automatically verified and confirmed via Micro-Amount ₹${amount}`,
    );

    res.status(200).json({
      success: true,
      message: "Payment verified and order confirmed automatically!",
      orderId: order._id,
    });
  } catch (error) {
    console.error("Auto Verify Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
