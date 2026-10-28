const mongoose = require("mongoose");
const Order = require("../models/Order");
const Product = require("../models/Product");
const giftCatalog = require("../config/giftCatalog");

const BUSINESS_UPI_ID = process.env.BUSINESS_UPI_ID;
const BUSINESS_NAME = "SurpriseGift";

function validateShippingAddress(address) {
  if (!address || typeof address !== "object") return false;
  const required = ["recipientName", "phone", "street", "city", "state", "pincode", "deliveryDate", "deliveryTimeSlot"];
  if (!required.every((key) => String(address[key] || "").trim())) return false;
  if (String(address.recipientName).trim().length < 2) return false;
  if (!/^[0-9+() -]{10,16}$/.test(String(address.phone).trim())) return false;
  if (!/^[0-9]{6}$/.test(String(address.pincode).trim())) return false;
  const date = new Date(address.deliveryDate);
  return !Number.isNaN(date.getTime());
}

async function resolveOrderItem(item) {
  const quantity = Number(item.quantity);
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 50) {
    throw Object.assign(new Error("Each item quantity must be between 1 and 50."), { status: 400 });
  }

  const type = item.type === "package" || item.packageId ? "package" : "product";
  const requestedId = String(type === "package" ? (item.packageId || item._id || "") : (item.product || item._id || ""));

  if (type === "package") {
    const entry = giftCatalog.packages[requestedId];
    if (!entry) throw Object.assign(new Error(`Unknown package: ${requestedId}`), { status: 400 });
    return { packageId: requestedId, title: entry.title, price: entry.price, quantity, customizationDetails: cleanCustomization(item.customizationDetails) };
  }

  if (mongoose.isValidObjectId(requestedId)) {
    const product = await Product.findById(requestedId);
    if (!product) throw Object.assign(new Error("A selected product is no longer available."), { status: 400 });
    if (!Number.isFinite(product.price) || product.price <= 0) throw Object.assign(new Error("A selected product has an invalid price."), { status: 400 });
    return { product: product._id, title: product.title, price: product.price, quantity, customizationDetails: cleanCustomization(item.customizationDetails) };
  }

  const fallback = giftCatalog.products[requestedId];
  if (!fallback) throw Object.assign(new Error(`Unknown product: ${requestedId}`), { status: 400 });
  return { title: fallback.title, price: fallback.price, quantity, customizationDetails: cleanCustomization(item.customizationDetails) };
}

function cleanCustomization(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const allowed = ["relation", "favouriteItem", "customNote"];
  const result = {};
  for (const key of allowed) {
    if (value[key] !== undefined) result[key] = String(value[key]).trim().slice(0, key === "customNote" ? 500 : 120);
  }
  return result;
}

exports.createUpiOrder = async (req, res) => {
  try {
    const { items, shippingAddress } = req.body || {};
    if (!BUSINESS_UPI_ID) {
      return res.status(503).json({ success: false, message: "UPI payments are not configured yet. Please contact support." });
    }
    if (!Array.isArray(items) || items.length === 0 || items.length > 50) {
      return res.status(400).json({ success: false, message: "Add 1–50 valid items before checkout." });
    }
    if (!validateShippingAddress(shippingAddress)) {
      return res.status(400).json({ success: false, message: "Complete all delivery fields with a valid phone number and 6-digit pincode." });
    }

    // Price/title are resolved from the server catalogue or MongoDB, never trusted from the browser.
    const sanitizedItems = [];
    for (const item of items) sanitizedItems.push(await resolveOrderItem(item));

    const totalAmount = Number(sanitizedItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2));
    if (!Number.isFinite(totalAmount) || totalAmount <= 0) {
      return res.status(400).json({ success: false, message: "Order total must be greater than zero." });
    }

    const order = await Order.create({
      user: req.user._id,
      items: sanitizedItems,
      totalAmount,
      shippingAddress: {
        recipientName: String(shippingAddress.recipientName).trim(),
        phone: String(shippingAddress.phone).trim(),
        street: String(shippingAddress.street).trim(),
        city: String(shippingAddress.city).trim(),
        state: String(shippingAddress.state).trim(),
        pincode: String(shippingAddress.pincode).trim(),
        deliveryDate: new Date(shippingAddress.deliveryDate),
        deliveryTimeSlot: String(shippingAddress.deliveryTimeSlot).trim(),
      },
      paymentMethod: "UPI_QR",
      paymentStatus: "PENDING_VERIFICATION",
      orderStatus: "PENDING_PAYMENT",
    });

    const params = new URLSearchParams({
      pa: BUSINESS_UPI_ID,
      pn: BUSINESS_NAME,
      am: totalAmount.toFixed(2),
      cu: "INR",
      tn: `Order_${order._id}`,
    });

    return res.status(201).json({
      success: true,
      dbOrderId: order._id,
      upiId: BUSINESS_UPI_ID,
      amount: totalAmount,
      items: sanitizedItems.map(({ title, price, quantity }) => ({ title, price, quantity })),
      upiDeepLink: `upi://pay?${params.toString()}`,
    });
  } catch (error) {
    if (error.status) return res.status(error.status).json({ success: false, message: error.message });
    console.error("Create UPI Order Error:", error.message);
    return res.status(500).json({ success: false, message: "Unable to create order right now." });
  }
};

exports.submitUpiReference = async (req, res) => {
  try {
    const { dbOrderId, upiRefNumber } = req.body || {};
    const reference = String(upiRefNumber || "").trim();

    if (!mongoose.isValidObjectId(dbOrderId)) return res.status(400).json({ success: false, message: "Invalid order ID." });
    if (!/^[A-Za-z0-9-]{8,40}$/.test(reference)) return res.status(400).json({ success: false, message: "Enter a valid UPI transaction reference (8–40 letters or digits)." });

    const order = await Order.findOne({ _id: dbOrderId, user: req.user._id });
    if (!order) return res.status(404).json({ success: false, message: "Order not found." });
    if (order.paymentStatus === "PAID") return res.status(409).json({ success: false, message: "This order is already marked as paid." });
    const duplicateReference = await Order.findOne({ upiRefNumber: reference, _id: { $ne: dbOrderId } });
    if (duplicateReference) return res.status(409).json({ success: false, message: "This transaction reference has already been submitted." });

    order.upiRefNumber = reference;
    order.paymentStatus = "PENDING_VERIFICATION";
    order.orderStatus = "VERIFYING_PAYMENT";
    await order.save();

    return res.status(200).json({ success: true, message: "Payment reference submitted. Payment must be verified before order confirmation.", orderId: order._id, paymentStatus: order.paymentStatus, orderStatus: order.orderStatus });
  } catch (error) {
    console.error("Submit UPI reference error:", error.message);
    return res.status(500).json({ success: false, message: "Unable to submit payment reference." });
  }
};

exports.autoVerifyUpiPayment = async (_req, res) => res.status(410).json({
  success: false,
  message: "Amount-only auto-verification is disabled. Verify payments through a trusted provider or the admin dashboard.",
});
