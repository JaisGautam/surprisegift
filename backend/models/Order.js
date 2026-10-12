// // const mongoose = require("mongoose");

// // const orderSchema = new mongoose.Schema(
// //   {
// //     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
// //     items: [
// //       {
// //         product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
// //         title: String,
// //         price: Number,
// //         quantity: Number,
// //         customizationDetails: Object,
// //       },
// //     ],
// //     totalAmount: { type: Number, required: true },
// //     shippingAddress: {
// //       recipientName: { type: String, required: true },
// //       phone: { type: String, required: true },
// //       street: { type: String, required: true },
// //       city: { type: String, required: true },
// //       state: { type: String, required: true },
// //       pincode: { type: String, required: true },
// //       deliveryDate: { type: Date, required: true },
// //       deliveryTimeSlot: { type: String, required: true },
// //     },
// //     paymentStatus: {
// //       type: String,
// //       enum: ["PENDING", "PAID", "FAILED", "REFUNDED"],
// //       default: "PENDING",
// //     },
// //     orderStatus: {
// //       type: String,
// //       enum: [
// //         "PENDING_PAYMENT",
// //         "CONFIRMED",
// //         "GIFT_BEING_PREPARED",
// //         "PURCHASED",
// //         "PACKAGING",
// //         "OUT_FOR_DELIVERY",
// //         "DELIVERED",
// //         "CANCELLED",
// //       ],
// //       default: "PENDING_PAYMENT",
// //     },
// //     razorpayOrderId: { type: String, required: true },
// //     razorpayPaymentId: { type: String },
// //     razorpaySignature: { type: String },
// //   },
// //   { timestamps: true },
// // );

// // module.exports = mongoose.model("Order", orderSchema);

// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     items: [
//       {
//         title: String,
//         price: Number,
//         quantity: Number,
//       },
//     ],
//     totalAmount: { type: Number, required: true },
//     shippingAddress: {
//       recipientName: { type: String, required: true },
//       phone: { type: String, required: true },
//       street: { type: String, required: true },
//       city: { type: String, required: true },
//       state: { type: String, required: true },
//       pincode: { type: String, required: true },
//       deliveryDate: { type: Date, required: true },
//       deliveryTimeSlot: { type: String, required: true },
//     },
//     paymentMethod: { type: String, default: "UPI_QR" },
//     upiRefNumber: { type: String, default: "" }, // Customer dwara enter kiya gaya UTR/Transaction ID
//     paymentStatus: {
//       type: String,
//       enum: ["PENDING_VERIFICATION", "PAID", "FAILED"],
//       default: "PENDING_VERIFICATION",
//     },
//     orderStatus: {
//       type: String,
//       enum: [
//         "PENDING_PAYMENT",
//         "VERIFYING_PAYMENT",
//         "CONFIRMED",
//         "OUT_FOR_DELIVERY",
//         "DELIVERED",
//       ],
//       default: "PENDING_PAYMENT",
//     },
//   },
//   { timestamps: true },
// );

// module.exports = mongoose.model("Order", orderSchema);

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        _id: false,
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: false,
        },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        customizationDetails: { type: Object, default: {} },
      },
    ],
    totalAmount: { type: Number, required: true },
    shippingAddress: {
      recipientName: { type: String, required: true },
      phone: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
      deliveryDate: { type: Date, required: true },
      deliveryTimeSlot: { type: String, required: true },
    },
    paymentMethod: { type: String, default: "UPI_QR" },
    upiRefNumber: { type: String, default: "" },
    paymentStatus: {
      type: String,
      enum: ["PENDING_VERIFICATION", "PAID", "FAILED"],
      default: "PENDING_VERIFICATION",
    },
    orderStatus: {
      type: String,
      enum: [
        "PENDING_PAYMENT",
        "VERIFYING_PAYMENT",
        "CONFIRMED",
        "OUT_FOR_DELIVERY",
        "DELIVERED",
      ],
      default: "PENDING_PAYMENT",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Order", orderSchema);
