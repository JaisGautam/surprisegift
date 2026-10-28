const mongoose = require("mongoose");
const Cart = require("../models/cartModel");
const Product = require("../models/Product");
const giftCatalog = require("../config/giftCatalog");

const cleanCustomization = (value) => {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return {
    relation: String(value.relation || "").slice(0, 120),
    favouriteItem: String(value.favouriteItem || "").slice(0, 120),
    customNote: String(value.customNote || "").slice(0, 500),
  };
};

async function resolveCartItem(body) {
  const type = body.type === "package" || body.packageId ? "package" : "product";
  const id = String(type === "package" ? (body.packageId || body.productId || "") : (body.productId || body.product || ""));
  const quantity = Number(body.quantity || 1);
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 50) {
    throw Object.assign(new Error("Quantity must be between 1 and 50."), { status: 400 });
  }

  if (type === "package") {
    const pkg = giftCatalog.packages[id];
    if (!pkg) throw Object.assign(new Error("Package not found."), { status: 404 });
    return { key: id, type, packageId: id, title: pkg.title, price: pkg.price, image: String(body.image || "").slice(0, 1000), quantity, customizationDetails: cleanCustomization(body.customizationDetails) };
  }

  if (mongoose.isValidObjectId(id)) {
    const product = await Product.findById(id);
    if (!product) throw Object.assign(new Error("Product not found."), { status: 404 });
    return { key: String(product._id), type, product: product._id, title: product.title, price: product.price, image: product.images?.[0] || "", quantity, customizationDetails: cleanCustomization(body.customizationDetails) };
  }

  const fallback = giftCatalog.products[id];
  if (!fallback) throw Object.assign(new Error("Product not found."), { status: 404 });
  return { key: id, type, title: fallback.title, price: fallback.price, image: String(body.image || "").slice(0, 1000), quantity, customizationDetails: cleanCustomization(body.customizationDetails) };
}

exports.getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
    if (!cart) return res.status(200).json({ success: true, cart: { items: [], totalAmount: 0 } });
    return res.status(200).json({ success: true, cart });
  } catch (error) { return next(error); }
};

exports.addToCart = async (req, res, next) => {
  try {
    const resolved = await resolveCartItem(req.body || {});
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) cart = new Cart({ user: req.user._id, items: [], totalAmount: 0 });

    const existing = cart.items.find((item) => {
      if (resolved.type === "package") return item.type === "package" && item.packageId === resolved.packageId;
      if (resolved.product) return item.type === "product" && String(item.product || "") === String(resolved.product);
      return item.type === "product" && !item.product && item.title === resolved.title;
    });
    if (existing) {
      existing.quantity = Math.min(50, existing.quantity + resolved.quantity);
      existing.customizationDetails = resolved.customizationDetails;
    } else {
      const { key, ...item } = resolved;
      cart.items.push(item);
    }
    cart.recalculate();
    await cart.save();
    return res.status(200).json({ success: true, message: "Item added to cart.", cart });
  } catch (error) {
    if (error.status) return res.status(error.status).json({ success: false, message: error.message });
    return next(error);
  }
};

exports.updateCartItem = async (req, res, next) => {
  try {
    const quantity = Number(req.body?.quantity);
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 50) return res.status(400).json({ success: false, message: "Quantity must be between 1 and 50." });
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ success: false, message: "Cart not found." });
    const item = cart.items.id(req.params.itemId);
    if (!item) return res.status(404).json({ success: false, message: "Cart item not found." });
    item.quantity = quantity;
    cart.recalculate();
    await cart.save();
    return res.json({ success: true, cart });
  } catch (error) { return next(error); }
};

exports.removeFromCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ success: false, message: "Cart not found." });
    const item = cart.items.id(req.params.itemId);
    if (!item) return res.status(404).json({ success: false, message: "Cart item not found." });
    item.deleteOne();
    cart.recalculate();
    await cart.save();
    return res.json({ success: true, cart });
  } catch (error) { return next(error); }
};
